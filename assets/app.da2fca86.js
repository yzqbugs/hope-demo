var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
const import_meta = {};
var hopeInject = "";
var clientAppEnhance0 = () => {
};
function makeMap(str2, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str2.split(",");
  for (let i2 = 0; i2 < list.length; i2++) {
    map[list[i2]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value2) {
  return !!value2 || value2 === "";
}
function normalizeStyle(value2) {
  if (isArray(value2)) {
    const res = {};
    for (let i2 = 0; i2 < value2.length; i2++) {
      const item = value2[i2];
      const normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString$1(value2)) {
    return value2;
  } else if (isObject$2(value2)) {
    return value2;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value2) {
  let res = "";
  if (isString$1(value2)) {
    res = value2;
  } else if (isArray(value2)) {
    for (let i2 = 0; i2 < value2.length; i2++) {
      const normalized = normalizeClass(value2[i2]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$2(value2)) {
    for (const name in value2) {
      if (value2[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i2 = arr.indexOf(el);
  if (i2 > -1) {
    arr.splice(i2, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isSymbol$2 = (val) => typeof val === "symbol";
const isObject$2 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$2(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString$2 = Object.prototype.toString;
const toTypeString = (value2) => objectToString$2.call(value2);
const toRawType = (value2) => {
  return toTypeString(value2).slice(8, -1);
};
const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str2) => {
    const hit = cache[str2];
    return hit || (cache[str2] = fn(str2));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str2) => {
  return str2.replace(camelizeRE, (_2, c2) => c2 ? c2.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str2) => str2.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str2) => str2.charAt(0).toUpperCase() + str2.slice(1));
const toHandlerKey = cacheStringFunction((str2) => str2 ? `on${capitalize(str2)}` : ``);
const hasChanged = (value2, oldValue) => !Object.is(value2, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i2 = 0; i2 < fns.length; i2++) {
    fns[i2](arg);
  }
};
const def = (obj, key, value2) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value: value2
  });
};
const toNumber$2 = (val) => {
  const n2 = parseFloat(val);
  return isNaN(n2) ? val : n2;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.active = true;
    this.effects = [];
    this.cleanups = [];
    if (!detached && activeEffectScope) {
      this.parent = activeEffectScope;
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  run(fn) {
    if (this.active) {
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = this.parent;
      }
    }
  }
  on() {
    activeEffectScope = this;
  }
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this.active) {
      let i2, l2;
      for (i2 = 0, l2 = this.effects.length; i2 < l2; i2++) {
        this.effects[i2].stop();
      }
      for (i2 = 0, l2 = this.cleanups.length; i2 < l2; i2++) {
        this.cleanups[i2]();
      }
      if (this.scopes) {
        for (i2 = 0, l2 = this.scopes.length; i2 < l2; i2++) {
          this.scopes[i2].stop(true);
        }
      }
      if (this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.active = false;
    }
  }
}
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  }
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i2 = 0; i2 < deps.length; i2++) {
      deps[i2].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i2 = 0; i2 < deps.length; i2++) {
      const dep = deps[i2];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
    }
  }
  stop() {
    if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i2 = 0; i2 < deps.length; i2++) {
      deps[i2].delete(effect);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    trackEffects(dep);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects));
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  for (const effect of isArray(dep) ? dep : [...dep]) {
    if (effect !== activeEffect || effect.allowRecurse) {
      if (effect.scheduler) {
        effect.scheduler();
      } else {
        effect.run();
      }
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol$2));
const get = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i2 = 0, l2 = this.length; i2 < l2; i2++) {
        track(arr, "get", i2 + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol$2(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }
    if (isObject$2(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value2, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value2)) {
      return false;
    }
    if (!shallow && !isReadonly(value2)) {
      if (!isShallow(value2)) {
        value2 = toRaw(value2);
        oldValue = toRaw(oldValue);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value2)) {
        oldValue.value = value2;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value2, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value2);
      } else if (hasChanged(value2, oldValue)) {
        trigger(target, "set", key, value2);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol$2(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    return true;
  },
  deleteProperty(target, key) {
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
const toShallow = (value2) => value2;
const getProto = (v2) => Reflect.getPrototypeOf(v2);
function get$1(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "get", key);
  }
  !isReadonly2 && track(rawTarget, "get", rawKey);
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "has", key);
  }
  !isReadonly2 && track(rawTarget, "has", rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value2) {
  value2 = toRaw(value2);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value2);
  if (!hadKey) {
    target.add(value2);
    trigger(target, "add", value2, value2);
  }
  return this;
}
function set$1(key, value2) {
  value2 = toRaw(value2);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value2);
  if (!hadKey) {
    trigger(target, "add", key, value2);
  } else if (hasChanged(value2, oldValue)) {
    trigger(target, "set", key, value2);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value2, key) => {
      return callback.call(thisArg, wrap(value2), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value: value2, done } = innerIterator.next();
        return done ? { value: value2, done } : {
          value: isPair ? [wrap(value2[0]), wrap(value2[1])] : wrap(value2),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value2) {
  return value2["__v_skip"] || !Object.isExtensible(value2) ? 0 : targetTypeMap(toRawType(value2));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$2(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value2) {
  if (isReadonly(value2)) {
    return isReactive(value2["__v_raw"]);
  }
  return !!(value2 && value2["__v_isReactive"]);
}
function isReadonly(value2) {
  return !!(value2 && value2["__v_isReadonly"]);
}
function isShallow(value2) {
  return !!(value2 && value2["__v_isShallow"]);
}
function isProxy(value2) {
  return isReactive(value2) || isReadonly(value2);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value2) {
  def(value2, "__v_skip", true);
  return value2;
}
const toReactive = (value2) => isObject$2(value2) ? reactive(value2) : value2;
const toReadonly = (value2) => isObject$2(value2) ? readonly(value2) : value2;
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()));
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    {
      triggerEffects(ref2.dep);
    }
  }
}
function isRef(r2) {
  return !!(r2 && r2.__v_isRef === true);
}
function ref(value2) {
  return createRef(value2, false);
}
function shallowRef(value2) {
  return createRef(value2, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value2, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value2 : toRaw(value2);
    this._value = __v_isShallow ? value2 : toReactive(value2);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    newVal = this.__v_isShallow ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = this.__v_isShallow ? newVal : toReactive(newVal);
      triggerRefValue(this);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value2, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value2)) {
      oldValue.value = value2;
      return true;
    } else {
      return Reflect.set(target, key, value2, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class ObjectRefImpl {
  constructor(_object, _key2, _defaultValue) {
    this._object = _object;
    this._key = _key2;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }
  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
}
function toRef(object, key, defaultValue) {
  const val = object[key];
  return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
}
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty || !self2._cacheable) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  return cRef;
}
Promise.resolve();
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i2 = 0; i2 < fn.length; i2++) {
    values.push(callWithAsyncErrorHandling(fn[i2], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i2 = 0; i2 < errorCapturedHooks.length; i2++) {
          if (errorCapturedHooks[i2](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    console.error(err);
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i2 = queue.indexOf(job);
  if (i2 > flushIndex) {
    queue.splice(i2, 1);
  }
}
function queueCb(cb, activeQueue, pendingQueue, index2) {
  if (!isArray(cb)) {
    if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index2 + 1 : index2)) {
      pendingQueue.push(cb);
    }
  } else {
    pendingQueue.push(...cb);
  }
  queueFlush();
}
function queuePreFlushCb(cb) {
  queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
  queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen2, parentJob = null) {
  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob;
    activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
    pendingPreFlushCbs.length = 0;
    for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
      activePreFlushCbs[preFlushIndex]();
    }
    activePreFlushCbs = null;
    preFlushIndex = 0;
    currentPreFlushParentJob = null;
    flushPreFlushCbs(seen2, parentJob);
  }
}
function flushPostFlushCbs(seen2) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    activePostFlushCbs.sort((a2, b2) => getId(a2) - getId(b2));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
function flushJobs(seen2) {
  isFlushPending = false;
  isFlushing = true;
  flushPreFlushCbs(seen2);
  queue.sort((a2, b2) => getId(a2) - getId(b2));
  const check = NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (false)
          ;
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs();
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
      flushJobs(seen2);
    }
  }
}
function emit$1(instance, event, ...rawArgs) {
  const props = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a2) => a2.trim());
    } else if (number) {
      args = rawArgs.map(toNumber$2);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    cache.set(comp, null);
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  cache.set(comp, normalized);
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    const res = fn(...args);
    setCurrentRenderingInstance(prevInstance);
    if (renderFnWithContext._d) {
      setBlockTracking(1);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
  let result;
  let fallthroughAttrs;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if (false)
        ;
      result = normalizeVNode(render2.length > 1 ? render2(props, false ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },
        slots,
        emit
      } : { attrs, slots, emit }) : render2(props, null));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root2 = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root2;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }
        root2 = cloneVNode(root2, fallthroughAttrs);
      }
    }
  }
  if (vnode.dirs) {
    root2.dirs = root2.dirs ? root2.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    root2.transition = vnode.transition;
  }
  {
    result = root2;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i2 = 0; i2 < dynamicProps.length; i2++) {
        const key = dynamicProps[i2];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i2 = 0; i2 < nextKeys.length; i2++) {
    const key = nextKeys[i2];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function provide(key, value2) {
  if (!currentInstance)
    ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value2;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else
      ;
  }
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  const instance = currentInstance;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some(isReactive);
    getter = () => source.map((s2) => {
      if (isRef(s2)) {
        return s2.value;
      } else if (isReactive(s2)) {
        return traverse(s2);
      } else if (isFunction(s2)) {
        return callWithErrorHandling(s2, instance, 2);
      } else
        ;
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  if (isInSSRComponentSetup) {
    onCleanup = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    return NOOP;
  }
  let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v2, i2) => hasChanged(v2, oldValue[i2])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    scheduler = () => {
      if (!instance || instance.isMounted) {
        queuePreFlushCb(job);
      } else {
        job();
      }
    };
  }
  const effect = new ReactiveEffect(getter, scheduler);
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }
  return () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
}
function instanceWatch(source, value2, options) {
  const publicThis = this.proxy;
  const getter = isString$1(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value2)) {
    cb = value2;
  } else {
    cb = value2.handler;
    options = value2;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i2 = 0; i2 < segments.length && cur; i2++) {
      cur = cur[segments[i2]];
    }
    return cur;
  };
}
function traverse(value2, seen2) {
  if (!isObject$2(value2) || value2["__v_skip"]) {
    return value2;
  }
  seen2 = seen2 || /* @__PURE__ */ new Set();
  if (seen2.has(value2)) {
    return value2;
  }
  seen2.add(value2);
  if (isRef(value2)) {
    traverse(value2.value, seen2);
  } else if (isArray(value2)) {
    for (let i2 = 0; i2 < value2.length; i2++) {
      traverse(value2[i2], seen2);
    }
  } else if (isSet(value2) || isMap(value2)) {
    value2.forEach((v2) => {
      traverse(v2, seen2);
    });
  } else if (isPlainObject$1(value2)) {
    for (const key in value2) {
      traverse(value2[key], seen2);
    }
  }
  return value2;
}
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevTransitionKey;
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      const child = children[0];
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance.subTree;
      const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      let transitionKeyChanged = false;
      const { getTransitionKey } = innerChild.type;
      if (getTransitionKey) {
        const key = getTransitionKey();
        if (prevTransitionKey === void 0) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      }
      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in") {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            instance.update();
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el._leaveCb = () => {
              earlyRemove();
              el._leaveCb = void 0;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance) {
  const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(hook, instance, 9, args);
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el._leaveCb) {
        el._leaveCb(true);
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        leavingVNode.el._leaveCb();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el._enterCb = (cancelled) => {
        if (called)
          return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el._enterCb = void 0;
      };
      if (hook) {
        hook(el, done);
        if (hook.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el._enterCb) {
        el._enterCb(true);
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = el._leaveCb = (cancelled) => {
        if (called)
          return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el._leaveCb = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        onLeave(el, done);
        if (onLeave.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    clone(vnode2) {
      return resolveTransitionHooks(vnode2, props, state, instance);
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i2 = 0; i2 < children.length; i2++) {
    const child = children[i2];
    if (child.type === Fragment) {
      if (child.patchFlag & 128)
        keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
    } else if (keepComment || child.type !== Comment) {
      ret.push(child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i2 = 0; i2 < ret.length; i2++) {
      ret[i2].patchFlag = -2;
    }
  }
  return ret;
}
function defineComponent(options) {
  return isFunction(options) ? { setup: options, name: options.name } : options;
}
const isAsyncWrapper = (i2) => !!i2.type.__asyncLoader;
function defineAsyncComponent(source) {
  if (isFunction(source)) {
    source = { loader: source };
  }
  const {
    loader,
    loadingComponent,
    errorComponent,
    delay: delay2 = 200,
    timeout,
    suspensible = true,
    onError: userOnError
  } = source;
  let pendingRequest = null;
  let resolvedComp;
  let retries = 0;
  const retry = () => {
    retries++;
    pendingRequest = null;
    return load();
  };
  const load = () => {
    let thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
      err = err instanceof Error ? err : new Error(String(err));
      if (userOnError) {
        return new Promise((resolve2, reject) => {
          const userRetry = () => resolve2(retry());
          const userFail = () => reject(err);
          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then((comp) => {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }
      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
        comp = comp.default;
      }
      resolvedComp = comp;
      return comp;
    }));
  };
  return defineComponent({
    name: "AsyncComponentWrapper",
    __asyncLoader: load,
    get __asyncResolved() {
      return resolvedComp;
    },
    setup() {
      const instance = currentInstance;
      if (resolvedComp) {
        return () => createInnerComp(resolvedComp, instance);
      }
      const onError = (err) => {
        pendingRequest = null;
        handleError(err, instance, 13, !errorComponent);
      };
      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then((comp) => {
          return () => createInnerComp(comp, instance);
        }).catch((err) => {
          onError(err);
          return () => errorComponent ? createVNode(errorComponent, {
            error: err
          }) : null;
        });
      }
      const loaded = ref(false);
      const error = ref();
      const delayed = ref(!!delay2);
      if (delay2) {
        setTimeout(() => {
          delayed.value = false;
        }, delay2);
      }
      if (timeout != null) {
        setTimeout(() => {
          if (!loaded.value && !error.value) {
            const err = new Error(`Async component timed out after ${timeout}ms.`);
            onError(err);
            error.value = err;
          }
        }, timeout);
      }
      load().then(() => {
        loaded.value = true;
        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          queueJob(instance.parent.update);
        }
      }).catch((err) => {
        onError(err);
        error.value = err;
      });
      return () => {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}
function createInnerComp(comp, { vnode: { ref: ref2, props, children } }) {
  const vnode = createVNode(comp, props, children);
  vnode.ref = ref2;
  return vnode;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(type, hook, keepAliveRoot, true);
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    expose,
    inheritAttrs,
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          ctx[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    if (!isObject$2(data))
      ;
    else {
      instance.data = reactive(data);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c2 = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c2.value,
        set: (v2) => c2.value = v2
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject$2(opt)) {
      if ("default" in opt) {
        injected = inject(opt.from || key, opt.default, true);
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v2) => injected.value = v2
        });
      } else {
        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString$1(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject$2(raw)) {
    if (isArray(raw)) {
      raw.forEach((r2) => createWatcher(r2, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else
    ;
}
function resolveMergedOptions(instance) {
  const base2 = instance.type;
  const { mixins, extends: extendsOptions } = base2;
  const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
  const cached = cache.get(base2);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base2;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m2) => mergeOptions$1(resolved, m2, optionMergeStrategies, true));
    }
    mergeOptions$1(resolved, base2, optionMergeStrategies);
  }
  cache.set(base2, resolved);
  return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions$1(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m2) => mergeOptions$1(to, m2, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose")
      ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  watch: mergeWatchOptions,
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i2 = 0; i2 < raw.length; i2++) {
      res[raw[i2]] = raw[i2];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(extend(/* @__PURE__ */ Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  def(attrs, InternalObjectKey, 1);
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const { props, attrs, vnode: { patchFlag } } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
        let key = propsToUpdate[i2];
        const value2 = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value2 !== attrs[key]) {
              attrs[key] = value2;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value2, instance, false);
          }
        } else {
          if (value2 !== attrs[key]) {
            attrs[key] = value2;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value2 = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value2;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value2;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value2 !== attrs[key]) {
          attrs[key] = value2;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i2 = 0; i2 < needCastKeys.length; i2++) {
      const key = needCastKeys[i2];
      props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value2, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value2 === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value2 = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value2 = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value2 = defaultValue;
      }
    }
    if (opt[0]) {
      if (isAbsent && !hasDefault) {
        value2 = false;
      } else if (opt[1] && (value2 === "" || value2 === hyphenate(key))) {
        value2 = true;
      }
    }
  }
  return value2;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    cache.set(comp, EMPTY_ARR);
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i2 = 0; i2 < raw.length; i2++) {
      const normalizedKey = camelize(raw[i2]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : opt;
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[0] = booleanIndex > -1;
          prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  cache.set(comp, res);
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ctor === null ? "null" : "";
}
function isSameType(a2, b2) {
  return getType(a2) === getType(b2);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray(expectedTypes)) {
    return expectedTypes.findIndex((t2) => isSameType(t2, type));
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value2) => isArray(value2) ? value2.map(normalizeVNode) : [normalizeVNode(value2)];
const normalizeSlot$1 = (key, rawSlot, ctx) => {
  const normalized = withCtx((...args) => {
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value2 = rawSlots[key];
    if (isFunction(value2)) {
      slots[key] = normalizeSlot$1(key, value2, ctx);
    } else if (value2 != null) {
      const normalized = normalizeSlotValue(value2);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      instance.slots = toRaw(children);
      def(children, "_", type);
    } else {
      normalizeObjectSlots(children, instance.slots = {});
    }
  } else {
    instance.slots = {};
    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }
  def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        extend(slots, children);
        if (!optimized && type === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i2 = 0; i2 < bindings.length; i2++) {
    const binding = bindings[i2];
    if (oldBindings) {
      binding.oldValue = oldBindings[i2].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid = 0;
function createAppAPI(render, hydrate) {
  return function createApp(rootComponent, rootProps = null) {
    if (rootProps != null && !isObject$2(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new Set();
    let isMounted = false;
    const app = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v2) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin))
          ;
        else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else
          ;
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          const vnode = createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        }
      },
      unmount() {
        if (isMounted) {
          render(null, app._container);
          delete app._container.__vue_app__;
        }
      },
      provide(key, value2) {
        context.provides[key] = value2;
        return app;
      }
    };
    return app;
  };
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray(rawRef)) {
    rawRef.forEach((r2, i2) => setRef(r2, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i2] : oldRawRef), parentSuspense, vnode, isUnmount));
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  const value2 = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2) {
    if (isString$1(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value2, refs]);
  } else {
    const _isString = isString$1(ref2);
    const _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray(existing) && remove(existing, refValue);
          } else {
            if (!isArray(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
              } else {
                ref2.value = [refValue];
                if (rawRef.k)
                  refs[rawRef.k] = ref2.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value2;
          if (hasOwn(setupState, ref2)) {
            setupState[ref2] = value2;
          }
        } else if (isRef(ref2)) {
          ref2.value = value2;
          if (rawRef.k)
            refs[rawRef.k] = value2;
        } else
          ;
      };
      if (value2) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    }
  }
}
let hasMismatch = false;
const isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== "foreignObject";
const isComment = (node) => node.nodeType === 8;
function createHydrationFunctions(rendererInternals) {
  const { mt: mountComponent, p: patch, o: { patchProp: patchProp2, nextSibling, parentNode, remove: remove2, insert, createComment } } = rendererInternals;
  const hydrate = (vnode, container) => {
    if (!container.hasChildNodes()) {
      patch(null, vnode, container);
      flushPostFlushCbs();
      return;
    }
    hasMismatch = false;
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();
    if (hasMismatch && true) {
      console.error(`Hydration completed but contains mismatches.`);
    }
  };
  const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
    const isFragmentStart = isComment(node) && node.data === "[";
    const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
    const { type, ref: ref2, shapeFlag } = vnode;
    const domType = node.nodeType;
    vnode.el = node;
    let nextNode = null;
    switch (type) {
      case Text:
        if (domType !== 3) {
          nextNode = onMismatch();
        } else {
          if (node.data !== vnode.children) {
            hasMismatch = true;
            node.data = vnode.children;
          }
          nextNode = nextSibling(node);
        }
        break;
      case Comment:
        if (domType !== 8 || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }
        break;
      case Static:
        if (domType !== 1) {
          nextNode = onMismatch();
        } else {
          nextNode = node;
          const needToAdoptContent = !vnode.children.length;
          for (let i2 = 0; i2 < vnode.staticCount; i2++) {
            if (needToAdoptContent)
              vnode.children += nextNode.outerHTML;
            if (i2 === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }
            nextNode = nextSibling(nextNode);
          }
          return nextNode;
        }
        break;
      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
        }
        break;
      default:
        if (shapeFlag & 1) {
          if (domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
          }
        } else if (shapeFlag & 6) {
          vnode.slotScopeIds = slotScopeIds;
          const container = parentNode(node);
          mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
          nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
          if (isAsyncWrapper(vnode)) {
            let subTree;
            if (isFragmentStart) {
              subTree = createVNode(Fragment);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
            }
            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64) {
          if (domType !== 8) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
          }
        } else if (shapeFlag & 128) {
          nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
        } else
          ;
    }
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode);
    }
    return nextNode;
  };
  const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const { type, props, patchFlag, shapeFlag, dirs } = vnode;
    const forcePatchValue = type === "input" && dirs || type === "option";
    if (forcePatchValue || patchFlag !== -1) {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props) {
        if (forcePatchValue || !optimized || patchFlag & (16 | 32)) {
          for (const key in props) {
            if (forcePatchValue && key.endsWith("value") || isOn(key) && !isReservedProp(key)) {
              patchProp2(el, key, null, props[key], false, void 0, parentComponent);
            }
          }
        } else if (props.onClick) {
          patchProp2(el, "onClick", null, props.onClick, false, void 0, parentComponent);
        }
      }
      let vnodeHooks;
      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
        queueEffectWithSuspense(() => {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
      if (shapeFlag & 16 && !(props && (props.innerHTML || props.textContent))) {
        let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
        while (next) {
          hasMismatch = true;
          const cur = next;
          next = next.nextSibling;
          remove2(cur);
        }
      } else if (shapeFlag & 8) {
        if (el.textContent !== vnode.children) {
          hasMismatch = true;
          el.textContent = vnode.children;
        }
      }
    }
    return el.nextSibling;
  };
  const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!parentVNode.dynamicChildren;
    const children = parentVNode.children;
    const l2 = children.length;
    for (let i2 = 0; i2 < l2; i2++) {
      const vnode = optimized ? children[i2] : children[i2] = normalizeVNode(children[i2]);
      if (node) {
        node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
      } else if (vnode.type === Text && !vnode.children) {
        continue;
      } else {
        hasMismatch = true;
        patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
      }
    }
    return node;
  };
  const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    const { slotScopeIds: fragmentSlotScopeIds } = vnode;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    const container = parentNode(node);
    const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
    if (next && isComment(next) && next.data === "]") {
      return nextSibling(vnode.anchor = next);
    } else {
      hasMismatch = true;
      insert(vnode.anchor = createComment(`]`), container, next);
      return next;
    }
  };
  const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
    hasMismatch = true;
    vnode.el = null;
    if (isFragment) {
      const end = locateClosingAsyncAnchor(node);
      while (true) {
        const next2 = nextSibling(node);
        if (next2 && next2 !== end) {
          remove2(next2);
        } else {
          break;
        }
      }
    }
    const next = nextSibling(node);
    const container = parentNode(node);
    remove2(node);
    patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
    return next;
  };
  const locateClosingAsyncAnchor = (node) => {
    let match = 0;
    while (node) {
      node = nextSibling(node);
      if (node && isComment(node)) {
        if (node.data === "[")
          match++;
        if (node.data === "]") {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }
    return node;
  };
  return [hydrate, hydrateNode];
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis();
  target.__VUE__ = true;
  const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref2, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        }
        break;
      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;
      default:
        if (shapeFlag & 1) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 6) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 64) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else
          ;
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    isSVG = isSVG || n2.type === "svg";
    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode;
    if (vnode.el && hostCloneNode !== void 0 && patchFlag === -1) {
      el = vnode.el = hostCloneNode(vnode.el);
    } else {
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
      if (shapeFlag & 8) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16) {
        mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props) {
        for (const key in props) {
          if (key !== "value" && !isReservedProp(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if ("value" in props) {
          hostPatchProp(el, "value", null, props.value);
        }
        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      }
      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i2 = 0; i2 < slotScopeIds.length; i2++) {
        hostSetScopeId(el, slotScopeIds[i2]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
    for (let i2 = start; i2 < children.length; i2++) {
      const child = children[i2] = optimized ? cloneIfMounted(children[i2]) : normalizeVNode(children[i2]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
    } else if (!optimized) {
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, isSVG);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
            const key = propsToUpdate[i2];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
    for (let i2 = 0; i2 < newChildren.length; i2++) {
      const oldVNode = oldChildren[i2];
      const newVNode = newChildren[i2];
      const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
        if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true);
        }
      } else {
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      setupComponent(instance);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.update();
      }
    } else {
      n2.component = n1.component;
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m: m2, parent } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance);
            hydrateNode(el, instance.subTree, instance, parentSuspense, null);
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(() => !instance.isUnmounted && hydrateSubTree());
          } else {
            hydrateSubTree();
          }
        } else {
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
          initialVNode.el = subTree.el;
        }
        if (m2) {
          queuePostRenderEffect(m2, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
        }
        if (initialVNode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u: u2, parent, vnode } = instance;
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, isSVG);
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u2) {
          queuePostRenderEffect(u2, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
        }
      }
    };
    const effect = instance.effect = new ReactiveEffect(componentUpdateFn, () => queueJob(instance.update), instance.scope);
    const update = instance.update = effect.run.bind(effect);
    update.id = instance.uid;
    toggleRecurse(instance, true);
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(void 0, instance.update);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i2;
    for (i2 = 0; i2 < commonLength; i2++) {
      const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
      patch(c1[i2], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
    if (oldLength > newLength) {
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let i2 = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i2 <= e1 && i2 <= e2) {
      const n1 = c1[i2];
      const n2 = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      i2++;
    }
    while (i2 <= e1 && i2 <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i2 > e1) {
      if (i2 <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i2 <= e2) {
          patch(null, c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i2++;
        }
      }
    } else if (i2 > e2) {
      while (i2 <= e1) {
        unmount(c1[i2], parentComponent, parentSuspense, true);
        i2++;
      }
    } else {
      const s1 = i2;
      const s2 = i2;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i2 = s2; i2 <= e2; i2++) {
        const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i2);
        }
      }
      let j2;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i2 = 0; i2 < toBePatched; i2++)
        newIndexToOldIndexMap[i2] = 0;
      for (i2 = s1; i2 <= e1; i2++) {
        const prevChild = c1[i2];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j2 = s2; j2 <= e2; j2++) {
            if (newIndexToOldIndexMap[j2 - s2] === 0 && isSameVNodeType(prevChild, c2[j2])) {
              newIndex = j2;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i2 + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j2 = increasingNewIndexSequence.length - 1;
      for (i2 = toBePatched - 1; i2 >= 0; i2--) {
        const nextIndex = s2 + i2;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i2] === 0) {
          patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (moved) {
          if (j2 < 0 || i2 !== increasingNewIndexSequence[j2]) {
            move(nextChild, container, anchor, 2);
          } else {
            j2--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i2 = 0; i2 < children.length; i2++) {
        move(children[i2], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove3 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove3();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove3, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const { type, props, ref: ref2, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
      } else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      removeFragment(el, anchor);
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const { bum, scope, update, subTree, um } = instance;
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (update) {
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i2 = start; i2 < children.length; i2++) {
      unmount(children[i2], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  const render = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(internals);
  }
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function toggleRecurse({ effect, update }, allowed) {
  effect.allowRecurse = update.allowRecurse = allowed;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray(ch1) && isArray(ch2)) {
    for (let i2 = 0; i2 < ch1.length; i2++) {
      const c1 = ch1[i2];
      let c2 = ch2[i2];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i2] = cloneIfMounted(ch2[i2]);
          c2.el = c1.el;
        }
        if (!shallow)
          traverseStaticChildren(c1, c2);
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i2, j2, u2, v2, c2;
  const len = arr.length;
  for (i2 = 0; i2 < len; i2++) {
    const arrI = arr[i2];
    if (arrI !== 0) {
      j2 = result[result.length - 1];
      if (arr[j2] < arrI) {
        p2[i2] = j2;
        result.push(i2);
        continue;
      }
      u2 = 0;
      v2 = result.length - 1;
      while (u2 < v2) {
        c2 = u2 + v2 >> 1;
        if (arr[result[c2]] < arrI) {
          u2 = c2 + 1;
        } else {
          v2 = c2;
        }
      }
      if (arrI < arr[result[u2]]) {
        if (u2 > 0) {
          p2[i2] = result[u2 - 1];
        }
        result[u2] = i2;
      }
    }
  }
  u2 = result.length;
  v2 = result[u2 - 1];
  while (u2-- > 0) {
    result[u2] = v2;
    v2 = p2[v2];
  }
  return result;
}
const isTeleport = (type) => type.__isTeleport;
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(Component);
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
const Fragment = Symbol(void 0);
const Text = Symbol(void 0);
const Comment = Symbol(void 0);
const Static = Symbol(void 0);
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value2) {
  isBlockTreeEnabled += value2;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value2) {
  return value2 ? value2.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref: ref2, ref_key, ref_for }) => {
  return ref2 != null ? isString$1(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString$1(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(type, props, true);
    if (children) {
      normalizeChildren(cloned, children);
    }
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString$1(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject$2(style)) {
      if (isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString$1(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$2(type) ? 4 : isFunction(type) ? 2 : 0;
  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref: ref2, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor
  };
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray(child)) {
    return createVNode(Fragment, null, child.slice());
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i2 = 0; i2 < args.length; i2++) {
    const toMerge = args[i2];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.isCE) {
    return createVNode("slot", name === "default" ? null : { name }, fallback && fallback());
  }
  let slot = slots[name];
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const rendered = createBlock(Fragment, { key: props.key || `_${name}` }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child))
      return true;
    if (child.type === Comment)
      return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
const getPublicInstance = (i2) => {
  if (!i2)
    return null;
  if (isStatefulComponent(i2))
    return getExposeProxy(i2) || i2.proxy;
  return getPublicInstance(i2.parent);
};
const publicPropertiesMap = extend(/* @__PURE__ */ Object.create(null), {
  $: (i2) => i2,
  $el: (i2) => i2.vnode.el,
  $data: (i2) => i2.data,
  $props: (i2) => i2.props,
  $attrs: (i2) => i2.attrs,
  $slots: (i2) => i2.slots,
  $refs: (i2) => i2.refs,
  $parent: (i2) => getPublicInstance(i2.parent),
  $root: (i2) => getPublicInstance(i2.root),
  $emit: (i2) => i2.emit,
  $options: (i2) => resolveMergedOptions(i2),
  $forceUpdate: (i2) => () => queueJob(i2.update),
  $nextTick: (i2) => nextTick.bind(i2.proxy),
  $watch: (i2) => instanceWatch.bind(i2)
});
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    let normalizedProps;
    if (key[0] !== "$") {
      const n2 = accessCache[key];
      if (n2 !== void 0) {
        switch (n2) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else
      ;
  },
  set({ _: instance }, key, value2) {
    const { data, setupState, ctx } = instance;
    if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
      setupState[key] = value2;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value2;
      return true;
    } else if (hasOwn(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      {
        ctx[key] = value2;
      }
    }
    return true;
  },
  has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || setupState !== EMPTY_OBJ && hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      this.set(target, key, descriptor.get(), null);
    } else if (descriptor.value != null) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid$1++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new EffectScope(true),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    emit: null,
    emitted: null,
    propsDefaults: EMPTY_OBJ,
    inheritAttrs: type.inheritAttrs,
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit$1.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
  currentInstance = instance;
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  const { setup } = Component;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
    resetTracking();
    unsetCurrentInstance();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject$2(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else
    ;
  finishComponentSetup(instance, isSSR);
}
let compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend(extend({
          isCustomElement,
          delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);
      }
    }
    instance.render = Component.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions(instance);
    resetTracking();
    unsetCurrentInstance();
  }
}
function createAttrsProxy(instance) {
  return new Proxy(instance.attrs, {
    get(target, key) {
      track(instance, "get", "$attrs");
      return target[key];
    }
  });
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  let attrs;
  {
    return {
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      }
    }));
  }
}
function getComponentName(Component) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name;
}
function isClassComponent(value2) {
  return isFunction(value2) && "__vccOpts" in value2;
}
const computed = (getterOrOptions, debugOptions) => {
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function h$3(type, propsOrChildren, children) {
  const l2 = arguments.length;
  if (l2 === 2) {
    if (isObject$2(propsOrChildren) && !isArray(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l2 > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l2 === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
const version = "3.2.31";
const svgNS = "http://www.w3.org/2000/svg";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag2, isSVG, is, props) => {
    const el = isSVG ? doc.createElementNS(svgNS, tag2) : doc.createElement(tag2, is ? { is } : void 0);
    if (tag2 === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  cloneNode(el) {
    const cloned = el.cloneNode(true);
    if (`_value` in el) {
      cloned._value = el._value;
    }
    return cloned;
  },
  insertStaticContent(content, parent, anchor, isSVG, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
      const template = templateContainer.content;
      if (isSVG) {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      before ? before.nextSibling : parent.firstChild,
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
function patchClass(el, value2, isSVG) {
  const transitionClasses = el._vtc;
  if (transitionClasses) {
    value2 = (value2 ? [value2, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value2 == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value2);
  } else {
    el.className = value2;
  }
}
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString$1(next);
  if (next && !isCssString) {
    for (const key in next) {
      setStyle(style, key, next[key]);
    }
    if (prev && !isString$1(prev)) {
      for (const key in prev) {
        if (next[key] == null) {
          setStyle(style, key, "");
        }
      }
    }
  } else {
    const currentDisplay = style.display;
    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
    if ("_vod" in el) {
      style.display = currentDisplay;
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray(val)) {
    val.forEach((v2) => setStyle(style, name, v2));
  } else {
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i2 = 0; i2 < prefixes.length; i2++) {
    const prefixed = prefixes[i2] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value2, isSVG, instance) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value2 == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value2);
    }
  } else {
    const isBoolean = isSpecialBooleanAttr(key);
    if (value2 == null || isBoolean && !includeBooleanAttr(value2)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? "" : value2);
    }
  }
}
function patchDOMProp(el, key, value2, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value2 == null ? "" : value2;
    return;
  }
  if (key === "value" && el.tagName !== "PROGRESS" && !el.tagName.includes("-")) {
    el._value = value2;
    const newValue = value2 == null ? "" : value2;
    if (el.value !== newValue || el.tagName === "OPTION") {
      el.value = newValue;
    }
    if (value2 == null) {
      el.removeAttribute(key);
    }
    return;
  }
  if (value2 === "" || value2 == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      el[key] = includeBooleanAttr(value2);
      return;
    } else if (value2 == null && type === "string") {
      el[key] = "";
      el.removeAttribute(key);
      return;
    } else if (type === "number") {
      try {
        el[key] = 0;
      } catch (_a2) {
      }
      el.removeAttribute(key);
      return;
    }
  }
  try {
    el[key] = value2;
  } catch (e) {
  }
}
let _getNow = Date.now;
let skipTimestampCheck = false;
if (typeof window !== "undefined") {
  if (_getNow() > document.createEvent("Event").timeStamp) {
    _getNow = () => performance.now();
  }
  const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
  skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
}
let cachedNow = 0;
const p$7 = Promise.resolve();
const reset = () => {
  cachedNow = 0;
};
const getNow = () => cachedNow || (p$7.then(reset), cachedNow = _getNow());
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el._vei || (el._vei = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m2;
    while (m2 = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m2[0].length);
      options[m2[0].toLowerCase()] = true;
    }
  }
  return [hyphenate(name.slice(2)), options];
}
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    const timeStamp = e.timeStamp || _getNow();
    if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
      callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
    }
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value2) {
  if (isArray(value2)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value2.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
  } else {
    return value2;
  }
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value2, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && nativeOnRE.test(key) && isFunction(value2)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (nativeOnRE.test(key) && isString$1(value2)) {
    return false;
  }
  return key in el;
}
const TRANSITION = "transition";
const ANIMATION = "animation";
const Transition = (props, { slots }) => h$3(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const TransitionPropsValidators = Transition.props = /* @__PURE__ */ extend({}, BaseTransition.props, DOMTransitionPropsValidators);
const callHook = (hook, args = []) => {
  if (isArray(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
  const finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve2);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(() => {
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject$2(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n2 = NumberOf(duration);
    return [n2, n2];
  }
}
function NumberOf(val) {
  const res = toNumber$2(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c2) => c2 && el.classList.add(c2));
  (el._vtc || (el._vtc = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c2) => c2 && el.classList.remove(c2));
  const { _vtc } = el;
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el._vtc = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve2();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(TRANSITION + "Delay");
  const transitionDurations = getStyleProperties(TRANSITION + "Duration");
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(ANIMATION + "Delay");
  const animationDurations = getStyleProperties(ANIMATION + "Duration");
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + "Property"]);
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d2, i2) => toMs(d2) + toMs(delays[i2])));
}
function toMs(s2) {
  return Number(s2.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const TransitionGroupImpl = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevChildren;
    let children;
    onUpdated(() => {
      if (!prevChildren.length) {
        return;
      }
      const moveClass = props.moveClass || `${props.name || "v"}-move`;
      if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
        return;
      }
      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      const movedChildren = prevChildren.filter(applyTranslation);
      forceReflow();
      movedChildren.forEach((c2) => {
        const el = c2.el;
        const style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = "";
        const cb = el._moveCb = (e) => {
          if (e && e.target !== el) {
            return;
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener("transitionend", cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        };
        el.addEventListener("transitionend", cb);
      });
    });
    return () => {
      const rawProps = toRaw(props);
      const cssTransitionProps = resolveTransitionProps(rawProps);
      let tag2 = rawProps.tag || Fragment;
      prevChildren = children;
      children = slots.default ? getTransitionRawChildren(slots.default()) : [];
      for (let i2 = 0; i2 < children.length; i2++) {
        const child = children[i2];
        if (child.key != null) {
          setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
        }
      }
      if (prevChildren) {
        for (let i2 = 0; i2 < prevChildren.length; i2++) {
          const child = prevChildren[i2];
          setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
          positionMap.set(child, child.el.getBoundingClientRect());
        }
      }
      return createVNode(tag2, null, children);
    };
  }
};
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c2) {
  const el = c2.el;
  if (el._moveCb) {
    el._moveCb();
  }
  if (el._enterCb) {
    el._enterCb();
  }
}
function recordPosition(c2) {
  newPositionMap.set(c2, c2.el.getBoundingClientRect());
}
function applyTranslation(c2) {
  const oldPos = positionMap.get(c2);
  const newPos = newPositionMap.get(c2);
  const dx = oldPos.left - newPos.left;
  const dy = oldPos.top - newPos.top;
  if (dx || dy) {
    const s2 = c2.el.style;
    s2.transform = s2.webkitTransform = `translate(${dx}px,${dy}px)`;
    s2.transitionDuration = "0s";
    return c2;
  }
}
function hasCSSTransform(el, root2, moveClass) {
  const clone = el.cloneNode();
  if (el._vtc) {
    el._vtc.forEach((cls) => {
      cls.split(/\s+/).forEach((c2) => c2 && clone.classList.remove(c2));
    });
  }
  moveClass.split(/\s+/).forEach((c2) => c2 && clone.classList.add(c2));
  clone.style.display = "none";
  const container = root2.nodeType === 1 ? root2 : root2.parentNode;
  container.appendChild(clone);
  const { hasTransform } = getTransitionInfo(clone);
  container.removeChild(clone);
  return hasTransform;
}
const rendererOptions = extend({ patchProp }, nodeOps);
let renderer;
let enabledHydration = false;
function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
  enabledHydration = true;
  return renderer;
}
const createSSRApp = (...args) => {
  const app = ensureHydrationRenderer().createApp(...args);
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (container) {
      return mount(container, true, container instanceof SVGElement);
    }
  };
  return app;
};
function normalizeContainer(container) {
  if (isString$1(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const PolySymbol = (name) => hasSymbol ? Symbol(name) : "_vr_" + name;
const matchedRouteKey = /* @__PURE__ */ PolySymbol("rvlm");
const viewDepthKey = /* @__PURE__ */ PolySymbol("rvd");
const routerKey = /* @__PURE__ */ PolySymbol("r");
const routeLocationKey = /* @__PURE__ */ PolySymbol("rl");
const routerViewLocationKey = /* @__PURE__ */ PolySymbol("rvl");
const isBrowser = typeof window !== "undefined";
function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === "Module";
}
const assign = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value2 = params[key];
    newParams[key] = Array.isArray(value2) ? value2.map(fn) : fn(value2);
  }
  return newParams;
}
const noop$1 = () => {
};
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const searchPos = location2.indexOf("?");
  const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base2) {
  if (!base2 || !pathname.toLowerCase().startsWith(base2.toLowerCase()))
    return pathname;
  return pathname.slice(base2.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a2, b2) {
  const aLastIndex = a2.matched.length - 1;
  const bLastIndex = b2.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a2.matched[aLastIndex], b2.matched[bLastIndex]) && isSameRouteLocationParams(a2.params, b2.params) && stringifyQuery2(a2.query) === stringifyQuery2(b2.query) && a2.hash === b2.hash;
}
function isSameRouteRecord(a2, b2) {
  return (a2.aliasOf || a2) === (b2.aliasOf || b2);
}
function isSameRouteLocationParams(a2, b2) {
  if (Object.keys(a2).length !== Object.keys(b2).length)
    return false;
  for (const key in a2) {
    if (!isSameRouteLocationParamsValue(a2[key], b2[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a2, b2) {
  return Array.isArray(a2) ? isEquivalentArray(a2, b2) : Array.isArray(b2) ? isEquivalentArray(b2, a2) : a2 === b2;
}
function isEquivalentArray(a2, b2) {
  return Array.isArray(b2) ? a2.length === b2.length && a2.every((value2, i2) => value2 === b2[i2]) : a2.length === 1 && a2[0] === b2;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (position === 1 || segment === ".")
      continue;
    if (segment === "..")
      position--;
    else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base2) {
  if (!base2) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base2 = baseEl && baseEl.getAttribute("href") || "/";
      base2 = base2.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base2 = "/";
    }
  }
  if (base2[0] !== "/" && base2[0] !== "#")
    base2 = "/" + base2;
  return removeTrailingSlash(base2);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base2, location2) {
  return base2.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset2) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset2.behavior,
    left: elRect.left - docRect.left - (offset2.left || 0),
    top: elRect.top - docRect.top - (offset2.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base2, location2) {
  const { pathname, search, hash } = location2;
  const hashPos = base2.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base2.slice(hashPos)) ? base2.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path = stripBase(pathname, base2);
  return path + search + hash;
}
function useHistoryListeners(base2, historyState, currentLocation, replace) {
  let listeners = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to = createCurrentLocation(base2, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    }
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners.push(callback);
    const teardown = () => {
      const index2 = listeners.indexOf(callback);
      if (index2 > -1)
        listeners.splice(index2, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const { history: history2 } = window;
    if (!history2.state)
      return;
    history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener);
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base2) {
  const { history: history2, location: location2 } = window;
  const currentLocation = {
    value: createCurrentLocation(base2, location2)
  };
  const historyState = { value: history2.state };
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      position: history2.length - 1,
      replaced: true,
      scroll: null
    }, true);
  }
  function changeLocation(to, state, replace2) {
    const hashIndex = base2.indexOf("#");
    const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base2 : base2.slice(hashIndex)) + to : createBaseLocation() + base2 + to;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err) {
      {
        console.error(err);
      }
      location2[replace2 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data) {
    const state = assign({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }
  function push(to, data) {
    const currentState = assign({}, historyState.value, history2.state, {
      forward: to,
      scroll: computeScrollPosition()
    });
    changeLocation(currentState.current, currentState, true);
    const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base2) {
  base2 = normalizeBase(base2);
  const historyNavigation = useHistoryStateNavigation(base2);
  const historyListeners = useHistoryListeners(base2, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign({
    location: "",
    base: base2,
    go,
    createHref: createHref.bind(null, base2)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
const NavigationFailureSymbol = /* @__PURE__ */ PolySymbol("nf");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type, params) {
  {
    return assign(new Error(), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [90];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value: value2, repeatable, optional, regexp } = token;
        keys.push({
          name: value2,
          repeatable,
          optional
        });
        const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value2}" (${re2}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i2 = score.length - 1;
    score[i2][score[i2].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path) {
    const match = path.match(re);
    const params = {};
    if (!match)
      return null;
    for (let i2 = 1; i2 < match.length; i2++) {
      const value2 = match[i2] || "";
      const key = keys[i2 - 1];
      params[key.name] = value2 && key.repeatable ? value2.split("/") : value2;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value: value2, repeatable, optional } = token;
          const param = value2 in params ? params[value2] : "";
          if (Array.isArray(param) && !repeatable)
            throw new Error(`Provided param "${value2}" is an array but it is not repeatable (* or + modifiers)`);
          const text = Array.isArray(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value2}"`);
          }
          path += text;
        }
      }
    }
    return path;
  }
  return {
    re,
    score,
    keys,
    parse,
    stringify
  };
}
function compareScoreArray(a2, b2) {
  let i2 = 0;
  while (i2 < a2.length && i2 < b2.length) {
    const diff = b2[i2] - a2[i2];
    if (diff)
      return diff;
    i2++;
  }
  if (a2.length < b2.length) {
    return a2.length === 1 && a2[0] === 40 + 40 ? -1 : 1;
  } else if (a2.length > b2.length) {
    return b2.length === 1 && b2[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a2, b2) {
  let i2 = 0;
  const aScore = a2.score;
  const bScore = b2.score;
  while (i2 < aScore.length && i2 < bScore.length) {
    const comp = compareScoreArray(aScore[i2], bScore[i2]);
    if (comp)
      return comp;
    i2++;
  }
  return bScore.length - aScore.length;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(`Invalid path "${path}"`);
  }
  function crash(message2) {
    throw new Error(`ERR (${state})/"${buffer}": ${message2}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i2 = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i2 < path.length) {
    char = path[i2++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i2--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i2--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  const matcher = assign(parser, {
    record,
    parent,
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign({}, mainNormalizedRecord, {
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if ("children" in mainNormalizedRecord) {
        const children = mainNormalizedRecord.children;
        for (let i2 = 0; i2 < children.length; i2++) {
          addRoute(children[i2], matcher, originalRecord && originalRecord.children[i2]);
        }
      }
      originalRecord = originalRecord || matcher;
      insertMatcher(matcher);
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop$1;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index2 = matchers.indexOf(matcherRef);
      if (index2 > -1) {
        matchers.splice(index2, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    let i2 = 0;
    while (i2 < matchers.length && comparePathParserScore(matcher, matchers[i2]) >= 0 && (matcher.record.path !== matchers[i2].record.path || !isRecordChildOf(matcher, matchers[i2])))
      i2++;
    matchers.splice(i2, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      name = matcher.record.name;
      params = assign(paramsFromLocation(currentLocation.params, matcher.keys.filter((k2) => !k2.optional).map((k2) => k2.name)), location2.params);
      path = matcher.stringify(params);
    } else if ("path" in location2) {
      path = location2.path;
      matcher = matchers.find((m2) => m2.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m2) => m2.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes.forEach((route) => addRoute(route));
  return { addRoute, resolve: resolve2, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
  const newParams = {};
  for (const key of keys) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || {} : { default: record.component }
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "boolean" ? props : props[name];
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
  const options = {};
  for (const key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }
  return options;
}
function isRecordChildOf(record, parent) {
  return parent.children.some((child) => child === record || isRecordChildOf(record, child));
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
  }
  return "" + text;
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i2 = 0; i2 < searchParams.length; ++i2) {
    const searchParam = searchParams[i2].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value2 = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!Array.isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value2);
    } else {
      query[key] = value2;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value2 = query[key];
    key = encodeQueryKey(key);
    if (value2 == null) {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key;
      }
      continue;
    }
    const values = Array.isArray(value2) ? value2.map((v2) => v2 && encodeQueryValue(v2)) : [value2 && encodeQueryValue(value2)];
    values.forEach((value3) => {
      if (value3 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value3 != null)
          search += "=" + value3;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value2 = query[key];
    if (value2 !== void 0) {
      normalizedQuery[key] = Array.isArray(value2) ? value2.map((v2) => v2 == null ? null : "" + v2) : value2 == null ? value2 : "" + value2;
    }
  }
  return normalizedQuery;
}
function useCallbacks() {
  let handlers2 = [];
  function add2(handler) {
    handlers2.push(handler);
    return () => {
      const i2 = handlers2.indexOf(handler);
      if (i2 > -1)
        handlers2.splice(i2, 1);
    };
  }
  function reset2() {
    handlers2 = [];
  }
  return {
    add: add2,
    list: () => handlers2,
    reset: reset2
  };
}
function guardToPromiseFn(guard, to, from, record, name) {
  const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false)
        reject(createRouterError(4, {
          from,
          to
        }));
      else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
          enterCallbackArray.push(valid);
        resolve2();
      }
    };
    const guardReturn = guard.call(record && record.instances[name], to, from, next);
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    guardCall.catch((err) => reject(err));
  });
}
function extractComponentsGuards(matched, guardType, to, from) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
      } else {
        let componentPromise = rawComponent();
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name)();
        }));
      }
    }
  }
  return guards;
}
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function useLink(props) {
  const router = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => router.resolve(unref(props.to)));
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index2 > -1)
      return index2;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2;
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e = {}) {
    if (guardEvent(e)) {
      return router[unref(props.replace) ? "replace" : "push"](unref(props.to)).catch(noop$1);
    }
    return Promise.resolve();
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h$3("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
    return;
  if (e.defaultPrevented)
    return;
  if (e.button !== void 0 && e.button !== 0)
    return;
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e.preventDefault)
    e.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value2, i2) => value2 !== outerValue[i2]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  setup(props, { attrs, slots }) {
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const depth = inject(viewDepthKey, 0);
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth]);
    provide(viewDepthKey, depth + 1);
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[props.name];
      const currentName = props.name;
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[props.name];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h$3(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      return normalizeSlot(slots.default, { Component: component, route }) || component;
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot)
    return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = applyToParams.bind(null, decode);
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      return assign(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if ("path" in rawLocation) {
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(rawLocation.params)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    return assign({
      fullPath,
      hash,
      query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
        newTargetLocation.params = {};
      }
      return assign({
        query: to.query,
        hash: to.hash,
        params: to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
        state: data,
        force,
        replace: replace2
      }), redirectedFrom || targetLocation);
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(from, from, true, false);
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(failure2, 2)) {
          return pushWithRedirect(assign(locationAsObject(failure2.to), {
            state: data,
            force,
            replace: replace2
          }), redirectedFrom || toLocation);
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of to.matched) {
        if (record.beforeEnter && !from.matched.includes(record)) {
          if (Array.isArray(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    for (const guard of afterGuards.list())
      guard(to, from, failure);
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state && state.scroll
        }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      const toLocation = resolve2(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop$1);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(error, 4 | 8)) {
          return error;
        }
        if (isNavigationFailure(error, 2)) {
          pushWithRedirect(error.to, toLocation).then((failure) => {
            if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop$1);
          return Promise.reject();
        }
        if (info.delta)
          routerHistory.go(-info.delta, false);
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(toLocation, from, false);
        if (failure) {
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop$1);
    });
  }
  let readyHandlers = useCallbacks();
  let errorHandlers = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorHandlers.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve3, reject) => {
      readyHandlers.add([resolve3, reject]);
    });
  }
  function markAsReady(err) {
    if (!ready) {
      ready = !err;
      setupListeners();
      readyHandlers.list().forEach(([resolve3, reject]) => err ? reject(err) : resolve3());
      readyHandlers.reset();
    }
    return err;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router = {
    currentRoute,
    addRoute,
    removeRoute,
    hasRoute,
    getRoutes,
    resolve: resolve2,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady,
    install(app) {
      const router2 = this;
      app.component("RouterLink", RouterLink);
      app.component("RouterView", RouterView);
      app.config.globalProperties.$router = router2;
      Object.defineProperty(app.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err) => {
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        reactiveRoute[key] = computed(() => currentRoute.value[key]);
      }
      app.provide(routerKey, router2);
      app.provide(routeLocationKey, reactive(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function() {
        installedApps.delete(app);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
    }
  };
  return router;
}
function runGuardQueue(guards) {
  return guards.reduce((promise2, guard) => promise2.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i2 = 0; i2 < len; i2++) {
    const recordFrom = from.matched[i2];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i2];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter() {
  return inject(routerKey);
}
function useRoute() {
  return inject(routeLocationKey);
}
const ClientOnly = defineComponent({
  setup(_2, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b2;
      return isMounted.value ? (_b2 = (_a2 = ctx.slots).default) === null || _b2 === void 0 ? void 0 : _b2.call(_a2) : null;
    };
  }
});
const scriptRel = "modulepreload";
const seen = {};
const base = "/hope-demo/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const pagesComponents = {
  "v-8daa1a0e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./index.html.d6b48b1f.js"
  ), true ? [] : void 0)),
  "v-22a39d25": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-22a39d25" */
    "./about.html.7805ecef.js"
  ), true ? [] : void 0)),
  "v-6d34f632": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-6d34f632" */
    "./contact.html.473281f6.js"
  ), true ? [] : void 0)),
  "v-7444d4f5": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-7444d4f5" */
    "./index.html.c2de2c16.js"
  ), true ? [] : void 0)),
  "v-76d72bc4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-76d72bc4" */
    "./four.html.2b974a0e.js"
  ), true ? [] : void 0)),
  "v-e12556a0": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-e12556a0" */
    "./three.html.396bc414.js"
  ), true ? [] : void 0)),
  "v-7446daa2": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-7446daa2" */
    "./index.html.a593f58b.js"
  ), true ? [] : void 0)),
  "v-5cbdbad5": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5cbdbad5" */
    "./one.html.d0b3ff94.js"
  ), true ? [] : void 0)),
  "v-514c26af": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-514c26af" */
    "./two.html.2b9c3072.js"
  ), true ? [] : void 0)),
  "v-298737c8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-298737c8" */
    "./index.html.5c34dff5.js"
  ), true ? [] : void 0)),
  "v-024e9ac2": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-024e9ac2" */
    "./five.html.3b600a88.js"
  ), true ? [] : void 0)),
  "v-67eb30ff": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-67eb30ff" */
    "./six.html.df1f4b26.js"
  ), true ? [] : void 0)),
  "v-3706649a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./404.html.0f60dca3.js"
  ), true ? [] : void 0)),
  "v-5bc93818": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5bc93818" */
    "./index.html.edc9604a.js"
  ), true ? [] : void 0)),
  "v-744d024e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-744d024e" */
    "./index.html.159f3860.js"
  ), true ? [] : void 0)),
  "v-e52c881c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-e52c881c" */
    "./index.html.1b577a9f.js"
  ), true ? [] : void 0)),
  "v-75ed4ea4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-75ed4ea4" */
    "./index.html.117a5c09.js"
  ), true ? [] : void 0)),
  "v-2897d318": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2897d318" */
    "./index.html.2da4194f.js"
  ), true ? [] : void 0)),
  "v-154dc4c4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-154dc4c4" */
    "./index.html.8a2fd1c3.js"
  ), true ? [] : void 0)),
  "v-01560935": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-01560935" */
    "./index.html.855b74b9.js"
  ), true ? [] : void 0))
};
const pagesData$1 = {
  "v-8daa1a0e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./index.html.ae1d1630.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-22a39d25": () => __vitePreload(() => import(
    /* webpackChunkName: "v-22a39d25" */
    "./about.html.d1460d4c.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-6d34f632": () => __vitePreload(() => import(
    /* webpackChunkName: "v-6d34f632" */
    "./contact.html.475c16ee.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-7444d4f5": () => __vitePreload(() => import(
    /* webpackChunkName: "v-7444d4f5" */
    "./index.html.1aa1e9fd.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-76d72bc4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-76d72bc4" */
    "./four.html.913cd6f2.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-e12556a0": () => __vitePreload(() => import(
    /* webpackChunkName: "v-e12556a0" */
    "./three.html.e3f540ec.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-7446daa2": () => __vitePreload(() => import(
    /* webpackChunkName: "v-7446daa2" */
    "./index.html.b58582d2.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-5cbdbad5": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5cbdbad5" */
    "./one.html.9a19784e.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-514c26af": () => __vitePreload(() => import(
    /* webpackChunkName: "v-514c26af" */
    "./two.html.c1f79cb1.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-298737c8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-298737c8" */
    "./index.html.9e85740c.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-024e9ac2": () => __vitePreload(() => import(
    /* webpackChunkName: "v-024e9ac2" */
    "./five.html.ceafd550.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-67eb30ff": () => __vitePreload(() => import(
    /* webpackChunkName: "v-67eb30ff" */
    "./six.html.a74cbc33.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-3706649a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./404.html.b52686d8.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-5bc93818": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5bc93818" */
    "./index.html.578c5fda.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-744d024e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-744d024e" */
    "./index.html.61c8d095.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-e52c881c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-e52c881c" */
    "./index.html.32551a86.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-75ed4ea4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-75ed4ea4" */
    "./index.html.e1cdb8c0.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-2897d318": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2897d318" */
    "./index.html.04d9482b.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-154dc4c4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-154dc4c4" */
    "./index.html.848453b9.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-01560935": () => __vitePreload(() => import(
    /* webpackChunkName: "v-01560935" */
    "./index.html.105f5f79.js"
  ), true ? [] : void 0).then(({ data }) => data)
};
const pagesData = ref(pagesData$1);
const pageDataEmpty = readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData = ref(pageDataEmpty);
const usePageData = () => pageData;
if (import_meta.webpackHot || false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data) => {
    pagesData.value[data.key] = () => Promise.resolve(data);
    if (data.key === pageData.value.key) {
      pageData.value = data;
    }
  };
}
const pageFrontmatterSymbol = Symbol("");
const usePageFrontmatter = () => {
  const pageFrontmatter = inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
const pageHeadSymbol = Symbol("");
const usePageHead = () => {
  const pageHead = inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
const pageHeadTitleSymbol = Symbol("");
const usePageHeadTitle = () => {
  const pageHeadTitle = inject(pageHeadTitleSymbol);
  if (!pageHeadTitle) {
    throw new Error("usePageHeadTitle() is called without provider.");
  }
  return pageHeadTitle;
};
const pageLangSymbol = Symbol("");
const usePageLang = () => {
  const pageLang = inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const routeLocaleSymbol = Symbol("");
const useRouteLocale = () => {
  const routeLocale = inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
const siteData$1 = {
  "base": "/hope-demo/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "zh-CN",
      "title": "\u4E3B\u9898\u6F14\u793A",
      "description": "vuepress-theme-hope \u7684\u6F14\u793A"
    }
  }
};
const siteData = ref(siteData$1);
const useSiteData = () => siteData;
if (import_meta.webpackHot || false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data) => {
    siteData.value = data;
  };
}
const siteLocaleDataSymbol = Symbol("");
const useSiteLocaleData = () => {
  const siteLocaleData = inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
const updateHeadSymbol = Symbol("");
const Content = (props) => {
  let key;
  if (props.pageKey) {
    key = props.pageKey;
  } else {
    const page2 = usePageData();
    key = page2.value.key;
  }
  const component = pagesComponents[key];
  if (component) {
    return h$3(component);
  }
  return h$3("div", "404 Not Found");
};
Content.displayName = "Content";
Content.props = {
  pageKey: {
    type: String,
    required: false
  }
};
const layoutComponents = {
  "404": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "layout-404" */
    "./404.b4797ad8.js"
  ), true ? ["assets/404.b4797ad8.js","assets/SkipLink.348cf002.js"] : void 0)),
  "Layout": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "layout-Layout" */
    "./Layout.5c978fd5.js"
  ), true ? ["assets/Layout.5c978fd5.js","assets/SkipLink.348cf002.js"] : void 0)),
  "Slide": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "layout-Slide" */
    "./SlidePage.82fc3ab6.js"
  ), true ? [] : void 0)),
  "Blog": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "layout-Blog" */
    "./Blog.eaed4736.js"
  ), true ? ["assets/Blog.eaed4736.js","assets/SkipLink.348cf002.js"] : void 0))
};
const resolveHeadIdentifier = ([tag2, attrs, content]) => {
  if (tag2 === "meta" && attrs.name) {
    return `${tag2}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag2)) {
    return tag2;
  }
  if (tag2 === "template" && attrs.id) {
    return `${tag2}.${attrs.id}`;
  }
  return JSON.stringify([tag2, attrs, content]);
};
const dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
const ensureEndingSlash = (str2) => /(\.html|\/)$/.test(str2) ? str2 : str2 + "/";
const isLinkFtp = (link) => link.startsWith("ftp://");
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
const isLinkExternal = (link, base2 = "/") => {
  if (isLinkHttp(link) || isLinkFtp(link)) {
    return true;
  }
  if (link.startsWith("/") && !link.startsWith(base2)) {
    return true;
  }
  return false;
};
const isLinkMailto = (link) => /^mailto:/.test(link);
const isLinkTel = (link) => /^tel:/.test(link);
const isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
const removeEndingSlash = (str2) => str2.replace(/\/$/, "");
const removeLeadingSlash = (str2) => str2.replace(/^\//, "");
const resolveLocalePath = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a2, b2) => {
    const levelDelta = b2.split("/").length - a2.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b2.length - a2.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const Vuepress = defineComponent({
  name: "Vuepress",
  setup() {
    const page2 = usePageData();
    const layoutComponent = computed(() => {
      let layoutName;
      if (page2.value.path) {
        const frontmatterLayout = page2.value.frontmatter.layout;
        if (isString$1(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || resolveComponent(layoutName, false);
    });
    return () => h$3(layoutComponent.value);
  }
});
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;
const withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  const base2 = useSiteData().value.base;
  return `${base2}${removeLeadingSlash(url)}`;
};
const resolvers = reactive({
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver === null || pageDataResolver === void 0 ? void 0 : pageDataResolver());
    return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString$1(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  resolvePageHeadTitle: (page2, siteLocale) => `${page2.title ? `${page2.title} | ` : ``}${siteLocale.title}`,
  resolvePageLang: (pageData2) => pageData2.lang || "en",
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  resolveSiteLocaleData: (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale])
});
var message = "";
var u$5, f$3 = function() {
  var t2 = 1e3, e = 6e4, n2 = 36e5, r2 = "millisecond", i2 = "second", s2 = "minute", o2 = "hour", a2 = "day", u2 = "week", c2 = "month", f2 = "quarter", d2 = "year", l2 = "date", h2 = "Invalid Date", m2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, v2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, $2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, p2 = function(t3, e2, n3) {
    var r3 = String(t3);
    return !r3 || r3.length >= e2 ? t3 : "" + Array(e2 + 1 - r3.length).join(n3) + t3;
  }, y2 = { s: p2, z: function(t3) {
    var e2 = -t3.utcOffset(), n3 = Math.abs(e2), r3 = Math.floor(n3 / 60), i3 = n3 % 60;
    return (e2 <= 0 ? "+" : "-") + p2(r3, 2, "0") + ":" + p2(i3, 2, "0");
  }, m: function t3(e2, n3) {
    if (e2.date() < n3.date())
      return -t3(n3, e2);
    var r3 = 12 * (n3.year() - e2.year()) + (n3.month() - e2.month()), i3 = e2.clone().add(r3, c2), s3 = n3 - i3 < 0, o3 = e2.clone().add(r3 + (s3 ? -1 : 1), c2);
    return +(-(r3 + (n3 - i3) / (s3 ? i3 - o3 : o3 - i3)) || 0);
  }, a: function(t3) {
    return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
  }, p: function(t3) {
    return { M: c2, y: d2, w: u2, d: a2, D: l2, h: o2, m: s2, s: i2, ms: r2, Q: f2 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
  }, u: function(t3) {
    return t3 === void 0;
  } }, g2 = "en", M2 = {};
  M2[g2] = $2;
  var D2 = function(t3) {
    return t3 instanceof w2;
  }, _2 = function t3(e2, n3, r3) {
    var i3;
    if (!e2)
      return g2;
    if (typeof e2 == "string") {
      var s3 = e2.toLowerCase();
      M2[s3] && (i3 = s3), n3 && (M2[s3] = n3, i3 = s3);
      var o3 = e2.split("-");
      if (!i3 && o3.length > 1)
        return t3(o3[0]);
    } else {
      var a3 = e2.name;
      M2[a3] = e2, i3 = a3;
    }
    return !r3 && i3 && (g2 = i3), i3 || !r3 && g2;
  }, Y2 = function(t3, e2) {
    if (D2(t3))
      return t3.clone();
    var n3 = typeof e2 == "object" ? e2 : {};
    return n3.date = t3, n3.args = arguments, new w2(n3);
  }, S = y2;
  S.l = _2, S.i = D2, S.w = function(t3, e2) {
    return Y2(t3, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
  };
  var w2 = function() {
    function $3(t3) {
      this.$L = _2(t3.locale, null, true), this.parse(t3);
    }
    var p3 = $3.prototype;
    return p3.parse = function(t3) {
      this.$d = function(t4) {
        var e2 = t4.date, n3 = t4.utc;
        if (e2 === null)
          return new Date(NaN);
        if (S.u(e2))
          return new Date();
        if (e2 instanceof Date)
          return new Date(e2);
        if (typeof e2 == "string" && !/Z$/i.test(e2)) {
          var r3 = e2.match(m2);
          if (r3) {
            var i3 = r3[2] - 1 || 0, s3 = (r3[7] || "0").substring(0, 3);
            return n3 ? new Date(Date.UTC(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3)) : new Date(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3);
          }
        }
        return new Date(e2);
      }(t3), this.$x = t3.x || {}, this.init();
    }, p3.init = function() {
      var t3 = this.$d;
      this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
    }, p3.$utils = function() {
      return S;
    }, p3.isValid = function() {
      return !(this.$d.toString() === h2);
    }, p3.isSame = function(t3, e2) {
      var n3 = Y2(t3);
      return this.startOf(e2) <= n3 && n3 <= this.endOf(e2);
    }, p3.isAfter = function(t3, e2) {
      return Y2(t3) < this.startOf(e2);
    }, p3.isBefore = function(t3, e2) {
      return this.endOf(e2) < Y2(t3);
    }, p3.$g = function(t3, e2, n3) {
      return S.u(t3) ? this[e2] : this.set(n3, t3);
    }, p3.unix = function() {
      return Math.floor(this.valueOf() / 1e3);
    }, p3.valueOf = function() {
      return this.$d.getTime();
    }, p3.startOf = function(t3, e2) {
      var n3 = this, r3 = !!S.u(e2) || e2, f3 = S.p(t3), h3 = function(t4, e3) {
        var i3 = S.w(n3.$u ? Date.UTC(n3.$y, e3, t4) : new Date(n3.$y, e3, t4), n3);
        return r3 ? i3 : i3.endOf(a2);
      }, m3 = function(t4, e3) {
        return S.w(n3.toDate()[t4].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n3);
      }, v3 = this.$W, $4 = this.$M, p4 = this.$D, y3 = "set" + (this.$u ? "UTC" : "");
      switch (f3) {
        case d2:
          return r3 ? h3(1, 0) : h3(31, 11);
        case c2:
          return r3 ? h3(1, $4) : h3(0, $4 + 1);
        case u2:
          var g3 = this.$locale().weekStart || 0, M3 = (v3 < g3 ? v3 + 7 : v3) - g3;
          return h3(r3 ? p4 - M3 : p4 + (6 - M3), $4);
        case a2:
        case l2:
          return m3(y3 + "Hours", 0);
        case o2:
          return m3(y3 + "Minutes", 1);
        case s2:
          return m3(y3 + "Seconds", 2);
        case i2:
          return m3(y3 + "Milliseconds", 3);
        default:
          return this.clone();
      }
    }, p3.endOf = function(t3) {
      return this.startOf(t3, false);
    }, p3.$set = function(t3, e2) {
      var n3, u3 = S.p(t3), f3 = "set" + (this.$u ? "UTC" : ""), h3 = (n3 = {}, n3[a2] = f3 + "Date", n3[l2] = f3 + "Date", n3[c2] = f3 + "Month", n3[d2] = f3 + "FullYear", n3[o2] = f3 + "Hours", n3[s2] = f3 + "Minutes", n3[i2] = f3 + "Seconds", n3[r2] = f3 + "Milliseconds", n3)[u3], m3 = u3 === a2 ? this.$D + (e2 - this.$W) : e2;
      if (u3 === c2 || u3 === d2) {
        var v3 = this.clone().set(l2, 1);
        v3.$d[h3](m3), v3.init(), this.$d = v3.set(l2, Math.min(this.$D, v3.daysInMonth())).$d;
      } else
        h3 && this.$d[h3](m3);
      return this.init(), this;
    }, p3.set = function(t3, e2) {
      return this.clone().$set(t3, e2);
    }, p3.get = function(t3) {
      return this[S.p(t3)]();
    }, p3.add = function(r3, f3) {
      var l3, h3 = this;
      r3 = Number(r3);
      var m3 = S.p(f3), v3 = function(t3) {
        var e2 = Y2(h3);
        return S.w(e2.date(e2.date() + Math.round(t3 * r3)), h3);
      };
      if (m3 === c2)
        return this.set(c2, this.$M + r3);
      if (m3 === d2)
        return this.set(d2, this.$y + r3);
      if (m3 === a2)
        return v3(1);
      if (m3 === u2)
        return v3(7);
      var $4 = (l3 = {}, l3[s2] = e, l3[o2] = n2, l3[i2] = t2, l3)[m3] || 1, p4 = this.$d.getTime() + r3 * $4;
      return S.w(p4, this);
    }, p3.subtract = function(t3, e2) {
      return this.add(-1 * t3, e2);
    }, p3.format = function(t3) {
      var e2 = this, n3 = this.$locale();
      if (!this.isValid())
        return n3.invalidDate || h2;
      var r3 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i3 = S.z(this), s3 = this.$H, o3 = this.$m, a3 = this.$M, u3 = n3.weekdays, c3 = n3.months, f3 = function(t4, n4, i4, s4) {
        return t4 && (t4[n4] || t4(e2, r3)) || i4[n4].substr(0, s4);
      }, d3 = function(t4) {
        return S.s(s3 % 12 || 12, t4, "0");
      }, l3 = n3.meridiem || function(t4, e3, n4) {
        var r4 = t4 < 12 ? "AM" : "PM";
        return n4 ? r4.toLowerCase() : r4;
      }, m3 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a3 + 1, MM: S.s(a3 + 1, 2, "0"), MMM: f3(n3.monthsShort, a3, c3, 3), MMMM: f3(c3, a3), D: this.$D, DD: S.s(this.$D, 2, "0"), d: String(this.$W), dd: f3(n3.weekdaysMin, this.$W, u3, 2), ddd: f3(n3.weekdaysShort, this.$W, u3, 3), dddd: u3[this.$W], H: String(s3), HH: S.s(s3, 2, "0"), h: d3(1), hh: d3(2), a: l3(s3, o3, true), A: l3(s3, o3, false), m: String(o3), mm: S.s(o3, 2, "0"), s: String(this.$s), ss: S.s(this.$s, 2, "0"), SSS: S.s(this.$ms, 3, "0"), Z: i3 };
      return r3.replace(v2, function(t4, e3) {
        return e3 || m3[t4] || i3.replace(":", "");
      });
    }, p3.utcOffset = function() {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    }, p3.diff = function(r3, l3, h3) {
      var m3, v3 = S.p(l3), $4 = Y2(r3), p4 = ($4.utcOffset() - this.utcOffset()) * e, y3 = this - $4, g3 = S.m(this, $4);
      return g3 = (m3 = {}, m3[d2] = g3 / 12, m3[c2] = g3, m3[f2] = g3 / 3, m3[u2] = (y3 - p4) / 6048e5, m3[a2] = (y3 - p4) / 864e5, m3[o2] = y3 / n2, m3[s2] = y3 / e, m3[i2] = y3 / t2, m3)[v3] || y3, h3 ? g3 : S.a(g3);
    }, p3.daysInMonth = function() {
      return this.endOf(c2).$D;
    }, p3.$locale = function() {
      return M2[this.$L];
    }, p3.locale = function(t3, e2) {
      if (!t3)
        return this.$L;
      var n3 = this.clone(), r3 = _2(t3, e2, true);
      return r3 && (n3.$L = r3), n3;
    }, p3.clone = function() {
      return S.w(this.$d, this);
    }, p3.toDate = function() {
      return new Date(this.valueOf());
    }, p3.toJSON = function() {
      return this.isValid() ? this.toISOString() : null;
    }, p3.toISOString = function() {
      return this.$d.toISOString();
    }, p3.toString = function() {
      return this.$d.toUTCString();
    }, $3;
  }(), b2 = w2.prototype;
  return Y2.prototype = b2, [["$ms", r2], ["$s", i2], ["$m", s2], ["$H", o2], ["$W", a2], ["$M", c2], ["$y", d2], ["$D", l2]].forEach(function(t3) {
    b2[t3[1]] = function(e2) {
      return this.$g(e2, t3[0], t3[1]);
    };
  }), Y2.extend = function(t3, e2) {
    return t3.$i || (t3(e2, w2, Y2), t3.$i = true), Y2;
  }, Y2.locale = _2, Y2.isDayjs = D2, Y2.unix = function(t3) {
    return Y2(1e3 * t3);
  }, Y2.en = M2[g2], Y2.Ls = M2, Y2.p = {}, Y2;
}(), l$4 = (u$5 = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, function(t2, e, n2) {
  var r2 = e.prototype, i2 = r2.format;
  n2.en.formats = u$5, r2.format = function(t3) {
    t3 === void 0 && (t3 = "YYYY-MM-DDTHH:mm:ssZ");
    var e2 = this.$locale().formats, n3 = function(t4, e3) {
      return t4.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t5, n4, r3) {
        var i3 = r3 && r3.toUpperCase();
        return n4 || e3[r3] || u$5[r3] || e3[i3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(t6, e4, n5) {
          return e4 || n5.slice(1);
        });
      });
    }(t3, e2 === void 0 ? {} : e2);
    return i2.call(this, n3);
  };
}), m$3 = function(t2, e, n2) {
  var r2 = e.prototype, i2 = function(t3) {
    var e2, i3 = t3.date, s3 = t3.utc, o3 = {};
    if (!((e2 = i3) instanceof Date) && !(e2 instanceof Array) && e2 instanceof Object) {
      if (!Object.keys(i3).length)
        return new Date();
      var a3 = s3 ? n2.utc() : n2();
      Object.keys(i3).forEach(function(t4) {
        var e3, n3;
        o3[e3 = t4, n3 = r2.$utils().p(e3), n3 === "date" ? "day" : n3] = i3[t4];
      });
      var u3 = o3.day || (o3.year || o3.month >= 0 ? 1 : a3.date()), c2 = o3.year || a3.year(), f2 = o3.month >= 0 ? o3.month : o3.year || o3.day ? 0 : a3.month(), d2 = o3.hour || 0, l2 = o3.minute || 0, h2 = o3.second || 0, m2 = o3.millisecond || 0;
      return s3 ? new Date(Date.UTC(c2, f2, u3, d2, l2, h2, m2)) : new Date(c2, f2, u3, d2, l2, h2, m2);
    }
    return i3;
  }, s2 = r2.parse;
  r2.parse = function(t3) {
    t3.date = i2.bind(this)(t3), s2.bind(this)(t3);
  };
  var o2 = r2.set, a2 = r2.add, u2 = function(t3, e2, n3, r3) {
    if (r3 === void 0 && (r3 = 1), e2 instanceof Object) {
      var i3 = Object.keys(e2), s3 = this;
      return i3.forEach(function(n4) {
        s3 = t3.bind(s3)(e2[n4] * r3, n4);
      }), s3;
    }
    return t3.bind(this)(e2 * r3, n3);
  };
  r2.set = function(t3, e2) {
    return e2 = e2 === void 0 ? t3 : e2, u2.bind(this)(function(t4, e3) {
      return o2.bind(this)(e3, t4);
    }, e2, t3);
  }, r2.add = function(t3, e2) {
    return u2.bind(this)(a2, t3, e2);
  }, r2.subtract = function(t3, e2) {
    return u2.bind(this)(a2, t3, e2, -1);
  };
}, $ = function() {
  var t2 = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, e = {};
  return function(n2, r2, i2) {
    var s2, o2 = function(t3, n3, r3) {
      r3 === void 0 && (r3 = {});
      var i3 = new Date(t3), s3 = function(t4, n4) {
        n4 === void 0 && (n4 = {});
        var r4 = n4.timeZoneName || "short", i4 = t4 + "|" + r4, s4 = e[i4];
        return s4 || (s4 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: t4, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: r4 }), e[i4] = s4), s4;
      }(n3, r3);
      return s3.formatToParts(i3);
    }, a2 = function(e2, n3) {
      for (var r3 = o2(e2, n3), s3 = [], a3 = 0; a3 < r3.length; a3 += 1) {
        var u3 = r3[a3], c3 = u3.type, f2 = u3.value, d2 = t2[c3];
        d2 >= 0 && (s3[d2] = parseInt(f2, 10));
      }
      var l2 = s3[3], h2 = l2 === 24 ? 0 : l2, m2 = s3[0] + "-" + s3[1] + "-" + s3[2] + " " + h2 + ":" + s3[4] + ":" + s3[5] + ":000", v2 = +e2;
      return (i2.utc(m2).valueOf() - (v2 -= v2 % 1e3)) / 6e4;
    }, u2 = r2.prototype;
    u2.tz = function(t3, e2) {
      t3 === void 0 && (t3 = s2);
      var n3 = this.utcOffset(), r3 = this.toDate(), o3 = r3.toLocaleString("en-US", { timeZone: t3 }), a3 = Math.round((r3 - new Date(o3)) / 1e3 / 60), u3 = i2(o3).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(r3.getTimezoneOffset() / 15) - a3, true);
      if (e2) {
        var c3 = u3.utcOffset();
        u3 = u3.add(n3 - c3, "minute");
      }
      return u3.$x.$timezone = t3, u3;
    }, u2.offsetName = function(t3) {
      var e2 = this.$x.$timezone || i2.tz.guess(), n3 = o2(this.valueOf(), e2, { timeZoneName: t3 }).find(function(t4) {
        return t4.type.toLowerCase() === "timezonename";
      });
      return n3 && n3.value;
    };
    var c2 = u2.startOf;
    u2.startOf = function(t3, e2) {
      if (!this.$x || !this.$x.$timezone)
        return c2.call(this, t3, e2);
      var n3 = i2(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
      return c2.call(n3, t3, e2).tz(this.$x.$timezone, true);
    }, i2.tz = function(t3, e2, n3) {
      var r3 = n3 && e2, o3 = n3 || e2 || s2, u3 = a2(+i2(), o3);
      if (typeof t3 != "string")
        return i2(t3).tz(o3);
      var c3 = function(t4, e3, n4) {
        var r4 = t4 - 60 * e3 * 1e3, i3 = a2(r4, n4);
        if (e3 === i3)
          return [r4, e3];
        var s3 = a2(r4 -= 60 * (i3 - e3) * 1e3, n4);
        return i3 === s3 ? [r4, i3] : [t4 - 60 * Math.min(i3, s3) * 1e3, Math.max(i3, s3)];
      }(i2.utc(t3, r3).valueOf(), u3, o3), f2 = c3[0], d2 = c3[1], l2 = i2(f2).utcOffset(d2);
      return l2.$x.$timezone = o3, l2;
    }, i2.tz.guess = function() {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }, i2.tz.setDefault = function(t3) {
      s2 = t3;
    };
  };
}(), y$3 = function() {
  var t2 = "minute", e = /[+-]\d\d(?::?\d\d)?/g, n2 = /([+-]|\d\d)/g;
  return function(r2, i2, s2) {
    var o2 = i2.prototype;
    s2.utc = function(t3) {
      return new i2({ date: t3, utc: true, args: arguments });
    }, o2.utc = function(e2) {
      var n3 = s2(this.toDate(), { locale: this.$L, utc: true });
      return e2 ? n3.add(this.utcOffset(), t2) : n3;
    }, o2.local = function() {
      return s2(this.toDate(), { locale: this.$L, utc: false });
    };
    var a2 = o2.parse;
    o2.parse = function(t3) {
      t3.utc && (this.$u = true), this.$utils().u(t3.$offset) || (this.$offset = t3.$offset), a2.call(this, t3);
    };
    var u2 = o2.init;
    o2.init = function() {
      if (this.$u) {
        var t3 = this.$d;
        this.$y = t3.getUTCFullYear(), this.$M = t3.getUTCMonth(), this.$D = t3.getUTCDate(), this.$W = t3.getUTCDay(), this.$H = t3.getUTCHours(), this.$m = t3.getUTCMinutes(), this.$s = t3.getUTCSeconds(), this.$ms = t3.getUTCMilliseconds();
      } else
        u2.call(this);
    };
    var c2 = o2.utcOffset;
    o2.utcOffset = function(r3, i3) {
      var s3 = this.$utils().u;
      if (s3(r3))
        return this.$u ? 0 : s3(this.$offset) ? c2.call(this) : this.$offset;
      if (typeof r3 == "string" && (r3 = function(t3) {
        t3 === void 0 && (t3 = "");
        var r4 = t3.match(e);
        if (!r4)
          return null;
        var i4 = ("" + r4[0]).match(n2) || ["-", 0, 0], s4 = i4[0], o4 = 60 * +i4[1] + +i4[2];
        return o4 === 0 ? 0 : s4 === "+" ? o4 : -o4;
      }(r3), r3 === null))
        return this;
      var o3 = Math.abs(r3) <= 16 ? 60 * r3 : r3, a3 = this;
      if (i3)
        return a3.$offset = o3, a3.$u = r3 === 0, a3;
      if (r3 !== 0) {
        var u3 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        (a3 = this.local().add(o3 + u3, t2)).$offset = o3, a3.$x.$localOffset = u3;
      } else
        a3 = this.utc();
      return a3;
    };
    var f2 = o2.format;
    o2.format = function(t3) {
      var e2 = t3 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
      return f2.call(this, e2);
    }, o2.valueOf = function() {
      var t3 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || new Date().getTimezoneOffset());
      return this.$d.valueOf() - 6e4 * t3;
    }, o2.isUTC = function() {
      return !!this.$u;
    }, o2.toISOString = function() {
      return this.toDate().toISOString();
    }, o2.toString = function() {
      return this.toDate().toUTCString();
    };
    var d2 = o2.toDate;
    o2.toDate = function(t3) {
      return t3 === "s" && this.$offset ? s2(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : d2.call(this);
    };
    var l2 = o2.diff;
    o2.diff = function(t3, e2, n3) {
      if (t3 && this.$u === t3.$u)
        return l2.call(this, t3, e2, n3);
      var r3 = this.local(), i3 = s2(t3).local();
      return l2.call(r3, i3, e2, n3);
    };
  };
}();
f$3.extend(l$4), f$3.extend(m$3), f$3.extend(y$3), f$3.extend($);
const g$1 = { name: "zh-cn", weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"), weekdaysShort: "\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"), weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"), months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), ordinal: (t2, e) => e === "W" ? `${t2}\u5468` : `${t2}\u65E5`, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206", LLLL: "YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206", l: "YYYY/M/D", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm" }, relativeTime: { future: "%s\u5185", past: "%s\u524D", s: "\u51E0\u79D2", m: "1 \u5206\u949F", mm: "%d \u5206\u949F", h: "1 \u5C0F\u65F6", hh: "%d \u5C0F\u65F6", d: "1 \u5929", dd: "%d \u5929", M: "1 \u4E2A\u6708", MM: "%d \u4E2A\u6708", y: "1 \u5E74", yy: "%d \u5E74" }, meridiem: (t2, e) => {
  const n2 = 100 * t2 + e;
  return n2 < 600 ? "\u51CC\u6668" : n2 < 900 ? "\u65E9\u4E0A" : n2 < 1100 ? "\u4E0A\u5348" : n2 < 1300 ? "\u4E2D\u5348" : n2 < 1800 ? "\u4E0B\u5348" : "\u665A\u4E0A";
} }, M$1 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") };
f$3.locale("zh", g$1), f$3.locale("en", M$1);
const D = f$3, _ = (t2, e = {}) => {
  const { lang: n2, timezone: r2, type: i2 } = e;
  D.locale(((t3 = "en") => {
    const e2 = t3.toLowerCase();
    return e2 === "zh" || e2 === "zh-cn" ? "zh" : (e2 === "en-us" || e2 === "en-uk" || e2 === "en" || console.warn(`${t3} locale missing in config`), "en");
  })(n2));
  const s2 = r2 ? D(t2).tz(r2).format("LL") : D(t2).format("LL"), o2 = r2 ? D(t2).tz(r2).format("HH:mm") : D(t2).format("HH:mm");
  return i2 === "date" ? s2 : i2 === "time" ? o2 : `${s2} ${o2}`;
}, Y = (t2, e = {}) => {
  const { timezone: n2 } = e;
  if (t2) {
    if (D(t2 instanceof Date ? t2 : t2.trim()).isValid()) {
      const r3 = n2 ? D(t2).tz(n2) : D(t2), i2 = r3.year(), s2 = r3.month() + 1, o2 = r3.date(), a2 = r3.hour(), u2 = r3.minute(), c2 = r3.second(), f2 = r3.millisecond(), d2 = a2 === 0 && u2 === 0 && c2 === 0 && f2 === 0, l2 = r3.toDate();
      return { display: _(l2, __spreadValues({ type: d2 ? "date" : "full" }, e)), value: l2, detail: __spreadValues({ year: i2, month: s2, day: o2 }, d2 ? {} : { hour: a2, minute: u2, second: c2 }) };
    }
    const r2 = /(?:(\d{2,4})[/-](\d{1,2})[/-](\d{1,2}))?\s*(?:(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/u.exec(t2.trim());
    if (r2) {
      const [, t3, n3, i2, s2, o2, a2] = r2, u2 = (t4) => t4 === void 0 ? void 0 : Number(t4), c2 = (t4) => s2 && o2 && !a2 ? 0 : t4, f2 = { year: ((t4) => t4 && t4 < 100 ? t4 + 2e3 : t4)(u2(t3)), month: u2(n3), day: u2(i2), hour: u2(s2), minute: u2(o2), second: c2(u2(a2)) }, d2 = t3 === void 0 && n3 === void 0 && i2 === void 0, l2 = s2 === void 0 && o2 === void 0 && a2 === void 0, h2 = D(__spreadProps(__spreadValues({}, f2), { month: f2.month - 1 })).toDate();
      return { display: _(h2, __spreadValues({ type: l2 ? "date" : d2 ? "time" : "full" }, e)), value: d2 ? void 0 : h2, detail: l2 ? { year: f2.year, month: f2.month, day: f2.day } : d2 ? { hour: f2.hour, minute: f2.minute, second: f2.second } : f2 };
    }
  }
  return null;
}, w$1 = (t2, e = false) => t2 ? Array.isArray(t2) ? t2.map((t3) => typeof t3 == "string" ? { name: t3 } : t3) : typeof t2 == "string" ? [{ name: t2 }] : typeof t2 == "object" && t2.name ? [t2] : (console.error(`Expect 'author' to be \`AuthorInfo[] | AuthorInfo | string[] | string ${e ? "" : "| false"} | undefined\`, but got`, t2), []) : [], b$1 = (t2) => {
  if (t2) {
    if (Array.isArray(t2))
      return t2;
    if (typeof t2 == "string")
      return [t2];
    console.error("Expect 'category' to be `string[] | string | undefined`, but got", t2);
  }
  return [];
}, O$1 = (t2) => {
  if (t2) {
    if (Array.isArray(t2))
      return t2;
    if (typeof t2 == "string")
      return [t2];
    console.error("Expect 'tag' to be `string[] | string | undefined`, but got", t2);
  }
  return [];
}, x = defineComponent({ name: "IconBase", props: { name: { type: String, default: "" }, color: { type: String, default: "currentColor" } }, setup: (t2, { slots: n2 }) => () => {
  var r2;
  return h$3("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${t2.name}-icon`], viewBox: "0 0 1024 1024", ariaLabelledby: t2.name }, [h$3("title", { id: t2.name, lang: "en" }, `${t2.name} icon`), h$3("g", { fill: t2.color }, (r2 = n2.default) === null || r2 === void 0 ? void 0 : r2.call(n2))]);
} }), H$1 = (t2) => {
  const e = getCurrentInstance();
  return typeof (e == null ? void 0 : e.appContext.components) == "object" && (t2 in e.appContext.components || camelize(t2) in e.appContext.components || capitalize(camelize(t2)) in e.appContext.components);
}, z$1 = (t2) => {
  const e = useRouteLocale();
  return computed(() => t2[e.value]);
}, A$1 = /* @__PURE__ */ new Map();
let E;
document.addEventListener("mousedown", (t2) => {
  E = t2;
}), document.addEventListener("mouseup", (t2) => {
  for (const e of A$1.values())
    for (const { documentHandler: n2 } of e)
      n2(t2, E);
});
const I$1 = (t2, e) => {
  let n2 = 1;
  for (let e2 = 0; e2 < t2.length; e2++)
    n2 += t2.charCodeAt(e2), n2 += n2 << 10, n2 ^= n2 >> 6;
  return n2 += n2 << 3, n2 ^= n2 >> 11, n2 % e;
}, k = /#.*$/u, W = (t2) => {
  const e = k.exec(t2);
  return e ? e[0] : "";
}, j = (t2) => decodeURI(t2).replace(k, "").replace(/(index)?\.(md|html)$/, ""), F = (t2, e) => {
  if (e === void 0)
    return false;
  const n2 = j(t2.path), r2 = j(e), i2 = W(e);
  return i2 ? i2 === t2.hash && (!r2 || n2 === r2) : n2 === r2;
};
class Z {
  constructor() {
    const t2 = "message-container", e = document.getElementById(t2);
    e ? this.containerElement = e : (this.containerElement = document.createElement("div"), this.containerElement.id = t2, document.body.appendChild(this.containerElement));
  }
  pop(t2, e = 2e3) {
    const n2 = document.createElement("div");
    n2.className = "message move-in", n2.innerHTML = t2, this.containerElement.appendChild(n2), e > 0 && setTimeout(() => {
      this.close(n2);
    }, e);
  }
  close(t2) {
    t2.className = t2.className.replace("move-in", ""), t2.className += "move-out", t2.addEventListener("animationend", () => {
      t2.remove();
    });
  }
}
const J = (t2, ...e) => {
  const n2 = t2.resolve(...e), r2 = n2.matched[n2.matched.length - 1];
  if (!(r2 == null ? void 0 : r2.redirect))
    return n2;
  const { redirect: i2 } = r2, s2 = typeof i2 == "function" ? i2(n2) : i2;
  const o2 = ((t3) => typeof t3 == "string")(s2) ? { path: s2 } : s2;
  return J(t2, __spreadValues({ hash: n2.hash, query: n2.query, params: n2.params }, o2));
};
var category = "";
var tag = "";
var balloon = "";
var articleInfo = "";
const m$2 = () => h$3(x, { name: "author" }, () => h$3("path", { d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z" }));
m$2.displayName = "AuthorIcon";
const g = () => h$3(x, { name: "calendar" }, () => h$3("path", { d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z" }));
g.displayName = "CalendarIcon";
const y$2 = () => h$3(x, { name: "category" }, () => h$3("path", { d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z" }));
y$2.displayName = "CategoryIcon";
const h$2 = () => h$3(x, { name: "eye" }, () => h$3("path", { d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z" }));
h$2.displayName = "EyeIcon";
const f$2 = () => h$3(x, { name: "fire" }, () => h$3("path", { d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z" }));
f$2.displayName = "FireIcon";
const v$1 = () => h$3(x, { name: "tag" }, () => h$3("path", { d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z" }));
v$1.displayName = "TagIcon";
const I = () => h$3(x, { name: "timer" }, () => h$3("path", { d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z" }));
I.displayName = "TimerIcon";
const b = () => h$3(x, { name: "word" }, () => [h$3("path", { d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z" }), h$3("path", { d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z" })]);
b.displayName = "WordIcon";
const w = { "/": { "author": "\u4F5C\u8005\u{1F58A}", "date": "\u5199\u4F5C\u65E5\u671F\u{1F4C5}", "origin": "\u539F\u521B\u{1F4A1}", "views": "\u8BBF\u95EE\u91CF\u{1F522}", "category": "\u5206\u7C7B\u{1F308}", "tag": "\u6807\u7B7E\u{1F3F7}", "readingTime": "\u9605\u8BFB\u65F6\u95F4\u231B", "words": "\u5B57\u6570\u{1F520}" } }, T = { "/": { "word": "\u7EA6 $word \u5B57", "less1Minute": "\u5C0F\u4E8E 1 \u5206\u949F", "time": "\u5927\u7EA6 $time \u5206\u949F" } };
var M = defineComponent({ name: "AuthorInfo", props: { author: { type: Array, required: true }, hint: { type: Boolean, default: true } }, setup(e) {
  const t2 = z$1(w);
  return () => e.author.length ? h$3("span", __spreadValues({ class: "author-info", ariaLabel: t2.value.author }, e.hint ? { "data-balloon-pos": "down" } : {}), [h$3(m$2), h$3("span", e.author.map((e2) => e2.url ? h$3("a", { class: "author-item", href: e2.url, target: "_blank", rel: "noopener noreferrer" }, e2.name) : h$3("span", { class: "author-item" }, e2.name))), h$3("span", { property: "author", content: e.author.map((a2) => a2.name).join(", ") })]) : null;
} }), A = defineComponent({ name: "CategoryInfo", props: { category: { type: Array, required: true }, hint: { type: Boolean, default: true }, color: { type: Boolean, default: true } }, setup(e) {
  const t2 = useRouter(), o2 = useRoute(), n2 = z$1(w);
  return () => e.category.length ? h$3("span", __spreadValues({ class: "category-info", ariaLabel: n2.value.category }, e.hint ? { "data-balloon-pos": "down" } : {}), [h$3(y$2), h$3("ul", { class: "categories-wrapper" }, [...e.category.map(({ name: n3, path: l2 }) => h$3("li", { class: ["category", { [`category${I$1(n3, 9)}`]: e.color, clickable: l2 }], role: l2 ? "navigation" : "", onClick: () => ((a2 = "") => {
    a2 && o2.path !== a2 && t2.push(a2);
  })(l2) }, n3)), h$3("meta", { property: "articleSection", content: e.category.map(({ name: a2 }) => a2).join(",") })])]) : null;
} }), z = defineComponent({ name: "DateInfo", props: { date: { type: Object, default: null }, hint: { type: Boolean, default: true } }, setup(e) {
  const t2 = z$1(w);
  return () => {
    var o2, n2, l2;
    return e.date ? h$3("span", __spreadValues({ class: "date-info", ariaLabel: t2.value.date }, e.hint !== false ? { "data-balloon-pos": "down" } : {}), [h$3(g), h$3("span", (o2 = e.date) === null || o2 === void 0 ? void 0 : o2.display), h$3("meta", { property: "datePublished", content: ((l2 = (n2 = e.date) === null || n2 === void 0 ? void 0 : n2.value) === null || l2 === void 0 ? void 0 : l2.toISOString()) || "" })]) : null;
  };
} }), C = defineComponent({ name: "PageViewInfo", props: { hint: { type: Boolean, default: true }, pageview: { type: [Boolean, String], default: false } }, setup(e) {
  const l2 = useRoute(), r2 = z$1(w), i2 = ref(0), c2 = () => {
    const a2 = document.querySelector(".waline-visitor-count");
    if (a2) {
      const e2 = a2.textContent;
      e2 && !isNaN(Number(e2)) ? i2.value = Number(e2) : setTimeout(c2, 500);
    }
  };
  return onMounted(() => {
    setTimeout(c2, 1500);
  }), watch(() => l2.path, (a2, e2) => {
    a2 !== e2 && setTimeout(c2, 500);
  }), () => e.pageview ? h$3("span", __spreadValues({ class: "visitor-info", ariaLabel: r2.value.views }, e.hint !== false ? { "data-balloon-pos": "down" } : {}), [h$3(i2.value < 1e3 ? h$2 : f$2), h$3("span", { class: "waline-visitor-count", id: typeof e.pageview == "string" ? e.pageview : withBase(l2.path) }, "...")]) : null;
} }), B = defineComponent({ name: "ReadingTimeInfo", props: { readingTime: { type: Object, default: () => null }, hint: { type: Boolean, default: true } }, setup(e) {
  const t2 = z$1(w), o2 = z$1(T), n2 = computed(() => {
    if (!e.readingTime)
      return null;
    const { minutes: a2 } = e.readingTime;
    return a2 < 1 ? { text: o2.value.less1Minute, time: "PT1M" } : { text: o2.value.time.replace("$time", Math.round(a2).toString()), time: `PT${Math.round(a2)}M` };
  });
  return () => n2.value ? h$3("span", __spreadValues({ class: "reading-time-info", ariaLabel: t2.value.readingTime }, e.hint !== false ? { "data-balloon-pos": "down" } : {}), [h$3(I), h$3("span", n2.value.text), h$3("meta", { property: "timeRequired", content: n2.value.time })]) : null;
} }), O = defineComponent({ name: "TagInfo", props: { tag: { type: Array, default: () => [] }, hint: { type: Boolean, default: true }, color: { type: Boolean, default: true } }, setup(e) {
  const t2 = useRouter(), o2 = useRoute(), n2 = z$1(w);
  return () => e.tag.length ? h$3("span", __spreadValues({ ariaLabel: n2.value.tag }, e.hint ? { "data-balloon-pos": "down" } : {}), [h$3(v$1), h$3("ul", { class: "tags-wrapper" }, e.tag.map(({ name: n3, path: l2 }) => h$3("li", { class: ["tag", { [`tag${I$1(n3, 9)}`]: e.color, clickable: l2 }], role: l2 ? "navigation" : "", onClick: () => ((a2 = "") => {
    a2 && o2.path !== a2 && t2.push(a2);
  })(l2) }, n3))), h$3("meta", { property: "keywords", content: e.tag.map(({ name: a2 }) => a2).join(",") })]) : null;
} }), H = defineComponent({ name: "OriginalMark", props: { isOriginal: { type: Boolean, default: false } }, setup(e) {
  const t2 = z$1(w);
  return () => e.isOriginal ? h$3("span", { class: "origin" }, t2.value.origin) : null;
} }), L = defineComponent({ name: "ReadTimeInfo", props: { readingTime: { type: Object, default: () => null }, hint: { type: Boolean, default: true } }, setup(e) {
  const t2 = z$1(w), o2 = z$1(T), n2 = computed(() => {
    var a2;
    return (a2 = e.readingTime) === null || a2 === void 0 ? void 0 : a2.words.toString();
  }), r2 = computed(() => o2.value.word.replace("$word", n2.value || ""));
  return () => n2.value ? h$3("span", __spreadValues({ class: "words-info", ariaLabel: t2.value.words }, e.hint !== false ? { "data-balloon-pos": "down" } : {}), [h$3(b), h$3("span", r2.value), h$3("meta", { property: "wordCount", content: n2.value })]) : null;
} }), N = defineComponent({ name: "ArticleInfo", components: { AuthorInfo: M, CategoryInfo: A, DateInfo: z, OriginalInfo: H, PageViewInfo: C, ReadingTimeInfo: B, TagInfo: O, WordInfo: L }, props: { config: { type: [Array, Boolean], default: () => ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"] }, hint: { type: Boolean, default: true }, author: { type: Array, default: () => [] }, category: { type: Array, default: () => [] }, tag: { type: Array, default: () => [] }, date: { type: Object, default: null }, isOriginal: { type: Boolean, default: false }, pageview: { type: [Boolean, String], default: false }, readingTime: { type: Object, default: () => null }, color: { type: Boolean, default: true } }, setup: (e) => () => e.config ? h$3("div", { class: "article-info" }, e.config.map((t2) => h$3(resolveComponent(`${t2}Info`), e))) : null });
var badge = "";
var r$4 = defineComponent({ name: "Badge", props: { type: { type: String, default: "tip" }, text: { type: String, default: "" }, vertical: { type: String, default: "top" }, color: { type: String, default: "" } }, setup(t2, { slots: r2 }) {
  const a2 = computed(() => {
    const e = { class: ["badge", t2.type], style: { verticalAlign: t2.vertical } };
    return t2.color && (e.class.push("diy"), e.style.backgroundColor = t2.color, e["data-color"] = t2.color), e;
  });
  return () => {
    var e;
    return h$3("span", a2.value, t2.text || ((e = r2.default) === null || e === void 0 ? void 0 : e.call(r2)));
  };
} });
var breadcrumb = "";
var f$1 = defineComponent({ name: "BreadCrumb", props: { enable: { type: Boolean, default: true }, icon: { type: Boolean, default: true }, iconPrefix: { type: String, default: "" } }, setup(r2) {
  const f2 = useRouter(), h2 = useRoute(), v2 = useRouteLocale(), b2 = ref([]), d2 = computed(() => r2.enable && b2.value.length > 1), y2 = () => {
    const t2 = f2.getRoutes(), r3 = ((e, t3) => {
      const r4 = e.path.replace(t3, "/").split("/"), o2 = [];
      let a2 = removeEndingSlash(t3);
      return r4.forEach((e2, t4) => {
        t4 !== r4.length - 1 ? (a2 += `${e2}/`, o2.push(a2)) : e2 !== "" && (a2 += e2, o2.push(a2));
      }), o2;
    })(h2, v2.value).map((r4) => {
      const o2 = t2.find((e) => e.path === r4);
      if (o2) {
        const { meta: t3, path: r5 } = J(f2, o2.path);
        if (typeof t3.title == "string")
          return { title: t3.title, icon: t3.icon, path: r5 };
      }
      return null;
    }).filter((e) => e !== null);
    r3.length > 1 && (b2.value = r3);
  };
  let g2;
  return onMounted(() => {
    y2(), g2 = watch(() => h2.path, y2);
  }), onUnmounted(() => {
    g2();
  }), () => h$3("nav", { class: ["breadcrumb", { disable: !d2.value }] }, d2.value ? h$3("ol", { vocab: "https://schema.org/", typeof: "BreadcrumbList" }, b2.value.map((e, t2) => h$3("li", { class: { "is-active": b2.value.length - 1 === t2 }, property: "itemListElement", typeof: "ListItem" }, h$3(RouterLink, { to: e.path, property: "item", typeof: "WebPage" }, () => [r2.icon && e.icon ? h$3("i", { class: ["icon", `${r2.iconPrefix}${e.icon}`] }) : null, h$3("span", { property: "name" }, e.title || "Unknown"), h$3("meta", { property: "position", content: t2 + 1 })])))) : []);
} });
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
const isClient = typeof window !== "undefined";
const isString = (val) => typeof val === "string";
const noop = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    filter(() => fn.apply(this, args), { fn, thisArg: this, args });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive, pause, resume, eventFilter };
}
function tryOnBeforeMount(fn, sync = true) {
  if (getCurrentInstance())
    onBeforeMount(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$5.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter = bypassFilter
  } = _a2, watchOptions = __objRest$5(_a2, [
    "eventFilter"
  ]);
  return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value2) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __spreadValues$1 = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp$1.call(b2, prop))
      __defNormalProp$1(a2, prop, b2[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b2)) {
      if (__propIsEnum$1.call(b2, prop))
        __defNormalProp$1(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps$1 = (a2, b2) => __defProps$1(a2, __getOwnPropDescs$1(b2));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter: filter
  } = _a2, watchOptions = __objRest$1(_a2, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(source, cb, __spreadProps$1(__spreadValues$1({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive };
}
function unrefElement(elRef) {
  var _a2;
  const plain = unref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
const defaultDocument = isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore, capture = true } = options;
  if (!window2)
    return;
  const shouldListen = ref(true);
  const listener = (event) => {
    const el = unrefElement(target);
    const composedPath = event.composedPath();
    if (!el || el === event.target || composedPath.includes(el) || !shouldListen.value)
      return;
    if (ignore && ignore.length > 0) {
      if (ignore.some((target2) => {
        const el2 = unrefElement(target2);
        return el2 && (event.target === el2 || composedPath.includes(el2));
      }))
        return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen.value = !!el && !e.composedPath().includes(el);
    }, { passive: true })
  ];
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  let mediaQuery;
  const matches = ref(false);
  const update = () => {
    if (!window2)
      return;
    if (!mediaQuery)
      mediaQuery = window2.matchMedia(query);
    matches.value = mediaQuery.matches;
  };
  tryOnBeforeMount(() => {
    update();
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
    tryOnScopeDispose(() => {
      if ("removeEventListener" in mediaQuery)
        mediaQuery.removeEventListener("change", update);
      else
        mediaQuery.removeListener(update);
    });
  });
  return matches;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const handlers = _global[globalKey];
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : Array.isArray(rawInit) ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
  boolean: {
    read: (v2) => v2 === "true",
    write: (v2) => String(v2)
  },
  object: {
    read: (v2) => JSON.parse(v2),
    write: (v2) => JSON.stringify(v2)
  },
  number: {
    read: (v2) => Number.parseFloat(v2),
    write: (v2) => String(v2)
  },
  any: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  string: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  map: {
    read: (v2) => new Map(JSON.parse(v2)),
    write: (v2) => JSON.stringify(Array.from(v2.entries()))
  },
  set: {
    read: (v2) => new Set(JSON.parse(v2)),
    write: (v2) => JSON.stringify(Array.from(v2))
  },
  date: {
    read: (v2) => new Date(v2),
    write: (v2) => v2.toISOString()
  }
};
function useStorage(key, initialValue, storage, options = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const data = (shallow ? shallowRef : ref)(initialValue);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a22;
        return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = unref(initialValue);
  const type = guessSerializerType(rawInit);
  const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, () => write(data.value), { flush, deep, eventFilter });
  if (window2 && listenToStorageChanges)
    useEventListener(window2, "storage", update);
  update();
  return data;
  function write(v2) {
    try {
      if (v2 == null)
        storage.removeItem(key);
      else
        storage.setItem(key, serializer.write(v2));
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      const rawValue = event ? event.newValue : storage.getItem(key);
      if (rawValue == null) {
        if (writeDefaults && rawInit !== null)
          storage.setItem(key, serializer.write(rawInit));
        return rawInit;
      } else if (typeof rawValue !== "string") {
        return rawValue;
      } else {
        return serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    } finally {
      resumeWatch();
    }
  }
  function update(event) {
    if (event && event.key !== key)
      return;
    data.value = read(event);
  }
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
const functionsMap = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
];
function useFullscreen(target, options = {}) {
  const { document: document2 = defaultDocument, autoExit = false } = options;
  const targetRef = target || (document2 == null ? void 0 : document2.querySelector("html"));
  const isFullscreen = ref(false);
  let isSupported = false;
  let map = functionsMap[0];
  if (!document2) {
    isSupported = false;
  } else {
    for (const m2 of functionsMap) {
      if (m2[1] in document2) {
        map = m2;
        isSupported = true;
        break;
      }
    }
  }
  const [REQUEST, EXIT, ELEMENT, , EVENT] = map;
  async function exit() {
    if (!isSupported)
      return;
    if (document2 == null ? void 0 : document2[ELEMENT])
      await document2[EXIT]();
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported)
      return;
    await exit();
    const target2 = unrefElement(targetRef);
    if (target2) {
      await target2[REQUEST]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    if (isFullscreen.value)
      await exit();
    else
      await enter();
  }
  if (document2) {
    useEventListener(document2, EVENT, () => {
      isFullscreen.value = !!(document2 == null ? void 0 : document2[ELEMENT]);
    }, false);
  }
  if (autoExit)
    tryOnScopeDispose(exit);
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}
var _a, _b;
function preventDefault(rawEvent) {
  const e = rawEvent || window.event;
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
}
const isIOS = isClient && (window == null ? void 0 : window.navigator) && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.platform) && /iP(ad|hone|od)/.test((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.platform);
function useScrollLock(element, initialState = false) {
  const isLocked = ref(initialState);
  let touchMoveListener = null;
  let initialOverflow;
  watch(() => unref(element), (el) => {
    if (el) {
      const ele = el;
      initialOverflow = ele.style.overflow;
      if (isLocked.value)
        ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const ele = unref(element);
    if (!ele || isLocked.value)
      return;
    if (isIOS) {
      touchMoveListener = useEventListener(document, "touchmove", preventDefault, { passive: false });
    }
    ele.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const ele = unref(element);
    if (!ele || !isLocked.value)
      return;
    isIOS && (touchMoveListener == null ? void 0 : touchMoveListener());
    ele.style.overflow = initialOverflow;
    isLocked.value = false;
  };
  return computed({
    get() {
      return isLocked.value;
    },
    set(v2) {
      if (v2)
        lock();
      else
        unlock();
    }
  });
}
var fullScreen$1 = "";
const r$3 = () => h$3(x, { name: "enter-fullscreen" }, () => h$3("path", { d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z" }));
r$3.displayName = "EnterFullScreenIcon";
const n$4 = () => h$3(x, { name: "cancel-fullscreen" }, () => h$3("path", { d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z" }));
n$4.displayName = "CancelFullScreenIcon";
var a$5 = defineComponent({ name: "FullScreen", props: { enable: { type: Boolean, default: true } }, setup(l2) {
  const { isSupported: s2, isFullscreen: a2, toggle: t2 } = useFullscreen();
  return () => s2 && l2.enable ? h$3("button", { class: "full-screen", ariaPressed: a2.value, onClick: () => t2() }, a2.value ? h$3(n$4) : h$3(r$3)) : null;
} });
var pagination = "";
var u$4 = defineComponent({ name: "Pagination", props: { total: { type: Number, default: 10 }, perPage: { type: Number, default: 10 }, currentPage: { type: Number, default: 1 } }, emits: ["updateCurrentPage"], setup(a2, { emit: u2 }) {
  const r2 = z$1({ "/": { "prev": "\u4E0A\u4E00\u9875", "next": "\u4E0B\u4E00\u9875", "navigate": "\u8DF3\u8F6C\u5230", "button": "\u524D\u5F80", "errorText": "\u8BF7\u8F93\u5165 1 \u5230 $page \u4E4B\u524D\u7684\u9875\u7801\uFF01" } }), i2 = ref(""), v2 = computed(() => Math.ceil(a2.total / a2.perPage)), o2 = computed(() => Boolean(v2.value) && v2.value !== 1), s2 = computed(() => !(v2.value < 7) && a2.currentPage > 4), c2 = computed(() => !(v2.value < 7) && a2.currentPage < v2.value - 3), p2 = computed(() => {
    const { currentPage: e } = a2;
    let l2 = 1, t2 = v2.value;
    const n2 = [];
    v2.value >= 7 && (e <= 4 && e < v2.value - 3 ? (l2 = 1, t2 = 5) : e > 4 && e >= v2.value - 3 ? (t2 = v2.value, l2 = v2.value - 4) : v2.value > 7 && (l2 = e - 2, t2 = e + 2));
    for (let e2 = l2; e2 <= t2; e2++)
      n2.push(e2);
    return n2;
  }), g2 = (e) => u2("updateCurrentPage", e), d2 = (e) => {
    const a3 = parseInt(e);
    a3 <= v2.value && a3 > 0 ? g2(a3) : alert(r2.value.errorText.replace(/\$page/g, v2.value.toString()));
  };
  return () => h$3("div", { class: "pagination-wrapper" }, o2.value ? h$3("div", { class: "pagination-list" }, [h$3("div", { class: "page-number" }, [a2.currentPage > 1 ? h$3("div", { class: "prev", role: "navigation", unselectable: "on", onClick: () => g2(a2.currentPage - 1) }, r2.value.prev) : null, ...s2.value ? [h$3("div", { role: "navigation", onClick: () => g2(1) }, 1), h$3("div", { class: "ellipsis" }, "...")] : [], ...p2.value.map((e) => h$3("div", { key: e, class: { active: a2.currentPage === e }, role: "navigation", onClick: () => g2(e) }, e)), ...c2.value ? [h$3("div", { class: "ellipsis" }, "..."), h$3("div", { role: "navigation", onClick: () => g2(v2.value) }, v2.value)] : [], a2.currentPage < v2.value ? h$3("div", { class: "next", role: "navigation", unselectable: "on", onClick: () => g2(a2.currentPage + 1) }, r2.value.next) : null]), h$3("div", { class: "navigate-wrapper" }, [h$3("label", { for: "navigation-text" }, `${r2.value.navigate}: `), h$3("input", { id: "navigation-text", value: i2.value, onInput: ({ target: e }) => {
    i2.value = e.value;
  }, onKeydown: (e) => {
    e.key === "Enter" && (e.preventDefault(), d2(i2.value));
  } }), h$3("button", { class: "navigate", role: "navigation", title: r2.value.button, onClick: () => d2(i2.value) }, r2.value.button)])]) : []);
} });
var toc = "";
const c$5 = ({ title: e, level: t2, slug: s2 }) => h$3(RouterLink, { to: `#${s2}`, class: ["toc-link", { [`level${t2}`]: t2 }] }, () => e), i$5 = (e, s2) => {
  const r2 = useRoute();
  return e.length && s2 > 0 ? h$3("ul", { class: "toc-list" }, e.map((e2) => [h$3("li", { class: ["toc-item", { active: F(r2, `#${e2.slug}`) }] }, [c$5(e2)]), i$5(e2.children, s2 - 1)])) : null;
};
var p$6 = defineComponent({ name: "TOC", props: { items: { type: Array, default: () => [] }, headerDepth: { type: Number, default: 2 } }, setup(t2) {
  const r2 = usePageData(), a2 = z$1({ "/": { "header": "\u6B64\u9875\u5185\u5BB9" } });
  return () => {
    const e = t2.items.length ? i$5(t2.items, t2.headerDepth) : r2.value.headers ? i$5(r2.value.headers, t2.headerDepth) : null;
    return h$3("div", { class: "toc-place-holder" }, [h$3("aside", { id: "toc-list" }, e ? [h$3("div", { class: "toc-header" }, a2.value.header), h$3("div", { class: "toc-wrapper" }, [e])] : [])]);
  };
} });
var p$5 = defineClientAppEnhance(({ app: o2 }) => {
  N.name && o2.component("ArticleInfo", N), r$4.name && o2.component("Badge", r$4), f$1.name && o2.component("BreadCrumb", f$1), a$5.name && o2.component("FullScreen", a$5), p$6.name && o2.component("TOC", p$6), u$4.name && o2.component("Pagination", u$4);
});
var vars$1 = "";
var externalLinkIcon = "";
const svg = h$3("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  h$3("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h$3("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = computed(() => {
      var _a2;
      return (_a2 = props.locales[routeLocale.value]) !== null && _a2 !== void 0 ? _a2 : {
        openInNewWindow: "open in new window"
      };
    });
    return () => h$3("span", [
      svg,
      h$3("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = {};
var clientAppEnhance2 = defineClientAppEnhance(({ app }) => {
  app.component("ExternalLinkIcon", h$3(ExternalLinkIcon, { locales }));
});
const themeData$1 = {
  "blog": {
    "description": "\u4E00\u4E2A\u524D\u7AEF\u5F00\u53D1\u8005",
    "intro": "/intro.html",
    "medias": {
      "Baidu": "https://example.com",
      "Bitbucket": "https://example.com",
      "Dingding": "https://example.com",
      "Discord": "https://example.com",
      "Dribbble": "https://example.com",
      "Email": "https://example.com",
      "Evernote": "https://example.com",
      "Facebook": "https://example.com",
      "Flipboard": "https://example.com",
      "Gitee": "https://example.com",
      "GitHub": "https://example.com",
      "Gitlab": "https://example.com",
      "Gmail": "https://example.com",
      "Instagram": "https://example.com",
      "Lines": "https://example.com",
      "Linkedin": "https://example.com",
      "Pinterest": "https://example.com",
      "Pocket": "https://example.com",
      "QQ": "https://example.com",
      "Qzone": "https://example.com",
      "Reddit": "https://example.com",
      "Rss": "https://example.com",
      "Steam": "https://example.com",
      "Twitter": "https://example.com",
      "Wechat": "https://example.com",
      "Weibo": "https://example.com",
      "Whatsapp": "https://example.com",
      "Youtube": "https://example.com",
      "Zhihu": "https://example.com"
    }
  },
  "encrypt": {
    "global": false,
    "config": {
      "/guide/encrypt.html": [
        "$2a$10$XxOA2o0outILrLbVyQ6U2.a5mnllyc30s4YmH8acwWeHGzWSLS9vy"
      ]
    }
  },
  "pure": false,
  "iconPrefix": "iconfont icon-",
  "darkmode": "auto-switch",
  "themeColor": {
    "red": "#e74c3c",
    "blue": "#3498db",
    "green": "#3eaf7c",
    "orange": "#f39c12",
    "purple": "#8e44ad"
  },
  "fullscreen": true,
  "locales": {
    "/": {
      "blog": {},
      "repoDisplay": true,
      "navbarIcon": true,
      "navbarAutoHide": "mobile",
      "hideSiteNameonMobile": true,
      "sidebar": {
        "/foo/": "structure",
        "/bar/": "structure",
        "/": [
          "",
          "contact",
          "about"
        ]
      },
      "sidebarIcon": true,
      "headerDepth": 2,
      "author": {
        "name": "Mr.Hope",
        "url": "https://mrhope.site"
      },
      "logo": "/logo.svg",
      "repo": "https://github.com/vuepress-theme-hope/vuepress-theme-hope",
      "docsDir": "demo/src",
      "navbar": [
        {
          "text": "foo",
          "icon": "creative",
          "link": "/foo/"
        },
        {
          "text": "bar",
          "icon": "creative",
          "link": "/bar/"
        },
        {
          "text": "\u4E3B\u9898\u6587\u6863",
          "icon": "note",
          "link": "https://vuepress-theme-hope.github.io/v2/zh/"
        }
      ],
      "footer": "\u9ED8\u8BA4\u9875\u811A",
      "displayFooter": true,
      "pageInfo": [
        "Author",
        "Original",
        "Date",
        "Category",
        "Tag",
        "ReadingTime"
      ],
      "lang": "zh-CN",
      "navbarLocales": {
        "langName": "\u7B80\u4F53\u4E2D\u6587",
        "selectLangText": "\u9009\u62E9\u8BED\u8A00",
        "selectLangAriaLabel": "\u9009\u62E9\u8BED\u8A00"
      },
      "metaLocales": {
        "prev": "\u4E0A\u4E00\u9875",
        "next": "\u4E0B\u4E00\u9875",
        "lastUpdated": "\u4E0A\u6B21\u7F16\u8F91\u4E8E",
        "contributors": "\u8D21\u732E\u8005",
        "editLink": "\u7F16\u8F91\u6B64\u9875"
      },
      "blogLocales": {
        "article": "\u6587\u7AE0",
        "articleList": "\u6587\u7AE0\u5217\u8868",
        "category": "\u5206\u7C7B",
        "tag": "\u6807\u7B7E",
        "timeline": "\u65F6\u95F4\u8F74",
        "timelineTitle": "\u6628\u65E5\u4E0D\u5728",
        "all": "\u5168\u90E8",
        "intro": "\u4E2A\u4EBA\u4ECB\u7ECD",
        "star": "\u6536\u85CF",
        "slides": "\u5E7B\u706F\u7247",
        "encrypt": "\u52A0\u5BC6"
      },
      "outlookLocales": {
        "themeColor": "\u4E3B\u9898\u8272",
        "darkmode": "\u5916\u89C2",
        "fullscreen": "\u5168\u5C4F"
      },
      "encryptLocales": {
        "title": "\u8BF7\u8F93\u5165\u5BC6\u7801",
        "errorHint": "\u8BF7\u8F93\u5165\u6B63\u786E\u5BC6\u7801"
      },
      "routeLocales": {
        "404msg": [
          "\u8FD9\u91CC\u4EC0\u4E48\u4E5F\u6CA1\u6709",
          "\u6211\u4EEC\u662F\u600E\u4E48\u6765\u5230\u8FD9\u513F\u7684\uFF1F",
          "\u8FD9 \u662F \u56DB \u96F6 \u56DB !",
          "\u770B\u8D77\u6765\u4F60\u8BBF\u95EE\u4E86\u4E00\u4E2A\u5931\u6548\u7684\u94FE\u63A5"
        ],
        "back": "\u8FD4\u56DE\u4E0A\u4E00\u9875",
        "home": "\u5E26\u6211\u56DE\u5BB6"
      }
    }
  }
};
const themeData = ref(themeData$1);
const useThemeData$1 = () => themeData;
if (import_meta.webpackHot || false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data) => {
    themeData.value = data;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a2;
  return __spreadValues(__spreadValues({}, theme), (_a2 = theme.locales) === null || _a2 === void 0 ? void 0 : _a2[routeLocale]);
};
var clientAppEnhance3 = defineClientAppEnhance(({ app }) => {
  const themeData2 = useThemeData$1();
  const routeLocale = app._context.provides[routeLocaleSymbol];
  const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
  app.provide(themeLocaleDataSymbol, themeLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $theme: {
      get() {
        return themeData2.value;
      }
    },
    $themeLocale: {
      get() {
        return themeLocaleData.value;
      }
    }
  });
});
var giscus = "";
const a$4 = { "type": "giscus", "repo": "vuepress-theme-hope/giscus-discussions", "repoId": "R_kgDOG_Pt2A", "category": "Announcements", "categoryId": "DIC_kwDOG_Pt2M4COD69" }, i$4 = a$4, p$4 = Boolean(i$4 && i$4.type === "giscus" && i$4.repo && i$4.repoId && i$4.category && i$4.categoryId), c$4 = a$4;
Boolean(c$4 && c$4.type === "twikoo" && c$4.envId);
const u$3 = a$4;
Boolean(u$3 && u$3.type === "waline" && u$3.serverURL);
const l$3 = ["de", "gsw", "en", "es", "fr", "id", "it", "ja", "ko", "pl", "ro", "ru", "vi", "zh-CN", "zh-TW"];
var d$2 = defineComponent({ name: "GiscusComment", props: { darkmode: { type: Boolean, default: false } }, setup(t2) {
  const a2 = usePageFrontmatter(), c2 = computed(() => {
    const e = usePageLang().value;
    if (l$3.includes(e))
      return e;
    const t3 = e.split("-")[0];
    return l$3.includes(t3) ? t3 : "en";
  }), u2 = computed(() => {
    if (!p$4)
      return false;
    const e = i$4.comment !== false, o2 = a2.value.comment;
    return Boolean(o2) || e !== false && o2 !== false;
  }), d2 = computed(() => ({ repo: i$4.repo, repoId: i$4.repoId, category: i$4.category, categoryId: i$4.categoryId, lang: c2.value, theme: t2.darkmode ? "dark" : "light", mapping: i$4.mapping || "pathname", inputPosition: i$4.inputPosition || "top", reactionsEnabled: i$4.reactionsEnabled !== false ? "1" : "0", emitMetadata: "0" }));
  return onMounted(() => {
    import("./giscus.es.878ba8b7.js");
  }), () => h$3("div", { class: ["giscus-wrapper", { "input-top": i$4.inputPosition !== "bottom" }], style: { display: u2.value ? "block" : "none" } }, h$3("giscus-widget", d2.value));
} });
var r$2 = defineComponent({ setup: () => () => null });
const p$3 = { "type": "giscus", "repo": "vuepress-theme-hope/giscus-discussions", "repoId": "R_kgDOG_Pt2A", "category": "Announcements", "categoryId": "DIC_kwDOG_Pt2M4COD69" }, s$4 = p$3;
Boolean(s$4 && s$4.type === "giscus" && s$4.repo && s$4.repoId && s$4.category && s$4.categoryId);
const i$3 = p$3;
Boolean(i$3 && i$3.type === "twikoo" && i$3.envId);
const c$3 = p$3;
Boolean(c$3 && c$3.type === "waline" && c$3.serverURL);
var u$2 = defineComponent({ name: "CommentService", props: { darkmode: { type: Boolean, default: false } }, setup(o2) {
  const t2 = usePageFrontmatter(), s2 = computed(() => t2.value.comment || p$3.comment !== false && t2.value.comment !== false);
  return () => p$3.type === "waline" ? h$3(r$2, { style: { display: s2.value ? "block" : "none" } }) : p$3.type === "giscus" ? h$3(d$2, { darkmode: o2.darkmode, style: { display: s2.value ? "block" : "none" } }) : p$3.type === "twikoo" ? h$3(r$2, { style: { display: s2.value ? "block" : "none" } }) : null;
} }), y$1 = defineClientAppEnhance(({ app: e }) => {
  e.component("CommentService", u$2);
});
var codeGroup = "";
var t = defineComponent({ name: "CodeGroup", setup(e, { slots: t2 }) {
  const o2 = ref(-1), r2 = ref([]);
  const v2 = (e2, a2) => {
    e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), o2.value = a2) : e2.key === "ArrowRight" ? (e2.preventDefault(), ((e3 = o2.value) => {
      o2.value = e3 < r2.value.length - 1 ? e3 + 1 : 0, r2.value[o2.value].focus();
    })(a2)) : e2.key === "ArrowLeft" && (e2.preventDefault(), ((e3 = o2.value) => {
      o2.value = e3 > 0 ? e3 - 1 : r2.value.length - 1, r2.value[o2.value].focus();
    })(a2));
  };
  return () => {
    var e2;
    const a2 = (((e2 = t2.default) === null || e2 === void 0 ? void 0 : e2.call(t2)) || []).filter((e3) => e3.type.name === "CodeGroupItem").map((e3) => (e3.props === null && (e3.props = {}), e3));
    return a2.length === 0 ? null : (o2.value < 0 || o2.value > a2.length - 1 ? (o2.value = a2.findIndex((e3) => "active" in e3.props), o2.value === -1 && (o2.value = 0)) : a2.forEach((e3, a3) => {
      e3.props.active = a3 === o2.value;
    }), h$3("div", { class: "code-group" }, [h$3("div", { class: "code-group-nav" }, a2.map((e3, a3) => {
      const l2 = a3 === o2.value;
      return h$3("button", { ref: (e4) => {
        e4 && (r2.value[a3] = e4);
      }, class: ["code-group-nav-tab", { active: l2 }], ariaPressed: l2, ariaExpanded: l2, onClick: () => {
        o2.value = a3;
      }, onKeydown: (e4) => v2(e4, a3) }, e3.props.title);
    })), a2]));
  };
} });
var a$3 = defineComponent({ name: "CodeGroupItem", props: { title: { type: String, required: true }, active: { type: Boolean, default: false } }, setup: (e, { slots: a2 }) => () => {
  var r2;
  return h$3("div", { class: ["code-group-item", { active: e.active }], ariaSelected: e.active }, (r2 = a2.default) === null || r2 === void 0 ? void 0 : r2.call(a2));
} });
var codeDemo = "";
const n$3 = { "useBabel": false, "jsLib": [], "cssLib": [], "codepenLayout": "left", "codepenEditors": "101", "babel": "https://unpkg.com/@babel/standalone/babel.min.js", "vue": "https://unpkg.com/vue/dist/vue.global.prod.js", "react": "https://unpkg.com/react/umd/react.production.min.js", "reactDOM": "https://unpkg.com/react-dom/umd/react-dom.production.min.js" }, i$2 = { html: { types: ["html", "slim", "haml", "md", "markdown", "vue"], map: { html: "none", vue: "none", md: "markdown" } }, js: { types: ["js", "javascript", "coffee", "coffeescript", "ts", "typescript", "ls", "livescript"], map: { js: "none", javascript: "none", coffee: "coffeescript", ls: "livescript", ts: "typescript" } }, css: { types: ["css", "less", "sass", "scss", "stylus", "styl"], map: { css: "none", styl: "stylus" } } }, r$1 = (e) => __spreadProps(__spreadValues(__spreadValues({}, n$3), e), { jsLib: Array.from(/* @__PURE__ */ new Set([...n$3.jsLib || [], ...e.jsLib || []])), cssLib: Array.from(/* @__PURE__ */ new Set([...n$3.cssLib || [], ...e.cssLib || []])) }), o$1 = (e, t2) => {
  if (e[t2] !== void 0)
    return e[t2];
  const s2 = new Promise((e2) => {
    var s3;
    const a2 = document.createElement("script");
    a2.src = t2, (s3 = document.querySelector("body")) === null || s3 === void 0 || s3.appendChild(a2), a2.onload = () => {
      e2();
    };
  });
  return e[t2] = s2, s2;
}, c$2 = (e, t2) => {
  if (t2.css && Array.from(e.childNodes).every((e2) => e2.nodeName !== "STYLE")) {
    const s2 = ((e2, t3, s3) => {
      const a2 = document.createElement(e2);
      return t3 && Object.keys(t3).forEach((e3) => {
        if (e3.indexOf("data"))
          a2[e3] = t3[e3];
        else {
          const s4 = e3.replace("data", "");
          a2.dataset[s4] = t3[e3];
        }
      }), s3 && s3.forEach((e3) => {
        a2.appendChild(e3);
      }), a2;
    })("style", { innerHTML: t2.css });
    e.appendChild(s2);
  }
}, p$2 = (e) => e.replace(/<br \/>/g, "<br>").replace(/<((\S+)[^<]*?)\s+\/>/g, "<$1></$2>"), d$1 = (e) => `<div id="app">
${p$2(e)}
</div>`, u$1 = (e) => `${e.replace("export default ", "const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, "")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`, m$1 = (e) => e.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u, "Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u, "Vue.createApp({$1}).mount('#app')").trim(), v = (e) => `(function(exports){var module={};module.exports=exports;${e};return module.exports.__esModule?module.exports.default:module.exports;})({})`, h$1 = {};
var y = defineComponent({ name: "CodeDemo", props: { id: { type: String, required: true }, type: { type: String, default: "normal" }, title: { type: String, default: "" }, config: { type: String, default: "" }, code: { type: String, required: true } }, setup(e, { slots: n2 }) {
  const y2 = ref(false), f2 = ref(null), g2 = ref(null), b2 = ref("0px"), w2 = ref(false), L2 = computed(() => JSON.parse(decodeURIComponent(e.config || "{}"))), j2 = computed(() => ((e2) => {
    const t2 = Object.keys(e2), s2 = { html: [], js: [], css: [], isLegal: false };
    return ["html", "js", "css"].forEach((a2) => {
      const l2 = t2.filter((e3) => i$2[a2].types.includes(e3));
      if (l2.length) {
        const t3 = l2[0];
        s2[a2] = [e2[t3].replace(/^\n|\n$/g, ""), i$2[a2].map[t3] || t3];
      }
    }), s2.isLegal = !(s2.html.length && s2.html[1] !== "none" || s2.js.length && s2.js[1] !== "none" || s2.css.length && s2.css[1] !== "none"), s2;
  })(JSON.parse(decodeURIComponent(e.code || "{}")))), S = computed(() => e.type === "react" ? ((e2, t2) => {
    const s2 = r$1(t2);
    return __spreadProps(__spreadValues({}, s2), { html: d$1(""), js: u$1(e2.js[0] || ""), css: e2.css[0] || (e2.js[0] ? e2.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/, "$1").trim() : ""), isLegal: e2.isLegal, jsLib: [s2.react, s2.reactDOM, ...s2.jsLib], jsx: true, getScript: () => {
      var t3, s3;
      const a2 = ((s3 = (t3 = window.Babel) === null || t3 === void 0 ? void 0 : t3.transform(e2.js[0] || "", { presets: ["es2015", "react"] })) === null || s3 === void 0 ? void 0 : s3.code) || "";
      return `window.ReactDOM.render(window.React.createElement(${v(a2)}), document.firstElementChild)`;
    } });
  })(j2.value, L2.value) : e.type === "vue" ? ((e2, t2) => {
    const s2 = r$1(t2), a2 = e2.html[0] || "", l2 = /<template>([\s\S]+)<\/template>/u.exec(a2), n3 = /<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u.exec(a2), i2 = /<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u.exec(a2), o2 = l2 ? l2[1].replace(/^\n|\n$/g, "") : "", [c2 = "", p2 = ""] = n3 ? [n3[4].replace(/^\n|\n$/g, ""), n3[3]] : [], [u2 = "", h2 = ""] = i2 ? [i2[4].replace(/^\n|\n$/g, ""), i2[3]] : [], y3 = p2 === "" && (h2 === "" || h2 === "css");
    return __spreadProps(__spreadValues({}, s2), { html: d$1(o2), js: m$1(c2), css: u2, isLegal: y3, jsLib: [s2.vue, ...s2.jsLib], getScript: () => {
      var e3, s3;
      const a3 = t2.useBabel ? ((s3 = (e3 = window.Babel) === null || e3 === void 0 ? void 0 : e3.transform(c2, { presets: ["es2015"] })) === null || s3 === void 0 ? void 0 : s3.code) || "" : c2.replace(/export\s+default/u, "return");
      return `const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${v(a3)};appOptions.template=\`${o2.replace("`", '\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`;
    } });
  })(j2.value, L2.value) : ((e2, t2) => {
    const s2 = r$1(t2), a2 = e2.js[0] || "";
    return __spreadProps(__spreadValues({}, s2), { html: p$2(e2.html[0] || ""), js: a2, css: e2.css[0] || "", isLegal: e2.isLegal, getScript: () => {
      var e3;
      return s2.useBabel ? ((e3 = window.Babel.transform(a2, { presets: ["es2015"] })) === null || e3 === void 0 ? void 0 : e3.code) || "" : a2;
    } });
  })(j2.value, L2.value)), x2 = computed(() => S.value.isLegal), C2 = (t2 = false) => {
    const s2 = f2.value.attachShadow({ mode: "open" }), a2 = document.createElement("div");
    a2.classList.add("code-demo-app"), s2.appendChild(a2), x2.value ? (t2 && (a2.innerHTML = S.value.html), c$2(s2, S.value), ((e2, t3, s3) => {
      const a3 = s3.getScript();
      if (a3 && Array.from(t3.childNodes).every((e3) => e3.nodeName !== "SCRIPT")) {
        const s4 = document.createElement("script");
        s4.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e2} .demo-wrapper').shadowRoot;
${a3}}`)), t3.appendChild(s4);
      }
    })(e.id, s2, S.value), b2.value = "0") : b2.value = "auto", w2.value = true;
  }, M2 = () => {
    switch (e.type) {
      case "react":
        return ((e2) => Promise.all([o$1(h$1, e2.babel), o$1(h$1, e2.react), o$1(h$1, e2.reactDOM)]))(S.value).then(() => C2());
      case "vue":
        return ((e2) => {
          const t2 = [o$1(h$1, e2.vue)];
          return e2.useBabel && t2.push(o$1(h$1, e2.babel)), Promise.all(t2);
        })(S.value).then(() => C2());
      default:
        return ((e2) => e2.useBabel ? o$1(h$1, e2.babel) : Promise.resolve())(S.value).then(() => C2(true));
    }
  };
  return onMounted(() => {
    setTimeout(() => {
      M2();
    }, 500);
  }), () => {
    var t2;
    return h$3("div", { class: "code-demo-wrapper", id: e.id }, [w2.value ? null : h$3("div", { class: ["loading"], innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" class="loading-icon" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/></circle></svg>' }), h$3("div", { ref: f2, class: "demo-wrapper", style: { display: x2.value && w2.value ? "block" : "none" } }), h$3("div", { class: "code-wrapper", style: { height: b2.value } }, h$3("div", { ref: g2, class: "code-container" }, (t2 = n2.default) === null || t2 === void 0 ? void 0 : t2.call(n2))), h$3("div", { class: "code-demo-footer" }, [S.value.isLegal ? h$3("button", { class: ["toggle-button", { down: !y2.value }], onClick: () => {
      b2.value = y2.value ? "0" : `${g2.value.clientHeight + 13.8}px`, y2.value = !y2.value;
    } }) : null, e.title ? h$3("span", { class: "title" }, decodeURIComponent(e.title)) : null, S.value.isLegal && L2.value.jsfiddle !== false ? h$3("form", { className: "code-demo-jsfiddle", target: "_blank", action: "https://jsfiddle.net/api/post/library/pure/", method: "post" }, [h$3("input", { type: "hidden", name: "html", value: S.value.html }), h$3("input", { type: "hidden", name: "js", value: S.value.js }), h$3("input", { type: "hidden", name: "css", value: S.value.css }), h$3("input", { type: "hidden", name: "wrap", value: "1" }), h$3("input", { type: "hidden", name: "panel_js", value: "3" }), h$3("input", { type: "hidden", name: "resources", value: [...S.value.cssLib, ...S.value.jsLib].join(",") }), h$3("button", { type: "submit", className: "button", innerHTML: '<svg class="icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg" width="228.516" height="200"><defs><style/></defs><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>', ariaLabel: "JSFiddle", "data-tip": "JSFiddle" })]) : null, S.value.isLegal && L2.value.codepen === false ? null : h$3("form", { className: "code-demo-codepen", target: "_blank", action: "https://codepen.io/pen/define", method: "post" }, [h$3("input", { type: "hidden", name: "data", value: JSON.stringify({ html: S.value.html, js: S.value.js, css: S.value.css, js_external: S.value.jsLib.join(";"), css_external: S.value.cssLib.join(";"), layout: S.value.codepenLayout, html_pre_processor: j2.value ? j2.value.html[1] : "none", js_pre_processor: j2.value ? j2.value.js[1] : S.value.jsx ? "babel" : "none", css_pre_processor: j2.value ? j2.value.css[1] : "none", editors: S.value.codepenEditors }) }), h$3("button", { type: "submit", innerHTML: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><defs><style/></defs><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>', className: "button", ariaLabel: "Codepen", "data-tip": "Codepen" })])])]);
  };
} });
var chart = "";
const loadingSvgString = '<svg xmlns="http://www.w3.org/2000/svg" class="loading-icon" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/></circle></svg>', parseChartConfig = (str) => JSON.parse(str, (_key, value) => {
  if (typeof value != "string" || value.length < 8)
    return value;
  const prefix = value.substring(0, 8);
  return prefix === "function" ? eval(`(${value})`) : prefix === "_PxEgEr_" || prefix === "_NuFrRa_" ? eval(value.slice(8)) : value;
});
var ChartJS = defineComponent({ name: "ChartJS", props: { title: { type: String, default: "" }, config: { type: String, required: true }, id: { type: String, required: true } }, setup(e) {
  const t2 = ref(null), i2 = ref(null), r2 = ref(true);
  return onMounted(() => {
    Promise.all([import("./auto.esm.15d52109.js"), new Promise((e2) => setTimeout(e2, 500))]).then(([{ default: t3 }]) => {
      var n2;
      t3.defaults.maintainAspectRatio = false;
      const a2 = parseChartConfig(decodeURIComponent(e.config));
      new t3((n2 = i2.value) === null || n2 === void 0 ? void 0 : n2.getContext("2d"), a2), r2.value = false;
    });
  }), () => [e.title ? h$3("div", { class: "chart-title" }, e.title) : null, r2.value ? h$3("div", { class: ["chart-loading-wrapper"], innerHTML: loadingSvgString }) : null, h$3("div", { ref: t2, class: "chart-wrapper", id: e.id, style: { display: r2.value ? "none" : "block" } }, h$3("canvas", { ref: i2, height: 400 }))];
} });
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var FUNC_ERROR_TEXT$1 = "Expected a function";
var NAN$1 = 0 / 0;
var symbolTag$1 = "[object Symbol]";
var reTrim$1 = /^\s+|\s+$/g;
var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary$1 = /^0b[01]+$/i;
var reIsOctal$1 = /^0o[0-7]+$/i;
var freeParseInt$1 = parseInt;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf$1 = typeof self == "object" && self && self.Object === Object && self;
var root$1 = freeGlobal$1 || freeSelf$1 || Function("return this")();
var objectProto$1 = Object.prototype;
var objectToString$1 = objectProto$1.toString;
var nativeMax$1 = Math.max, nativeMin$1 = Math.min;
var now$1 = function() {
  return root$1.Date.now();
};
function debounce$1(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber$1(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax$1(toNumber$1(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
    return maxing ? nativeMin$1(result2, maxWait - timeSinceLastInvoke) : result2;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function isObject$1(value2) {
  var type = typeof value2;
  return !!value2 && (type == "object" || type == "function");
}
function isObjectLike$1(value2) {
  return !!value2 && typeof value2 == "object";
}
function isSymbol$1(value2) {
  return typeof value2 == "symbol" || isObjectLike$1(value2) && objectToString$1.call(value2) == symbolTag$1;
}
function toNumber$1(value2) {
  if (typeof value2 == "number") {
    return value2;
  }
  if (isSymbol$1(value2)) {
    return NAN$1;
  }
  if (isObject$1(value2)) {
    var other = typeof value2.valueOf == "function" ? value2.valueOf() : value2;
    value2 = isObject$1(other) ? other + "" : other;
  }
  if (typeof value2 != "string") {
    return value2 === 0 ? value2 : +value2;
  }
  value2 = value2.replace(reTrim$1, "");
  var isBinary = reIsBinary$1.test(value2);
  return isBinary || reIsOctal$1.test(value2) ? freeParseInt$1(value2.slice(2), isBinary ? 2 : 8) : reIsBadHex$1.test(value2) ? NAN$1 : +value2;
}
var lodash_debounce = debounce$1;
var flowchart = "";
var s$3 = { x: 0, y: 0, "line-width": 2, "line-length": 40, "text-margin": 8, "font-size": 14, "font-color": "#8DA1AC", "line-color": "#8DA1AC", "element-color": "black", fill: "white", "yes-text": "Yes", "no-text": "No", "arrow-end": "block", scale: 1 }, c$1 = __spreadProps(__spreadValues({}, s$3), { symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#FF485E", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FF485E", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" } } }), a$2 = __spreadProps(__spreadValues({}, s$3), { "line-width": 1, symbols: { start: { class: "start-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, end: { class: "end-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, operation: { class: "operation-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, inputoutput: { class: "inputoutput-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, subroutine: { class: "subroutine-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, condition: { class: "condition-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, parallel: { class: "parallel-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" } } }), f = { ant: c$1, vue: __spreadProps(__spreadValues({}, s$3), { symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#00BC7D", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#EB4D5D", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#937AC4", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FFB500", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" } } }), pie: a$2 }, p$1 = defineComponent({ name: "FlowChart", props: { code: { type: String, required: true }, id: { type: String, required: true }, preset: { type: String, default: "vue" } }, setup(e) {
  let s2, c2;
  const a2 = ref(), p2 = ref(true), d2 = ref(1), u2 = computed(() => {
    const l2 = f[e.preset];
    return l2 || (console.warn(`[md-enhance:flowchart] Unknown preset: ${e.preset}`), f.vue);
  }), m2 = (e2) => e2 < 419 ? 0.8 : e2 > 1280 ? 1 : 0.9;
  return onMounted(() => {
    Promise.all([import("./index.1842ee54.js").then(function(n2) {
      return n2.i;
    }), new Promise((e2) => setTimeout(e2, 500))]).then(([l2]) => {
      const { parse: t2 } = l2;
      s2 = t2(decodeURIComponent(e.code)), d2.value = m2(window.innerWidth), p2.value = false, s2.drawSVG(e.id, __spreadProps(__spreadValues({}, u2.value), { scale: d2.value })), c2 = lodash_debounce(() => {
        const l3 = m2(window.innerWidth);
        d2.value !== l3 && (d2.value = l3, s2.drawSVG(e.id, __spreadProps(__spreadValues({}, u2.value), { scale: l3 })));
      }, 100), window.addEventListener("resize", c2);
    });
  }), onBeforeUnmount(() => {
    window.removeEventListener("resize", c2);
  }), () => [p2.value ? h$3("div", { class: ["flowchart-loading-wrapper"], innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" class="loading-icon" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/></circle></svg>' }) : null, h$3("div", { ref: a2, class: ["flowchart-wrapper", e.preset], id: e.id, style: { display: p2.value ? "none" : "block" } })];
} });
var mermaid = "";
const n$2 = () => h$3(x, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((r2) => h$3("circle", { cx: 50, cy: 50, r: 0, fill: "none", stroke: "currentColor", strokeWidth: "2" }, [h$3("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;40", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: r2 }), h$3("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: r2 })])));
var s$2 = defineComponent({ name: "MermaidChart", props: { id: { type: String, required: true } }, setup(r2) {
  const d2 = ref(""), s2 = ref(), f2 = ref(false);
  let c2;
  return onMounted(() => {
    var e;
    const t2 = document.querySelector("html"), o2 = decodeURIComponent(((e = s2.value) === null || e === void 0 ? void 0 : e.dataset.code) || ""), l2 = () => t2.classList.contains("dark") || t2.getAttribute("data-theme") === "dark";
    f2.value = l2(), Promise.all([import("./mermaid.esm.min.0306b61d.js"), new Promise((e2) => setTimeout(e2, 500))]).then(([e2]) => {
      const { initialize: n2, render: s3 } = e2.default, u2 = () => {
        const e3 = document.createElement("div");
        e3.style.position = "relative", e3.style.top = "-9999px";
        const t3 = (r3) => {
          d2.value = r3, document.body.removeChild(e3);
        };
        var a2;
        n2(__spreadProps(__spreadValues({ theme: "base", themeVariables: (a2 = f2.value, { dark: a2, background: a2 ? "#1e1e1e" : "#fff", primaryColor: a2 ? "#389d70" : "#4abf8a", primaryBorderColor: a2 ? "#389d70" : "#4abf8a", primaryTextColor: "#fff", secondaryColor: "#f39c12", secondaryBorderColor: a2 ? "#fff" : "#000", secondaryTextColor: a2 ? "#ddd" : "#333", tertiaryColor: a2 ? "#22182d" : "#eeeaf3", tertiaryBorderColor: a2 ? "#fff" : "#000", tertiaryTextColor: a2 ? "#ddd" : "#333", noteBkgColor: a2 ? "#f6d365" : "#fff5ad", noteTextColor: "#242424", noteBorderColor: a2 ? "#f6d365" : "#333", lineColor: a2 ? "#d3d3d3" : "#333", textColor: a2 ? "#fff" : "#242424", mainBkg: a2 ? "#389d70" : "#4abf8a", errorBkgColor: "#eb4d5d", errorTextColor: "#fff", nodeBorder: a2 ? "#389d70" : "#4abf8a", nodeTextColor: a2 ? "#fff" : "#242424", signalTextColor: a2 ? "#9e9e9e" : "#242424", classText: "#fff", labelColor: "#fff", fillType0: a2 ? "#cf1322" : "#f1636e", fillType1: "#f39c12", fillType2: "#2ecc71", fillType3: "#fa541c", fillType4: "#25a55b", fillType5: "#13c2c2", fillType6: "#096dd9", fillType7: "#aa6fe9" }), flowchart: { useMaxWidth: false }, sequence: { useMaxWidth: false }, journey: { useMaxWidth: false }, gantt: { useMaxWidth: false }, er: { useMaxWidth: false }, pie: { useMaxWidth: false } }, {}), { startOnLoad: false })), d2.value = "", document.body.appendChild(e3), nextTick(() => {
          s3(r2.id, o2, t3, e3);
        });
      };
      u2(), c2 = new MutationObserver(() => {
        console.log("update"), f2.value = l2();
      }), c2.observe(t2, { attributeFilter: ["class", "data-theme"], attributes: true }), watch(f2, u2);
    });
  }), onBeforeUnmount(() => {
    c2.disconnect();
  }), () => h$3("div", { ref: s2, class: ["md-enhance-mermaid", { loading: !d2.value }] }, d2.value ? h$3("div", { class: "content", innerHTML: d2.value }) : h$3(n$2));
} });
var index$1 = "";
var leagueGothic = "";
var sourceSansPro = "";
const n$1 = () => h$3(x, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((s2) => h$3("circle", { cx: 50, cy: 50, r: 0, fill: "none", stroke: "currentColor", strokeWidth: "2" }, [h$3("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;40", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: s2 }), h$3("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: s2 })])));
var o = defineComponent({ name: "PresentationViewer", props: { id: { type: String, required: true }, theme: { type: String, default: "auto" } }, setup(s2) {
  const r2 = usePageFrontmatter(), o2 = ref(""), u2 = ref(false), p2 = ref(), d2 = ref();
  let m2;
  return onMounted(() => {
    var e;
    if (d2.value) {
      o2.value = decodeURIComponent(((e = p2.value) === null || e === void 0 ? void 0 : e.dataset.code) || ""), d2.value.setAttribute("id", s2.id), d2.value.setAttribute("data-theme", s2.theme);
      const t2 = [new Promise((e2) => setTimeout(e2, 500)), import("./reveal.esm.b96f05d8.js")];
      t2.push(import("./markdown.esm.832a189d.js")), t2.push(import("./highlight.esm.d982e650.js")), t2.push(import("./math.esm.a3f84b6f.js")), t2.push(import("./search.esm.80da4a02.js")), t2.push(import("./notes.esm.3c361cb7.js")), t2.push(import("./zoom.esm.8514a202.js")), Promise.all(t2).then(([, e2, ...s3]) => {
        m2 = new e2.default(d2.value, { plugins: s3.map((e3) => e3.default) }), m2.initialize(__spreadProps(__spreadValues(__spreadValues({ backgroundTransition: "slide", hash: r2.value.layout === "Slide", mouseWheel: r2.value.layout === "Slide", transition: "slide", slideNumber: true }, {}), r2.value.reveal || {}), { embedded: r2.value.layout !== "Slide" })).then(() => {
          u2.value = false, m2.configure({ backgroundTransition: "slide" });
        });
      });
    }
  }), onBeforeUnmount(() => {
    m2 == null || m2.destroy();
  }), () => h$3("div", { ref: p2, class: { "md-enhance-presentation": true, loading: u2.value } }, [u2.value ? h$3(n$1) : null, h$3("div", { ref: d2, class: ["reveal", "reveal-viewport"] }, h$3("div", { class: "slides", style: { display: u2.value ? "none" : "block" }, innerHTML: `<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${o2.value}<\/script></section>` }))]);
} });
var i$1 = defineClientAppEnhance(({ app: o$12 }) => {
  import("./align.b9425857.js"), import("./index.c7681852.js"), import("./footnote.3dff8346.js"), import("./image.99d6368a.js"), ChartJS.name && o$12.component("ChartJS", ChartJS), y.name && o$12.component("CodeDemo", y), t.name && (o$12.component("CodeGroup", t), o$12.component("CodeGroupItem", a$3)), p$1.name && o$12.component("FlowChart", p$1), s$2.name && o$12.component("MermaidChart", s$2), o.name && o$12.component("PresentationViewer", o), import("./tasklist.3db80391.js"), import("./tex.f70ce2ee.js");
});
var FUNC_ERROR_TEXT = "Expected a function";
var NAN = 0 / 0;
var symbolTag = "[object Symbol]";
var reTrim = /^\s+|\s+$/g;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
var nativeMax = Math.max, nativeMin = Math.min;
var now = function() {
  return root.Date.now();
};
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
    return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
function isObject(value2) {
  var type = typeof value2;
  return !!value2 && (type == "object" || type == "function");
}
function isObjectLike(value2) {
  return !!value2 && typeof value2 == "object";
}
function isSymbol(value2) {
  return typeof value2 == "symbol" || isObjectLike(value2) && objectToString.call(value2) == symbolTag;
}
function toNumber(value2) {
  if (typeof value2 == "number") {
    return value2;
  }
  if (isSymbol(value2)) {
    return NAN;
  }
  if (isObject(value2)) {
    var other = typeof value2.valueOf == "function" ? value2.valueOf() : value2;
    value2 = isObject(other) ? other + "" : other;
  }
  if (typeof value2 != "string") {
    return value2 === 0 ? value2 : +value2;
  }
  value2 = value2.replace(reTrim, "");
  var isBinary = reIsBinary.test(value2);
  return isBinary || reIsOctal.test(value2) ? freeParseInt(value2.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value2) ? NAN : +value2;
}
var lodash_throttle = throttle;
const useThemeData = () => useThemeData$1();
const useThemeLocaleData = () => useThemeLocaleData$1();
const useIconPrefix = () => computed(() => useThemeData().value.iconPrefix);
const usePure = () => computed(() => Boolean(useThemeData().value.pure));
const useMobile = () => {
  const themeData2 = useThemeData();
  const isMobile = ref(false);
  const mobileHandler = () => {
    isMobile.value = window.innerWidth <= (themeData2.value.mobileBreakPoint || 719);
  };
  onMounted(() => {
    mobileHandler();
    window.addEventListener("orientationchange", mobileHandler, false);
    window.addEventListener("resize", mobileHandler, false);
  });
  onUnmounted(() => {
    window.removeEventListener("orientationchange", mobileHandler, false);
    window.removeEventListener("resize", mobileHandler, false);
  });
  return isMobile;
};
const useNavigate = () => {
  const router = useRouter();
  const route = useRoute();
  return (url) => {
    if (url) {
      if (url.startsWith("/")) {
        if (route.path !== url)
          void router.push(url);
      } else if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("mailto:")) {
        if (window)
          window.open(url);
      } else {
        const base2 = route.path.slice(0, route.path.lastIndexOf("/"));
        void router.push(`${base2}/${encodeURI(url)}`);
      }
    }
  };
};
const useAutoLink = (item) => {
  const router = useRouter();
  const resolved = J(router, item);
  return {
    icon: resolved.meta.icon,
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
const resolveRepoType = (repo) => !isLinkHttp(repo) || /github\.com/.test(repo) ? "GitHub" : /bitbucket\.org/.test(repo) ? "Bitbucket" : /gitlab\.com/.test(repo) ? "GitLab" : /gitee\.com/.test(repo) ? "Gitee" : null;
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const repoType = resolveRepoType(docsRepo);
  let pattern;
  if (editLinkPattern)
    pattern = editLinkPattern;
  else if (repoType !== null)
    pattern = editLinkPatterns[repoType];
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const useEditLink = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2, _b2;
    const { repo, docsRepo = repo, docsBranch = "main", docsDir = "", editLink, editLinkPattern } = themeLocale.value;
    const showEditLink = (_b2 = (_a2 = frontmatter.value.editLink) !== null && _a2 !== void 0 ? _a2 : editLink) !== null && _b2 !== void 0 ? _b2 : true;
    if (!showEditLink)
      return null;
    if (!docsRepo)
      return null;
    const link = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      editLinkPattern,
      filePathRelative: page2.value.filePathRelative
    });
    if (!link)
      return null;
    return {
      text: themeLocale.value.metaLocales.editLink,
      link
    };
  });
};
const useUpdateTime = () => {
  const siteLocale = useSiteLocaleData();
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2, _b2, _c, _d;
    const showLastUpdated = (_b2 = (_a2 = frontmatter.value.lastUpdated) !== null && _a2 !== void 0 ? _a2 : themeLocale.value.lastUpdated) !== null && _b2 !== void 0 ? _b2 : true;
    if (!showLastUpdated)
      return null;
    if (!((_c = page2.value.git) === null || _c === void 0 ? void 0 : _c.updatedTime))
      return null;
    const updatedDate = new Date((_d = page2.value.git) === null || _d === void 0 ? void 0 : _d.updatedTime);
    return updatedDate.toLocaleString(siteLocale.value.lang);
  });
};
const useContributors = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2, _b2, _c, _d;
    const showContributors = (_b2 = (_a2 = frontmatter.value.contributors) !== null && _a2 !== void 0 ? _a2 : themeLocale.value.contributors) !== null && _b2 !== void 0 ? _b2 : true;
    if (!showContributors)
      return null;
    return (_d = (_c = page2.value.git) === null || _c === void 0 ? void 0 : _c.contributors) !== null && _d !== void 0 ? _d : null;
  });
};
const usePageAuthor = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const { author } = frontmatter.value;
    if (author)
      return w$1(author);
    if (author === false)
      return [];
    return w$1(themeLocale.value.author, false);
  });
};
const usePageCategory = () => {
  const frontmatter = usePageFrontmatter();
  return computed(() => b$1(frontmatter.value.category).map((name) => {
    var _a2, _b2;
    return {
      name,
      path: ((_b2 = (_a2 = inject(Symbol.for("categoryMap"))) === null || _a2 === void 0 ? void 0 : _a2.value.map[name]) === null || _b2 === void 0 ? void 0 : _b2.path) || ""
    };
  }));
};
const usePageTag = () => {
  const frontmatter = usePageFrontmatter();
  return computed(() => O$1(frontmatter.value.tag).map((name) => {
    var _a2, _b2;
    return {
      name,
      path: ((_b2 = (_a2 = inject(Symbol.for("tagMap"))) === null || _a2 === void 0 ? void 0 : _a2.value.map[name]) === null || _b2 === void 0 ? void 0 : _b2.path) || ""
    };
  }));
};
const usePageDate = () => {
  const frontmatter = usePageFrontmatter();
  const page2 = usePageData();
  const pageLang = usePageLang();
  return computed(() => {
    const { date } = frontmatter.value;
    const options = { lang: pageLang.value, type: "date" };
    if (date)
      return Y(date, options);
    const { createdTime } = page2.value.git || {};
    if (createdTime)
      return Y(new Date(createdTime), options);
    return null;
  });
};
const usePageInfo = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  const author = usePageAuthor();
  const category2 = usePageCategory();
  const tag2 = usePageTag();
  const date = usePageDate();
  const pure = usePure();
  return reactive({
    config: frontmatter.value.pageInfo === false ? false : frontmatter.value.pageInfo || themeLocale.value.pageInfo,
    author: author.value,
    category: category2.value,
    date: date.value,
    tag: tag2.value,
    isOriginal: frontmatter.value.isOriginal,
    readingTime: page2.value.readingTime,
    pageview: "pageview" in frontmatter.value ? frontmatter.value.pageview : false,
    color: !pure.value,
    hint: !pure.value
  });
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve2) => promiseResolve = resolve2);
  },
  resolve: () => {
    promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
var footer = "";
var PageFooter = defineComponent({
  name: "PageFooter",
  setup() {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const author = usePageAuthor();
    const enable = computed(() => {
      const { copyright: copyright2, footer: footer2 } = frontmatter.value;
      return footer2 !== false && Boolean(copyright2 || footer2 || themeLocale.value.displayFooter);
    });
    const content = computed(() => {
      const { footer: footer2 } = frontmatter.value;
      return footer2 === false ? false : typeof footer2 === "string" ? footer2 : themeLocale.value.footer || "";
    });
    const copyright = computed(() => frontmatter.value.copyright === false ? false : frontmatter.value.copyright || (themeLocale.value.copyright === false ? false : themeLocale.value.copyright || (author.value.length ? `Copyright \xA9 ${new Date().getFullYear()} ${author.value[0].name}` : "")));
    return () => enable.value ? h$3("footer", { class: "footer-wrapper" }, [
      h$3("div", { class: "footer", innerHTML: content.value }),
      copyright.value ? h$3("div", {
        class: "copyright",
        innerHTML: copyright.value
      }) : null
    ]) : null;
  }
});
var passwordModal = "";
var PasswordModal = defineComponent({
  name: "PasswordModal",
  props: {
    full: { type: Boolean, default: false }
  },
  emits: ["verify"],
  setup(props, { emit }) {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const password = ref("");
    const hasTried = ref(false);
    const locale = computed(() => themeLocale.value.encryptLocales);
    let hintHandler = null;
    const verify = () => {
      if (hintHandler)
        clearTimeout(hintHandler);
      hasTried.value = false;
      emit("verify", password.value);
      void nextTick().then(() => {
        hasTried.value = true;
        hintHandler = setTimeout(() => {
          hasTried.value = false;
        }, 1e3);
      });
    };
    return () => h$3("div", {
      class: [
        "password-modal",
        { expand: props.full || frontmatter.value.home }
      ]
    }, [
      h$3("div", { class: ["hint", { tried: hasTried.value }] }, hasTried.value ? locale.value.errorHint : locale.value.title),
      h$3("div", { class: "input" }, [
        h$3("input", {
          type: "password",
          value: password.value,
          onInput: ({ target }) => {
            password.value = target.value;
          },
          onKeydown: ({ key }) => {
            if (key === "Enter")
              verify();
          }
        }),
        h$3("button", { onClick: () => verify() }, "OK")
      ])
    ]);
  }
});
var bcrypt = { exports: {} };
(function(module) {
  /**
   * @license bcrypt.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
   * Released under the Apache License, Version 2.0
   * see: https://github.com/dcodeIO/bcrypt.js for details
   */
  (function(global2, factory) {
    if (typeof commonjsRequire === "function" && true && module && module["exports"])
      module["exports"] = factory();
    else
      (global2["dcodeIO"] = global2["dcodeIO"] || {})["bcrypt"] = factory();
  })(commonjsGlobal, function() {
    var bcrypt2 = {};
    var randomFallback = null;
    function random(len) {
      if (module && module["exports"])
        try {
          return require("crypto")["randomBytes"](len);
        } catch (e) {
        }
      try {
        var a2;
        (self["crypto"] || self["msCrypto"])["getRandomValues"](a2 = new Uint32Array(len));
        return Array.prototype.slice.call(a2);
      } catch (e) {
      }
      if (!randomFallback)
        throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");
      return randomFallback(len);
    }
    var randomAvailable = false;
    try {
      random(1);
      randomAvailable = true;
    } catch (e) {
    }
    randomFallback = null;
    bcrypt2.setRandomFallback = function(random2) {
      randomFallback = random2;
    };
    bcrypt2.genSaltSync = function(rounds, seed_length) {
      rounds = rounds || GENSALT_DEFAULT_LOG2_ROUNDS;
      if (typeof rounds !== "number")
        throw Error("Illegal arguments: " + typeof rounds + ", " + typeof seed_length);
      if (rounds < 4)
        rounds = 4;
      else if (rounds > 31)
        rounds = 31;
      var salt = [];
      salt.push("$2a$");
      if (rounds < 10)
        salt.push("0");
      salt.push(rounds.toString());
      salt.push("$");
      salt.push(base64_encode(random(BCRYPT_SALT_LEN), BCRYPT_SALT_LEN));
      return salt.join("");
    };
    bcrypt2.genSalt = function(rounds, seed_length, callback) {
      if (typeof seed_length === "function")
        callback = seed_length, seed_length = void 0;
      if (typeof rounds === "function")
        callback = rounds, rounds = void 0;
      if (typeof rounds === "undefined")
        rounds = GENSALT_DEFAULT_LOG2_ROUNDS;
      else if (typeof rounds !== "number")
        throw Error("illegal arguments: " + typeof rounds);
      function _async(callback2) {
        nextTick2(function() {
          try {
            callback2(null, bcrypt2.genSaltSync(rounds));
          } catch (err) {
            callback2(err);
          }
        });
      }
      if (callback) {
        if (typeof callback !== "function")
          throw Error("Illegal callback: " + typeof callback);
        _async(callback);
      } else
        return new Promise(function(resolve2, reject) {
          _async(function(err, res) {
            if (err) {
              reject(err);
              return;
            }
            resolve2(res);
          });
        });
    };
    bcrypt2.hashSync = function(s2, salt) {
      if (typeof salt === "undefined")
        salt = GENSALT_DEFAULT_LOG2_ROUNDS;
      if (typeof salt === "number")
        salt = bcrypt2.genSaltSync(salt);
      if (typeof s2 !== "string" || typeof salt !== "string")
        throw Error("Illegal arguments: " + typeof s2 + ", " + typeof salt);
      return _hash(s2, salt);
    };
    bcrypt2.hash = function(s2, salt, callback, progressCallback) {
      function _async(callback2) {
        if (typeof s2 === "string" && typeof salt === "number")
          bcrypt2.genSalt(salt, function(err, salt2) {
            _hash(s2, salt2, callback2, progressCallback);
          });
        else if (typeof s2 === "string" && typeof salt === "string")
          _hash(s2, salt, callback2, progressCallback);
        else
          nextTick2(callback2.bind(this, Error("Illegal arguments: " + typeof s2 + ", " + typeof salt)));
      }
      if (callback) {
        if (typeof callback !== "function")
          throw Error("Illegal callback: " + typeof callback);
        _async(callback);
      } else
        return new Promise(function(resolve2, reject) {
          _async(function(err, res) {
            if (err) {
              reject(err);
              return;
            }
            resolve2(res);
          });
        });
    };
    function safeStringCompare(known, unknown) {
      var right = 0, wrong = 0;
      for (var i2 = 0, k2 = known.length; i2 < k2; ++i2) {
        if (known.charCodeAt(i2) === unknown.charCodeAt(i2))
          ++right;
        else
          ++wrong;
      }
      if (right < 0)
        return false;
      return wrong === 0;
    }
    bcrypt2.compareSync = function(s2, hash) {
      if (typeof s2 !== "string" || typeof hash !== "string")
        throw Error("Illegal arguments: " + typeof s2 + ", " + typeof hash);
      if (hash.length !== 60)
        return false;
      return safeStringCompare(bcrypt2.hashSync(s2, hash.substr(0, hash.length - 31)), hash);
    };
    bcrypt2.compare = function(s2, hash, callback, progressCallback) {
      function _async(callback2) {
        if (typeof s2 !== "string" || typeof hash !== "string") {
          nextTick2(callback2.bind(this, Error("Illegal arguments: " + typeof s2 + ", " + typeof hash)));
          return;
        }
        if (hash.length !== 60) {
          nextTick2(callback2.bind(this, null, false));
          return;
        }
        bcrypt2.hash(s2, hash.substr(0, 29), function(err, comp) {
          if (err)
            callback2(err);
          else
            callback2(null, safeStringCompare(comp, hash));
        }, progressCallback);
      }
      if (callback) {
        if (typeof callback !== "function")
          throw Error("Illegal callback: " + typeof callback);
        _async(callback);
      } else
        return new Promise(function(resolve2, reject) {
          _async(function(err, res) {
            if (err) {
              reject(err);
              return;
            }
            resolve2(res);
          });
        });
    };
    bcrypt2.getRounds = function(hash) {
      if (typeof hash !== "string")
        throw Error("Illegal arguments: " + typeof hash);
      return parseInt(hash.split("$")[2], 10);
    };
    bcrypt2.getSalt = function(hash) {
      if (typeof hash !== "string")
        throw Error("Illegal arguments: " + typeof hash);
      if (hash.length !== 60)
        throw Error("Illegal hash length: " + hash.length + " != 60");
      return hash.substring(0, 29);
    };
    var nextTick2 = typeof process !== "undefined" && process && typeof process.nextTick === "function" ? typeof setImmediate === "function" ? setImmediate : process.nextTick : setTimeout;
    function stringToBytes(str2) {
      var out = [], i2 = 0;
      utfx.encodeUTF16toUTF8(function() {
        if (i2 >= str2.length)
          return null;
        return str2.charCodeAt(i2++);
      }, function(b2) {
        out.push(b2);
      });
      return out;
    }
    var BASE64_CODE = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
    var BASE64_INDEX = [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      0,
      1,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      -1,
      -1,
      -1,
      -1,
      -1
    ];
    var stringFromCharCode = String.fromCharCode;
    function base64_encode(b2, len) {
      var off = 0, rs = [], c1, c2;
      if (len <= 0 || len > b2.length)
        throw Error("Illegal len: " + len);
      while (off < len) {
        c1 = b2[off++] & 255;
        rs.push(BASE64_CODE[c1 >> 2 & 63]);
        c1 = (c1 & 3) << 4;
        if (off >= len) {
          rs.push(BASE64_CODE[c1 & 63]);
          break;
        }
        c2 = b2[off++] & 255;
        c1 |= c2 >> 4 & 15;
        rs.push(BASE64_CODE[c1 & 63]);
        c1 = (c2 & 15) << 2;
        if (off >= len) {
          rs.push(BASE64_CODE[c1 & 63]);
          break;
        }
        c2 = b2[off++] & 255;
        c1 |= c2 >> 6 & 3;
        rs.push(BASE64_CODE[c1 & 63]);
        rs.push(BASE64_CODE[c2 & 63]);
      }
      return rs.join("");
    }
    function base64_decode(s2, len) {
      var off = 0, slen = s2.length, olen = 0, rs = [], c1, c2, c3, c4, o2, code;
      if (len <= 0)
        throw Error("Illegal len: " + len);
      while (off < slen - 1 && olen < len) {
        code = s2.charCodeAt(off++);
        c1 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        code = s2.charCodeAt(off++);
        c2 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        if (c1 == -1 || c2 == -1)
          break;
        o2 = c1 << 2 >>> 0;
        o2 |= (c2 & 48) >> 4;
        rs.push(stringFromCharCode(o2));
        if (++olen >= len || off >= slen)
          break;
        code = s2.charCodeAt(off++);
        c3 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        if (c3 == -1)
          break;
        o2 = (c2 & 15) << 4 >>> 0;
        o2 |= (c3 & 60) >> 2;
        rs.push(stringFromCharCode(o2));
        if (++olen >= len || off >= slen)
          break;
        code = s2.charCodeAt(off++);
        c4 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        o2 = (c3 & 3) << 6 >>> 0;
        o2 |= c4;
        rs.push(stringFromCharCode(o2));
        ++olen;
      }
      var res = [];
      for (off = 0; off < olen; off++)
        res.push(rs[off].charCodeAt(0));
      return res;
    }
    var utfx = function() {
      var utfx2 = {};
      utfx2.MAX_CODEPOINT = 1114111;
      utfx2.encodeUTF8 = function(src, dst) {
        var cp = null;
        if (typeof src === "number")
          cp = src, src = function() {
            return null;
          };
        while (cp !== null || (cp = src()) !== null) {
          if (cp < 128)
            dst(cp & 127);
          else if (cp < 2048)
            dst(cp >> 6 & 31 | 192), dst(cp & 63 | 128);
          else if (cp < 65536)
            dst(cp >> 12 & 15 | 224), dst(cp >> 6 & 63 | 128), dst(cp & 63 | 128);
          else
            dst(cp >> 18 & 7 | 240), dst(cp >> 12 & 63 | 128), dst(cp >> 6 & 63 | 128), dst(cp & 63 | 128);
          cp = null;
        }
      };
      utfx2.decodeUTF8 = function(src, dst) {
        var a2, b2, c2, d2, fail = function(b3) {
          b3 = b3.slice(0, b3.indexOf(null));
          var err = Error(b3.toString());
          err.name = "TruncatedError";
          err["bytes"] = b3;
          throw err;
        };
        while ((a2 = src()) !== null) {
          if ((a2 & 128) === 0)
            dst(a2);
          else if ((a2 & 224) === 192)
            (b2 = src()) === null && fail([a2, b2]), dst((a2 & 31) << 6 | b2 & 63);
          else if ((a2 & 240) === 224)
            ((b2 = src()) === null || (c2 = src()) === null) && fail([a2, b2, c2]), dst((a2 & 15) << 12 | (b2 & 63) << 6 | c2 & 63);
          else if ((a2 & 248) === 240)
            ((b2 = src()) === null || (c2 = src()) === null || (d2 = src()) === null) && fail([a2, b2, c2, d2]), dst((a2 & 7) << 18 | (b2 & 63) << 12 | (c2 & 63) << 6 | d2 & 63);
          else
            throw RangeError("Illegal starting byte: " + a2);
        }
      };
      utfx2.UTF16toUTF8 = function(src, dst) {
        var c1, c2 = null;
        while (true) {
          if ((c1 = c2 !== null ? c2 : src()) === null)
            break;
          if (c1 >= 55296 && c1 <= 57343) {
            if ((c2 = src()) !== null) {
              if (c2 >= 56320 && c2 <= 57343) {
                dst((c1 - 55296) * 1024 + c2 - 56320 + 65536);
                c2 = null;
                continue;
              }
            }
          }
          dst(c1);
        }
        if (c2 !== null)
          dst(c2);
      };
      utfx2.UTF8toUTF16 = function(src, dst) {
        var cp = null;
        if (typeof src === "number")
          cp = src, src = function() {
            return null;
          };
        while (cp !== null || (cp = src()) !== null) {
          if (cp <= 65535)
            dst(cp);
          else
            cp -= 65536, dst((cp >> 10) + 55296), dst(cp % 1024 + 56320);
          cp = null;
        }
      };
      utfx2.encodeUTF16toUTF8 = function(src, dst) {
        utfx2.UTF16toUTF8(src, function(cp) {
          utfx2.encodeUTF8(cp, dst);
        });
      };
      utfx2.decodeUTF8toUTF16 = function(src, dst) {
        utfx2.decodeUTF8(src, function(cp) {
          utfx2.UTF8toUTF16(cp, dst);
        });
      };
      utfx2.calculateCodePoint = function(cp) {
        return cp < 128 ? 1 : cp < 2048 ? 2 : cp < 65536 ? 3 : 4;
      };
      utfx2.calculateUTF8 = function(src) {
        var cp, l2 = 0;
        while ((cp = src()) !== null)
          l2 += utfx2.calculateCodePoint(cp);
        return l2;
      };
      utfx2.calculateUTF16asUTF8 = function(src) {
        var n2 = 0, l2 = 0;
        utfx2.UTF16toUTF8(src, function(cp) {
          ++n2;
          l2 += utfx2.calculateCodePoint(cp);
        });
        return [n2, l2];
      };
      return utfx2;
    }();
    Date.now = Date.now || function() {
      return +new Date();
    };
    var BCRYPT_SALT_LEN = 16;
    var GENSALT_DEFAULT_LOG2_ROUNDS = 10;
    var BLOWFISH_NUM_ROUNDS = 16;
    var MAX_EXECUTION_TIME = 100;
    var P_ORIG = [
      608135816,
      2242054355,
      320440878,
      57701188,
      2752067618,
      698298832,
      137296536,
      3964562569,
      1160258022,
      953160567,
      3193202383,
      887688300,
      3232508343,
      3380367581,
      1065670069,
      3041331479,
      2450970073,
      2306472731
    ];
    var S_ORIG = [
      3509652390,
      2564797868,
      805139163,
      3491422135,
      3101798381,
      1780907670,
      3128725573,
      4046225305,
      614570311,
      3012652279,
      134345442,
      2240740374,
      1667834072,
      1901547113,
      2757295779,
      4103290238,
      227898511,
      1921955416,
      1904987480,
      2182433518,
      2069144605,
      3260701109,
      2620446009,
      720527379,
      3318853667,
      677414384,
      3393288472,
      3101374703,
      2390351024,
      1614419982,
      1822297739,
      2954791486,
      3608508353,
      3174124327,
      2024746970,
      1432378464,
      3864339955,
      2857741204,
      1464375394,
      1676153920,
      1439316330,
      715854006,
      3033291828,
      289532110,
      2706671279,
      2087905683,
      3018724369,
      1668267050,
      732546397,
      1947742710,
      3462151702,
      2609353502,
      2950085171,
      1814351708,
      2050118529,
      680887927,
      999245976,
      1800124847,
      3300911131,
      1713906067,
      1641548236,
      4213287313,
      1216130144,
      1575780402,
      4018429277,
      3917837745,
      3693486850,
      3949271944,
      596196993,
      3549867205,
      258830323,
      2213823033,
      772490370,
      2760122372,
      1774776394,
      2652871518,
      566650946,
      4142492826,
      1728879713,
      2882767088,
      1783734482,
      3629395816,
      2517608232,
      2874225571,
      1861159788,
      326777828,
      3124490320,
      2130389656,
      2716951837,
      967770486,
      1724537150,
      2185432712,
      2364442137,
      1164943284,
      2105845187,
      998989502,
      3765401048,
      2244026483,
      1075463327,
      1455516326,
      1322494562,
      910128902,
      469688178,
      1117454909,
      936433444,
      3490320968,
      3675253459,
      1240580251,
      122909385,
      2157517691,
      634681816,
      4142456567,
      3825094682,
      3061402683,
      2540495037,
      79693498,
      3249098678,
      1084186820,
      1583128258,
      426386531,
      1761308591,
      1047286709,
      322548459,
      995290223,
      1845252383,
      2603652396,
      3431023940,
      2942221577,
      3202600964,
      3727903485,
      1712269319,
      422464435,
      3234572375,
      1170764815,
      3523960633,
      3117677531,
      1434042557,
      442511882,
      3600875718,
      1076654713,
      1738483198,
      4213154764,
      2393238008,
      3677496056,
      1014306527,
      4251020053,
      793779912,
      2902807211,
      842905082,
      4246964064,
      1395751752,
      1040244610,
      2656851899,
      3396308128,
      445077038,
      3742853595,
      3577915638,
      679411651,
      2892444358,
      2354009459,
      1767581616,
      3150600392,
      3791627101,
      3102740896,
      284835224,
      4246832056,
      1258075500,
      768725851,
      2589189241,
      3069724005,
      3532540348,
      1274779536,
      3789419226,
      2764799539,
      1660621633,
      3471099624,
      4011903706,
      913787905,
      3497959166,
      737222580,
      2514213453,
      2928710040,
      3937242737,
      1804850592,
      3499020752,
      2949064160,
      2386320175,
      2390070455,
      2415321851,
      4061277028,
      2290661394,
      2416832540,
      1336762016,
      1754252060,
      3520065937,
      3014181293,
      791618072,
      3188594551,
      3933548030,
      2332172193,
      3852520463,
      3043980520,
      413987798,
      3465142937,
      3030929376,
      4245938359,
      2093235073,
      3534596313,
      375366246,
      2157278981,
      2479649556,
      555357303,
      3870105701,
      2008414854,
      3344188149,
      4221384143,
      3956125452,
      2067696032,
      3594591187,
      2921233993,
      2428461,
      544322398,
      577241275,
      1471733935,
      610547355,
      4027169054,
      1432588573,
      1507829418,
      2025931657,
      3646575487,
      545086370,
      48609733,
      2200306550,
      1653985193,
      298326376,
      1316178497,
      3007786442,
      2064951626,
      458293330,
      2589141269,
      3591329599,
      3164325604,
      727753846,
      2179363840,
      146436021,
      1461446943,
      4069977195,
      705550613,
      3059967265,
      3887724982,
      4281599278,
      3313849956,
      1404054877,
      2845806497,
      146425753,
      1854211946,
      1266315497,
      3048417604,
      3681880366,
      3289982499,
      290971e4,
      1235738493,
      2632868024,
      2414719590,
      3970600049,
      1771706367,
      1449415276,
      3266420449,
      422970021,
      1963543593,
      2690192192,
      3826793022,
      1062508698,
      1531092325,
      1804592342,
      2583117782,
      2714934279,
      4024971509,
      1294809318,
      4028980673,
      1289560198,
      2221992742,
      1669523910,
      35572830,
      157838143,
      1052438473,
      1016535060,
      1802137761,
      1753167236,
      1386275462,
      3080475397,
      2857371447,
      1040679964,
      2145300060,
      2390574316,
      1461121720,
      2956646967,
      4031777805,
      4028374788,
      33600511,
      2920084762,
      1018524850,
      629373528,
      3691585981,
      3515945977,
      2091462646,
      2486323059,
      586499841,
      988145025,
      935516892,
      3367335476,
      2599673255,
      2839830854,
      265290510,
      3972581182,
      2759138881,
      3795373465,
      1005194799,
      847297441,
      406762289,
      1314163512,
      1332590856,
      1866599683,
      4127851711,
      750260880,
      613907577,
      1450815602,
      3165620655,
      3734664991,
      3650291728,
      3012275730,
      3704569646,
      1427272223,
      778793252,
      1343938022,
      2676280711,
      2052605720,
      1946737175,
      3164576444,
      3914038668,
      3967478842,
      3682934266,
      1661551462,
      3294938066,
      4011595847,
      840292616,
      3712170807,
      616741398,
      312560963,
      711312465,
      1351876610,
      322626781,
      1910503582,
      271666773,
      2175563734,
      1594956187,
      70604529,
      3617834859,
      1007753275,
      1495573769,
      4069517037,
      2549218298,
      2663038764,
      504708206,
      2263041392,
      3941167025,
      2249088522,
      1514023603,
      1998579484,
      1312622330,
      694541497,
      2582060303,
      2151582166,
      1382467621,
      776784248,
      2618340202,
      3323268794,
      2497899128,
      2784771155,
      503983604,
      4076293799,
      907881277,
      423175695,
      432175456,
      1378068232,
      4145222326,
      3954048622,
      3938656102,
      3820766613,
      2793130115,
      2977904593,
      26017576,
      3274890735,
      3194772133,
      1700274565,
      1756076034,
      4006520079,
      3677328699,
      720338349,
      1533947780,
      354530856,
      688349552,
      3973924725,
      1637815568,
      332179504,
      3949051286,
      53804574,
      2852348879,
      3044236432,
      1282449977,
      3583942155,
      3416972820,
      4006381244,
      1617046695,
      2628476075,
      3002303598,
      1686838959,
      431878346,
      2686675385,
      1700445008,
      1080580658,
      1009431731,
      832498133,
      3223435511,
      2605976345,
      2271191193,
      2516031870,
      1648197032,
      4164389018,
      2548247927,
      300782431,
      375919233,
      238389289,
      3353747414,
      2531188641,
      2019080857,
      1475708069,
      455242339,
      2609103871,
      448939670,
      3451063019,
      1395535956,
      2413381860,
      1841049896,
      1491858159,
      885456874,
      4264095073,
      4001119347,
      1565136089,
      3898914787,
      1108368660,
      540939232,
      1173283510,
      2745871338,
      3681308437,
      4207628240,
      3343053890,
      4016749493,
      1699691293,
      1103962373,
      3625875870,
      2256883143,
      3830138730,
      1031889488,
      3479347698,
      1535977030,
      4236805024,
      3251091107,
      2132092099,
      1774941330,
      1199868427,
      1452454533,
      157007616,
      2904115357,
      342012276,
      595725824,
      1480756522,
      206960106,
      497939518,
      591360097,
      863170706,
      2375253569,
      3596610801,
      1814182875,
      2094937945,
      3421402208,
      1082520231,
      3463918190,
      2785509508,
      435703966,
      3908032597,
      1641649973,
      2842273706,
      3305899714,
      1510255612,
      2148256476,
      2655287854,
      3276092548,
      4258621189,
      236887753,
      3681803219,
      274041037,
      1734335097,
      3815195456,
      3317970021,
      1899903192,
      1026095262,
      4050517792,
      356393447,
      2410691914,
      3873677099,
      3682840055,
      3913112168,
      2491498743,
      4132185628,
      2489919796,
      1091903735,
      1979897079,
      3170134830,
      3567386728,
      3557303409,
      857797738,
      1136121015,
      1342202287,
      507115054,
      2535736646,
      337727348,
      3213592640,
      1301675037,
      2528481711,
      1895095763,
      1721773893,
      3216771564,
      62756741,
      2142006736,
      835421444,
      2531993523,
      1442658625,
      3659876326,
      2882144922,
      676362277,
      1392781812,
      170690266,
      3921047035,
      1759253602,
      3611846912,
      1745797284,
      664899054,
      1329594018,
      3901205900,
      3045908486,
      2062866102,
      2865634940,
      3543621612,
      3464012697,
      1080764994,
      553557557,
      3656615353,
      3996768171,
      991055499,
      499776247,
      1265440854,
      648242737,
      3940784050,
      980351604,
      3713745714,
      1749149687,
      3396870395,
      4211799374,
      3640570775,
      1161844396,
      3125318951,
      1431517754,
      545492359,
      4268468663,
      3499529547,
      1437099964,
      2702547544,
      3433638243,
      2581715763,
      2787789398,
      1060185593,
      1593081372,
      2418618748,
      4260947970,
      69676912,
      2159744348,
      86519011,
      2512459080,
      3838209314,
      1220612927,
      3339683548,
      133810670,
      1090789135,
      1078426020,
      1569222167,
      845107691,
      3583754449,
      4072456591,
      1091646820,
      628848692,
      1613405280,
      3757631651,
      526609435,
      236106946,
      48312990,
      2942717905,
      3402727701,
      1797494240,
      859738849,
      992217954,
      4005476642,
      2243076622,
      3870952857,
      3732016268,
      765654824,
      3490871365,
      2511836413,
      1685915746,
      3888969200,
      1414112111,
      2273134842,
      3281911079,
      4080962846,
      172450625,
      2569994100,
      980381355,
      4109958455,
      2819808352,
      2716589560,
      2568741196,
      3681446669,
      3329971472,
      1835478071,
      660984891,
      3704678404,
      4045999559,
      3422617507,
      3040415634,
      1762651403,
      1719377915,
      3470491036,
      2693910283,
      3642056355,
      3138596744,
      1364962596,
      2073328063,
      1983633131,
      926494387,
      3423689081,
      2150032023,
      4096667949,
      1749200295,
      3328846651,
      309677260,
      2016342300,
      1779581495,
      3079819751,
      111262694,
      1274766160,
      443224088,
      298511866,
      1025883608,
      3806446537,
      1145181785,
      168956806,
      3641502830,
      3584813610,
      1689216846,
      3666258015,
      3200248200,
      1692713982,
      2646376535,
      4042768518,
      1618508792,
      1610833997,
      3523052358,
      4130873264,
      2001055236,
      3610705100,
      2202168115,
      4028541809,
      2961195399,
      1006657119,
      2006996926,
      3186142756,
      1430667929,
      3210227297,
      1314452623,
      4074634658,
      4101304120,
      2273951170,
      1399257539,
      3367210612,
      3027628629,
      1190975929,
      2062231137,
      2333990788,
      2221543033,
      2438960610,
      1181637006,
      548689776,
      2362791313,
      3372408396,
      3104550113,
      3145860560,
      296247880,
      1970579870,
      3078560182,
      3769228297,
      1714227617,
      3291629107,
      3898220290,
      166772364,
      1251581989,
      493813264,
      448347421,
      195405023,
      2709975567,
      677966185,
      3703036547,
      1463355134,
      2715995803,
      1338867538,
      1343315457,
      2802222074,
      2684532164,
      233230375,
      2599980071,
      2000651841,
      3277868038,
      1638401717,
      4028070440,
      3237316320,
      6314154,
      819756386,
      300326615,
      590932579,
      1405279636,
      3267499572,
      3150704214,
      2428286686,
      3959192993,
      3461946742,
      1862657033,
      1266418056,
      963775037,
      2089974820,
      2263052895,
      1917689273,
      448879540,
      3550394620,
      3981727096,
      150775221,
      3627908307,
      1303187396,
      508620638,
      2975983352,
      2726630617,
      1817252668,
      1876281319,
      1457606340,
      908771278,
      3720792119,
      3617206836,
      2455994898,
      1729034894,
      1080033504,
      976866871,
      3556439503,
      2881648439,
      1522871579,
      1555064734,
      1336096578,
      3548522304,
      2579274686,
      3574697629,
      3205460757,
      3593280638,
      3338716283,
      3079412587,
      564236357,
      2993598910,
      1781952180,
      1464380207,
      3163844217,
      3332601554,
      1699332808,
      1393555694,
      1183702653,
      3581086237,
      1288719814,
      691649499,
      2847557200,
      2895455976,
      3193889540,
      2717570544,
      1781354906,
      1676643554,
      2592534050,
      3230253752,
      1126444790,
      2770207658,
      2633158820,
      2210423226,
      2615765581,
      2414155088,
      3127139286,
      673620729,
      2805611233,
      1269405062,
      4015350505,
      3341807571,
      4149409754,
      1057255273,
      2012875353,
      2162469141,
      2276492801,
      2601117357,
      993977747,
      3918593370,
      2654263191,
      753973209,
      36408145,
      2530585658,
      25011837,
      3520020182,
      2088578344,
      530523599,
      2918365339,
      1524020338,
      1518925132,
      3760827505,
      3759777254,
      1202760957,
      3985898139,
      3906192525,
      674977740,
      4174734889,
      2031300136,
      2019492241,
      3983892565,
      4153806404,
      3822280332,
      352677332,
      2297720250,
      60907813,
      90501309,
      3286998549,
      1016092578,
      2535922412,
      2839152426,
      457141659,
      509813237,
      4120667899,
      652014361,
      1966332200,
      2975202805,
      55981186,
      2327461051,
      676427537,
      3255491064,
      2882294119,
      3433927263,
      1307055953,
      942726286,
      933058658,
      2468411793,
      3933900994,
      4215176142,
      1361170020,
      2001714738,
      2830558078,
      3274259782,
      1222529897,
      1679025792,
      2729314320,
      3714953764,
      1770335741,
      151462246,
      3013232138,
      1682292957,
      1483529935,
      471910574,
      1539241949,
      458788160,
      3436315007,
      1807016891,
      3718408830,
      978976581,
      1043663428,
      3165965781,
      1927990952,
      4200891579,
      2372276910,
      3208408903,
      3533431907,
      1412390302,
      2931980059,
      4132332400,
      1947078029,
      3881505623,
      4168226417,
      2941484381,
      1077988104,
      1320477388,
      886195818,
      18198404,
      3786409e3,
      2509781533,
      112762804,
      3463356488,
      1866414978,
      891333506,
      18488651,
      661792760,
      1628790961,
      3885187036,
      3141171499,
      876946877,
      2693282273,
      1372485963,
      791857591,
      2686433993,
      3759982718,
      3167212022,
      3472953795,
      2716379847,
      445679433,
      3561995674,
      3504004811,
      3574258232,
      54117162,
      3331405415,
      2381918588,
      3769707343,
      4154350007,
      1140177722,
      4074052095,
      668550556,
      3214352940,
      367459370,
      261225585,
      2610173221,
      4209349473,
      3468074219,
      3265815641,
      314222801,
      3066103646,
      3808782860,
      282218597,
      3406013506,
      3773591054,
      379116347,
      1285071038,
      846784868,
      2669647154,
      3771962079,
      3550491691,
      2305946142,
      453669953,
      1268987020,
      3317592352,
      3279303384,
      3744833421,
      2610507566,
      3859509063,
      266596637,
      3847019092,
      517658769,
      3462560207,
      3443424879,
      370717030,
      4247526661,
      2224018117,
      4143653529,
      4112773975,
      2788324899,
      2477274417,
      1456262402,
      2901442914,
      1517677493,
      1846949527,
      2295493580,
      3734397586,
      2176403920,
      1280348187,
      1908823572,
      3871786941,
      846861322,
      1172426758,
      3287448474,
      3383383037,
      1655181056,
      3139813346,
      901632758,
      1897031941,
      2986607138,
      3066810236,
      3447102507,
      1393639104,
      373351379,
      950779232,
      625454576,
      3124240540,
      4148612726,
      2007998917,
      544563296,
      2244738638,
      2330496472,
      2058025392,
      1291430526,
      424198748,
      50039436,
      29584100,
      3605783033,
      2429876329,
      2791104160,
      1057563949,
      3255363231,
      3075367218,
      3463963227,
      1469046755,
      985887462
    ];
    var C_ORIG = [
      1332899944,
      1700884034,
      1701343084,
      1684370003,
      1668446532,
      1869963892
    ];
    function _encipher(lr, off, P, S) {
      var n2, l2 = lr[off], r2 = lr[off + 1];
      l2 ^= P[0];
      n2 = S[l2 >>> 24];
      n2 += S[256 | l2 >> 16 & 255];
      n2 ^= S[512 | l2 >> 8 & 255];
      n2 += S[768 | l2 & 255];
      r2 ^= n2 ^ P[1];
      n2 = S[r2 >>> 24];
      n2 += S[256 | r2 >> 16 & 255];
      n2 ^= S[512 | r2 >> 8 & 255];
      n2 += S[768 | r2 & 255];
      l2 ^= n2 ^ P[2];
      n2 = S[l2 >>> 24];
      n2 += S[256 | l2 >> 16 & 255];
      n2 ^= S[512 | l2 >> 8 & 255];
      n2 += S[768 | l2 & 255];
      r2 ^= n2 ^ P[3];
      n2 = S[r2 >>> 24];
      n2 += S[256 | r2 >> 16 & 255];
      n2 ^= S[512 | r2 >> 8 & 255];
      n2 += S[768 | r2 & 255];
      l2 ^= n2 ^ P[4];
      n2 = S[l2 >>> 24];
      n2 += S[256 | l2 >> 16 & 255];
      n2 ^= S[512 | l2 >> 8 & 255];
      n2 += S[768 | l2 & 255];
      r2 ^= n2 ^ P[5];
      n2 = S[r2 >>> 24];
      n2 += S[256 | r2 >> 16 & 255];
      n2 ^= S[512 | r2 >> 8 & 255];
      n2 += S[768 | r2 & 255];
      l2 ^= n2 ^ P[6];
      n2 = S[l2 >>> 24];
      n2 += S[256 | l2 >> 16 & 255];
      n2 ^= S[512 | l2 >> 8 & 255];
      n2 += S[768 | l2 & 255];
      r2 ^= n2 ^ P[7];
      n2 = S[r2 >>> 24];
      n2 += S[256 | r2 >> 16 & 255];
      n2 ^= S[512 | r2 >> 8 & 255];
      n2 += S[768 | r2 & 255];
      l2 ^= n2 ^ P[8];
      n2 = S[l2 >>> 24];
      n2 += S[256 | l2 >> 16 & 255];
      n2 ^= S[512 | l2 >> 8 & 255];
      n2 += S[768 | l2 & 255];
      r2 ^= n2 ^ P[9];
      n2 = S[r2 >>> 24];
      n2 += S[256 | r2 >> 16 & 255];
      n2 ^= S[512 | r2 >> 8 & 255];
      n2 += S[768 | r2 & 255];
      l2 ^= n2 ^ P[10];
      n2 = S[l2 >>> 24];
      n2 += S[256 | l2 >> 16 & 255];
      n2 ^= S[512 | l2 >> 8 & 255];
      n2 += S[768 | l2 & 255];
      r2 ^= n2 ^ P[11];
      n2 = S[r2 >>> 24];
      n2 += S[256 | r2 >> 16 & 255];
      n2 ^= S[512 | r2 >> 8 & 255];
      n2 += S[768 | r2 & 255];
      l2 ^= n2 ^ P[12];
      n2 = S[l2 >>> 24];
      n2 += S[256 | l2 >> 16 & 255];
      n2 ^= S[512 | l2 >> 8 & 255];
      n2 += S[768 | l2 & 255];
      r2 ^= n2 ^ P[13];
      n2 = S[r2 >>> 24];
      n2 += S[256 | r2 >> 16 & 255];
      n2 ^= S[512 | r2 >> 8 & 255];
      n2 += S[768 | r2 & 255];
      l2 ^= n2 ^ P[14];
      n2 = S[l2 >>> 24];
      n2 += S[256 | l2 >> 16 & 255];
      n2 ^= S[512 | l2 >> 8 & 255];
      n2 += S[768 | l2 & 255];
      r2 ^= n2 ^ P[15];
      n2 = S[r2 >>> 24];
      n2 += S[256 | r2 >> 16 & 255];
      n2 ^= S[512 | r2 >> 8 & 255];
      n2 += S[768 | r2 & 255];
      l2 ^= n2 ^ P[16];
      lr[off] = r2 ^ P[BLOWFISH_NUM_ROUNDS + 1];
      lr[off + 1] = l2;
      return lr;
    }
    function _streamtoword(data, offp) {
      for (var i2 = 0, word = 0; i2 < 4; ++i2)
        word = word << 8 | data[offp] & 255, offp = (offp + 1) % data.length;
      return { key: word, offp };
    }
    function _key2(key, P, S) {
      var offset2 = 0, lr = [0, 0], plen = P.length, slen = S.length, sw;
      for (var i2 = 0; i2 < plen; i2++)
        sw = _streamtoword(key, offset2), offset2 = sw.offp, P[i2] = P[i2] ^ sw.key;
      for (i2 = 0; i2 < plen; i2 += 2)
        lr = _encipher(lr, 0, P, S), P[i2] = lr[0], P[i2 + 1] = lr[1];
      for (i2 = 0; i2 < slen; i2 += 2)
        lr = _encipher(lr, 0, P, S), S[i2] = lr[0], S[i2 + 1] = lr[1];
    }
    function _ekskey(data, key, P, S) {
      var offp = 0, lr = [0, 0], plen = P.length, slen = S.length, sw;
      for (var i2 = 0; i2 < plen; i2++)
        sw = _streamtoword(key, offp), offp = sw.offp, P[i2] = P[i2] ^ sw.key;
      offp = 0;
      for (i2 = 0; i2 < plen; i2 += 2)
        sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), P[i2] = lr[0], P[i2 + 1] = lr[1];
      for (i2 = 0; i2 < slen; i2 += 2)
        sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), S[i2] = lr[0], S[i2 + 1] = lr[1];
    }
    function _crypt(b2, salt, rounds, callback, progressCallback) {
      var cdata = C_ORIG.slice(), clen = cdata.length, err;
      if (rounds < 4 || rounds > 31) {
        err = Error("Illegal number of rounds (4-31): " + rounds);
        if (callback) {
          nextTick2(callback.bind(this, err));
          return;
        } else
          throw err;
      }
      if (salt.length !== BCRYPT_SALT_LEN) {
        err = Error("Illegal salt length: " + salt.length + " != " + BCRYPT_SALT_LEN);
        if (callback) {
          nextTick2(callback.bind(this, err));
          return;
        } else
          throw err;
      }
      rounds = 1 << rounds >>> 0;
      var P, S, i2 = 0, j2;
      if (Int32Array) {
        P = new Int32Array(P_ORIG);
        S = new Int32Array(S_ORIG);
      } else {
        P = P_ORIG.slice();
        S = S_ORIG.slice();
      }
      _ekskey(salt, b2, P, S);
      function next() {
        if (progressCallback)
          progressCallback(i2 / rounds);
        if (i2 < rounds) {
          var start = Date.now();
          for (; i2 < rounds; ) {
            i2 = i2 + 1;
            _key2(b2, P, S);
            _key2(salt, P, S);
            if (Date.now() - start > MAX_EXECUTION_TIME)
              break;
          }
        } else {
          for (i2 = 0; i2 < 64; i2++)
            for (j2 = 0; j2 < clen >> 1; j2++)
              _encipher(cdata, j2 << 1, P, S);
          var ret = [];
          for (i2 = 0; i2 < clen; i2++)
            ret.push((cdata[i2] >> 24 & 255) >>> 0), ret.push((cdata[i2] >> 16 & 255) >>> 0), ret.push((cdata[i2] >> 8 & 255) >>> 0), ret.push((cdata[i2] & 255) >>> 0);
          if (callback) {
            callback(null, ret);
            return;
          } else
            return ret;
        }
        if (callback)
          nextTick2(next);
      }
      if (typeof callback !== "undefined") {
        next();
      } else {
        var res;
        while (true)
          if (typeof (res = next()) !== "undefined")
            return res || [];
      }
    }
    function _hash(s2, salt, callback, progressCallback) {
      var err;
      if (typeof s2 !== "string" || typeof salt !== "string") {
        err = Error("Invalid string / salt: Not a string");
        if (callback) {
          nextTick2(callback.bind(this, err));
          return;
        } else
          throw err;
      }
      var minor, offset2;
      if (salt.charAt(0) !== "$" || salt.charAt(1) !== "2") {
        err = Error("Invalid salt version: " + salt.substring(0, 2));
        if (callback) {
          nextTick2(callback.bind(this, err));
          return;
        } else
          throw err;
      }
      if (salt.charAt(2) === "$")
        minor = String.fromCharCode(0), offset2 = 3;
      else {
        minor = salt.charAt(2);
        if (minor !== "a" && minor !== "b" && minor !== "y" || salt.charAt(3) !== "$") {
          err = Error("Invalid salt revision: " + salt.substring(2, 4));
          if (callback) {
            nextTick2(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        offset2 = 4;
      }
      if (salt.charAt(offset2 + 2) > "$") {
        err = Error("Missing salt rounds");
        if (callback) {
          nextTick2(callback.bind(this, err));
          return;
        } else
          throw err;
      }
      var r1 = parseInt(salt.substring(offset2, offset2 + 1), 10) * 10, r2 = parseInt(salt.substring(offset2 + 1, offset2 + 2), 10), rounds = r1 + r2, real_salt = salt.substring(offset2 + 3, offset2 + 25);
      s2 += minor >= "a" ? "\0" : "";
      var passwordb = stringToBytes(s2), saltb = base64_decode(real_salt, BCRYPT_SALT_LEN);
      function finish(bytes) {
        var res = [];
        res.push("$2");
        if (minor >= "a")
          res.push(minor);
        res.push("$");
        if (rounds < 10)
          res.push("0");
        res.push(rounds.toString());
        res.push("$");
        res.push(base64_encode(saltb, saltb.length));
        res.push(base64_encode(bytes, C_ORIG.length * 4 - 1));
        return res.join("");
      }
      if (typeof callback == "undefined")
        return finish(_crypt(passwordb, saltb, rounds));
      else {
        _crypt(passwordb, saltb, rounds, function(err2, bytes) {
          if (err2)
            callback(err2, null);
          else
            callback(null, finish(bytes));
        }, progressCallback);
      }
    }
    bcrypt2.encodeBase64 = base64_encode;
    bcrypt2.decodeBase64 = base64_decode;
    return bcrypt2;
  });
})(bcrypt);
const useEncryptData = () => {
  const themeData2 = useThemeData();
  return computed(() => themeData2.value.encrypt || {});
};
const STORAGE_KEY$1 = "vuepress-theme-hope-global-token";
const useGlobalEcrypt = () => {
  const options = useEncryptData();
  const globalToken = ref("");
  const isGlobalEncrypted = computed(() => {
    if (options.value.global && options.value.admin) {
      return !options.value.admin || [].some((hash) => bcrypt.exports.compareSync(globalToken.value, hash));
    }
    return false;
  });
  const validateGlobalToken = (inputToken, keep = false) => {
    if ((options.value.admin || []).some((hash) => bcrypt.exports.compareSync(inputToken, hash))) {
      globalToken.value = inputToken;
      (keep ? localStorage : sessionStorage).setItem(STORAGE_KEY$1, inputToken);
    }
  };
  onMounted(() => {
    const token = sessionStorage.getItem(STORAGE_KEY$1) || localStorage.getItem(STORAGE_KEY$1);
    if (token)
      validateGlobalToken(token);
  });
  return {
    isGlobalEncrypted,
    validateGlobalToken
  };
};
const checkToken = (token = "", hash) => Boolean(token) && bcrypt.exports.compareSync(token, hash);
const STORAGE_KEY = "vuepress-theme-hope-path-token";
const localConfig = ref({});
const sessionConfig = ref({});
const usePathEncrypt = () => {
  const route = useRoute();
  const options = useEncryptData();
  const getPathMatchedKeys = (path) => typeof options.value.config === "object" ? Object.keys(options.value.config).filter((key) => path.startsWith(key)).sort((a2, b2) => b2.length - a2.length) : [];
  const getPathEncryptStatus = (path) => {
    const matchedKeys = getPathMatchedKeys(path);
    if (matchedKeys.length !== 0) {
      const { config = {} } = options.value;
      return !matchedKeys.some((key) => config[key].some((token) => checkToken(localConfig.value[key], token) || checkToken(sessionConfig.value[key], token)));
    }
    return false;
  };
  const isEncrypted = computed(() => getPathEncryptStatus(route.path));
  const validateToken = (inputToken, keep = false) => {
    const { config = {} } = options.value;
    const matchedKeys = getPathMatchedKeys(route.path);
    for (const hitKey of matchedKeys) {
      if (config[hitKey].filter((token) => checkToken(inputToken, token))) {
        (keep ? localConfig : sessionConfig).value[hitKey] = inputToken;
        if (keep)
          localStorage.setItem(STORAGE_KEY, JSON.stringify(localConfig.value));
        else
          sessionStorage.setItem(STORAGE_KEY, JSON.stringify(sessionConfig.value));
        break;
      }
    }
  };
  onMounted(() => {
    try {
      localConfig.value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (err) {
    }
    try {
      sessionConfig.value = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
    } catch (err) {
    }
  });
  return {
    isEncrypted,
    getPathEncryptStatus,
    validateToken
  };
};
var AutoLink = defineComponent({
  name: "AutoLink",
  inheritAttrs: false,
  props: {
    config: {
      type: Object,
      required: true
    },
    exact: {
      type: Boolean,
      default: false
    }
  },
  emits: ["focusout"],
  setup(props, { attrs, emit, slots }) {
    const route = useRoute();
    const site = useSiteData();
    const iconPrefix = useIconPrefix();
    const config = toRef(props, "config");
    const hasHttpProtocol = computed(() => isLinkHttp(config.value.link));
    const hasNonHttpProtocal = computed(() => isLinkMailto(config.value.link) || isLinkTel(config.value.link));
    const linkTarget = computed(() => hasNonHttpProtocal.value ? void 0 : config.value.target ? config.value.target : hasHttpProtocol.value ? "_blank" : void 0);
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const renderRouterLink = computed(() => !hasHttpProtocol.value && !hasNonHttpProtocal.value && !isBlankTarget.value);
    const anchorRel = computed(() => hasNonHttpProtocal.value ? void 0 : config.value.rel ? config.value.rel : isBlankTarget.value ? "noopener noreferrer" : void 0);
    const linkAriaLabel = computed(() => config.value.ariaLabel || config.value.text);
    const shouldBeActiveInSubpath = computed(() => {
      if (props.exact)
        return false;
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length)
        return !localeKeys.some((key) => key === config.value.link);
      return config.value.link !== "/";
    });
    const isActive = computed(() => !renderRouterLink.value ? false : config.value.activeMatch ? new RegExp(config.value.activeMatch).test(route.path) : !shouldBeActiveInSubpath.value ? route.path === config.value.link : route.path.startsWith(config.value.link));
    const renderIcon2 = (item) => item.icon ? h$3("i", {
      class: `icon ${iconPrefix.value}${item.icon}`
    }) : null;
    return () => {
      var _a2, _b2;
      return renderRouterLink.value ? h$3(RouterLink, __spreadProps(__spreadValues({
        to: config.value.link,
        ariaLabel: linkAriaLabel.value
      }, attrs), {
        class: ["nav-link", { active: isActive.value }, attrs.class],
        onFocusOut: () => emit("focusout")
      }), () => {
        var _a3, _b3, _c;
        return ((_a3 = slots.default) === null || _a3 === void 0 ? void 0 : _a3.call(slots)) || [
          ((_b3 = slots.before) === null || _b3 === void 0 ? void 0 : _b3.call(slots)) || renderIcon2(config.value),
          config.value.text,
          (_c = slots.after) === null || _c === void 0 ? void 0 : _c.call(slots)
        ];
      }) : h$3("a", __spreadProps(__spreadValues({
        href: config.value.link,
        rel: anchorRel.value,
        target: linkTarget.value,
        ariaLabel: linkAriaLabel.value
      }, attrs), {
        class: ["nav-link", attrs.class],
        onFocusOut: () => emit("focusout")
      }), [
        ((_a2 = slots.before) === null || _a2 === void 0 ? void 0 : _a2.call(slots)) || renderIcon2(config.value),
        config.value.text,
        h$3(ExternalLinkIcon),
        (_b2 = slots.after) === null || _b2 === void 0 ? void 0 : _b2.call(slots)
      ]);
    };
  }
});
const isActiveSidebarItem = (route, item, exact = false) => {
  if (F(route, item.link))
    return true;
  if (item.children && !exact)
    return item.children.some((child) => isActiveSidebarItem(route, child));
  return false;
};
const renderIcon = (icon) => icon ? h$3("i", {
  class: ["icon", `${useIconPrefix().value}${icon}`]
}) : null;
const renderItem = (config, props) => config.link ? h$3(AutoLink, __spreadProps(__spreadValues({}, props), {
  config
})) : h$3("p", props, [renderIcon(config.icon), config.text]);
const renderChildren = (children) => {
  const route = useRoute();
  if (!children)
    return null;
  return h$3("ul", { class: "sidebar-sub-headers" }, children.map((child) => {
    const active = isActiveSidebarItem(route, child, true);
    return h$3("li", { class: "sidebar-sub-header" }, [
      renderItem(child, {
        class: ["sidebar-link", "heading", { active }]
      }),
      renderChildren(child.children)
    ]);
  }));
};
const sidebarData = { "/foo/": ["README.md", "one.md", "two.md"], "/bar/": ["README.md", { "text": "child", "collapsable": true, "prefix": "child/", "children": ["README.md", "five.md", "six.md"] }, "four.md", "three.md"] };
const resolvePrefix = (prefix2 = "", path = "") => path.startsWith("/") ? path : `${ensureEndingSlash(prefix2)}${path}`;
const headerToSidebarItem = (header, headerDepth) => {
  const page2 = usePageData();
  return {
    type: "heading",
    text: header.title,
    link: `${page2.value.path}#${header.slug}`,
    children: headersToSidebarItemChildren(header.children, headerDepth)
  };
};
const headersToSidebarItemChildren = (headers, headerDepth) => headerDepth > 0 ? headers.map((header) => headerToSidebarItem(header, headerDepth - 1)) : [];
const resolveHeadingSidebarItems = (headerDepth) => {
  const page2 = usePageData();
  return headersToSidebarItemChildren(page2.value.headers, headerDepth);
};
const resolveArraySidebarItems = (sidebarConfig, headerDepth, prefix2 = "") => {
  const page2 = usePageData();
  const route = useRoute();
  if (!Array.isArray(sidebarConfig)) {
    console.warn(`Expecting array, but getting invalid sidebar config${prefix2 ? ` under ${prefix2}` : ""} with:`, sidebarConfig);
    return [];
  }
  const handleChildItem = (item, pathPrefix = prefix2) => {
    var _a2;
    const childItem = isString$1(item) ? useAutoLink(resolvePrefix(pathPrefix, item)) : item.link ? __spreadValues(__spreadValues({}, item), !isLinkExternal(item.link) ? { link: useAutoLink(resolvePrefix(pathPrefix, item.link)).link } : {}) : item;
    if ("children" in childItem) {
      const prefix3 = resolvePrefix(pathPrefix, childItem.prefix);
      const children = childItem.children === "structure" ? sidebarData[prefix3] : childItem.children;
      if (!Array.isArray(children)) {
        console.warn(`Expecting array, but getting invalid sidebar config${prefix3 ? ` under ${prefix3}` : ""} with:`, children);
        return __spreadProps(__spreadValues({
          type: "group"
        }, childItem), {
          children: []
        });
      }
      return __spreadProps(__spreadValues({
        type: "group"
      }, childItem), {
        children: children.map((item2) => handleChildItem(item2, prefix3))
      });
    }
    return __spreadProps(__spreadValues({
      type: "page"
    }, childItem), {
      children: childItem.link === route.path ? headersToSidebarItemChildren(((_a2 = page2.value.headers[0]) === null || _a2 === void 0 ? void 0 : _a2.level) === 1 ? page2.value.headers[0].children : page2.value.headers, headerDepth) : []
    });
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, headerDepth) => {
  const route = useRoute();
  const keys = Object.keys(sidebarConfig).sort((x2, y2) => y2.length - x2.length);
  for (const base2 of keys) {
    if (decodeURI(route.path).startsWith(base2)) {
      const matchedConfig = sidebarConfig[base2];
      return matchedConfig ? resolveArraySidebarItems(matchedConfig === "structure" ? sidebarData[base2] : matchedConfig, headerDepth, base2) : [];
    }
  }
  console.warn(`${route.path} do not have valid sidebar config`);
  return [];
};
const resolveSidebarItems = () => {
  var _a2, _b2, _c, _d;
  const routeLocale = useRouteLocale();
  const frontmatter = usePageFrontmatter();
  const themeLocale = useThemeLocaleData();
  const sidebarConfig = frontmatter.value.home ? false : (_b2 = (_a2 = frontmatter.value.sidebar) !== null && _a2 !== void 0 ? _a2 : themeLocale.value.sidebar) !== null && _b2 !== void 0 ? _b2 : "structure";
  const headerDepth = (_d = (_c = frontmatter.value.headerDepth) !== null && _c !== void 0 ? _c : themeLocale.value.headerDepth) !== null && _d !== void 0 ? _d : 2;
  return sidebarConfig === false ? [] : sidebarConfig === "heading" ? resolveHeadingSidebarItems(headerDepth) : sidebarConfig === "structure" ? resolveArraySidebarItems(sidebarData[routeLocale.value], headerDepth, routeLocale.value) : isArray(sidebarConfig) ? resolveArraySidebarItems(sidebarConfig, headerDepth) : isPlainObject(sidebarConfig) ? resolveMultiSidebarItems(sidebarConfig, headerDepth) : [];
};
const sidebarItemsSymbol = Symbol.for("sidebarItems");
const setupSidebarItems = () => {
  const sidebarItems = computed(() => resolveSidebarItems());
  provide(sidebarItemsSymbol, sidebarItems);
};
const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
var common = "";
var CommonWrapper = defineComponent({
  name: "CommonWrapper",
  props: {
    navbar: {
      type: Boolean,
      default: true
    },
    sidebar: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { slots }) {
    const router = useRouter();
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const { isGlobalEncrypted, validateGlobalToken } = useGlobalEcrypt();
    const isMobile = useMobile();
    const hideNavbar = ref(false);
    const enableNavbar = computed(() => {
      if (props.navbar === false)
        return false;
      if (frontmatter.value.navbar === false || themeLocale.value.navbar == false)
        return false;
      return Boolean(page2.value.title || themeLocale.value.logo || themeLocale.value.repo || themeLocale.value.navbar);
    });
    const sidebarItems = useSidebarItems();
    const enableSidebar = computed(() => {
      if (props.sidebar === false)
        return false;
      return frontmatter.value.sidebar !== false && sidebarItems.value.length !== 0 && !frontmatter.value.home;
    });
    const isMobileSidebarOpen = ref(false);
    const isDesktopSidebarOpen = ref(true);
    const toggleMobileSidebar = (value2) => {
      isMobileSidebarOpen.value = typeof value2 === "boolean" ? value2 : !isMobileSidebarOpen.value;
    };
    const toggleDesktopSidebar = (value2) => {
      isDesktopSidebarOpen.value = typeof value2 === "boolean" ? value2 : !isDesktopSidebarOpen.value;
    };
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e) => {
      touchStart.x = e.changedTouches[0].clientX;
      touchStart.y = e.changedTouches[0].clientY;
    };
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStart.x;
      const dy = e.changedTouches[0].clientY - touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) * 1.5 && Math.abs(dx) > 40) {
        if (dx > 0 && touchStart.x <= 80)
          toggleMobileSidebar(true);
        else
          toggleMobileSidebar(false);
      }
    };
    const enableToc = computed(() => frontmatter.value.toc || themeLocale.value.toc !== false && frontmatter.value.toc !== false);
    const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let unregisterRouterHook;
    let lastDistance = 0;
    const scrollHandler = lodash_throttle(() => {
      const distance = getScrollTop();
      if (lastDistance < distance && distance > 58) {
        if (!isMobileSidebarOpen.value)
          hideNavbar.value = true;
      } else
        hideNavbar.value = false;
      lastDistance = distance;
    }, 300);
    watch(isMobile, (value2) => {
      if (!value2)
        toggleMobileSidebar(false);
    });
    onMounted(() => {
      unregisterRouterHook = router.afterEach(() => {
        toggleMobileSidebar(false);
      });
      window.addEventListener("scroll", scrollHandler);
    });
    onUnmounted(() => {
      unregisterRouterHook();
      window.removeEventListener("scroll", scrollHandler);
    });
    return () => {
      var _a2;
      return h$3("div", {
        class: [
          "theme-container",
          {
            "no-navbar": !enableNavbar.value,
            "no-sidebar": !enableSidebar.value && !(slots.sidebar || slots.sidebarTop || slots.sidebarBottom),
            "has-toc": enableToc.value,
            "hide-navbar": hideNavbar.value,
            "sidebar-open": isMobile.value ? isMobileSidebarOpen.value : isDesktopSidebarOpen.value
          },
          frontmatter.value.containerClass || ""
        ],
        onTouchStart,
        onTouchEnd
      }, isGlobalEncrypted.value ? h$3(PasswordModal, { full: true, onVerify: validateGlobalToken }) : [
        enableNavbar.value ? h$3(resolveComponent("Navbar"), { onToggleSidebar: () => toggleMobileSidebar() }, {
          left: () => {
            var _a3;
            return (_a3 = slots.navbarLeft) === null || _a3 === void 0 ? void 0 : _a3.call(slots);
          },
          center: () => {
            var _a3;
            return (_a3 = slots.navbarCenter) === null || _a3 === void 0 ? void 0 : _a3.call(slots);
          },
          right: () => {
            var _a3;
            return (_a3 = slots.navbarRight) === null || _a3 === void 0 ? void 0 : _a3.call(slots);
          },
          screenTop: () => {
            var _a3;
            return (_a3 = slots.navScreenTop) === null || _a3 === void 0 ? void 0 : _a3.call(slots);
          },
          screenBottom: () => {
            var _a3;
            return (_a3 = slots.navScreenBottom) === null || _a3 === void 0 ? void 0 : _a3.call(slots);
          }
        }) : null,
        h$3(Transition, { name: "fade" }, () => isMobileSidebarOpen.value ? h$3("div", {
          class: "sidebar-mask",
          onClick: () => toggleMobileSidebar(false)
        }) : null),
        h$3(Transition, { name: "fade" }, () => isMobile.value ? null : h$3("div", {
          class: "toggle-sidebar-wrapper",
          onClick: () => toggleDesktopSidebar()
        }, h$3("span", {
          class: [
            "arrow",
            isDesktopSidebarOpen.value ? "left" : "right"
          ]
        }))),
        h$3(resolveComponent("Sidebar"), {}, __spreadProps(__spreadValues({}, slots.sidebar ? { default: () => {
          var _a3;
          return (_a3 = slots.sidebar) === null || _a3 === void 0 ? void 0 : _a3.call(slots);
        } } : {}), {
          top: () => {
            var _a3;
            return (_a3 = slots.sidebarTop) === null || _a3 === void 0 ? void 0 : _a3.call(slots);
          },
          bottom: () => {
            var _a3;
            return (_a3 = slots.sidebarBottom) === null || _a3 === void 0 ? void 0 : _a3.call(slots);
          }
        })),
        (_a2 = slots.default) === null || _a2 === void 0 ? void 0 : _a2.call(slots),
        h$3(PageFooter)
      ]);
    };
  }
});
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = defineComponent({
  name: "DropTransition",
  components: {
    Transition,
    TransitionGroup
  },
  props: {
    type: { type: String, default: "single" },
    delay: { type: Number, default: 0 },
    duration: { type: Number, default: 0.25 }
  },
  setup(props) {
    const setStyle2 = (item) => {
      item.style.transition = `transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`;
      item.style.transform = "translateY(-20px)";
      item.style.opacity = "0";
    };
    const unsetStyle = (item) => {
      item.style.transform = "translateY(0)";
      item.style.opacity = "1";
    };
    return {
      setStyle: setStyle2,
      unsetStyle
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.type === "single" ? (openBlock(), createBlock(Transition, {
      key: 0,
      name: "drop",
      appear: "",
      onAppear: _ctx.setStyle,
      onAfterAppear: _ctx.unsetStyle,
      onEnter: _ctx.setStyle,
      onAfterEnter: _ctx.unsetStyle,
      onBeforeLeave: _ctx.setStyle
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8, ["onAppear", "onAfterAppear", "onEnter", "onAfterEnter", "onBeforeLeave"])) : createCommentVNode("", true),
    _ctx.type === "group" ? (openBlock(), createBlock(TransitionGroup, {
      key: 1,
      name: "drop",
      appear: "",
      onAppear: _ctx.setStyle,
      onAfterAppear: _ctx.unsetStyle,
      onEnter: _ctx.setStyle,
      onAfterEnter: _ctx.unsetStyle,
      onBeforeLeave: _ctx.setStyle
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8, ["onAppear", "onAfterAppear", "onEnter", "onAfterEnter", "onBeforeLeave"])) : createCommentVNode("", true)
  ], 64);
}
var DropTransition = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "DropTransition.vue"]]);
var fadeSlideY = "";
var FadeSlideY = defineComponent({
  name: "FadeSlideY",
  setup(_props, { slots }) {
    const scrollPromise2 = useScrollPromise();
    const onBeforeEnter = scrollPromise2.resolve;
    const onBeforeLeave = scrollPromise2.pending;
    return () => h$3(Transition, {
      name: "fade-slide-y",
      mode: "out-in",
      onBeforeEnter,
      onBeforeLeave
    }, () => {
      var _a2;
      return (_a2 = slots.default) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
    });
  }
});
var HomeFeatures = defineComponent({
  name: "HomeFeatures",
  setup() {
    const iconPrefix = useIconPrefix();
    const frontmatter = usePageFrontmatter();
    const features = computed(() => {
      if (isArray(frontmatter.value.features))
        return frontmatter.value.features;
      return [];
    });
    const getIcon = (icon = "") => {
      return isLinkHttp(icon) ? h$3("img", { class: "icon", src: icon }) : icon.startsWith("/") ? h$3("img", { class: "icon", src: withBase(icon) }) : icon ? h$3("span", {
        class: ["icon", `${iconPrefix.value}${icon}`]
      }) : null;
    };
    return () => {
      var _a2;
      return features.value.length ? h$3("div", { class: "features" }, (_a2 = frontmatter.value.features) === null || _a2 === void 0 ? void 0 : _a2.map((feature) => {
        const children = [
          getIcon(feature.icon),
          h$3("h2", { innerHTML: feature.title }),
          h$3("p", { innerHTML: feature.details })
        ];
        return feature.link ? isLinkExternal(feature.link) ? h$3("a", {
          class: "feature link",
          href: feature.link,
          role: "navigation",
          target: "_blank"
        }, children) : h$3(RouterLink, {
          class: "feature link",
          to: feature.link,
          role: "navigation"
        }, () => children) : h$3("div", { class: "feature" }, children);
      })) : null;
    };
  }
});
const MarkdownContent = ({ custom }) => h$3("div", { class: ["theme-hope-content", { custom }] }, h$3(Content));
MarkdownContent.displayName = "MarkdownContent";
var HomeHero = defineComponent({
  name: "HomeHero",
  setup() {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const heroText = computed(() => {
      if (frontmatter.value.heroText === null)
        return null;
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const tagline = computed(() => {
      if (frontmatter.value.tagline === null)
        return null;
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const heroImage = computed(() => {
      if (!frontmatter.value.heroImage)
        return null;
      return withBase(frontmatter.value.heroImage);
    });
    const heroImageDark = computed(() => {
      if (!frontmatter.value.heroImageDark)
        return null;
      return withBase(frontmatter.value.heroImageDark);
    });
    const heroAlt = computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const actions = computed(() => {
      if (!isArray(frontmatter.value.actions))
        return [];
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    return () => h$3("header", { class: "hero" }, [
      h$3(DropTransition, { type: "group" }, () => [
        heroImage.value ? h$3("img", {
          key: "light",
          class: { light: heroImageDark.value },
          src: heroImage.value,
          alt: heroAlt
        }) : null,
        heroImageDark.value ? h$3("img", {
          key: "dark",
          class: "dark",
          src: heroImageDark.value,
          alt: heroAlt
        }) : null
      ]),
      h$3("div", { class: "hero-info" }, [
        heroText.value ? h$3(DropTransition, { delay: 0.04 }, () => h$3("h1", { id: "main-title" }, heroText.value)) : null,
        tagline.value ? h$3(DropTransition, { delay: 0.08 }, () => h$3("p", { class: "description" }, tagline.value)) : null,
        actions.value.length ? h$3(DropTransition, { delay: 0.12 }, () => h$3("p", { class: "actions" }, actions.value.map((action) => h$3(AutoLink, {
          class: ["action-button", action.type],
          config: action
        })))) : null
      ])
    ]);
  }
});
var homePage = "";
var HomePage = defineComponent({
  name: "HopePage",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    return () => {
      var _a2, _b2, _c;
      return h$3("main", {
        class: "home project",
        id: "main-content",
        "aria-labelledby": frontmatter.value.heroText === null ? void 0 : "main-title"
      }, [
        (_a2 = slots.top) === null || _a2 === void 0 ? void 0 : _a2.call(slots),
        h$3(HomeHero),
        h$3(DropTransition, { delay: 0.16 }, () => h$3(HomeFeatures)),
        (_b2 = slots.center) === null || _b2 === void 0 ? void 0 : _b2.call(slots),
        h$3(DropTransition, { delay: 0.24 }, () => h$3(MarkdownContent, { custom: true })),
        (_c = slots.bottom) === null || _c === void 0 ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const EditIcon = () => h$3(x, { name: "edit" }, () => [
  h$3("path", {
    d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"
  }),
  h$3("path", {
    d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"
  })
]);
EditIcon.displayName = "EditIcon";
const _sfc_main = defineComponent({
  name: "Page404Icon"
});
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  class: "page-404-icon",
  viewBox: "0 0 178 130"
};
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<defs><linearGradient id="b" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e9e9e9"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="c" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dcdcdc"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="d" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#f1f1f1"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="e" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dedede"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="f" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e8e8e8"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="g" x1=".213" y1="1.265" x2=".846" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"></stop><stop offset="1" stop-color="#f5f5f5"></stop></linearGradient><linearGradient id="h" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#c5c5c5"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="i" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#acacac"></stop><stop offset="1" stop-color="#f2f2f2" stop-opacity=".388"></stop></linearGradient><clipPath id="a"><path transform="translate(744 1111)" fill="none" d="M0 0h178v130H0z"></path></clipPath></defs><g transform="translate(-744 -1111)" clip-path="url(#a)"><g><path d="M0 10.795 36.6 0v93.779L0 104.574z" transform="translate(772.466 1122.142)" fill="url(#b)"></path><path d="M-8.492 10.642-26.361-.469v93.78l17.868 11.111z" transform="translate(780.958 1122.293)" fill="url(#c)"></path><path d="M-8.5 5.55 28.106-5.3 10.228-16.437l-36.6 10.845z" transform="translate(780.963 1127.438)" fill="url(#d)"></path><path d="M0 10.539 35.741 0v91.56L0 102.1z" transform="translate(870.158 1123.617)" fill="url(#d)"></path><path d="M-8.913 10.38-26.361-.469v91.562l17.448 10.848z" transform="translate(879.071 1123.775)" fill="url(#e)"></path><path d="m-8.918 5.032 35.741-10.59L9.366-16.437-26.375-5.848z" transform="translate(879.076 1129.175)" fill="url(#d)"></path><path d="M0 9.137 30.839 0v79.381L0 88.519z" transform="translate(799.678 1151.579)" fill="url(#f)"></path><path d="m-11.306 8.936-15.054-9.4v79.377l15.054 9.4z" transform="translate(810.985 1151.78)" fill="url(#c)"></path><path d="M-11.313 2.087 19.526-7.05 4.464-16.437-26.375-7.3z" transform="translate(810.991 1158.63)" fill="url(#g)"></path><path d="M178 53H0a51.361 51.361 0 0 1 10.453-20.952 74.532 74.532 0 0 1 19.742-16.811A103.3 103.3 0 0 1 57.089 4.058a127.515 127.515 0 0 1 63.823 0 103.3 103.3 0 0 1 26.894 11.179 74.532 74.532 0 0 1 19.741 16.811A51.363 51.363 0 0 1 178 53z" transform="translate(744 1187.549)" fill="url(#h)"></path><path d="m814.529 1199.586-1.272 1.212h2.3l1.2-1.212z" fill="#cbcbcb"></path><path d="m816.725 1194.909-1.272 1.212h2.3l1.263-1.212z" fill="#cbcbcb"></path><path d="m863.284 1199.585-1.272 1.212h2.3l1.2-1.212z" fill="#cbcbcb"></path><path d="m865.519 1194.9-1.272 1.212h2.3l1.263-1.212z" fill="#cbcbcb"></path><path d="m799.527 1191.21 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#c6c6c6"></path><path d="m798.306 1192.431 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#b2b2b2"></path><path d="m-27.694-19.435 10.182 14.517h4.381l-9.931-14.352h14.876v-2.606h-19.508zm13.081 6.273h4.152v-11.8h-4.152zM6.115-25.156q-4.256 0-6.457 1.5a4.8 4.8 0 0 0-2.2 4.191v9.113a4.784 4.784 0 0 0 2.212 4.2 11.511 11.511 0 0 0 6.447 1.5q4.256 0 6.457-1.489a4.786 4.786 0 0 0 2.2-4.2v-9.113a4.784 4.784 0 0 0-2.212-4.2 11.511 11.511 0 0 0-6.447-1.502zm0 2.675a5.705 5.705 0 0 1 3.328.779 2.6 2.6 0 0 1 1.074 2.24v9.113a2.607 2.607 0 0 1-1.064 2.24 5.7 5.7 0 0 1-3.338.779 5.7 5.7 0 0 1-3.338-.779 2.607 2.607 0 0 1-1.064-2.24v-9.113A2.6 2.6 0 0 1 2.788-21.7a5.705 5.705 0 0 1 3.327-.782zm14.927 3.047L31.224-4.918h4.381l-9.931-14.351H40.55v-2.606H21.043zm13.081 6.273h4.152v-11.8h-4.151z" transform="translate(826 1226.245)" opacity=".32" fill="url(#i)"></path><g fill="#e6e6e6"><path d="m858.428 1169.23-1.2 1.259h4.388l1.178-1.259z"></path><path d="m802.944 1192.187 1.288-1.375h7.143v1.375zm8.415-9.25 1.273-1.234h4.15l-1.235 1.234zm-2.855-12.469 1.198-1.259h4.367l-1.178 1.259z"></path><path d="m861.362 1181.678-1.27 1.3h4.188l1.236-1.3z"></path><path d="m865.519 1190.9-1.27 1.3h2.3l1.162-1.3z"></path><path d="m852.838 1190.791-1.207 1.508h8.447v-1.508z"></path></g></g></g>', 2);
const _hoisted_4 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_4);
}
var Page404Icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Page404.vue"]]);
var pageMeta = "";
var PageMeta = defineComponent({
  name: "PageMeta",
  setup() {
    const themeLocale = useThemeLocaleData();
    const editLink = useEditLink();
    const updateTime = useUpdateTime();
    const contributors = useContributors();
    return () => {
      const { metaLocales } = themeLocale.value;
      return h$3("footer", { class: "page-meta" }, [
        editLink.value ? h$3("div", { class: "meta-item edit-link" }, h$3(AutoLink, { class: "label", config: editLink.value }, { before: () => h$3(EditIcon) })) : null,
        updateTime.value ? h$3("div", { class: "meta-item update-time" }, [
          h$3("span", { class: "label" }, `${metaLocales.lastUpdated}: `),
          h$3("span", { class: "info" }, updateTime.value)
        ]) : null,
        contributors.value && contributors.value.length ? h$3("div", { class: "meta-item contributors" }, [
          h$3("span", { class: "label" }, `${metaLocales.contributors}: `),
          contributors.value.map(({ email, name }, index2) => [
            h$3("span", { class: "contributor", title: `email: ${email}` }, name),
            index2 !== contributors.value.length - 1 ? "," : ""
          ])
        ]) : null
      ]);
    };
  }
});
var pageNav = "";
const resolveFromFrontmatterConfig = (conf) => {
  if (conf === false)
    return null;
  if (isString$1(conf))
    return useAutoLink(conf);
  if (isPlainObject(conf))
    return conf;
  return false;
};
const resolveFromSidebarItems = (sidebarItems, currentPath, offset2) => {
  const index2 = sidebarItems.findIndex((item) => item.link === currentPath);
  if (index2 !== -1) {
    const targetItem = sidebarItems[index2 + offset2];
    if (!(targetItem === null || targetItem === void 0 ? void 0 : targetItem.link))
      return null;
    return targetItem;
  }
  for (const item of sidebarItems)
    if (item.children) {
      const childResult = resolveFromSidebarItems(item.children, currentPath, offset2);
      if (childResult)
        return childResult;
    }
  return null;
};
var PageNav = defineComponent({
  name: "PageNav",
  setup() {
    const themeLocale = useThemeLocaleData();
    const iconPrefix = useIconPrefix();
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = useRoute();
    const navigate = useNavigate();
    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      return prevConfig !== false ? prevConfig : resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      return nextConfig !== false ? nextConfig : resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    const keyboardListener = (event) => {
      if (event.altKey) {
        if (event.key === "ArrowRight") {
          if (nextNavLink.value) {
            navigate(nextNavLink.value.link);
            event.preventDefault();
          }
        } else if (event.key === "ArrowLeft") {
          if (prevNavLink.value) {
            navigate(prevNavLink.value.link);
            event.preventDefault();
          }
        }
      }
    };
    onMounted(() => {
      window.addEventListener("keydown", keyboardListener);
    });
    onUnmounted(() => {
      window.removeEventListener("keydown", keyboardListener);
    });
    return () => prevNavLink.value || nextNavLink.value ? h$3("nav", { class: "page-nav" }, [
      prevNavLink.value ? h$3(AutoLink, { class: "prev", config: prevNavLink.value }, () => {
        var _a2, _b2;
        return [
          h$3("div", { class: "hint" }, [
            h$3("span", { class: "arrow left" }),
            themeLocale.value.metaLocales.prev
          ]),
          h$3("div", { class: "link" }, [
            ((_a2 = prevNavLink.value) === null || _a2 === void 0 ? void 0 : _a2.icon) ? h$3("i", {
              class: `icon ${iconPrefix.value}${prevNavLink.value.icon}`
            }) : null,
            (_b2 = prevNavLink.value) === null || _b2 === void 0 ? void 0 : _b2.text
          ])
        ];
      }) : null,
      nextNavLink.value ? h$3(AutoLink, { class: "next", config: nextNavLink.value }, () => {
        var _a2, _b2;
        return [
          h$3("div", { class: "hint" }, [
            themeLocale.value.metaLocales.next,
            h$3("span", { class: "arrow right" })
          ]),
          h$3("div", { class: "link" }, [
            (_a2 = nextNavLink.value) === null || _a2 === void 0 ? void 0 : _a2.text,
            ((_b2 = nextNavLink.value) === null || _b2 === void 0 ? void 0 : _b2.icon) ? h$3("i", {
              class: `icon ${iconPrefix.value}${nextNavLink.value.icon}`
            }) : null
          ])
        ];
      }) : null
    ]) : null;
  }
});
var pageTitle = "";
var PageTitle = defineComponent({
  name: "PageTitle",
  setup() {
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const pageInfoProps = usePageInfo();
    const themeLocale = useThemeLocaleData();
    const iconPrefix = useIconPrefix();
    return () => h$3("div", { class: "page-title" }, [
      h$3("h1", [
        themeLocale.value.titleIcon !== false && frontmatter.value.icon ? h$3("i", {
          class: ["icon", `${iconPrefix.value}${frontmatter.value.icon}`]
        }) : null,
        page2.value.title
      ]),
      h$3(resolveComponent("ArticleInfo"), __spreadValues({}, pageInfoProps)),
      h$3("hr")
    ]);
  }
});
const darkModeSymbol = Symbol.for("darkMode");
const useDarkMode = () => {
  const darkmode = inject(darkModeSymbol);
  if (!darkmode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return darkmode;
};
const updateDarkModeAttr = (isDarkMode) => {
  const update = (isDark = isDarkMode.value) => {
    const html = window === null || window === void 0 ? void 0 : window.document.querySelector("html");
    html === null || html === void 0 ? void 0 : html.setAttribute("data-theme", isDark ? "dark" : "light");
  };
  onMounted(() => {
    watch(isDarkMode, update, { immediate: true });
  });
  onUnmounted(() => update());
};
const setupDarkMode = () => {
  const themeData2 = useThemeData();
  const isDarkPreferred = usePreferredDark();
  const darkmodeStorage = useStorage("vuepress-theme-hope-scheme", "auto");
  const isDarkMode = computed(() => {
    const { darkmode } = themeData2.value;
    return darkmode === "disable" ? false : darkmode === "force-dark" ? true : darkmode === "auto" ? isDarkPreferred.value : darkmode === "switch" ? darkmodeStorage.value === "dark" : darkmodeStorage.value === "dark" || darkmodeStorage.value === "auto" && isDarkPreferred.value;
  });
  provide(darkModeSymbol, { isDarkMode, status: darkmodeStorage });
  updateDarkModeAttr(isDarkMode);
};
var page$1 = "";
var NormalPage = defineComponent({
  name: "NormalPage",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const { isDarkMode } = useDarkMode();
    const iconPrefix = useIconPrefix();
    const themeLocale = useThemeLocaleData();
    const { isEncrypted, validateToken } = usePathEncrypt();
    const breadcrumbEnable = computed(() => frontmatter.value.breadcrumb || frontmatter.value.breadcrumb !== false && themeLocale.value.breadcrumb !== false);
    const breadcrumbIconEnable = computed(() => frontmatter.value.breadcrumbIcon || frontmatter.value.breadcrumbIcon !== false && themeLocale.value.breadcrumbIcon !== false);
    const tocEnable = computed(() => frontmatter.value.toc || frontmatter.value.toc !== false && themeLocale.value.toc !== false);
    return () => {
      var _a2, _b2, _c, _d, _e;
      return h$3("main", { class: "page", id: "main-content" }, isEncrypted.value ? h$3(PasswordModal, { onVerify: validateToken }) : [
        (_a2 = slots.top) === null || _a2 === void 0 ? void 0 : _a2.call(slots),
        h$3(resolveComponent("BreadCrumb"), {
          enable: breadcrumbEnable.value,
          icon: breadcrumbIconEnable.value,
          iconPrefix: iconPrefix.value
        }),
        h$3(PageTitle),
        tocEnable.value ? h$3(resolveComponent("TOC"), {
          headerDepth: (_b2 = frontmatter.value.headerDepth) !== null && _b2 !== void 0 ? _b2 : themeLocale.value.headerDepth
        }) : null,
        (_c = slots.contentBefore) === null || _c === void 0 ? void 0 : _c.call(slots),
        h$3(MarkdownContent),
        (_d = slots.contentAfter) === null || _d === void 0 ? void 0 : _d.call(slots),
        h$3(PageMeta),
        h$3(PageNav),
        H$1("CommentService") ? h$3(resolveComponent("CommentService"), {
          darkmode: isDarkMode.value
        }) : null,
        (_e = slots.bottom) === null || _e === void 0 ? void 0 : _e.call(slots)
      ]);
    };
  }
});
var index = "";
var clientAppEnhance6 = defineClientAppEnhance(({ app, router }) => {
  app.component("CommonWrapper", CommonWrapper);
  app.component("HomePage", HomePage);
  app.component("NormalPage", NormalPage);
  const scrollBehavior = router.options.scrollBehavior;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
var navbarBrand = "";
var NavbarBrand = defineComponent({
  name: "NavbarBrand",
  setup(_2, { slots }) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const siteBrandLink = computed(() => themeLocale.value.home || routeLocale.value);
    const siteBrandTitle = computed(() => siteLocale.value.title);
    const siteBrandLogo = computed(() => themeLocale.value.logo ? withBase(themeLocale.value.logo) : null);
    const siteBrandLogoDark = computed(() => themeLocale.value.logoDark ? withBase(themeLocale.value.logoDark) : null);
    return () => h$3(RouterLink, { to: siteBrandLink.value, class: "home-link" }, () => {
      var _a2;
      return [
        siteBrandLogo.value ? h$3("img", {
          class: ["logo", { light: Boolean(siteBrandLogoDark.value) }],
          src: siteBrandLogo.value,
          alt: siteBrandTitle.value
        }) : null,
        siteBrandLogoDark.value ? h$3("img", {
          class: ["logo dark", { light: Boolean(siteBrandLogoDark) }],
          src: siteBrandLogo.value,
          alt: siteBrandTitle.value
        }) : null,
        siteBrandTitle.value ? h$3("span", { class: ["site-name", { "hide-in-pad": siteBrandLogo }] }, siteBrandTitle.value) : null,
        (_a2 = slots.default) === null || _a2 === void 0 ? void 0 : _a2.call(slots)
      ];
    });
  }
});
var dropdownLink = "";
var DropdownLink = defineComponent({
  name: "NavbarDropdownLink",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  setup(props, { slots }) {
    const route = useRoute();
    const iconPrefix = useIconPrefix();
    const config = toRef(props, "config");
    const dropdownAriaLabel = computed(() => config.value.ariaLabel || config.value.text);
    const open = ref(false);
    watch(() => route.path, () => {
      open.value = false;
    });
    const handleDropdown = (event) => {
      const isTriggerByTab = event.detail === 0;
      if (isTriggerByTab)
        open.value = !open.value;
    };
    const isLastItemOfArray = (item, arr) => arr[arr.length - 1] === item;
    return () => {
      var _a2;
      return h$3("div", { class: ["dropdown-wrapper", { open: open.value }] }, [
        h$3("button", {
          class: "dropdown-title",
          type: "button",
          ariaLabel: dropdownAriaLabel.value,
          onClick: handleDropdown
        }, [
          ((_a2 = slots.title) === null || _a2 === void 0 ? void 0 : _a2.call(slots)) || h$3("span", { class: "title" }, [
            config.value.icon ? h$3("i", {
              class: `icon ${iconPrefix.value}${config.value.icon}`
            }) : null,
            props.config.text
          ]),
          h$3("span", { class: "arrow" }),
          h$3("ul", { class: "nav-dropdown" }, config.value.children.map((child) => h$3("li", { class: "dropdown-item" }, "children" in child ? [
            h$3("h4", { class: "dropdown-subtitle" }, child.link ? h$3(AutoLink, {
              config: child,
              onFocusout: () => {
                if (isLastItemOfArray(child, config.value.children) && child.children.length === 0)
                  open.value = false;
              }
            }) : h$3("span", child.text)),
            h$3("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild) => h$3("li", { class: "dropdown-subitem" }, h$3(AutoLink, {
              config: grandchild,
              onFocusout: () => {
                if (isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, config.value.children))
                  open.value = false;
              }
            }))))
          ] : h$3(AutoLink, {
            config: child,
            onFocusout: () => {
              if (isLastItemOfArray(child, config.value.children))
                open.value = false;
            }
          }))))
        ])
      ]);
    };
  }
});
const resolveNavbarItem = (item, prefix2 = "") => {
  if (isString$1(item))
    return useAutoLink(`${prefix2}${item}`);
  if ("children" in item)
    return __spreadProps(__spreadValues(__spreadValues({}, item), item.link && !isLinkExternal(item.link) ? useAutoLink(`${prefix2}${item.link}`) : {}), {
      children: item.children.map((child) => resolveNavbarItem(child, `${prefix2}${item.prefix || ""}`))
    });
  return __spreadProps(__spreadValues({}, item), {
    link: isLinkExternal(item.link) ? item.link : useAutoLink(`${prefix2}${item.link}`).link
  });
};
const useNavbarConfig = () => computed(() => (useThemeLocaleData().value.navbar || []).map((item) => resolveNavbarItem(item)));
const useNavbarLanguageDropdown = () => {
  const router = useRouter();
  const routeLocale = useRouteLocale();
  const siteLocale = useSiteLocaleData();
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return computed(() => {
    const localePaths = Object.keys(siteLocale.value.locales);
    if (localePaths.length < 2)
      return null;
    const currentPath = router.currentRoute.value.path;
    const { navbarLocales } = themeLocale.value;
    const languageDropdown = {
      text: navbarLocales === null || navbarLocales === void 0 ? void 0 : navbarLocales.selectLangText,
      ariaLabel: navbarLocales === null || navbarLocales === void 0 ? void 0 : navbarLocales.selectLangAriaLabel,
      children: localePaths.map((targetLocalePath) => {
        var _a2, _b2, _c, _d, _e, _f, _g;
        const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) === null || _a2 === void 0 ? void 0 : _a2[targetLocalePath]) !== null && _b2 !== void 0 ? _b2 : {};
        const targetThemeLocale = (_d = (_c = themeData2.value.locales) === null || _c === void 0 ? void 0 : _c[targetLocalePath]) !== null && _d !== void 0 ? _d : {};
        const targetLang = targetSiteLocale.lang || "";
        const text = (_f = (_e = targetThemeLocale.navbarLocales) === null || _e === void 0 ? void 0 : _e.langName) !== null && _f !== void 0 ? _f : targetLang;
        let link;
        if (targetLang === siteLocale.value.lang) {
          link = currentPath;
        } else {
          const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
          link = router.getRoutes().some((item) => item.path === targetLocalePage) ? targetLocalePage : (_g = targetThemeLocale.home) !== null && _g !== void 0 ? _g : targetLocalePath;
        }
        return {
          text,
          link
        };
      })
    };
    return languageDropdown;
  });
};
const useNavbarRepo = () => {
  const themeLocale = useThemeLocaleData();
  const repo = computed(() => themeLocale.value.repo);
  const repoType = computed(() => repo.value ? resolveRepoType(repo.value) : null);
  const repoLink = computed(() => {
    if (repo.value && !isLinkHttp(repo.value))
      return `https://github.com/${repo.value}`;
    return repo.value;
  });
  const repoLabel = computed(() => {
    if (!repoLink.value)
      return null;
    if (themeLocale.value.repoLabel)
      return themeLocale.value.repoLabel;
    if (repoType.value === null)
      return "Source";
    return repoType.value;
  });
  return computed(() => {
    if (!repoLink.value || !repoLabel.value || themeLocale.value.repoDisplay === false)
      return null;
    return {
      type: repoType.value || "Source",
      label: repoLabel.value,
      link: repoLink.value
    };
  });
};
var navbarLinks = "";
var NavbarLinks = defineComponent({
  name: "NavbarLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? h$3("nav", { class: "nav-links" }, [
      ...navbarConfig.value.map((config) => h$3("div", { class: ["nav-item", "hide-in-mobile"] }, "children" in config ? h$3(DropdownLink, { config }) : h$3(AutoLink, { config })))
    ]) : null;
  }
});
var toggleSidebarButton = "";
var ToggleSidebarButton = defineComponent({
  name: "ToggleSidebarButton",
  emits: ["toggle"],
  setup(_props, { emit }) {
    return () => h$3("button", {
      class: "toggle-sidebar-button",
      title: "Toggle Sidebar",
      onClick: () => emit("toggle")
    }, h$3("span", { class: "icon" }));
  }
});
const I18nIcon = () => h$3(x, { name: "i18n" }, () => [
  h$3("path", {
    d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"
  })
]);
I18nIcon.displayName = "I18nIcon";
const GitHubIcon = () => h$3(x, { name: "github" }, () => h$3("path", {
  d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"
}));
GitHubIcon.displayName = "GitHubIcon";
const GitlabIcon = () => h$3(x, { name: "gitlab" }, () => h$3("path", {
  d: "M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"
}));
GitlabIcon.displayName = "GitlabIcon";
const GiteeIcon = () => h$3(x, { name: "gitee" }, () => h$3("path", {
  d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"
}));
GiteeIcon.displayName = "GiteeIcon";
const BitbucketIcon = () => h$3(x, { name: "bitbucket" }, () => h$3("path", {
  d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"
}));
BitbucketIcon.displayName = "BitbucketIcon";
const SourceIcon = () => h$3(x, { name: "source" }, () => h$3("path", {
  d: "M552.298 961.121 445.07 930.008c-11.25-3.164-17.578-14.942-14.414-26.192L670.6 77.293c3.164-11.25 14.941-17.578 26.191-14.414l107.227 31.113c11.25 3.164 17.578 14.942 14.414 26.192L578.489 946.707c-3.34 11.25-14.941 17.754-26.191 14.414zm-200.39-197.226 76.464-81.563c8.086-8.613 7.559-22.324-1.406-30.234L267.708 512l159.258-140.098c8.965-7.91 9.668-21.62 1.406-30.234l-76.465-81.563c-7.91-8.437-21.27-8.964-29.883-.878L68.724 496.53c-8.965 8.262-8.965 22.5 0 30.762l253.3 237.48c8.614 8.086 21.973 7.735 29.883-.878zm575.155 1.054 253.301-237.48c8.965-8.262 8.965-22.5 0-30.762l-253.3-237.656c-8.438-7.91-21.797-7.559-29.883.879l-76.465 81.562c-8.086 8.613-7.559 22.324 1.406 30.235L981.38 512 822.122 652.098c-8.965 7.91-9.668 21.62-1.406 30.234l76.465 81.563c7.91 8.613 21.27 8.964 29.882 1.054z"
}));
SourceIcon.displayName = "SourceIcon";
var LanguageDropdown = defineComponent({
  name: "LanguageDropdown",
  setup() {
    const dropdown = useNavbarLanguageDropdown();
    return () => dropdown.value ? h$3(DropdownLink, { class: "i18n-dropdown", config: dropdown.value }, {
      title: () => {
        var _a2;
        return h$3(I18nIcon, {
          ariaLabel: (_a2 = dropdown.value) === null || _a2 === void 0 ? void 0 : _a2.ariaLabel,
          style: {
            width: "1rem",
            height: "1rem",
            verticalAlign: "middle"
          }
        });
      }
    }) : null;
  }
});
var RepoLink = defineComponent({
  name: "RepoLink",
  components: { BitbucketIcon, GiteeIcon, GitHubIcon, GitlabIcon, SourceIcon },
  setup() {
    const repo = useNavbarRepo();
    return () => repo.value ? h$3("div", { class: "nav-item" }, h$3("a", {
      class: "repo-link",
      href: repo.value.link,
      target: "_blank",
      rel: "noopener noreferrer"
    }, h$3(resolveComponent(`${repo.value.type}Icon`), {
      style: {
        width: "1.25rem",
        height: "1.25rem",
        verticalAlign: "middle"
      }
    }))) : null;
  }
});
const DarkIcon = () => h$3(x, { name: "dark" }, () => h$3("path", {
  d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"
}));
DarkIcon.displayName = "DarkIcon";
const LightIcon = () => h$3(x, { name: "light" }, () => h$3("path", {
  d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"
}));
LightIcon.displayName = "LightIcon";
const AutoIcon = () => h$3(x, { name: "auto" }, () => h$3("path", {
  d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"
}));
AutoIcon.displayName = "AutoIcon";
const OutlookIcon = () => h$3(x, { name: "outlook" }, () => [
  h$3("path", {
    d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"
  })
]);
OutlookIcon.displayName = "OutlookIcon";
var appearanceSwitch = "";
var AppearanceSwitch = defineComponent({
  name: "AppearanceSwitch",
  setup() {
    const themeData2 = useThemeData();
    const { status } = useDarkMode();
    const darkmode = computed(() => themeData2.value.darkmode);
    const toggleDarkMode = () => {
      if (darkmode.value === "auto-switch") {
        status.value = { light: "dark", dark: "auto", auto: "light" }[status.value];
      } else
        status.value = status.value === "light" ? "dark" : "light";
    };
    return () => h$3("button", {
      id: "appearance-switch",
      onClick: () => toggleDarkMode()
    }, [
      h$3(AutoIcon, {
        style: {
          display: status.value === "auto" ? "block" : "none"
        }
      }),
      h$3(DarkIcon, {
        style: {
          display: status.value === "dark" ? "block" : "none"
        }
      }),
      h$3(LightIcon, {
        style: {
          display: status.value === "light" ? "block" : "none"
        }
      })
    ]);
  }
});
var fullScreen = "";
var ToggleFullScreen = defineComponent({
  name: "ToggleFullScreen",
  setup() {
    const themeLocale = useThemeLocaleData();
    const FullScreen = resolveComponent("FullScreen");
    const fullscreenLocale = computed(() => themeLocale.value.outlookLocales.fullscreen);
    return () => h$3("div", { class: "fullscreen-wrapper" }, [
      h$3("label", { class: "full-screen-title", for: "full-screen-switch" }, fullscreenLocale.value),
      h$3(FullScreen, { id: "full-screen-switch" })
    ]);
  }
});
var AppearanceMode = defineComponent({
  name: "AppearanceMode",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const locale = computed(() => themeLocale.value.outlookLocales.darkmode);
    const darkmode = computed(() => themeData2.value.darkmode);
    const enable = computed(() => darkmode.value === "auto-switch" || darkmode.value === "switch");
    return () => enable.value ? h$3("div", { class: "appearance-wrapper" }, [
      h$3("label", { class: "appearance-title", for: "appearance-switch" }, locale.value),
      h$3(AppearanceSwitch)
    ]) : null;
  }
});
var themeColorPicker = "";
var ThemeColorPicker = defineComponent({
  name: "ThemeColorPicker",
  props: {
    themeColor: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const themeData2 = useThemeData();
    const themeColor = computed(() => {
      const { themeColor: themeColor2 } = themeData2.value;
      return themeColor2 === false ? null : themeColor2;
    });
    const setThemeColor = (theme = "") => {
      if (themeColor.value) {
        const classes = document.documentElement.classList;
        const themes = Object.keys(themeColor.value).map((color) => `theme-${color}`);
        if (!theme) {
          localStorage.removeItem("theme");
          classes.remove(...themes);
          return;
        }
        classes.remove(...themes.filter((themeclass) => themeclass !== `theme-${theme}`));
        classes.add(`theme-${theme}`);
        localStorage.setItem("theme", theme);
      }
    };
    onMounted(() => {
      const theme = localStorage.getItem("theme");
      if (theme)
        setThemeColor(theme);
    });
    return () => h$3("ul", { id: "themecolor-picker" }, [
      h$3("li", h$3("span", {
        class: "theme-color",
        onClick: () => setThemeColor()
      })),
      ...Object.entries(props.themeColor).map(([color, value2]) => h$3("li", h$3("span", {
        style: { background: value2 },
        onClick: () => setThemeColor(color)
      })))
    ]);
  }
});
var ThemeColor = defineComponent({
  name: "ThemeColor",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const locale = computed(() => themeLocale.value.outlookLocales.themeColor);
    const themeColor = computed(() => {
      const { themeColor: themeColor2 } = themeData2.value;
      return themeColor2 === false ? null : themeColor2;
    });
    return () => themeColor.value ? h$3("div", { class: "themecolor-wrapper" }, [
      h$3("label", { class: "themecolor-title", for: "theme-color-picker" }, locale.value),
      h$3(ThemeColorPicker, { themeColor: themeColor.value })
    ]) : null;
  }
});
var OutlookSettings = defineComponent({
  name: "OutlookSettings",
  setup() {
    const themeData2 = useThemeData();
    const pure = usePure();
    const { isSupported } = useFullscreen();
    const enableDarkmode = computed(() => themeData2.value.darkmode !== "disable" && themeData2.value.darkmode !== "force-dark");
    const enableThemeColor = computed(() => !pure.value && Boolean(themeData2.value.themeColor));
    const enableFullScreen = computed(() => !pure.value && themeData2.value.fullscreen);
    return () => h$3(ClientOnly, () => [
      enableThemeColor.value ? h$3(ThemeColor) : null,
      enableDarkmode.value ? h$3(AppearanceMode) : null,
      isSupported && enableFullScreen.value ? h$3(ToggleFullScreen) : null
    ]);
  }
});
var outlookButton = "";
var OutlookButton = defineComponent({
  name: "OutlookButton",
  setup() {
    const themeData2 = useThemeData();
    const pure = usePure();
    const route = useRoute();
    const open = ref(false);
    const enableDarkmode = computed(() => themeData2.value.darkmode !== "disable" && themeData2.value.darkmode !== "force-dark");
    const enableThemeColor = computed(() => !pure.value && Boolean(themeData2.value.themeColor));
    const enableFullScreen = computed(() => !pure.value && themeData2.value.fullscreen);
    watch(() => route.path, () => {
      open.value = false;
    });
    return () => enableDarkmode.value || enableFullScreen.value || enableThemeColor.value ? h$3("div", { class: "nav-item hide-in-mobile" }, enableDarkmode.value && !enableFullScreen.value && !enableThemeColor.value ? h$3(AppearanceSwitch) : enableFullScreen.value && !enableDarkmode.value && !enableThemeColor.value ? h$3(ToggleFullScreen) : h$3("button", {
      class: ["outlook-button", { open: open.value }],
      tabindex: "-1",
      ariaHidden: true
    }, [
      h$3(OutlookIcon),
      h$3("div", { class: "outlook-dropdown" }, h$3(OutlookSettings))
    ])) : null;
  }
});
var toggleNavbarButton = "";
var ToggleNavbarButton = defineComponent({
  name: "ToggleNavbarButton",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ["toggle"],
  setup(props, { emit }) {
    return () => h$3("button", {
      class: ["toggle-navbar-button", { "is-active": props.active }],
      "aria-label": "Toggle Navbar",
      "aria-expanded": props.active,
      "aria-controls": "nav-screen",
      onClick: () => emit("toggle")
    }, h$3("span", { class: "button-container" }, [
      h$3("span", { class: "button-top" }),
      h$3("span", { class: "button-middle" }),
      h$3("span", { class: "button-bottom" })
    ]));
  }
});
var navbarActions = "";
var NavActions = defineComponent({
  name: "NavActions",
  props: {
    showScreen: { type: Boolean, default: false }
  },
  emits: ["toggleScreen"],
  setup(props, { emit, slots }) {
    return () => {
      var _a2, _b2;
      return h$3("div", { class: "nav-actions-wrapper" }, [
        (_a2 = slots.before) === null || _a2 === void 0 ? void 0 : _a2.call(slots),
        h$3("div", { class: "nav-item" }, h$3(LanguageDropdown)),
        h$3(RepoLink),
        h$3(OutlookButton),
        H$1("Docsearch") ? h$3(resolveComponent("Docsearch")) : H$1("SearchBox") ? h$3(resolveComponent("SearchBox")) : null,
        h$3(ToggleNavbarButton, {
          active: props.showScreen,
          onToggle: () => emit("toggleScreen")
        }),
        (_b2 = slots.after) === null || _b2 === void 0 ? void 0 : _b2.call(slots)
      ]);
    };
  }
});
var navScreenDropdown = "";
var NavScreenDropdown = defineComponent({
  name: "NavScreenDropdown",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    const iconPrefix = useIconPrefix();
    const config = toRef(props, "config");
    const dropdownAriaLabel = computed(() => config.value.ariaLabel || config.value.text);
    const open = ref(false);
    watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item, arr) => arr[arr.length - 1] === item;
    return () => [
      h$3("button", {
        class: ["nav-screen-dropdown-title", { active: open.value }],
        type: "button",
        ariaLabel: dropdownAriaLabel.value,
        onClick: () => {
          open.value = !open.value;
        }
      }, [
        h$3("span", { class: "title" }, [
          config.value.icon ? h$3("i", {
            class: `icon ${iconPrefix.value}${config.value.icon}`
          }) : null,
          props.config.text
        ]),
        h$3("span", { class: ["arrow", open.value ? "down" : "right"] })
      ]),
      h$3("ul", {
        class: ["nav-screen-dropdown", { hide: !open.value }]
      }, config.value.children.map((child) => h$3("li", { class: "dropdown-item" }, "children" in child ? [
        h$3("h4", { class: "dropdown-subtitle" }, child.link ? h$3(AutoLink, {
          config: child,
          onFocusout: () => {
            if (isLastItemOfArray(child, config.value.children) && child.children.length === 0)
              open.value = false;
          }
        }) : h$3("span", child.text)),
        h$3("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild) => h$3("li", { class: "dropdown-subitem" }, h$3(AutoLink, {
          config: grandchild,
          onFocusout: () => {
            if (isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, config.value.children))
              open.value = false;
          }
        }))))
      ] : h$3(AutoLink, {
        config: child,
        onFocusout: () => {
          if (isLastItemOfArray(child, config.value.children))
            open.value = false;
        }
      }))))
    ];
  }
});
var navScreenLinks = "";
var NavScreenLinks = defineComponent({
  name: "NavScreenLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? h$3("nav", { class: "nav-screen-links" }, navbarConfig.value.map((config) => h$3("div", { class: "navbar-links-item" }, "children" in config ? h$3(NavScreenDropdown, { config }) : h$3(AutoLink, { config })))) : null;
  }
});
var navScreen = "";
var NavScreen = defineComponent({
  name: "NavScreen",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(props, { emit, slots }) {
    const route = useRoute();
    const isMobile = useMobile();
    const body = ref();
    const isLocked = useScrollLock(body);
    watch(isMobile, (value2) => {
      if (!value2 && props.active)
        emit("close");
    });
    watch(() => route.path, () => {
      isLocked.value = false;
      emit("close");
    });
    onMounted(() => {
      body.value = document.body;
    });
    onBeforeUnmount(() => {
      isLocked.value = false;
    });
    return () => h$3(Transition, {
      name: "fade",
      onEnter: () => {
        isLocked.value = true;
      },
      onAfterLeave: () => {
        isLocked.value = false;
      }
    }, () => {
      var _a2, _b2;
      return props.active ? h$3("div", { id: "nav-screen" }, h$3("div", { class: "container" }, [
        (_a2 = slots.before) === null || _a2 === void 0 ? void 0 : _a2.call(slots),
        h$3(NavScreenLinks),
        h$3("div", { class: "outlook-wrapper" }, h$3(OutlookSettings)),
        (_b2 = slots.after) === null || _b2 === void 0 ? void 0 : _b2.call(slots)
      ])) : null;
    });
  }
});
var navbar = "";
var Navbar = defineComponent({
  name: "NavBar",
  emits: ["toggle-sidebar"],
  setup(_props, { emit, slots }) {
    const themeLocale = useThemeLocaleData();
    const isMobile = useMobile();
    const showScreen = ref(false);
    const navbar2 = ref();
    const siteBrand = ref();
    const linksWrapperMaxWidth = ref(0);
    const linksWrapperStyle = computed(() => {
      if (!linksWrapperMaxWidth.value)
        return {};
      return {
        "max-width": `${linksWrapperMaxWidth.value}px`
      };
    });
    const autoHide = computed(() => {
      const { navbarAutoHide } = themeLocale.value;
      return navbarAutoHide !== "none" && (navbarAutoHide === "always" || isMobile.value);
    });
    return () => [
      h$3("header", {
        class: [
          "navbar",
          {
            "auto-hide": autoHide.value,
            "hide-icon": !themeLocale.value.navbarIcon
          }
        ],
        ref: navbar2
      }, [
        h$3(ToggleSidebarButton, {
          onToggle: () => {
            if (showScreen.value)
              showScreen.value = false;
            emit("toggle-sidebar");
          }
        }),
        h$3(NavbarBrand, { ref: siteBrand }, () => {
          var _a2;
          return (_a2 = slots.left) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
        }),
        h$3(NavbarLinks, {
          style: linksWrapperStyle.value
        }),
        h$3(NavActions, {
          showScreen: showScreen.value,
          onToggleScreen: () => {
            showScreen.value = !showScreen.value;
          }
        }, {
          before: () => {
            var _a2;
            return (_a2 = slots.center) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
          },
          after: () => {
            var _a2;
            return (_a2 = slots.right) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
          }
        })
      ]),
      h$3(NavScreen, {
        active: showScreen.value,
        onClose: () => {
          showScreen.value = false;
        }
      }, {
        before: () => {
          var _a2;
          return (_a2 = slots.screenTop) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
        },
        after: () => {
          var _a2;
          return (_a2 = slots.screenBottom) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
        }
      })
    ];
  }
});
var clientAppEnhance7 = defineClientAppEnhance(({ app }) => {
  app.component("Navbar", Navbar);
});
var sidebarChild = "";
var SidebarChild = defineComponent({
  name: "SidebarChild",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    return () => [
      renderItem(props.config, {
        class: [
          "sidebar-link",
          `sidebar-${props.config.type}`,
          {
            active: isActiveSidebarItem(route, props.config, true)
          }
        ],
        exact: true
      }),
      renderChildren(props.config.children)
    ];
  }
});
var sidebarGroup = "";
var SidebarGroup = defineComponent({
  name: "SidebarGroup",
  props: {
    config: {
      type: Object,
      required: true
    },
    open: { type: Boolean, required: true }
  },
  emits: ["toggle"],
  setup(props, { emit }) {
    const route = useRoute();
    const active = computed(() => isActiveSidebarItem(route, props.config));
    const exact = computed(() => isActiveSidebarItem(route, props.config, true));
    return () => {
      const { collapsable, children = [], icon, link, text } = props.config;
      return [
        h$3("section", { class: "sidebar-group" }, [
          h$3(collapsable ? "button" : "p", __spreadValues({
            class: [
              "sidebar-heading",
              {
                clickable: collapsable || link,
                exact: exact.value,
                active: active.value
              }
            ]
          }, collapsable ? {
            onClick: () => emit("toggle"),
            onKeydown: (event) => {
              if (event.key === "Enter")
                emit("toggle");
            }
          } : {}), [
            renderIcon(icon),
            link ? h$3(RouterLink, { to: link, class: "title" }, () => text) : h$3("span", { class: "title" }, text),
            collapsable ? h$3("span", { class: ["arrow", props.open ? "down" : "right"] }) : null
          ]),
          h$3(DropTransition, () => props.open || !collapsable ? h$3(SidebarLinks, { config: children }) : null)
        ])
      ];
    };
  }
});
var sidebarLinks = "";
const isDescendantActive = (route, item) => {
  if (item.type === "group")
    return item.children.some((child) => {
      if (child.type === "group")
        return isDescendantActive(route, child);
      return child.type === "page" && isActiveSidebarItem(route, child, true);
    });
  return false;
};
const resolveOpenGroupIndex = (route, items) => {
  for (let i2 = 0; i2 < items.length; i2++)
    if (isDescendantActive(route, items[i2]))
      return i2;
  return -1;
};
var SidebarLinks = defineComponent({
  name: "SidebarLinks",
  props: {
    config: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    const openGroupIndex = ref(-1);
    const toggleGroup = (index2) => {
      openGroupIndex.value = index2 === openGroupIndex.value ? -1 : index2;
    };
    watch(() => [route.path, props.config], () => {
      const index2 = resolveOpenGroupIndex(route, props.config);
      openGroupIndex.value = index2;
    }, { immediate: true });
    return () => h$3("ul", { class: "sidebar-links" }, props.config.map((config, index2) => h$3("li", config.type === "group" ? h$3(SidebarGroup, {
      config,
      open: index2 === openGroupIndex.value,
      onToggle: () => toggleGroup(index2)
    }) : h$3(SidebarChild, { config }))));
  }
});
var sidebar = "";
var Sidebar = defineComponent({
  name: "SideBar",
  setup(_props, { slots }) {
    const themeLocale = useThemeLocaleData();
    const sidebarItems = useSidebarItems();
    return () => {
      var _a2, _b2, _c;
      return h$3("aside", { class: ["sidebar", { "hide-icon": !themeLocale.value.sidebarIcon }] }, [
        (_a2 = slots.top) === null || _a2 === void 0 ? void 0 : _a2.call(slots),
        ((_b2 = slots.default) === null || _b2 === void 0 ? void 0 : _b2.call(slots)) || h$3(SidebarLinks, { config: sidebarItems.value }),
        (_c = slots.bottom) === null || _c === void 0 ? void 0 : _c.call(slots)
      ]);
    };
  }
});
var clientAppEnhance8 = defineClientAppEnhance(({ app }) => {
  app.component("Sidebar", Sidebar);
});
const icons = { "Baidu": '<svg xmlns="http://www.w3.org/2000/svg" class="icon baidu-icon" viewBox="0 0 1024 1024" ariaLabelledby="baidu"><circle cx="512" cy="512" r="512" fill="#1D2FE3" />,<path d="M239.022 704.978c.098-4.865-.314-9.772.162-14.591 5.178-52.464 197.571-253.377 249.641-259.233 42.996-4.833 75.768 16.545 99.824 49.144 37.893 51.351 82.81 95.455 131.292 136.237 52.903 44.503 56.525 99.801 32.6 158.592-23.425 57.56-75.34 69.833-127.771 58.804-84.971-17.874-168.158-13.744-253.37-4.536-86.35 9.333-133.788-39.4-132.378-124.417zM352.464 412.86c-3.58 50.707-17.93 96.128-75.9 98.12-58.053 1.995-80.093-41.432-79.275-91.71.81-49.705 13.416-104.053 76.851-102.136 53.84 1.625 74.74 45.8 78.324 95.726zm386.053 142.168c-68.494-1.735-84.188-43.331-82.635-93.812 1.46-47.519 10.082-97.628 73.299-96.65 61.395.95 81.6 43.207 81.553 98.668-.047 53.156-19.818 89.398-72.217 91.794zm-45.235-278.345c-10.464 42.665-24.513 91.761-85.919 94.502-52.74 2.354-71.705-34.482-72.805-81.242-1.233-52.42 48.08-112.965 87.582-110.373 33.943 2.226 71.146 49.541 71.142 97.113zm-195.147-14.097c-7.005 46.274-13.63 100.025-71.562 101.351-57.077 1.306-73.567-47.922-73.638-97.109-.068-48.054 12.128-99.024 69.345-101.426 59.45-2.493 67.11 51.093 75.855 97.184z" fill="#fff" />,<path d="M479.52 663.165c.006 12.194 1.498 24.61-.284 36.537-4.707 31.503 18.862 78.749-45.326 77.534-54.226-1.027-103.338-3.31-113.231-73.536-7.164-50.852 7.78-85.674 57.687-102.668 17.67-6.016 39.618 5.058 54.096-14.548 10.84-14.679-2.901-54.592 33.418-41.47 24.075 8.7 11.477 38.922 13.278 59.652 1.68 19.366.359 38.99.363 58.5zm175.45 41.902c4.291 39.657 5.093 78.047-64.709 73.503-60.097-3.912-95.56-20.794-86.293-85.624 4.287-29.991-21.148-83.238 22.19-84.867 42.71-1.606 13.57 50.41 20.825 77.622 5.276 19.794-3.984 46.774 29.753 48.193 41.337 1.738 28.383-30.022 31.099-51.604 1.209-9.61-.85-19.65.528-29.215 2.516-17.474-8.928-44.716 19.554-47.191 36.044-3.133 24.155 28.376 26.678 47.523 1.896 14.387.375 29.225.375 51.66z" fill="#1D2FE3" />,<path d="M435.669 685.038c-2.255 24.07 5.605 53.68-33.623 52.136-34.594-1.362-35.274-31.818-38.513-53.078-4.028-26.448 11.38-48.18 40.785-50.023 40.967-2.564 27.097 30.764 31.35 50.965z" fill="#fff" /></svg>', "Bitbucket": '<svg xmlns="http://www.w3.org/2000/svg" class="icon bitbucket-icon" viewBox="0 0 1024 1024" ariaLabelledby="bitbucket"><circle cx="512" cy="512" r="512" fill="#205081" />,<path d="M512 191.32v.01-.01c-152.76 0-277.805 41.114-277.805 92.166 0 13.443 33.353 206.247 46.577 282.708 5.932 34.285 94.508 84.563 231.126 84.563l.102-.407v.407c137.484 0 225.26-50.278 231.192-84.578 13.23-76.457 46.592-269.255 46.592-282.698.005-51.047-125.024-92.165-277.784-92.165zm0 397.493c-48.771 0-88.31-39.545-88.31-88.31 0-48.772 39.539-88.306 88.31-88.306s88.31 39.534 88.31 88.31c0 48.766-39.539 88.306-88.31 88.306zm-.05-276.842c-98.256-.153-177.885-17.232-177.855-38.14.036-20.912 79.72-37.731 177.976-37.568 98.256.153 177.884 17.22 177.849 38.139-.026 20.908-79.705 37.716-177.966 37.564z" fill="#fff" />,<path d="M711.668 642.814c-4.227 0-7.608 2.994-7.608 2.994S635.65 699.987 512 699.987s-192.06-54.18-192.06-54.18-3.386-2.988-7.608-2.988c-5.04 0-9.827 3.391-9.827 10.871 0 .79.076 1.579.224 2.353 10.617 56.826 18.382 97.206 19.736 103.347 9.268 41.805 91.045 73.411 189.525 73.411h.01c98.49 0 180.267-31.606 189.535-73.411 1.364-6.136 9.114-46.49 19.736-103.317.143-.779.224-1.578.224-2.368 0-7.485-4.786-10.881-9.827-10.881zM467.659 500.477a44.255 44.255 0 1 0 88.51 0 44.255 44.255 0 1 0-88.51 0z" fill="#fff" /></svg>', "Dingding": '<svg xmlns="http://www.w3.org/2000/svg" class="icon dingding-icon" viewBox="0 0 1024 1024" ariaLabelledby="dingding"><circle cx="512" cy="512" r="512" fill="#1C9DF7" />,<path d="M760.551 442.095c0 5.178-5.178 12.945-7.767 20.713-23.302 49.192-82.85 144.988-82.85 144.988l-18.124 31.069h85.44L576.727 853.758l36.247-144.988h-67.316l23.302-95.796c-18.124 5.178-41.426 10.356-67.316 18.124 0 0-36.247 20.712-100.974-38.837 0 0-44.015-38.836-18.124-49.192 10.356-5.178 54.37-10.356 88.029-12.945 44.014-5.179 72.494-10.357 72.494-10.357s-139.81 2.59-173.468-2.589c-33.658-5.178-75.083-59.549-82.85-108.741 0 0-12.946-25.89 28.48-12.945 44.013 12.945 222.66 49.192 222.66 49.192s-235.606-72.494-251.14-90.618c-15.535-18.123-46.604-95.796-41.426-144.988 0 0 2.59-12.945 12.945-7.767 0 0 173.469 80.261 292.566 121.686 119.098 41.426 222.66 64.727 209.715 119.098z" fill="#fff" /></svg>', "Discord": '<svg xmlns="http://www.w3.org/2000/svg" class="icon discord-icon" viewBox="0 0 1024 1024" ariaLabelledby="discord"><circle cx="512" cy="512" r="512" fill="#2DAAE1" />,<path d="m422.935 240.147 5.851 8.052c-113.039 34.253-165.649 84.585-165.649 84.585s13.645-8.052 37.024-18.123c66.28-30.215 118.865-38.267 142.244-40.286 3.91 0 7.819-1.994 9.76-1.994 38.966-6.058 81.816-6.058 126.658-2.02 58.462 8.053 122.749 24.157 187.061 62.423 0 0-48.7-48.338-155.862-82.566l7.767-10.071h1.968c13.308.233 91.757 4.246 173.416 68.481 0 0 89.634 169.144 89.634 376.555 1.942-2.02-50.668 92.637-189.003 96.65 0 0-23.405-28.194-40.933-52.35 81.84-24.157 113.013-76.534 113.013-76.534a313.796 313.796 0 0 1-72.106 38.267c-31.172 14.11-60.403 22.162-89.633 28.22-60.404 12.066-114.955 8.027-161.74 0a636.81 636.81 0 0 1-91.576-28.22c-13.644-6.033-29.23-12.065-44.817-22.137-1.941-2.02-3.883-2.02-5.85-4.039-1.943 0-1.943-2.02-1.943-2.02-11.702-6.032-17.528-10.07-17.528-10.07s29.23 52.376 109.104 76.532c-19.47 24.157-40.907 54.371-40.907 54.371-138.36-4.039-190.97-98.67-190.97-98.67 0-207.41 89.633-376.555 89.633-376.555 89.634-70.5 175.384-68.481 175.384-68.481zm213.961 233.017c-35.315 0-64.727 34.512-64.727 77.672s29.412 77.672 64.727 77.672 64.727-34.512 64.727-77.672-29.412-77.672-64.727-77.672zm-233.016 0c-35.315 0-64.727 34.512-64.727 77.672s29.412 77.672 64.727 77.672 64.726-34.512 64.726-77.672-29.411-77.672-64.726-77.672z" fill="#fff" /></svg>', "Dribbble": '<svg xmlns="http://www.w3.org/2000/svg" class="icon dribbble-icon" viewBox="0 0 1024 1024" ariaLabelledby="dribbble"><circle cx="512" cy="512" r="512" fill="#DC4373" />,<path d="M716.668 302.752c-13.332 5.154-28.61 3.676-35.726-1.068-86.196-48.27-179.286-62.06-265.482-37.926C292.074 300.212 241.674 437.028 242 564.746c22.622 42.136 52.558 105.234 61.854 153.104l298.24 298.246c210.532-37.376 376.584-203.408 413.986-413.928L716.668 302.752z" fill="#C13366" />,<path d="M511.994 219.308c-161.592 0-293.058 131.31-293.058 292.696s131.466 292.684 293.058 292.684c161.598 0 293.07-131.292 293.07-292.684 0-161.386-131.472-292.696-293.07-292.696zm192.842 138.148c33.43 41.432 53.744 93.756 54.682 150.772-11.122-2.282-58.23-11.068-114.526-11.068-18.164 0-37.282.91-56.448 3.278a822.854 822.854 0 0 0-4.938-11.812c-4.972-11.692-10.326-23.29-15.874-34.72 86.642-35.696 128.436-85.238 137.104-96.45zm-192.842-92.33c62.446 0 119.528 23.2 163.126 61.412-6.902 9.416-44.332 56.202-127.876 87.768-38.67-70.688-80.996-129.22-91.07-142.812a247.13 247.13 0 0 1 55.82-6.368zm-106.352 23.99c8.536 11.758 50.928 70.918 90.592 141.036-106.448 27.982-200.976 29.806-223.79 29.806h-2.424c16.39-75.534 67.424-138.298 135.622-170.842zM264.402 512.39c0-2.038.034-4.076.1-6.102 1.48.018 3.666.018 6.5.018 30.726 0 137.382-2.538 247.288-35.154a828.402 828.402 0 0 1 18.928 39.526 232.24 232.24 0 0 0-8.234 2.482C405.236 553.126 337.216 658.936 326.75 676.232c-38.778-43.696-62.348-101.058-62.348-163.842zm247.592 247.246c-56.786 0-109.192-19.232-151.01-51.48 7.074-13.868 58.412-106.3 194.026-153.5a1.806 1.806 0 0 1 .272-.09c34.006 88.53 48.408 162.834 52.358 185.862-29.432 12.374-61.752 19.208-95.646 19.208zm140.236-43.584c-3.32-19.052-16.66-88.688-47.452-173.618 17.27-2.686 34.072-3.748 49.828-3.748 51.748 0 92.23 11.33 101.634 14.204-11.182 67.444-49.794 125.808-104.01 163.162z" fill="#F0F1F1" />,<path d="M511.994 219.308c-.382 0-.758.028-1.142.028v45.804c.38 0 .758-.018 1.142-.018 62.446 0 119.528 23.2 163.126 61.412-6.902 9.416-44.332 56.202-127.876 87.768-12.14-22.194-24.642-43.188-36.392-61.968V473.29c2.476-.706 4.954-1.41 7.434-2.144a828.402 828.402 0 0 1 18.928 39.526c-2.776.796-5.514 1.592-8.234 2.478a323.314 323.314 0 0 0-18.128 6.52v53.228a418.976 418.976 0 0 1 44.428-18.332c34.006 88.53 48.408 162.834 52.358 185.862-29.428 12.374-61.746 19.208-95.646 19.208-.382 0-.758-.024-1.142-.024v45.05c.382 0 .758.028 1.142.028 161.598 0 293.07-131.292 293.07-292.684.002-161.388-131.47-292.698-293.068-292.698zm71.614 269.316c-4.972-11.692-10.326-23.29-15.874-34.72 86.64-35.696 128.434-85.236 137.102-96.45 33.43 41.432 53.748 93.756 54.682 150.77-11.122-2.282-58.23-11.068-114.522-11.068-18.164 0-37.282.914-56.448 3.278-1.624-3.932-3.24-7.852-4.94-11.81zm68.622 227.428c-3.32-19.052-16.66-88.688-47.452-173.618 17.27-2.686 34.072-3.748 49.828-3.748 51.748 0 92.23 11.33 101.634 14.204-11.182 67.444-49.794 125.808-104.01 163.162z" fill="#D1D1D1" /></svg>', "Email": '<svg xmlns="http://www.w3.org/2000/svg" class="icon email-icon" viewBox="0 0 1024 1024" ariaLabelledby="email"><circle cx="512" cy="512" r="512" fill="#1384FF" />,<path d="M299.372 313.572H722.93c28.945 0 52.61 21.845 52.975 48.787L511.333 500.35 246.76 362.481c.182-27.003 23.666-48.97 52.611-48.97zm-52.671 101.702l-.243 244.121c0 27.186 23.848 49.395 52.914 49.395H722.93c29.127 0 52.975-22.21 52.975-49.395V415.152L517.522 546.71a13.957 13.957 0 01-12.682 0L246.7 415.274z" fill="#fff" /></svg>', "Evernote": '<svg xmlns="http://www.w3.org/2000/svg" class="icon evernote-icon" viewBox="0 0 1024 1024" ariaLabelledby="evernote"><circle cx="512" cy="512" r="512" fill="#36D613" />,<path d="M347.671 193.259v87.51h-87.51z" fill="#595757" />,<path d="M788.047 323.645s3.65-77.491-73.84-103.02c0 0-89.479-12.867-151.41-11.91 0 0-8.595-53.23-103.33-53.23 0 0-89.556-1.244-89.892 70.526v61.671s2.848 14.991-27.833 14.991h-81.581s-34.28 5.282-34.28 72.934c0 0 3.133 120.082 41.322 200.24 0 0 9.398 34.667 58.228 46.577 0 0 95.822 25.477 123.991 21.722 0 0 58.228 22.137 62.008-111.874 0 0 3.755-19.935 6.266 11.392 0 0-1.89 68.948 57.607 72.702 0 0 45.723 12.557 73.892 10.045 0 0 37.568 2.15 37.568 64.158 0 0 13.152 71.665-34.435 71.665h-65.763s-18.149 4.428-18.149-21.877c0 0-4.997-21.878 26.305-21.878h15.534v-43.756h-43.082s-66.332-6.317-66.332 50.047v75.135s9.347 49.866 66.332 49.866h121.273s48.441.44 76.61-90.359c0-.078 48.52-182.323 22.991-435.767zM625.272 486.523c0-21.877 18.02-51.16 39.432-51.16s36.48 36.118 36.48 58.022c-28.79-7.897-45.827-9.606-75.912-6.862z" fill="#595757" /></svg>', "Facebook": '<svg xmlns="http://www.w3.org/2000/svg" class="icon facebook-icon" viewBox="0 0 1024 1024" ariaLabelledby="facebook"><circle cx="512" cy="512" r="512" fill="#3C599B" />,<path d="M372.568 413.895h59.898V355.68c0-25.67.647-65.257 19.294-89.774 19.642-25.965 46.605-43.613 92.983-43.613 75.565 0 107.384 10.778 107.384 10.778l-14.971 88.74s-24.967-7.217-48.254-7.217c-23.302 0-44.16 8.35-44.16 31.635v67.666h95.526l-6.67 86.678h-88.855V801.69H432.466V500.574h-59.898v-86.68z" fill="#fff" /></svg>', "Flipboard": '<svg xmlns="http://www.w3.org/2000/svg" class="icon flipboard-icon" viewBox="0 0 1024 1024" ariaLabelledby="flipboard"><circle cx="512" cy="512" r="512" fill="#E12828" />,<path d="M293.58 292.18h160.343v481.003H293.58V292.18z" fill="#fff" />,<path d="M453.922 292.18h320.662v160.343H453.922V292.18z" fill="#FCE9E9" />,<path d="M453.922 452.523h160.343v160.343H453.922V452.523z" fill="#F6BEBE" /></svg>', "Gitee": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024" ariaLabelledby="gitee"><circle cx="512" cy="512" r="512" fill="#C71D23" />,<path d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z" fill="#fff" /></svg>', "GitHub": '<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024" ariaLabelledby="github"><circle cx="512" cy="512" r="512" fill="#171515" />,<path d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z" fill="#fff" /></svg>', "Gitlab": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gitlab-icon" viewBox="0 0 1024 1024" ariaLabelledby="gitlab"><circle cx="512" cy="512" r="512" fill="#E8F0FF" />,<path d="m512 848.182 134.473-413.8H377.527L512 848.182z" fill="#E24329" />,<path d="m512 848.182-134.473-413.8h-188.36L512 848.182z" fill="#FC6D26" />,<path d="M189.167 434.382h188.36l-80.832-249.17c-4.202-12.854-22.247-12.854-26.45 0l-81.078 249.17z" fill="#E24329" />,<path d="m512 848.182 134.473-413.8h188.36L512 848.182z" fill="#FC6D26" />,<path d="m834.833 434.382 40.787 125.82a27.8 27.8 0 0 1-10.135 31.147L512 848.182l322.833-413.8z" fill="#FCA326" />,<path d="M834.833 434.382h-188.36l81.079-249.17c4.202-12.854 22.247-12.854 26.45 0l80.831 249.17z" fill="#E24329" /></svg>', "Gmail": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gmail-icon" viewBox="0 0 1024 1024" ariaLabelledby="gmail"><circle cx="512" cy="512" r="512" fill="#DB4437" />,<path d="M277.48 285.567h465.767v441.362H277.48V285.567z" fill="#E67C73" />,<path d="M282.543 285.567h-10.645c-25.962 0-47.122 21.808-47.122 48.705v343.952c0 26.897 21.08 48.705 47.122 48.705h24.976V407.954l213.49 169.95 213.489-169.95V726.93h24.975c26.04 0 47.123-21.809 47.123-48.705V334.272c0-26.897-21.134-48.705-47.123-48.705h-10.644L510.364 480.44 282.542 285.567z" fill="#FFF" /></svg>', "Instagram": '<svg xmlns="http://www.w3.org/2000/svg" class="icon instagram-icon" viewBox="0 0 1024 1024" ariaLabelledby="instagram"><circle cx="512" cy="512" r="512" fill="#181818" />,<path d="M512 348.16c-88.222 0-163.84 71.417-163.84 163.84 0 88.222 71.417 163.84 163.84 163.84 88.222 0 163.84-71.417 163.84-163.84 0-88.222-75.618-163.84-163.84-163.84zm0 268.866c-58.814 0-105.026-46.212-105.026-105.026S453.186 406.974 512 406.974 617.026 453.186 617.026 512 570.814 617.026 512 617.026zM680.041 306.15c-21.005 0-37.81 16.804-37.81 37.809s16.805 37.81 37.81 37.81 37.81-16.805 37.81-37.81-16.805-37.81-37.81-37.81z" fill="#fff" />,<path d="M659.036 196.923h-16.804c-50.413-4.2-210.051-4.2-260.464 0-96.623-4.2-180.644 71.418-184.845 168.041v16.804c-4.2 50.413-4.2 210.051 0 260.464-4.2 96.623 71.418 180.644 168.041 184.845h16.804c50.413 4.2 210.051 4.2 260.464 0 96.623 4.2 180.644-71.418 184.845-168.041V381.768c4.2-96.623-71.418-180.644-168.041-184.845zM759.86 696.845c-12.604 29.407-33.609 50.412-58.815 58.814-121.83 16.805-247.86 16.805-373.891 0-29.407-12.603-50.412-33.608-58.814-58.814-12.604-63.015-16.805-126.03-12.604-184.845-4.2-63.015 0-126.03 12.604-184.845 12.603-29.407 33.608-50.412 58.814-58.814 121.83-16.805 247.86-16.805 373.891 0 29.407 12.603 50.412 33.608 58.815 58.814 12.603 63.015 16.804 126.03 12.603 184.845 4.2 63.015 0 126.03-12.603 184.845z" fill="#FFF" /></svg>', "Lines": '<svg xmlns="http://www.w3.org/2000/svg" class="icon lines-icon" viewBox="0 0 1024 1024" ariaLabelledby="lines"><circle cx="512" cy="512" r="512" fill="#00C300" />,<path d="M861.44 469.76C861.44 313.28 704 186.08 512 186.08s-349.44 127.2-349.44 283.68C162.56 608 286.88 727.52 454.88 752c11.52 2.4 26.88 7.68 30.72 17.28a71.04 71.04 0 0 1 0 31.68l-5.28 29.76c0 8.64-7.2 34.56 30.24 18.72a1104 1104 0 0 0 274.56-202.56A251.52 251.52 0 0 0 860 472.16zM375.2 562.88h-69.12a17.76 17.76 0 0 1-18.24-18.24v-139.2a17.76 17.76 0 0 1 18.24-18.24 18.24 18.24 0 0 1 18.24 18.24v120.48h50.88a18.72 18.72 0 0 1 18.24 18.72 18.24 18.24 0 0 1-18.24 18.24zm72-18.24a18.24 18.24 0 1 1-36.48 0v-139.2a18.24 18.24 0 0 1 36.48 0zm167.04 0a18.24 18.24 0 0 1-12.48 17.28H596a18.24 18.24 0 0 1-14.4-7.2l-69.6-96v85.92a18.24 18.24 0 1 1-36.48 0v-139.2A18.24 18.24 0 0 1 488 388.16h5.76a18.24 18.24 0 0 1 14.4 7.2l71.52 96v-85.92a18.24 18.24 0 1 1 36.48 0zm112.32-87.84a18.24 18.24 0 0 1 18.24 18.24 17.76 17.76 0 0 1-18.24 18.24h-50.88v32.64h50.88a18.72 18.72 0 0 1 18.24 18.72 18.24 18.24 0 0 1-18.24 18.24H656a18.24 18.24 0 0 1-18.24-18.24v-139.2A18.24 18.24 0 0 1 656 387.2h69.12a18.24 18.24 0 0 1 18.24 18.24 18.24 18.24 0 0 1-18.24 18.72h-49.44v32.64zm0 0" fill="#fff" /></svg>', "Linkedin": '<svg xmlns="http://www.w3.org/2000/svg" class="icon linkedin-icon" viewBox="0 0 1024 1024" ariaLabelledby="linkedin"><circle cx="512" cy="512" r="512" fill="#4376B1" />,<path d="M838.301 555.94v225.157h-130.54V571.03c0-52.746-18.847-88.766-66.112-88.766-36.069 0-57.496 24.25-66.959 47.732-3.436 8.391-4.322 20.045-4.322 31.814v219.277h-130.55s1.752-355.784 0-392.613h130.56v55.637c-.263.438-.633.867-.867 1.285h.866v-1.285c17.349-26.694 48.287-64.856 117.651-64.856 85.884 0 150.273 56.114 150.273 176.685zm-535.05-356.72c-44.655 0-73.87 29.314-73.87 67.826 0 37.695 28.368 67.855 72.157 67.855h.847c45.532 0 73.842-30.16 73.842-67.855-.866-38.512-28.31-67.825-72.975-67.825zM237.14 781.098h130.5V388.474h-130.5v392.623z" fill="#F1F2F2" /></svg>', "Pinterest": '<svg xmlns="http://www.w3.org/2000/svg" class="icon pinterest-icon" viewBox="0 0 1024 1024" ariaLabelledby="pinterest"><path d="M512 1023.147c282.773 0 512-228.288 512-509.888 0-281.622-229.227-509.91-512-509.91S0 231.637 0 513.26c0 281.6 229.227 509.888 512 509.888z" fill="#fff" />,<path d="M512 3.35C229.248 3.35 0 231.658 0 513.258c0 216.128 134.848 400.789 325.312 475.05-4.63-40.277-8.427-102.378 1.685-146.453 9.28-39.872 59.84-253.483 59.84-253.483s-15.168-30.634-15.168-75.541c0-70.933 41.302-123.797 92.715-123.797 43.819 0 64.896 32.725 64.896 71.765 0 43.627-27.819 109.099-42.56 169.963-12.224 50.773 25.707 92.33 75.84 92.33 91.03 0 160.981-95.68 160.981-233.344 0-122.133-88.064-207.317-214.058-207.317-145.814 0-231.36 108.693-231.36 221.163 0 43.648 16.853 90.645 37.93 116.245a15.19 15.19 0 0 1 3.371 14.699c-3.797 15.936-12.65 50.773-14.336 57.92-2.09 9.216-7.573 11.328-17.28 6.698-64.043-29.781-104.085-122.538-104.085-197.653 0-160.747 117.162-308.459 338.389-308.459 177.408 0 315.627 125.888 315.627 294.614 0 175.829-111.254 317.269-265.472 317.269-51.84 0-100.715-26.859-117.163-58.752l-32.021 121.28c-11.371 44.48-42.56 99.883-63.638 133.867A516.01 516.01 0 0 0 511.168 1024c282.752 0 512-228.31 512-509.91C1024 231.66 794.752 3.35 512 3.35z" fill="#CA242D" /></svg>', "Pocket": '<svg xmlns="http://www.w3.org/2000/svg" class="icon pocket-icon" viewBox="0 0 1024 1024" ariaLabelledby="pocket"><circle cx="512" cy="512" r="512" fill="#EE4056" />,<path d="M716.52 309.066c12.549 0 23.172 4.394 31.87 13.182 8.697 8.788 13.023 19.48 13.023 32.006v150.4c0 33.975-6.568 66.41-19.705 97.307-13.138 30.918-30.76 57.487-52.89 79.685-22.106 22.197-48.562 39.864-79.367 52.888-30.804 13.024-63.081 19.547-96.876 19.547a246.897 246.897 0 0 1-97.215-19.547c-30.805-13.046-57.306-30.668-79.504-52.888-22.198-22.198-39.865-48.767-53.003-79.663a246.311 246.311 0 0 1-19.728-97.33V354.255c0-12.321 4.44-22.945 13.319-31.847a43.489 43.489 0 0 1 31.87-13.341H716.52zM512.574 617.339c9.06 0 16.989-3.216 23.738-9.581l117.103-112.415a32.622 32.622 0 0 0 10.691-24.62c0-9.469-3.33-17.533-9.966-24.191a32.958 32.958 0 0 0-24.237-10.012c-9.06 0-16.988 3.171-23.737 9.56l-93.547 89.808-93.614-89.809a33.185 33.185 0 0 0-23.443-9.559c-9.468 0-17.532 3.33-24.19 9.967-6.66 6.682-9.967 14.722-9.967 24.236 0 9.83 3.443 18.03 10.419 24.599l117.33 112.413c6.342 6.342 14.179 9.56 23.466 9.56l-.046.044z" fill="#fff" /></svg>', "QQ": '<svg xmlns="http://www.w3.org/2000/svg" class="icon qq-icon" viewBox="0 0 1024 1024" ariaLabelledby="qq"><circle cx="512" cy="512" r="512" fill="#5EAADE" />,<path d="M729.46 627.3c-3.157-39.628-24.045-83.747-32.624-105.91l-22.084-57.047c-.702-23.73 6.312-78.322-30.511-146.61s-110.82-74.446-124.497-75.147c-13.677-.701-99.248-1.403-141.331 72.945-42.084 74.347-30.745 148.812-30.745 148.812l-23.523 57.478c-.001.002-10.962 26.223-20.43 58.135-9.469 31.914-18.938 82.064-9.469 92.234 9.47 10.17 43.837-46.643 46.993-51.903 0 0 2.456 27.18 8.943 41.383l.81 1.776.33.723.38.826.3.652.444.96.203.436a281.465 281.465 0 0 0 1.917 4.025l.189.386c.231.473.468.953.711 1.442l.146.292c6.886 13.807 18.61 33.823 37.443 50.42l.018.016-1.184.387c-10.667 3.516-31.694 11.21-40.625 19.82-1.717 1.655-2.987 3.344-3.65 5.045-5.376 13.794 4.208 15.43 20.575 16.366 16.366.934 94.923 3.04 132.564-2.221.407-.056.787-.114 1.17-.171 2.711.094 5.324.142 7.83.16l.151.002c.836.005 1.663.008 2.475.008.496 0 1.015-.002 1.542-.006l.21-.001a222.593 222.593 0 0 0 5.462-.107c.26.038.508.076.778.114 37.642 5.26 116.198 3.156 132.564 2.22 16.366-.934 25.951-2.571 20.574-16.365-4.302-11.037-34.175-21.62-45.956-25.413a141.388 141.388 0 0 0 7.958-7.645l.237-.245a142.494 142.494 0 0 0 2.53-2.702c42.435-46.643 38.928-76.101 40.682-92.935 0 0 35.775 51.553 43.488 53.306 7.713 1.754 10.169-6.31 7.012-45.94z" fill="#fff" /></svg>', "Qzone": '<svg xmlns="http://www.w3.org/2000/svg" class="icon qzone-icon" viewBox="0 0 1024 1024" ariaLabelledby="qzone"><circle cx="512" cy="512" r="512" fill="#0985DD" />,<path d="M722.38 595.24c22.486-4.056 11.345-12.424 2.156-11.346-16.685 1.72-40.43 1.925-66.562 1.284l3.029 17.79a656.641 656.641 0 0 0 61.402-7.702l-.025-.026zm68.95-174.915a5.287 5.287 0 0 0-4.493-3.645L598.42 389.29l-84.326-170.628c-1.925-3.594-7.958-3.594-9.857 0L419.885 389.29l-188.417 27.39a5.338 5.338 0 0 0-4.466 3.645 5.493 5.493 0 0 0 1.488 5.57l136.36 132.92-32.088 187.519a5.263 5.263 0 0 0 2.13 5.39c1.695 1.284 3.851 1.463 5.776.385l168.651-88.407 168.524 88.638 2.567.642 3.209-1.079c1.72-1.283 2.566-3.208 2.13-5.34l-24.591-143.648c-27.21 2.156-54.37 3.183-76.42 3.183-77.267 0-135.075-3.645-135.948-3.645a16.48 16.48 0 0 1-14.785-11.757 16.247 16.247 0 0 1 5.981-17.764l155.431-113.05c-99.959-7.906-183.873-6.418-184.721-6.418-13.502.642-25.67-3.645.642-14.375 4.518-1.694 109.2-23.72 230.362-7.445 6.673.847 12.013 5.75 13.733 12.194a16.61 16.61 0 0 1-6.263 17.302L497.204 571.598c27.826 5.802 100.37 12.014 160.745 13.502l-4.519-26.312 136.308-132.97a5.338 5.338 0 0 0 1.54-5.544l.051.051z" fill="#fff" /></svg>', "Reddit": '<svg xmlns="http://www.w3.org/2000/svg" class="icon reddit-icon" viewBox="0 0 1024 1024" ariaLabelledby="reddit"><circle cx="512" cy="512" r="512" fill="#EB5528" />,<path d="M617.199 680.55c5.666 5.974 5.666 11.742 0 17.34-21.845 23.143-56.9 34.714-105.199 34.714s-83.354-11.571-105.199-34.714c-5.666-5.598-5.666-11.366 0-17.34a10.445 10.445 0 0 1 7.919-3.379c3.174 0 5.803 1.127 7.919 3.38 16.93 18.295 46.728 27.408 89.361 27.408 42.325 0 72.09-9.113 89.361-27.409a10.445 10.445 0 0 1 7.919-3.379c3.174 0 5.803 1.127 7.919 3.38zm-176.06-136.635c9.182 9.694 13.756 21.47 13.756 35.294 0 13.79-4.574 25.565-13.756 35.26a44.134 44.134 0 0 1-33.28 14.54c-13.073 0-24.234-4.847-33.587-14.54a49.015 49.015 0 0 1-13.995-35.26c0-14.2 4.642-26.147 13.995-35.84 9.353-9.728 20.514-14.575 33.587-14.575 13.04 0 24.132 5.051 33.28 15.12zm222.584 35.294c0 13.79-4.642 25.565-13.995 35.26a44.954 44.954 0 0 1-33.587 14.54c-13.04 0-24.132-4.847-33.28-14.54a49.493 49.493 0 0 1-13.756-35.26c0-13.824 4.574-25.669 13.756-35.567 9.148-9.9 20.24-14.848 33.28-14.848 13.073 0 24.234 4.847 33.587 14.575 9.353 9.693 13.995 21.64 13.995 35.84zM796.433 512c0-18.295-6.144-33.963-18.5-47.036a59.494 59.494 0 0 0-44.92-19.592c-17.647 0-32.768 6.724-45.465 20.138-45.841-33.587-100.66-51.507-164.455-53.725l33.314-158.482 105.746 25.19c0 13.825 4.573 25.6 13.755 35.295 9.148 9.694 20.241 14.54 33.314 14.54 13.04 0 24.235-4.915 33.553-14.813 9.353-9.899 13.995-21.743 13.995-35.567s-4.642-25.669-13.995-35.567a44.578 44.578 0 0 0-33.553-14.814c-19.046 0-33.143 9.318-42.325 27.99L550.06 228.112c-6.69-1.877-11.094 1.126-13.21 8.977l-36.488 174.695c-63.454 2.594-117.897 20.718-163.363 54.272a59.187 59.187 0 0 0-46.011-20.685c-17.613 0-32.598 6.52-44.92 19.592a66.082 66.082 0 0 0-18.5 47.036c0 13.073 3.243 25.02 9.762 35.84 6.52 10.82 15.258 19.046 26.18 24.644a152.303 152.303 0 0 0-3.174 31.335c0 53.009 24.678 98.372 74.035 136.09 49.323 37.682 108.715 56.524 178.176 56.524 69.769 0 129.365-18.842 178.688-56.525 49.357-37.717 74.001-83.08 74.001-136.09 0-11.946-1.229-22.561-3.686-31.914 10.581-5.598 19.046-13.722 25.395-24.337 6.315-10.65 9.49-22.528 9.49-35.567z" fill="#fff" /></svg>', "Rss": '<svg xmlns="http://www.w3.org/2000/svg" class="icon rss-icon" viewBox="0 0 1024 1024" ariaLabelledby="rss"><circle cx="512" cy="512" r="512" fill="#FD9B00" />,<path d="M687.981 740.39c0-225.92-183.617-409.777-409.21-409.777v-97.205c279.353 0 506.617 227.506 506.617 506.98H687.98zm-74.841 0h-97.538c0-63.567-24.688-123.245-69.43-167.993-44.762-44.856-104.24-69.556-167.54-69.556v-97.176c184.44 0 334.508 150.046 334.508 334.725zM346.038 605.166c37.35 0 67.514 30.357 67.514 67.39 0 37.146-30.163 67.177-67.514 67.177-37.219 0-67.458-30.03-67.458-67.176 0-37.034 30.24-67.391 67.458-67.391z" fill="#fff" /></svg>', "Steam": '<svg xmlns="http://www.w3.org/2000/svg" class="icon steam-icon" viewBox="0 0 1024 1024" ariaLabelledby="steam"><circle cx="512" cy="512" r="488" fill="#fff" />,<path d="M1008 512c0 274-222.4 496-496.8 496-227.6 0-419.2-152.6-478-360.8l190.4 78.6c12.8 64.2 69.8 112.8 137.8 112.8 78.4 0 143.8-64.8 140.4-147l169-120.4c104.2 2.6 191.6-81.8 191.6-187 0-103.2-84-187-187.4-187s-187.4 84-187.4 187v2.4L369.2 558c-31-1.8-61.4 6.8-87 24.2L16 472.2C36.4 216.8 250.2 16 511.2 16 785.6 16 1008 238 1008 512zM327.4 768.6l-61-25.2a105.58 105.58 0 0 0 54.4 51.6c53.8 22.4 115.6-3.2 138-56.8 10.8-26 11-54.6.2-80.6-10.8-26-31-46.4-57-57.2-25.8-10.8-53.4-10.4-77.8-1.2l63 26c39.6 16.4 58.4 61.8 41.8 101.4-16.6 39.8-62 58.4-101.6 42zM675 508.8c-68.8 0-124.8-56-124.8-124.6s56-124.6 124.8-124.6 124.8 56 124.8 124.6S744 508.8 675 508.8zm.2-31.2c51.8 0 93.8-42 93.8-93.6 0-51.8-42-93.6-93.8-93.6s-93.8 42-93.8 93.6c.2 51.6 42.2 93.6 93.8 93.6z" fill="#13227a" /></svg>', "Twitter": '<svg xmlns="http://www.w3.org/2000/svg" class="icon twitter-icon" viewBox="0 0 1024 1024" ariaLabelledby="twitter"><circle cx="512" cy="512" r="512" fill="#5EAADE" />,<path d="M749.737 364.631c-17.594 7.805-36.513 13.088-56.371 15.459 20.269-12.148 35.836-31.387 43.156-54.312A196.233 196.233 0 0 1 674.2 349.6c-17.894-19.083-43.406-30.997-71.636-30.997-54.2 0-98.137 43.944-98.137 98.157 0 7.695.861 15.19 2.544 22.373-81.57-4.092-153.876-43.174-202.284-102.558-8.443 14.498-13.285 31.356-13.285 49.348 0 34.05 17.326 64.096 43.656 81.697a97.69 97.69 0 0 1-44.447-12.277c-.01.41-.01.82-.01 1.24 0 47.558 33.822 87.23 78.72 96.249a98.285 98.285 0 0 1-25.852 3.448 97.491 97.491 0 0 1-18.465-1.768c12.483 39.002 48.725 67.38 91.672 68.17-33.582 26.334-75.897 42.024-121.884 42.024-7.924 0-15.736-.46-23.408-1.37 43.434 27.844 95.014 44.104 150.443 44.104 180.505 0 279.221-149.576 279.221-279.294 0-4.263-.09-8.494-.278-12.708 19.178-13.835 35.813-31.115 48.967-50.807z" fill="#fff" /></svg>', "Wechat": '<svg xmlns="http://www.w3.org/2000/svg" class="icon wechat-icon" viewBox="0 0 1024 1024" ariaLabelledby="wechat"><circle cx="512" cy="512" r="512" fill="#1AC88E" />,<path d="M827.551 578.742a176.583 176.583 0 0 0-185.685-158.379 172.942 172.942 0 0 0-186.3 158.379 172.942 172.942 0 0 0 185.686 158.379 282.169 282.169 0 0 0 65.536-10.923l60.689 32.768-16.384-54.613a166.275 166.275 0 0 0 76.458-125.611zm-245.76-27.307a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.307 21.845 24.872 24.872 0 0 1-27.921 21.845h.614zm121.356 0a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.306 21.845 24.872 24.872 0 0 1-28.512 21.845h1.206z" fill="#fff" />,<path d="M623.662 400.953h21.23A222.709 222.709 0 0 0 419.772 245.6a208.145 208.145 0 0 0-223.323 189.94 182.044 182.044 0 0 0 89.201 150.483l-22.436 67.356 78.279-39.435a389.575 389.575 0 0 0 78.279 10.923h20.616a163.226 163.226 0 0 1-6.667-46.718 182.044 182.044 0 0 1 189.94-177.197zm-121.379-60.69a27.921 27.921 0 1 1 0 55.843 31.562 31.562 0 0 1-33.36-27.921 31.562 31.562 0 0 1 34.59-27.921h-1.23zM346.34 396.107a31.562 31.562 0 0 1-33.383-27.921 31.562 31.562 0 0 1 33.383-27.921 27.921 27.921 0 1 1 0 55.842z" fill="#fff" /></svg>', "Weibo": '<svg xmlns="http://www.w3.org/2000/svg" class="icon weibo-icon" viewBox="0 0 1024 1024" ariaLabelledby="weibo"><circle cx="512" cy="512" r="512" fill="#E6162D" />,<path d="M745.314 454.802c9.652 0 17.869-7.258 19.239-16.728a8.39 8.39 0 0 0 .261-2.12C779.445 302.233 657.02 325.25 657.02 325.25c-10.869 0-19.567 8.94-19.567 20.089 0 10.97 8.698 19.907 19.567 19.907 87.95-19.732 68.54 69.649 68.54 69.649-.004 11.06 8.842 19.908 19.754 19.908z" fill="#fff" />,<path d="M731.054 221.409c-42.342-10.077-85.862-1.393-98.055.981-.938.09-1.829.994-2.697 1.17-.415.088-.673.532-.673.532-12.045 3.457-20.828 14.77-20.828 28.14 0 15.932 12.694 29.034 28.564 29.034 0 0 15.39-2.097 25.846-6.252 10.364-4.246 98.012-3.16 141.576 71.17 23.734 54.247 10.428 90.553 8.778 96.387 0 0-5.653 14.095-5.653 27.973 0 16.024 12.694 26.083 28.433 26.083 13.169 0 24.211-1.821 27.452-24.447h.172c46.768-158.386-57.183-232.81-132.915-250.771zm-44.083 282.78c-28.28-5.579-14.519-21.062-14.519-21.062s27.67-46.38-5.482-80.099c-41.104-41.761-140.966 5.314-140.966 5.314-38.144 12.032-28.02-5.49-22.629-35.31 0-35.13-11.844-94.596-113.445-59.47-101.49 35.309-188.654 159.03-188.654 159.03-60.603 82.207-52.56 145.747-52.56 145.747 15.128 140.268 161.749 178.772 275.782 187.89 119.967 9.564 281.905-42.045 330.988-148.064 49.105-106.193-40.126-148.22-68.515-153.975zM433.387 766.675c-119.124 5.658-215.394-55.053-215.394-135.851 0-80.887 96.27-145.748 215.394-151.328 119.162-5.58 215.634 44.333 215.634 125.052.002 80.79-96.475 156.626-215.634 162.127z" fill="#fff" />,<path d="M409.603 532.773c-119.77 14.249-105.943 128.31-105.943 128.31s-1.22 36.117 32.126 54.513c70.084 38.593 142.248 15.224 178.723-32.634 36.474-47.888 15.086-164.346-104.906-150.189zM379.39 692.856c-22.343 2.665-40.385-10.437-40.385-29.463 0-18.94 16.02-38.768 38.387-41.143 25.694-2.485 42.431 12.56 42.431 31.588-.003 18.936-18.128 36.449-40.433 39.018zm70.626-61.146c-7.59 5.754-16.893 4.958-20.892-1.948-4.175-6.726-2.607-17.52 5.046-23.19 8.863-6.714 18.105-4.779 22.106 1.958 4.02 6.893 1.153 17.246-6.26 23.18z" fill="#fff" /></svg>', "Whatsapp": '<svg xmlns="http://www.w3.org/2000/svg" class="icon whatsapp-icon" viewBox="0 0 1024 1024" ariaLabelledby="whatsapp"><circle cx="512" cy="512" r="512" fill="#31B84C" />,<path d="m192.021 832 45.227-164.33a315.413 315.413 0 0 1-42.539-158.529C194.731 334.251 337.707 192 513.344 192c84.587-.213 165.76 33.28 225.387 93.013A314.453 314.453 0 0 1 832 509.376c-.085 174.848-143.04 317.141-318.656 317.141h-.15a319.61 319.61 0 0 1-152.277-38.613L192 832h.021zm241.686-455.467c-6.443-15.445-13.014-13.354-17.92-13.61-4.63-.214-9.942-.256-15.254-.256a29.227 29.227 0 0 0-21.226 9.898c-7.296 7.958-27.84 27.136-27.84 66.134s28.501 76.672 32.49 81.962c3.968 5.291 56.15 85.334 136 119.638 19.008 8.17 33.814 13.056 45.398 16.704 19.072 6.037 36.437 5.184 50.133 3.157 15.296-2.283 47.125-19.2 53.76-37.675 6.613-18.56 6.613-34.389 4.65-37.717-1.983-3.264-7.295-5.27-15.274-9.237-7.957-3.947-47.125-23.126-54.4-25.771-7.296-2.667-12.587-3.968-17.92 3.947-5.312 7.936-20.565 25.792-25.195 31.061-4.65 5.312-9.301 5.973-17.258 2.005-7.979-3.968-33.622-12.33-64-39.338-23.68-20.992-39.68-46.955-44.331-54.912-4.65-7.915-.47-12.203 3.52-16.15 3.563-3.541 7.936-9.258 11.904-13.866 3.99-4.651 5.333-7.958 7.979-13.227 2.645-5.29 1.322-9.92-.64-13.888-2.006-3.968-17.92-42.987-24.555-58.859h-.021z" fill="#fff" /></svg>', "Youtube": '<svg xmlns="http://www.w3.org/2000/svg" class="icon youtube-icon" viewBox="0 0 1024 1024" ariaLabelledby="youtube"><circle cx="512" cy="512" r="512" fill="#DD1829" />,<path d="M800.305 372.2c-12.805-42.429-22.873-65.942-65.303-71.064 0 0-113.644-5.761-226.64-5.761-111.716 0-222.797 5.761-222.797 5.761-44.992 5.122-55.7 29.915-67.223 71.065 0 0-11.524 65.527-11.524 131.886 0 68.066 11.524 137.008 11.524 137.008 8.963 39.87 27.354 65.943 67.223 71.065 0 0 123.292 7.682 240.724 7.682 106.78 0 208.714-7.682 208.714-7.682 39.87-7.682 53.78-28.635 65.303-71.065 0 0 11.523-63.022 11.523-128.045 0-69.288-11.524-140.85-11.524-140.85zM448.82 619.97V393.33l174.781 113.32L448.82 619.97z" fill="#fff" /></svg>', "Zhihu": '<svg xmlns="http://www.w3.org/2000/svg" class="icon zhihu-icon" viewBox="0 0 1024 1024" ariaLabelledby="zhihu"><circle cx="512" cy="512" r="512" fill="#006CE2" />,<path d="M513.65 491.261H411.551c1.615-16.154 5.815-60.095 5.815-84.973 0-24.88-.323-60.742-.323-60.742h102.744V329.39c0-21.647-9.37-31.34-17.124-31.34h-178.67s5.169-17.77 10.015-36.186c4.846-18.417 15.832-44.264 15.832-44.264-63.003 4.2-67.958 50.941-81.743 92.729-13.787 41.785-24.556 62.356-44.586 107.912 27.786 0 55.249-13.57 66.879-32.309 11.631-18.74 16.908-40.71 16.908-40.71h62.035v59.019c0 21.107-3.878 87.45-3.878 87.45H254.742c-19.386 0-29.724 48.894-29.724 48.894h133.76c-8.4 75.82-26.493 106.191-51.91 152.716-25.418 46.525-92.728 99.406-92.728 99.406 41.033 11.63 86.589-3.555 105.974-21.972 19.386-18.417 35.863-49.756 47.817-72.838 11.954-23.081 21.972-65.124 21.972-65.124L498.462 766.86s4.846-24.233 6.461-39.418c1.616-15.186-.755-26.385-4.63-35.433-3.878-9.046-15.509-21.54-31.018-39.634-15.507-18.094-48.034-52.879-48.034-52.879s-15.832 11.63-28.108 21.001c9.046-21.97 16.262-79.695 16.262-79.695h122.343v-20.249c.003-17.66-7.319-29.29-18.089-29.29zm287.337-200.747h-234.35a4.308 4.308 0 0 0-4.309 4.308v435.099a4.308 4.308 0 0 0 4.308 4.308h40.226l14.7 50.402 81.096-50.402h98.328a4.308 4.308 0 0 0 4.308-4.308v-435.1a4.308 4.308 0 0 0-4.308-4.308zM755.97 684.47h-52.343l-61.548 39.095-10.823-39.095h-18.738V338.116H755.97v346.355z" fill="#fff" /></svg>' };
const categoryMap = { "category": { "/": { "path": "/category/", "map": {} } }, "tag": { "/": { "path": "/tag/", "map": {} } } };
if (import_meta.webpackHot) {
  import_meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  }
}
const typeMap = { "article": { "/": { "path": "/article/", "keys": ["v-8daa1a0e", "v-22a39d25", "v-6d34f632", "v-7444d4f5", "v-76d72bc4", "v-e12556a0", "v-7446daa2", "v-5cbdbad5", "v-514c26af", "v-298737c8", "v-024e9ac2", "v-67eb30ff"] } }, "encrypted": { "/": { "path": "/encrypted/", "keys": [] } }, "slide": { "/": { "path": "/slides/", "keys": [] } }, "star": { "/": { "path": "/star/", "keys": [] } }, "timeline": { "/": { "path": "/timeline/", "keys": ["v-8daa1a0e", "v-22a39d25", "v-6d34f632", "v-7444d4f5", "v-76d72bc4", "v-e12556a0", "v-7446daa2", "v-5cbdbad5", "v-514c26af", "v-298737c8", "v-024e9ac2", "v-67eb30ff"] } } };
if (import_meta.webpackHot) {
  import_meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  }
}
const s$1 = ref(categoryMap), u = (o2 = "") => {
  const n2 = useRouter(), m2 = useRoute(), u2 = useRouteLocale();
  return computed(() => {
    var e;
    const r2 = o2 || ((e = usePageFrontmatter().value.blog) === null || e === void 0 ? void 0 : e.key) || "", p2 = n2.getRoutes();
    if (!s$1.value[r2])
      throw new Error("useBlogCategory: " + (o2 ? `key ${o2} is invalid` : "can not bind to an exisiting key on non blog pages"));
    const i2 = s$1.value[r2][u2.value], l2 = { path: i2.path, map: {} };
    for (const o3 in i2.map) {
      const e2 = i2.map[o3];
      l2.map[o3] = { path: e2.path, items: [] };
      for (const a2 of e2.keys) {
        const e3 = p2.find(({ name: t2 }) => t2 === a2);
        if (e3) {
          const a3 = J(n2, e3.path);
          l2.map[o3].items.push({ path: a3.path, info: a3.meta });
        }
      }
      m2.path === e2.path && (l2.currentItems = l2.map[o3].items);
    }
    return l2;
  });
};
(import_meta.webpackHot || false) && (__VUE_HMR_RUNTIME__.updateBlogCategory = (t2) => {
  s$1.value = t2;
});
const l$2 = ref(typeMap), c = (o2 = "") => {
  const n2 = useRouter(), i2 = useRouteLocale();
  return computed(() => {
    var e;
    const r2 = o2 || ((e = usePageFrontmatter().value.blog) === null || e === void 0 ? void 0 : e.key) || "";
    if (!l$2.value[r2])
      throw new Error("useBlogType: " + (o2 ? `key ${o2} is invalid` : "can not bind to an exisiting key on non blog pages"));
    const p2 = n2.getRoutes(), m2 = l$2.value[r2][i2.value], s2 = { path: m2.path, items: [] };
    for (const o3 of m2.keys) {
      const e2 = p2.find(({ name: t2 }) => t2 === o3);
      if (e2) {
        const o4 = J(n2, e2.path);
        s2.items.push({ path: o4.path, info: o4.meta });
      }
    }
    return s2;
  });
};
(import_meta.webpackHot || false) && (__VUE_HMR_RUNTIME__.updateBlogType = (t2) => {
  l$2.value = t2;
});
const categoryMapSymbol = Symbol.for("categoryMap");
const useCategoryMap = () => {
  const categoryMap2 = inject(categoryMapSymbol);
  if (!categoryMap2) {
    throw new Error("useCategoryMap() is called without provider.");
  }
  return categoryMap2;
};
const setupCategoryMap = () => {
  const categoryMap2 = u("category");
  provide(categoryMapSymbol, categoryMap2);
};
const useBlogOptions = () => {
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return computed(() => __spreadValues(__spreadValues({}, themeData2.value.blog), themeLocale.value.blog));
};
const tagMapSymbol = Symbol.for("tagMap");
const useTagMap = () => {
  const tagMap = inject(tagMapSymbol);
  if (!tagMap) {
    throw new Error("useTagMap() is called without provider.");
  }
  return tagMap;
};
const setupTagMap = () => {
  const tagMap = u("tag");
  provide(tagMapSymbol, tagMap);
};
const useArticleAuthor = (info) => {
  const themeLocale = useThemeLocaleData();
  return computed(() => {
    const { author } = info.value;
    if (author)
      return w$1(author);
    if (author === false)
      return [];
    return w$1(themeLocale.value.author, false);
  });
};
const useArticleCategory = (info) => {
  const categoryMap2 = useCategoryMap();
  return computed(() => b$1(info.value.category).map((name) => ({
    name,
    path: categoryMap2.value.map[name].path
  })));
};
const useArticleTag = (info) => {
  const tagMap = useTagMap();
  return computed(() => O$1(info.value.tag).map((name) => ({
    name,
    path: tagMap.value.map[name].path
  })));
};
const useArticleDate = (info) => {
  const pageLang = usePageLang();
  return computed(() => {
    const { date } = info.value;
    return date ? Y(date, { lang: pageLang.value, type: "date" }) : null;
  });
};
const useArticleInfo = (info) => {
  const blogOptions = useBlogOptions();
  const author = useArticleAuthor(info);
  const category2 = useArticleCategory(info);
  const tag2 = useArticleTag(info);
  const date = useArticleDate(info);
  const pure = usePure();
  return reactive({
    config: blogOptions.value.articleInfo || [
      "Author",
      "Original",
      "Date",
      "PageView",
      "Category",
      "Tag",
      "ReadingTime"
    ],
    author: author.value,
    category: category2.value,
    date: date.value,
    tag: tag2.value,
    isOriginal: info.value.isOriginal,
    readingTime: info.value.readingTime,
    color: !pure.value,
    hint: !pure.value
  });
};
const articlesSymbol = Symbol.for("articles");
const useArticles = () => {
  const articles = inject(articlesSymbol);
  if (!articles) {
    throw new Error("useArticles() is called without provider.");
  }
  return articles;
};
const setupArticles = () => {
  const articles = c("article");
  provide(articlesSymbol, articles);
};
const encryptedArticlesSymbol = Symbol.for("encryptedArticles");
const useEncryptedArticles = () => {
  const encryptedArticles = inject(encryptedArticlesSymbol);
  if (!encryptedArticles) {
    throw new Error("useEncryptedArticles() is called without provider.");
  }
  return encryptedArticles;
};
const setupEncryptedArticles = () => {
  const encryptedArticles = c("encrypted");
  provide(encryptedArticlesSymbol, encryptedArticles);
};
const slidesSymbol = Symbol.for("slides");
const useSlides = () => {
  const slides = inject(slidesSymbol);
  if (!slides) {
    throw new Error("useSlides() is called without provider.");
  }
  return slides;
};
const setupSlides = () => {
  const slides = c("slide");
  provide(slidesSymbol, slides);
};
const starsSymbol = Symbol.for("stars");
const useStars = () => {
  const stars = inject(starsSymbol);
  if (!stars) {
    throw new Error("useStars() is called without provider.");
  }
  return stars;
};
const setupStars = () => {
  const stars = c("star");
  provide(starsSymbol, stars);
};
const timelinesSymbol = Symbol.for("timelines");
const useTimelines = () => {
  const timelines = inject(timelinesSymbol);
  if (!timelines) {
    throw new Error("useTimelines() is called without provider.");
  }
  return timelines;
};
const setupTimelines = () => {
  const timelines = c("timeline");
  const timelineItems2 = computed(() => {
    const timelineItems3 = [];
    timelines.value.items.forEach(({ info, path }) => {
      var _a2;
      const { year, month, day } = ((_a2 = Y(info.date, { type: "date" })) === null || _a2 === void 0 ? void 0 : _a2.detail) || {};
      if (year && month && day) {
        if (!timelineItems3[0] || timelineItems3[0].year !== year)
          timelineItems3.unshift({ year, items: [] });
        timelineItems3[0].items.push({
          date: `${month}/${day}`,
          info,
          path
        });
      }
    });
    return __spreadProps(__spreadValues({}, timelines.value), {
      config: timelineItems3.reverse()
    });
  });
  provide(timelinesSymbol, timelineItems2);
};
const setupBlog = () => {
  setupArticles();
  setupCategoryMap();
  setupEncryptedArticles();
  setupSlides();
  setupStars();
  setupTagMap();
  setupTimelines();
};
var socialMedia = "";
var SocialMedia = defineComponent({
  name: "SocialMedia",
  setup() {
    const frontmatter = usePageFrontmatter();
    const blogOptions = useBlogOptions();
    const isPure = usePure();
    const mediaLinks = computed(() => {
      const { socialMedia: socialMedia2 } = frontmatter.value;
      const config = socialMedia2 === false ? false : blogOptions.value.medias || false;
      if (config)
        return Object.entries(config).map(([media, url]) => ({
          name: media,
          icon: icons[media],
          url
        }));
      return [];
    });
    return () => mediaLinks.value.length ? h$3("div", { class: "social-media-wrapper" }, mediaLinks.value.map(({ name, icon, url }) => h$3("a", __spreadProps(__spreadValues({
      class: "social-media",
      href: url,
      rel: "noopener noreferrer",
      target: "_blank",
      ariaLabel: name
    }, isPure.value ? {} : { "data-balloon-pos": "up" }), {
      innerHTML: icon
    })))) : null;
  }
});
var bloggerInfo = "";
var BloggerInfo = defineComponent({
  name: "BloggerInfo",
  setup() {
    const blogOptions = useBlogOptions();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap2 = useCategoryMap();
    const tagMap = useTagMap();
    const timelines = useTimelines();
    const navigate = useNavigate();
    const bloggerName = computed(() => {
      var _a2;
      return blogOptions.value.name || ((_a2 = w$1(themeLocale.value.author)[0]) === null || _a2 === void 0 ? void 0 : _a2.name) || siteLocale.value.title;
    });
    const bloggerAvatar = computed(() => blogOptions.value.avatar || themeLocale.value.logo);
    const locale = computed(() => themeLocale.value.blogLocales);
    const intro = computed(() => blogOptions.value.intro);
    return () => h$3("div", {
      class: "blogger-info",
      vocab: "https://schema.org/",
      typeof: "Person"
    }, [
      h$3("div", __spreadValues({
        class: "blogger"
      }, intro.value ? {
        style: { cursor: "pointer" },
        ariaLabel: locale.value.intro,
        "data-balloon-pos": "down",
        role: "navigation",
        onClick: () => navigate(intro.value)
      } : {}), [
        bloggerAvatar.value ? h$3("img", {
          class: [
            "blogger-avatar",
            {
              round: blogOptions.value.roundAvatar
            }
          ],
          src: withBase(bloggerAvatar.value),
          property: "image",
          alt: "Blogger Avatar"
        }) : null,
        bloggerName.value ? h$3("div", { class: "blogger-name", property: "name" }, bloggerName.value) : null,
        blogOptions.value.description ? h$3("div", {
          class: "blogger-description",
          innerHTML: blogOptions.value.description
        }) : null,
        intro.value ? h$3("meta", { property: "url", content: withBase(intro.value) }) : null
      ]),
      h$3("div", { class: "num-wrapper" }, [
        h$3("div", { onClick: () => navigate(articles.value.path) }, [
          h$3("div", { class: "num" }, articles.value.items.length),
          h$3("div", locale.value.article)
        ]),
        h$3("div", { onClick: () => navigate(categoryMap2.value.path) }, [
          h$3("div", { class: "num" }, Object.keys(categoryMap2.value.map).length),
          h$3("div", locale.value.category)
        ]),
        h$3("div", { onClick: () => navigate(tagMap.value.path) }, [
          h$3("div", { class: "num" }, Object.keys(tagMap.value.map).length),
          h$3("div", locale.value.tag)
        ]),
        h$3("div", { onClick: () => navigate(timelines.value.path) }, [
          h$3("div", { class: "num" }, timelines.value.items.length),
          h$3("div", locale.value.timeline)
        ])
      ]),
      h$3(SocialMedia)
    ]);
  }
});
const CategoryIcon = () => h$3(x, { name: "category" }, () => h$3("path", {
  d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"
}));
CategoryIcon.displayName = "CategoryIcon";
const TagIcon = () => h$3(x, { name: "tag" }, () => h$3("path", {
  d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"
}));
TagIcon.displayName = "TagIcon";
const TimelineIcon = () => h$3(x, { name: "timeline" }, () => h$3("path", {
  d: "M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"
}));
TimelineIcon.displayName = "TimelineIcon";
const LockIcon = () => h$3(x, { name: "lock" }, () => h$3("path", {
  d: "M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"
}));
LockIcon.displayName = "LockIcon";
const SlideIcon = () => h$3(x, { name: "slides" }, () => h$3("path", {
  d: "M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"
}));
SlideIcon.displayName = "SlideIcon";
const StickyIcon = () => h$3(x, { name: "sticky" }, () => [
  h$3("path", {
    d: "M849.92 849.92 174.08 174.08C112.64 112.64 153.6 0 245.76 0H921.6C983.04 0 1024 40.96 1024 102.4v675.84c0 92.16-112.64 133.12-174.08 71.68z"
  })
]);
StickyIcon.displayName = "StickyIcon";
const ArticleIcon = () => h$3(x, { name: "article" }, () => h$3("path", {
  d: "M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"
}));
ArticleIcon.displayName = "ArticleIcon";
const BookIcon = () => h$3(x, { name: "book" }, () => h$3("path", {
  d: "M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"
}));
BookIcon.displayName = "BookIcon";
const LinkIcon = () => h$3(x, { name: "link" }, () => h$3("path", {
  d: "M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"
}));
LinkIcon.displayName = "LinkIcon";
const ProjectIcon = () => h$3(x, { name: "project" }, () => h$3("path", {
  d: "M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"
}));
ProjectIcon.displayName = "ProjectIcon";
const FriendIcon = () => h$3(x, { name: "friend" }, () => h$3("path", {
  d: "M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"
}));
FriendIcon.displayName = "FriendIcon";
const SlideDownIcon = () => h$3(x, { name: "slide-down" }, () => h$3("path", {
  d: "M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"
}));
SlideDownIcon.displayName = "SlideDownIcon";
var empty_icon = "";
const EmptyIcon = defineComponent({
  name: "EmptyIcon",
  setup() {
    return () => h$3("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      class: "empty-icon",
      viewBox: "0 0 1024 1024",
      innerHTML: '<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'
    });
  }
});
var articleItem = "";
var ArticleItem = defineComponent({
  name: "ArticleItem",
  props: {
    info: {
      type: Object,
      required: true
    },
    path: { type: String, required: true }
  },
  setup(props) {
    const info = toRef(props, "info");
    const { getPathEncryptStatus } = usePathEncrypt();
    const isEncrypted = computed(() => getPathEncryptStatus(props.path));
    const articleInfo2 = useArticleInfo(info);
    return () => h$3("article", {
      class: "article",
      vocab: "https://schema.org/",
      typeof: "Article"
    }, [
      info.value.sticky ? h$3(StickyIcon) : null,
      h$3("header", { class: "title" }, h$3(RouterLink, {
        to: props.path
      }, () => [
        isEncrypted.value ? h$3(LockIcon) : null,
        info.value.type === "slide" ? h$3(SlideIcon) : null,
        h$3("span", { property: "headline" }, info.value.title),
        info.value.cover ? h$3("meta", {
          property: "image",
          content: withBase(info.value.cover)
        }) : null
      ])),
      info.value.excerpt ? h$3("div", { class: "excerpt", innerHTML: info.value.excerpt }) : null,
      h$3("hr", { class: "hr" }),
      h$3(resolveComponent("ArticleInfo"), articleInfo2)
    ]);
  }
});
var articleList = "";
var ArticleList = defineComponent({
  name: "ArticleList",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const blogOptions = useBlogOptions();
    const currentPage = ref(1);
    const articlePerPage = computed(() => blogOptions.value.articlePerPage || 10);
    const currentArticles = computed(() => props.items.slice((currentPage.value - 1) * articlePerPage.value, currentPage.value * articlePerPage.value));
    const updatePage = (page2) => {
      currentPage.value = page2;
      const query = __spreadValues({}, route.query);
      if (query.page === page2.toString() || page2 === 1 && !query.page)
        return;
      if (page2 === 1)
        delete query.page;
      else
        query.page = page2.toString();
      void router.push({ path: route.path, query });
    };
    watch(currentPage, () => {
      const distance = document.querySelector("#article-list").getBoundingClientRect().top + window.scrollY;
      setTimeout(() => {
        window.scrollTo(0, distance);
      }, 100);
    });
    onMounted(() => {
      const { page: page2 } = route.query;
      updatePage(page2 ? Number(page2) : 1);
    });
    return () => h$3("div", { id: "article-list", class: "article-wrapper" }, currentArticles.value.length ? [
      ...currentArticles.value.map(({ info, path }, index2) => h$3(DropTransition, { delay: index2 * 0.04 }, () => h$3(ArticleItem, { key: path, info, path }))),
      h$3(resolveComponent("Pagination"), {
        currentPage: currentPage.value,
        perPage: articlePerPage.value,
        total: props.items.length,
        onUpdateCurrentPage: updatePage
      })
    ] : h$3(EmptyIcon));
  }
});
var defaultHeroImagePath = "/hope-demo/assets/hero.197a9d2d.jpg";
var blogHero = "";
var BlogHero = defineComponent({
  name: "BlogHero",
  setup() {
    const title = usePageHeadTitle();
    const frontmatter = usePageFrontmatter();
    const hero = ref(null);
    const heroImage = computed(() => frontmatter.value.heroImage || null);
    const isFullScreen = computed(() => frontmatter.value.heroFullScreen || false);
    const heroImageStyle = computed(() => {
      const defaultStyle = {
        maxHeight: "180px",
        margin: frontmatter.value.showTitle === false ? "6rem auto 1.5rem" : "1rem auto"
      };
      return __spreadValues(__spreadValues({}, defaultStyle), frontmatter.value.heroImageStyle);
    });
    const bgImage = computed(() => frontmatter.value.bgImage ? withBase(frontmatter.value.bgImage) : defaultHeroImagePath);
    const bgImageStyle = computed(() => {
      const defaultStyle = {
        height: "350px",
        textAlign: "center",
        overflow: "hidden"
      };
      return __spreadValues(__spreadValues({}, defaultStyle), frontmatter.value.bgImageStyle);
    });
    return () => frontmatter.value.hero !== false ? h$3("div", {
      ref: hero,
      class: ["blog-hero", { fullscreen: isFullScreen.value }],
      style: bgImageStyle.value
    }, [
      h$3("div", {
        class: "mask",
        style: {
          background: `url(${bgImage.value}) center/cover no-repeat`
        }
      }),
      h$3(DropTransition, { delay: 0.04 }, () => heroImage.value ? h$3("img", {
        class: "hero-logo",
        style: heroImageStyle.value,
        src: withBase(heroImage.value),
        alt: frontmatter.value.heroAlt || "hero image"
      }) : null),
      h$3(DropTransition, { delay: 0.08 }, () => frontmatter.value.showTitle !== false ? h$3("h1", frontmatter.value.heroText || title.value) : null),
      h$3(DropTransition, { delay: 0.12 }, () => frontmatter.value.tagline ? h$3("p", {
        class: "description",
        innerHTML: frontmatter.value.tagline
      }) : null),
      isFullScreen.value ? h$3("button", {
        class: "slide-down-button",
        onClick: () => {
          window.scrollTo({
            top: hero.value.clientHeight,
            behavior: "smooth"
          });
        }
      }, [h$3(SlideDownIcon), h$3(SlideDownIcon)]) : null
    ]) : null;
  }
});
var categoryList = "";
var CategoryList = defineComponent({
  name: "CategoryList",
  setup() {
    const route = useRoute();
    const categoryMap2 = useCategoryMap();
    return () => h$3("ul", { class: "category-list-wrapper" }, Object.entries(categoryMap2.value.map).map(([category2, { path, items }]) => h$3("li", {
      class: [
        "category",
        `category${I$1(category2, 9)}`,
        { active: path === route.path }
      ]
    }, h$3(RouterLink, { to: path }, () => [
      category2,
      h$3("span", { class: "category-num" }, items.length)
    ]))));
  }
});
var tagList = "";
var TagList = defineComponent({
  name: "TagList",
  setup() {
    const frontmatter = usePageFrontmatter();
    const tagMap = useTagMap();
    const tagList2 = computed(() => Object.entries(tagMap.value.map).map(([name, { path }]) => ({
      name,
      path
    })));
    const isActive = (name) => {
      var _a2;
      return name === ((_a2 = frontmatter.value.blog) === null || _a2 === void 0 ? void 0 : _a2.name);
    };
    return () => h$3("ul", { class: "tag-list-wrapper" }, tagList2.value.map(({ name, path }) => h$3("li", {
      class: [
        "tag",
        `tag${I$1(name, 9)}`,
        { active: isActive(name) }
      ]
    }, h$3(RouterLink, { to: path }, () => h$3("div", { class: "tag-name" }, name)))));
  }
});
var timelineList = "";
var TimelineList = defineComponent({
  name: "TimelineList",
  setup() {
    const themeLocale = useThemeLocaleData();
    const timelines = useTimelines();
    const navigate = useNavigate();
    const hint = computed(() => themeLocale.value.blogLocales.timeline);
    return () => h$3("div", { class: "timeline-list-wrapper" }, [
      h$3("div", {
        class: "timeline-list-title",
        onClick: () => navigate(timelines.value.path)
      }, [
        h$3(TimelineIcon),
        h$3("span", { class: "num" }, timelines.value.items.length),
        hint.value
      ]),
      h$3("hr"),
      h$3("div", { class: "timeline-content" }, h$3("ul", { class: "timeline-list" }, timelines.value.config.map(({ year, items }, index2) => h$3(DropTransition, { delay: 0.08 * (index2 + 1) }, () => h$3("li", [
        h$3("h3", { class: "timeline-year" }, year),
        h$3("ul", { class: "timeline-year-wrapper" }, items.map(({ date, info, path }) => h$3("li", { class: "timeline-item" }, [
          h$3("span", { class: "timeline-date" }, date),
          h$3(RouterLink, {
            class: "timeline-title",
            to: path
          }, () => info.title)
        ])))
      ])))))
    ]);
  }
});
var infoList = "";
var InfoList = defineComponent({
  name: "InfoList",
  setup() {
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap2 = useCategoryMap();
    const categoryNumber = computed(() => Object.keys(categoryMap2.value.map).length);
    const stars = useStars();
    const tagMap = useTagMap();
    const tagNumber = computed(() => Object.keys(tagMap.value.map).length);
    const navigate = useNavigate();
    const active = ref("article");
    const locale = computed(() => themeLocale.value.blogLocales);
    const buttons = [
      ["article", ArticleIcon],
      ["category", CategoryIcon],
      ["tag", TagIcon],
      ["timeline", TimelineIcon]
    ];
    return () => h$3("div", { class: "blog-info-list" }, [
      h$3("div", { class: "blog-type-wrapper" }, buttons.map(([key, icon]) => h$3("button", {
        class: "blog-type-button",
        onClick: () => {
          active.value = key;
        }
      }, h$3("div", {
        class: ["icon-wapper", { active: active.value === key }],
        ariaLabel: locale.value[key],
        "data-balloon-pos": "up"
      }, h$3(icon))))),
      active.value === "article" ? h$3(DropTransition, () => [
        h$3("div", { class: "sticky-article-wrapper" }, [
          h$3("div", {
            class: "title",
            onClick: () => navigate(articles.value.path)
          }, [
            h$3(ArticleIcon),
            h$3("span", { class: "num" }, articles.value.items.length),
            locale.value.article
          ]),
          h$3("hr"),
          h$3("ul", { class: "sticky-article-list" }, stars.value.items.map(({ info, path }, index2) => h$3(DropTransition, { delay: 0.08 * (index2 + 1) }, () => h$3("li", {
            class: "sticky-article",
            onClick: () => navigate(path)
          }, info.title))))
        ])
      ]) : null,
      active.value === "category" ? h$3(DropTransition, () => [
        h$3("div", { class: "category-wrapper" }, [
          categoryNumber.value ? h$3("div", {
            class: "title",
            onClick: () => navigate(categoryMap2.value.path)
          }, [
            h$3(CategoryIcon),
            h$3("span", { class: "num" }, categoryNumber.value),
            locale.value.category
          ]) : null,
          h$3("hr"),
          h$3(DropTransition, { delay: 0.04 }, () => h$3(CategoryList))
        ])
      ]) : null,
      active.value === "tag" ? h$3(DropTransition, () => [
        h$3("div", { class: "tag-wrapper" }, [
          tagNumber.value ? h$3("div", {
            class: "title",
            onClick: () => navigate(tagMap.value.path)
          }, [
            h$3(TagIcon),
            h$3("span", { class: "num" }, tagNumber.value),
            locale.value.tag
          ]) : null,
          h$3("hr"),
          h$3(DropTransition, { delay: 0.04 }, () => h$3(TagList))
        ])
      ]) : null,
      active.value === "timeline" ? h$3(DropTransition, () => h$3(TimelineList)) : null
    ]);
  }
});
var infoPanel = "";
var InfoPanel = defineComponent({
  name: "InfoPanel",
  setup() {
    return () => h$3("aside", { class: "blog-info-wrapper" }, [
      h$3(DropTransition, () => h$3(BloggerInfo)),
      h$3(DropTransition, { delay: 0.04 }, () => h$3(InfoList))
    ]);
  }
});
var projectPanel = "";
const AVAILABLE_PROJECT_TYPES = [
  "link",
  "article",
  "book",
  "project",
  "friend"
];
var ProjectPanel = defineComponent({
  name: "ProjectPanel",
  components: { ArticleIcon, BookIcon, FriendIcon, LinkIcon, ProjectIcon },
  setup() {
    const frontmatter = usePageFrontmatter();
    const iconPrefix = useIconPrefix();
    const pure = usePure();
    const navigate = useNavigate();
    const renderIcon2 = (icon = "", alt = "icon") => {
      if (AVAILABLE_PROJECT_TYPES.includes(icon))
        return h$3(resolveComponent(`${icon}-icon`));
      if (icon.match(/^https?:\/\//))
        return h$3("img", { src: icon, alt, class: "image" });
      if (icon.startsWith("/"))
        return h$3("img", { src: withBase(icon), alt, class: "image" });
      return h$3("span", { class: ["icon", `${iconPrefix.value}${icon}`] });
    };
    return () => {
      var _a2;
      return ((_a2 = frontmatter.value.projects) === null || _a2 === void 0 ? void 0 : _a2.length) ? h$3("div", { class: "project-panel" }, frontmatter.value.projects.map(({ icon, link, name, desc }, index2) => h$3("div", {
        class: [
          "project",
          { [`project${index2 % 9}`]: !pure.value }
        ],
        onClick: () => navigate(link)
      }, [
        renderIcon2(icon, name),
        h$3("div", { class: "name" }, name),
        h$3("div", { class: "desc" }, desc)
      ]))) : null;
    };
  }
});
var home = "";
var BlogHome = defineComponent({
  name: "BlogHome",
  setup() {
    const articles = useArticles();
    return () => h$3("div", { class: "page blog" }, [
      h$3(BlogHero),
      h$3("div", { class: "blog-page-wrapper" }, [
        h$3("main", { class: "blog-home", id: "main-content" }, [
          h$3(DropTransition, { delay: 0.16 }, () => h$3(ProjectPanel)),
          h$3(DropTransition, { delay: 0.24 }, () => h$3(ArticleList, { items: articles.value.items }))
        ]),
        h$3(DropTransition, { delay: 0.16 }, () => h$3(InfoPanel))
      ]),
      h$3(DropTransition, { delay: 0.28 }, () => h$3(MarkdownContent))
    ]);
  }
});
var articleType = "";
var ArticleType = defineComponent({
  name: "ArticleType",
  setup() {
    const themeLocale = useThemeLocaleData();
    const route = useRoute();
    const articles = useArticles();
    const encryptedArticles = useEncryptedArticles();
    const slides = useSlides();
    const stars = useStars();
    const types = computed(() => {
      const locale = themeLocale.value.blogLocales;
      return [
        {
          text: locale.all,
          path: articles.value.path
        },
        { text: locale.star, path: stars.value.path },
        { text: locale.slides, path: slides.value.path },
        { text: locale.encrypt, path: encryptedArticles.value.path }
      ];
    });
    return () => h$3("ul", { class: "article-type-wrapper" }, types.value.map((type) => h$3("li", {
      class: ["article-type", { active: type.path === route.path }]
    }, h$3(RouterLink, { to: type.path }, () => type.text))));
  }
});
var timelineItems = "";
var TimelineItems = defineComponent({
  name: "TimelineItems",
  setup() {
    const blogOptions = useBlogOptions();
    const themeLocale = useThemeLocaleData();
    const timelines = useTimelines();
    const hint = computed(() => blogOptions.value.timeline || themeLocale.value.blogLocales.timelineTitle);
    const items = computed(() => timelines.value.config.map(({ year }) => ({
      title: year.toString(),
      level: 2,
      slug: year.toString(),
      children: []
    })));
    return () => h$3("div", { class: "timeline-wrapper" }, h$3("ul", { class: "timeline-content" }, [
      h$3(DropTransition, () => h$3("li", { class: "motto" }, hint.value)),
      h$3(resolveComponent("TOC"), { items: items.value }),
      ...timelines.value.config.map(({ year, items: items2 }, index2) => h$3(DropTransition, { delay: 0.08 * (index2 + 1), type: "group" }, () => [
        h$3("h3", { key: "title", id: year, class: "timeline-year-title" }, h$3("span", year)),
        h$3("li", { key: "content", class: "timeline-year-list" }, [
          h$3("ul", { class: "timeline-year-wrapper" }, items2.map(({ date, info, path }) => h$3("li", { class: "timeline-item" }, [
            h$3("span", { class: "timeline-date" }, date),
            h$3(RouterLink, {
              class: "timeline-title",
              to: path
            }, () => info.title)
          ])))
        ])
      ]))
    ]));
  }
});
var page = "";
var BlogPage = defineComponent({
  name: "BlogPage",
  components: {
    ArticleType,
    CategoryList,
    TagList
  },
  setup() {
    const frontmatter = usePageFrontmatter();
    const route = useRoute();
    const articles = useArticles();
    const categoryMap2 = useCategoryMap();
    const encryptedArticles = useEncryptedArticles();
    const slides = useSlides();
    const stars = useStars();
    const tagMap = useTagMap();
    const componentName = computed(() => {
      const { key } = frontmatter.value.blog || {};
      return key === "category" ? "CategoryList" : key === "tag" ? "TagList" : key === "timeline" ? "" : "ArticleType";
    });
    const items = computed(() => {
      const { name = "", key = "" } = frontmatter.value.blog || {};
      return key === "encrypted" ? encryptedArticles.value.items : key === "star" ? stars.value.items : key === "slide" ? slides.value.items : key === "timeline" ? [] : key === "category" ? name ? categoryMap2.value.map[name].items : [] : key === "tag" ? name ? tagMap.value.map[name].items : [] : articles.value.items;
    });
    return () => h$3("main", { class: "blog-page" }, [
      h$3(DropTransition, () => componentName.value ? h$3(resolveComponent(componentName.value)) : null),
      h$3(DropTransition, { delay: 0.24 }, () => {
        var _a2;
        return ((_a2 = frontmatter.value.blog) === null || _a2 === void 0 ? void 0 : _a2.key) === "timeline" ? h$3(TimelineItems) : h$3(ArticleList, { key: route.path, items: items.value });
      })
    ]);
  }
});
var layout = "";
var clientAppEnhance9 = defineClientAppEnhance(({ app }) => {
  app.component("BloggerInfo", BloggerInfo);
  app.component("BlogHome", BlogHome);
  app.component("BlogPage", BlogPage);
});
const clientAppEnhances = [
  clientAppEnhance0,
  p$5,
  clientAppEnhance2,
  clientAppEnhance3,
  y$1,
  i$1,
  clientAppEnhance6,
  clientAppEnhance7,
  clientAppEnhance8,
  clientAppEnhance9
];
var backToTop = "";
const d = () => h$3(x, { name: "back-to-top" }, () => [h$3("path", { d: "M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z" }), h$3("path", { d: "m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z" })]);
d.displayName = "BacktoTopIcon";
var i = defineComponent({ name: "BackToTop", props: { threshold: { type: Number, default: 300 } }, setup(o2) {
  const r2 = usePageFrontmatter(), i2 = useThemeData$1(), v2 = z$1({ "/": { "backToTop": "\u8FD4\u56DE\u9876\u90E8" } }), b2 = ref(0), T2 = computed(() => {
    const { backToTop: e } = i2.value;
    return typeof e == "number" ? e : o2.threshold;
  }), f2 = computed(() => {
    const o3 = i2.value.backToTop !== false, e = r2.value.backToTop;
    return (e || o3 && e !== false) && b2.value > T2.value;
  }), h2 = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, k2 = lodash_debounce(() => {
    b2.value = h2();
  }, 100);
  return onMounted(() => {
    b2.value = h2(), window.addEventListener("scroll", k2);
  }), onUnmounted(() => {
    window.removeEventListener("scroll", k2);
  }), () => h$3(Transition, { name: "fade" }, () => f2.value ? h$3("button", { class: "back-to-top", ariaLabel: v2.value.backToTop, "data-balloon-pos": "left", onClick: () => {
    window.scrollTo({ top: 0, behavior: "smooth" }), b2.value = 0;
  } }, h$3(d)) : null);
} });
const clientAppRootComponents = [
  i
];
function r(r2, e, n2) {
  var i2, t2, o2;
  e === void 0 && (e = 50), n2 === void 0 && (n2 = {});
  var a2 = (i2 = n2.isImmediate) != null && i2, u2 = (t2 = n2.callback) != null && t2, c2 = n2.maxWait, v2 = Date.now(), l2 = [];
  function f2() {
    if (c2 !== void 0) {
      var r3 = Date.now() - v2;
      if (r3 + e >= c2)
        return c2 - r3;
    }
    return e;
  }
  var d2 = function() {
    var e2 = [].slice.call(arguments), n3 = this;
    return new Promise(function(i3, t3) {
      var c3 = a2 && o2 === void 0;
      if (o2 !== void 0 && clearTimeout(o2), o2 = setTimeout(function() {
        if (o2 = void 0, v2 = Date.now(), !a2) {
          var i4 = r2.apply(n3, e2);
          u2 && u2(i4), l2.forEach(function(r3) {
            return (0, r3.resolve)(i4);
          }), l2 = [];
        }
      }, f2()), c3) {
        var d3 = r2.apply(n3, e2);
        return u2 && u2(d3), i3(d3);
      }
      l2.push({ resolve: i3, reject: t3 });
    });
  };
  return d2.cancel = function(r3) {
    o2 !== void 0 && clearTimeout(o2), l2.forEach(function(e2) {
      return (0, e2.reject)(r3);
    }), l2 = [];
  }, d2;
}
const useActiveHeaderLinks = ({ headerLinkSelector: headerLinkSelector2, headerAnchorSelector: headerAnchorSelector2, delay: delay2, offset: offset2 = 5 }) => {
  const router = useRouter();
  const page2 = usePageData();
  const setActiveRouteHash = () => {
    var _a2, _b2, _c, _d;
    const headerLinks = Array.from(document.querySelectorAll(headerLinkSelector2));
    const headerAnchors = Array.from(document.querySelectorAll(headerAnchorSelector2));
    const existedHeaderAnchors = headerAnchors.filter((anchor) => headerLinks.some((link) => link.hash === anchor.hash));
    const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    const scrollBottom = window.innerHeight + scrollTop;
    const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const isAtPageBottom = Math.abs(scrollHeight - scrollBottom) < offset2;
    for (let i2 = 0; i2 < existedHeaderAnchors.length; i2++) {
      const anchor = existedHeaderAnchors[i2];
      const nextAnchor = existedHeaderAnchors[i2 + 1];
      const isTheFirstAnchorActive = i2 === 0 && scrollTop === 0;
      const hasPassedCurrentAnchor = scrollTop >= ((_b2 = (_a2 = anchor.parentElement) === null || _a2 === void 0 ? void 0 : _a2.offsetTop) !== null && _b2 !== void 0 ? _b2 : 0) - offset2;
      const hasNotPassedNextAnchor = !nextAnchor || scrollTop < ((_d = (_c = nextAnchor.parentElement) === null || _c === void 0 ? void 0 : _c.offsetTop) !== null && _d !== void 0 ? _d : 0) - offset2;
      const isActive = isTheFirstAnchorActive || hasPassedCurrentAnchor && hasNotPassedNextAnchor;
      if (!isActive)
        continue;
      const routeHash = decodeURIComponent(router.currentRoute.value.hash);
      const anchorHash = decodeURIComponent(anchor.hash);
      if (routeHash === anchorHash)
        return;
      if (isAtPageBottom) {
        for (let j2 = i2 + 1; j2 < existedHeaderAnchors.length; j2++) {
          if (routeHash === decodeURIComponent(existedHeaderAnchors[j2].hash)) {
            return;
          }
        }
      }
      replaceWithoutScrollBehavior(router, {
        hash: anchorHash,
        force: true
      });
      return;
    }
  };
  const onScroll = r(setActiveRouteHash, delay2);
  onMounted(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll);
  });
  watch(() => page2.value.path, onScroll);
};
const replaceWithoutScrollBehavior = async (router, ...args) => {
  const { scrollBehavior } = router.options;
  router.options.scrollBehavior = void 0;
  await router.replace(...args).finally(() => router.options.scrollBehavior = scrollBehavior);
};
const headerLinkSelector = ".sidebar-link, .toc-link";
const headerAnchorSelector = ".header-anchor";
const delay = 200;
const offset = 5;
var clientAppSetup0 = defineClientAppSetup(() => {
  useActiveHeaderLinks({
    headerLinkSelector,
    headerAnchorSelector,
    delay,
    offset
  });
});
var nprogress$1 = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(module, exports) {
  (function(root2, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    var NProgress = {};
    NProgress.version = "0.2.0";
    var Settings = NProgress.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: true,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: true,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    NProgress.configure = function(options) {
      var key, value2;
      for (key in options) {
        value2 = options[key];
        if (value2 !== void 0 && options.hasOwnProperty(key))
          Settings[key] = value2;
      }
      return this;
    };
    NProgress.status = null;
    NProgress.set = function(n2) {
      var started = NProgress.isStarted();
      n2 = clamp(n2, Settings.minimum, 1);
      NProgress.status = n2 === 1 ? null : n2;
      var progress = NProgress.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
      progress.offsetWidth;
      queue2(function(next) {
        if (Settings.positionUsing === "")
          Settings.positionUsing = NProgress.getPositioningCSS();
        css(bar, barPositionCSS(n2, speed, ease));
        if (n2 === 1) {
          css(progress, {
            transition: "none",
            opacity: 1
          });
          progress.offsetWidth;
          setTimeout(function() {
            css(progress, {
              transition: "all " + speed + "ms linear",
              opacity: 0
            });
            setTimeout(function() {
              NProgress.remove();
              next();
            }, speed);
          }, speed);
        } else {
          setTimeout(next, speed);
        }
      });
      return this;
    };
    NProgress.isStarted = function() {
      return typeof NProgress.status === "number";
    };
    NProgress.start = function() {
      if (!NProgress.status)
        NProgress.set(0);
      var work = function() {
        setTimeout(function() {
          if (!NProgress.status)
            return;
          NProgress.trickle();
          work();
        }, Settings.trickleSpeed);
      };
      if (Settings.trickle)
        work();
      return this;
    };
    NProgress.done = function(force) {
      if (!force && !NProgress.status)
        return this;
      return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
    };
    NProgress.inc = function(amount) {
      var n2 = NProgress.status;
      if (!n2) {
        return NProgress.start();
      } else {
        if (typeof amount !== "number") {
          amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
        }
        n2 = clamp(n2 + amount, 0, 0.994);
        return NProgress.set(n2);
      }
    };
    NProgress.trickle = function() {
      return NProgress.inc(Math.random() * Settings.trickleRate);
    };
    (function() {
      var initial = 0, current = 0;
      NProgress.promise = function($promise) {
        if (!$promise || $promise.state() === "resolved") {
          return this;
        }
        if (current === 0) {
          NProgress.start();
        }
        initial++;
        current++;
        $promise.always(function() {
          current--;
          if (current === 0) {
            initial = 0;
            NProgress.done();
          } else {
            NProgress.set((initial - current) / initial);
          }
        });
        return this;
      };
    })();
    NProgress.render = function(fromStart) {
      if (NProgress.isRendered())
        return document.getElementById("nprogress");
      addClass(document.documentElement, "nprogress-busy");
      var progress = document.createElement("div");
      progress.id = "nprogress";
      progress.innerHTML = Settings.template;
      var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress.status || 0), parent = document.querySelector(Settings.parent), spinner;
      css(bar, {
        transition: "all 0 linear",
        transform: "translate3d(" + perc + "%,0,0)"
      });
      if (!Settings.showSpinner) {
        spinner = progress.querySelector(Settings.spinnerSelector);
        spinner && removeElement(spinner);
      }
      if (parent != document.body) {
        addClass(parent, "nprogress-custom-parent");
      }
      parent.appendChild(progress);
      return progress;
    };
    NProgress.remove = function() {
      removeClass(document.documentElement, "nprogress-busy");
      removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
      var progress = document.getElementById("nprogress");
      progress && removeElement(progress);
    };
    NProgress.isRendered = function() {
      return !!document.getElementById("nprogress");
    };
    NProgress.getPositioningCSS = function() {
      var bodyStyle = document.body.style;
      var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
      if (vendorPrefix + "Perspective" in bodyStyle) {
        return "translate3d";
      } else if (vendorPrefix + "Transform" in bodyStyle) {
        return "translate";
      } else {
        return "margin";
      }
    };
    function clamp(n2, min, max) {
      if (n2 < min)
        return min;
      if (n2 > max)
        return max;
      return n2;
    }
    function toBarPerc(n2) {
      return (-1 + n2) * 100;
    }
    function barPositionCSS(n2, speed, ease) {
      var barCSS;
      if (Settings.positionUsing === "translate3d") {
        barCSS = { transform: "translate3d(" + toBarPerc(n2) + "%,0,0)" };
      } else if (Settings.positionUsing === "translate") {
        barCSS = { transform: "translate(" + toBarPerc(n2) + "%,0)" };
      } else {
        barCSS = { "margin-left": toBarPerc(n2) + "%" };
      }
      barCSS.transition = "all " + speed + "ms " + ease;
      return barCSS;
    }
    var queue2 = function() {
      var pending = [];
      function next() {
        var fn = pending.shift();
        if (fn) {
          fn(next);
        }
      }
      return function(fn) {
        pending.push(fn);
        if (pending.length == 1)
          next();
      };
    }();
    var css = function() {
      var cssPrefixes = ["Webkit", "O", "Moz", "ms"], cssProps = {};
      function camelCase(string) {
        return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
          return letter.toUpperCase();
        });
      }
      function getVendorProp(name) {
        var style = document.body.style;
        if (name in style)
          return name;
        var i2 = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
        while (i2--) {
          vendorName = cssPrefixes[i2] + capName;
          if (vendorName in style)
            return vendorName;
        }
        return name;
      }
      function getStyleProp(name) {
        name = camelCase(name);
        return cssProps[name] || (cssProps[name] = getVendorProp(name));
      }
      function applyCss(element, prop, value2) {
        prop = getStyleProp(prop);
        element.style[prop] = value2;
      }
      return function(element, properties) {
        var args = arguments, prop, value2;
        if (args.length == 2) {
          for (prop in properties) {
            value2 = properties[prop];
            if (value2 !== void 0 && properties.hasOwnProperty(prop))
              applyCss(element, prop, value2);
          }
        } else {
          applyCss(element, args[1], args[2]);
        }
      };
    }();
    function hasClass(element, name) {
      var list = typeof element == "string" ? element : classList(element);
      return list.indexOf(" " + name + " ") >= 0;
    }
    function addClass(element, name) {
      var oldList = classList(element), newList = oldList + name;
      if (hasClass(oldList, name))
        return;
      element.className = newList.substring(1);
    }
    function removeClass(element, name) {
      var oldList = classList(element), newList;
      if (!hasClass(element, name))
        return;
      newList = oldList.replace(" " + name + " ", " ");
      element.className = newList.substring(1, newList.length - 1);
    }
    function classList(element) {
      return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
    }
    function removeElement(element) {
      element && element.parentNode && element.parentNode.removeChild(element);
    }
    return NProgress;
  });
})(nprogress$1);
var vars = "";
var nprogress = "";
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    nprogress$1.exports.configure({ showSpinner: false });
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.exports.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.exports.done();
    });
  });
};
var clientAppSetup1 = defineClientAppSetup(() => {
  useNprogress();
});
var button = "";
const n = { "selector": '.theme-hope-content div[class*="language-"] pre', "pure": false }, a$1 = () => !!navigator && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/iu.test(navigator.userAgent);
var l$1 = defineClientAppSetup(() => {
  const o2 = useRoute(), l2 = z$1({ "/": { "copy": "\u590D\u5236\u6210\u529F \u{1F389}", "hint": "\u590D\u5236\u4EE3\u7801" } });
  let i2;
  const p2 = (e) => {
    if (!e.hasAttribute("copy-code-registerd")) {
      const t2 = document.createElement("button");
      t2.className = "copy-code-button", t2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="icon-copy-code"><path fill="currentColor" d="M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 00-6-6H102a6 6 0 00-6 6v20a6 6 0 006 6h180a6 6 0 006-6z" /></svg>', t2.addEventListener("click", () => {
        ((e2) => {
          const t3 = document.getSelection(), o3 = !!(t3 && t3.rangeCount > 0) && t3.getRangeAt(0), c2 = document.createElement("textarea");
          c2.value = e2, c2.setAttribute("readonly", ""), c2.style.position = "absolute", c2.style.top = "-9999px", document.body.appendChild(c2), c2.select(), document.execCommand("copy"), i2.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#06a35a"><path d="M822.812 824.618c-83.076 81.992-188.546 124.614-316.05 127.865-122.085-3.251-223.943-45.873-305.935-127.865S76.213 640.406 72.962 518.682c3.251-127.503 45.873-232.973 127.865-316.05 81.992-83.075 184.211-126.058 305.936-129.309 127.503 3.251 232.973 46.234 316.049 129.31 83.076 83.076 126.059 188.546 129.31 316.05-2.89 121.723-46.234 223.943-129.31 305.935zM432.717 684.111c3.973 3.974 8.307 5.78 13.364 6.14 5.057.362 9.753-1.444 13.365-5.417l292.57-287.515c3.974-3.973 5.78-8.307 5.78-13.364s-1.806-9.753-5.78-13.365l1.807 1.806c-3.973-3.973-8.669-5.779-14.087-6.14-5.418-.361-10.475 1.445-14.809 5.418L460.529 592.006c-3.973 3.25-8.669 4.695-14.448 4.695-5.78 0-10.836-1.445-15.531-3.973l-94.273-72.962c-4.335-3.251-9.392-4.335-14.448-3.973s-9.392 3.25-12.642 7.585l-2.89 3.973c-3.25 4.334-4.334 9.391-3.973 14.81.722 5.417 2.528 10.113 5.779 14.086L432.717 684.11z"/></svg><span>${l2.value.copy}</span>`, n.duration), document.body.removeChild(c2), o3 && t3 && (t3.removeAllRanges(), t3.addRange(o3));
        })(e.innerText);
      }), t2.setAttribute("aria-label", l2.value.hint), t2.setAttribute("data-balloon-pos", "left"), e.parentElement && e.parentElement.insertBefore(t2, e), e.setAttribute("copy-code-registerd", "");
    }
  }, d2 = () => {
    const e = n.selector;
    setTimeout(() => {
      document.querySelectorAll(e).forEach(p2);
    }, n.delay || 500);
  };
  onMounted(() => {
    i2 = new Z(), a$1() && !n.showInMobile || d2();
  }), watch(() => o2.path, () => {
    a$1() && !n.showInMobile || d2();
  });
});
var photoswipe = "";
const s = ".theme-hope-content :not(a) > img", a = { "/": { "closeTitle": "\u5173\u95ED", "downloadTitle": "\u4E0B\u8F7D\u56FE\u7247", "fullscreenTitle": "\u5207\u6362\u5168\u5C4F", "zoomTitle": "\u7F29\u653E", "arrowPrevTitle": "\u4E0A\u4E00\u4E2A (\u5DE6\u7BAD\u5934)", "arrowNextTitle": "\u4E0B\u4E00\u4E2A (\u53F3\u7BAD\u5934)" } }, l = 500, m = {}, p = (e) => ({ src: e.src, width: e.naturalWidth, height: e.naturalHeight, alt: e.alt });
var h = defineClientAppSetup(() => {
  const { isSupported: t2, toggle: h2 } = useFullscreen(), u2 = z$1(a), d2 = useRoute(), c2 = () => {
    Promise.all([import("./photoswipe.esm.3faf4291.js"), new Promise((e) => setTimeout(e, l)).then(() => ((e) => {
      const t3 = Array.from(document.querySelectorAll(e));
      return Promise.all(t3.map((e2) => new Promise((t4, o2) => {
        e2.complete ? t4(p(e2)) : (e2.onload = () => t4(p(e2)), e2.onerror = (e3) => o2(e3));
      }))).then((e2) => ({ elements: t3, infos: e2 }));
    })(s))]).then(([e, o2]) => {
      o2.elements.forEach((r2, i2) => {
        r2.addEventListener("click", () => {
          const r3 = new e.default(__spreadProps(__spreadValues(__spreadValues({ dataSource: o2.infos }, u2.value), m), { index: i2 }));
          r3.on("uiRegister", () => {
            t2 && r3.ui.registerElement({ name: "fullscreen", order: 7, isButton: true, html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>', onClick: () => {
              h2();
            } }), r3.ui.registerElement({ name: "download", order: 8, isButton: true, tagName: "a", html: { isCustomSVG: true, inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>', outlineID: "pswp__icn-download" }, onInit: (e2, t3) => {
              e2.setAttribute("download", ""), e2.setAttribute("target", "_blank"), e2.setAttribute("rel", "noopener"), t3.on("change", () => {
                e2.href = t3.currSlide.data.src;
              });
            } });
          }), r3.init();
        });
      });
    });
  };
  watch(() => d2.path, () => c2()), onMounted(() => c2());
});
var clientAppSetup4 = defineClientAppSetup(() => {
  setupBlog();
});
var clientAppSetup5 = defineClientAppSetup(() => {
  setupDarkMode();
});
var clientAppSetup6 = defineClientAppSetup(() => {
  setupSidebarItems();
});
const clientAppSetups = [
  clientAppSetup0,
  clientAppSetup1,
  l$1,
  h,
  clientAppSetup4,
  clientAppSetup5,
  clientAppSetup6
];
const routeItems = [
  ["v-8daa1a0e", "/", { "title": "foo about", "type": "article", "readingTime": { "minutes": 0.01, "words": 2 }, "excerpt": "foo about", "date": "2022-03-21T05:05:45.000Z" }, ["/index.html", "/README.md"]],
  ["v-22a39d25", "/about.html", { "title": "about", "type": "article", "readingTime": { "minutes": 0, "words": 1 }, "excerpt": "about", "date": "2022-03-21T05:05:45.000Z" }, ["/about", "/about.md"]],
  ["v-6d34f632", "/contact.html", { "title": "contact", "type": "article", "readingTime": { "minutes": 0, "words": 1 }, "excerpt": "contact", "date": "2022-03-21T05:05:45.000Z" }, ["/contact", "/contact.md"]],
  ["v-7444d4f5", "/bar/", { "title": "bar readme", "type": "article", "readingTime": { "minutes": 0.01, "words": 2 }, "excerpt": "bar readme", "date": "2022-03-21T05:05:45.000Z" }, ["/bar/index.html", "/bar/README.md"]],
  ["v-76d72bc4", "/bar/four.html", { "title": "four", "type": "article", "readingTime": { "minutes": 0, "words": 1 }, "excerpt": "four", "date": "2022-03-21T05:05:45.000Z" }, ["/bar/four", "/bar/four.md"]],
  ["v-e12556a0", "/bar/three.html", { "title": "three", "type": "article", "readingTime": { "minutes": 0, "words": 1 }, "excerpt": "three", "date": "2022-03-21T05:05:45.000Z" }, ["/bar/three", "/bar/three.md"]],
  ["v-7446daa2", "/foo/", { "title": "README FOO", "type": "article", "readingTime": { "minutes": 0.01, "words": 2 }, "excerpt": "README FOO", "date": "2022-03-21T05:05:45.000Z" }, ["/foo/index.html", "/foo/README.md"]],
  ["v-5cbdbad5", "/foo/one.html", { "title": "one", "type": "article", "readingTime": { "minutes": 0, "words": 1 }, "excerpt": "one", "date": "2022-03-21T05:05:45.000Z" }, ["/foo/one", "/foo/one.md"]],
  ["v-514c26af", "/foo/two.html", { "title": "two", "type": "article", "readingTime": { "minutes": 0, "words": 1 }, "excerpt": "two", "date": "2022-03-21T05:05:45.000Z" }, ["/foo/two", "/foo/two.md"]],
  ["v-298737c8", "/bar/child/", { "title": "child", "type": "article", "readingTime": { "minutes": 0, "words": 1 }, "excerpt": "child", "date": "2022-03-21T05:05:45.000Z" }, ["/bar/child/index.html", "/bar/child/README.md"]],
  ["v-024e9ac2", "/bar/child/five.html", { "title": "five", "type": "article", "readingTime": { "minutes": 0, "words": 1 }, "excerpt": "five", "date": "2022-03-21T05:05:45.000Z" }, ["/bar/child/five", "/bar/child/five.md"]],
  ["v-67eb30ff", "/bar/child/six.html", { "title": "six", "type": "article", "readingTime": { "minutes": 0, "words": 1 }, "excerpt": "six", "date": "2022-03-21T05:05:45.000Z" }, ["/bar/child/six", "/bar/child/six.md"]],
  ["v-3706649a", "/404.html", { "title": "", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/404"]],
  ["v-5bc93818", "/category/", { "title": "\u5206\u7C7B", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/category/index.html"]],
  ["v-744d024e", "/tag/", { "title": "\u6807\u7B7E", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/tag/index.html"]],
  ["v-e52c881c", "/article/", { "title": "\u6587\u7AE0", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/article/index.html"]],
  ["v-75ed4ea4", "/encrypted/", { "title": "\u52A0\u5BC6", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/encrypted/index.html"]],
  ["v-2897d318", "/slides/", { "title": "\u5E7B\u706F\u7247", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/slides/index.html"]],
  ["v-154dc4c4", "/star/", { "title": "\u6536\u85CF", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/star/index.html"]],
  ["v-01560935", "/timeline/", { "title": "\u65F6\u95F4\u8F74", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/timeline/index.html"]]
];
const pagesRoutes = routeItems.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
const historyCreator = createWebHistory;
const createVueRouter = () => {
  const router = createRouter({
    history: historyCreator(removeEndingSlash(siteData.value.base)),
    routes: pagesRoutes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a2;
    if (to.path !== from.path || from === START_LOCATION_NORMALIZED) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a2 = pagesComponents[to.name]) === null || _a2 === void 0 ? void 0 : _a2.__asyncLoader()
      ]);
    }
  });
  return router;
};
const setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
const setupGlobalComputed = (app, router) => {
  const routeLocale = computed(() => resolvers.resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = computed(() => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = computed(() => resolvers.resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = computed(() => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = computed(() => resolvers.resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = computed(() => resolvers.resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
const setupUpdateHead = () => {
  const route = useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  const headTags = ref([]);
  const loadHead = () => {
    head.value.forEach((item) => {
      const tag2 = queryHeadTag(item);
      if (tag2) {
        headTags.value.push(tag2);
      }
    });
  };
  const updateHead = () => {
    document.documentElement.lang = lang.value;
    headTags.value.forEach((item) => {
      if (item.parentNode === document.head) {
        document.head.removeChild(item);
      }
    });
    headTags.value.splice(0, headTags.value.length);
    head.value.forEach((item) => {
      const tag2 = createHeadTag(item);
      if (tag2 !== null) {
        document.head.appendChild(tag2);
        headTags.value.push(tag2);
      }
    });
  };
  provide(updateHeadSymbol, updateHead);
  onMounted(() => {
    loadHead();
    updateHead();
    watch(() => route.path, () => updateHead());
  });
};
const queryHeadTag = ([tagName, attrs, content = ""]) => {
  const attrsSelector = Object.entries(attrs).map(([key, value2]) => {
    if (isString$1(value2)) {
      return `[${key}="${value2}"]`;
    }
    if (value2 === true) {
      return `[${key}]`;
    }
    return "";
  }).join("");
  const selector = `head > ${tagName}${attrsSelector}`;
  const tags = Array.from(document.querySelectorAll(selector));
  const matchedTag = tags.find((item) => item.innerText === content);
  return matchedTag || null;
};
const createHeadTag = ([tagName, attrs, content]) => {
  if (!isString$1(tagName)) {
    return null;
  }
  const tag2 = document.createElement(tagName);
  if (isPlainObject(attrs)) {
    Object.entries(attrs).forEach(([key, value2]) => {
      if (isString$1(value2)) {
        tag2.setAttribute(key, value2);
      } else if (value2 === true) {
        tag2.setAttribute(key, "");
      }
    });
  }
  if (isString$1(content)) {
    tag2.appendChild(document.createTextNode(content));
  }
  return tag2;
};
const appCreator = createSSRApp;
const createVueApp = async () => {
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      setupUpdateHead();
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup();
      }
      return () => [
        h$3(RouterView),
        ...clientAppRootComponents.map((comp) => h$3(comp))
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router);
  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData });
  }
  app.use(router);
  return {
    app,
    router
  };
};
{
  createVueApp().then(({ app, router }) => {
    router.isReady().then(() => {
      app.mount("#app");
    });
  });
}
export { BlogHome as B, Content as C, DropTransition as D, FadeSlideY as F, InfoPanel as I, Page404Icon as P, _export_sfc as _, createBaseVNode as a, createTextVNode as b, createElementBlock as c, createVueApp, defineComponent as d, useThemeLocaleData as e, useLink as f, useRoute as g, h$3 as h, ref as i, usePageFrontmatter as j, useMobile as k, computed as l, usePageData as m, useThemeData as n, openBlock as o, useRouter as p, onClickOutside as q, resolveComponent as r, BlogPage as s, BloggerInfo as t, useRouteLocale as u, InfoList as v, watch as w, x };
