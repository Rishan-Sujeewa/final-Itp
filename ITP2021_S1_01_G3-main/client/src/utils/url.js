// @flow
import { entries } from "./itorators";
import decodeComponent from "decode-uri-component";

const strictUriEncode = (str) =>
  // $FlowFixMe
  encodeURIComponent(str).replace(
    /[!'()*]/g,
    (x) =>
      `%${x
        .charCodeAt(0)
        .toString(16)
        .toUpperCase()}`
  );

/**
 *
 * @param {object} obj
 * @param {string} prefix
 * @return {string}
 */
export const serialize = (obj, prefix) => {
  let str = [];
  for (let [param, value] of entries(obj)) {
    let key = prefix ? `${prefix}[${param}]` : param;

    if (value !== null && typeof value === "object") {
      str.push(serialize(value, key));
      continue;
    }

    str.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  }
  return str.join("&");
};

/**
 *
 * @param {string} name
 * @param {string} url
 * @return {*}
 */
export const getParameterByName = (name, url) => {
  if (!name || !url) {
    return null;
  }

  let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);

  name = name.replace(/[[\]]/g, "\\$&");

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

/**
 *
 * @param {string} url
 * @return {*}
 */
export const getLastSegment = (url) => {
  let segments = url.split("/");
  return segments.pop() || segments.pop();
};

function parserForArrayFormat(options) {
  let result;

  switch (options.arrayFormat) {
    case "index":
      return (key, value, accumulator) => {
        result = /\[(\d*)\]$/.exec(key);

        key = key.replace(/\[\d*\]$/, "");

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = {};
        }

        accumulator[key][result[1]] = value;
      };
    case "bracket":
      return (key, value, accumulator) => {
        result = /(\[\])$/.exec(key);
        key = key.replace(/\[\]$/, "");

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = [value];
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };
    default:
      return (key, value, accumulator) => {
        if (accumulator[key] === undefined) {
          accumulator[key] = value;
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };
  }
}

function decode(value, options) {
  if (options.decode) {
    return decodeComponent(value);
  }

  return value;
}

function encode(value, options) {
  if (options.encode) {
    //   $FlowFixMe
    return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
  }
  return value;
}

function keysSorter(input) {
  if (Array.isArray(input)) {
    return input.sort();
  }

  if (typeof input === "object") {
    return keysSorter(Object.keys(input))
      .sort((a, b) => Number(a) - Number(b))
      .map((key) => input[key]);
  }

  return input;
}

export function queryParamsParse(input: any, options: any): any {
  options = Object.assign({ decode: true, arrayFormat: "none" }, options);

  const formatter = parserForArrayFormat(options);

  // Create an object with no prototype
  const ret = Object.create(null);

  if (typeof input !== "string") {
    return ret;
  }

  input = input.trim().replace(/^[?#&]/, "");

  if (!input) {
    return ret;
  }

  for (const param of input.split("&")) {
    let [key, value] = param.replace(/\+/g, " ").split("=");

    // Missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    value = value === undefined ? null : decode(value, options);

    formatter(decode(key, options), value, ret);
  }

  return Object.keys(ret)
    .sort()
    .reduce((result, key) => {
      const value = ret[key];
      if (
        Boolean(value) &&
        typeof value === "object" &&
        !Array.isArray(value)
      ) {
        // Sort object keys, not values
        result[key] = keysSorter(value);
      } else {
        result[key] = value;
      }

      return result;
    }, Object.create(null));
}

export const stringifyQueryParams = (obj: any, options: any) => {
  if (!obj) {
    return "";
  }

  options = Object.assign(
    {
      encode: true,
      strict: true,
      arrayFormat: "none",
    },
    options
  );

  const keys = Object.keys(obj);

  if (options.sort !== false) {
    keys.sort(options.sort);
  }

  return (
    keys
      .map((key) => {
        const value = obj[key];

        if (value === undefined) {
          return "";
        }

        if (value === null) {
          return encode(key, options);
        }

        if (Array.isArray(value)) {
          return encode(key, options) + "=" + encode(value.toString(), options);
        }

        return encode(key, options) + "=" + encode(value, options);
      })
      // $FlowFixMe
      .filter((x) => x.length > 0)
      .join("&")
  );
};

export function getPageFromUrl(url: string = window.location.pathname) {
  const path = url.split("/");
  return path.length >= 2 && path[2] !== "" ? path[2] : "/";
}
