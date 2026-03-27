(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Developer/Projects/AI Resume Analyser/src/context/AppContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppProvider",
    ()=>AppProvider,
    "useApp",
    ()=>useApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$AI__Resume__Analyser$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects/AI Resume Analyser/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$AI__Resume__Analyser$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects/AI Resume Analyser/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$AI__Resume__Analyser$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects/AI Resume Analyser/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const MOCK_USER = {
    id: "user_1",
    name: "Alex Johnson",
    email: "alex@example.com"
};
const MOCK_ANALYSES = [
    {
        id: "analysis_1",
        fileName: "Alex_Johnson_Resume_2025.pdf",
        uploadDate: "2026-03-05",
        atsScore: 78,
        summary: "Your resume demonstrates solid technical skills and relevant experience. However, there are opportunities to strengthen keyword alignment, quantify achievements more effectively, and improve the professional summary to better target modern ATS systems.",
        strengths: [
            "Strong technical skills section with relevant technologies",
            "Clear chronological work history with progression",
            "Education section is well-formatted and complete",
            "Contact information is ATS-friendly and complete"
        ],
        weakAreas: [
            "Professional summary lacks specific keywords",
            "Bullet points need more quantifiable achievements",
            "Skills section could be better organized by category",
            "Missing action verbs in several experience entries"
        ],
        sectionFeedback: [
            {
                section: "Professional Summary",
                feedback: "Your summary is generic and doesn't highlight your unique value proposition. ATS systems look for specific keywords that match job descriptions.",
                suggestions: [
                    "Include your years of experience and primary domain",
                    "Add 2-3 core technical skills or technologies",
                    "Mention a key achievement or metric"
                ]
            },
            {
                section: "Work Experience",
                feedback: "Experience entries are well-structured but lack quantifiable impact. Hiring managers and ATS systems respond better to measurable achievements.",
                suggestions: [
                    "Add metrics to at least 70% of bullet points (%, $, time saved)",
                    "Start each bullet with a strong action verb",
                    "Remove clichés like 'responsible for' and 'worked on'"
                ]
            },
            {
                section: "Skills",
                feedback: "Skills are listed but not categorized. Grouping them helps both humans and ATS parse them better.",
                suggestions: [
                    "Organize into: Languages, Frameworks, Tools, Platforms",
                    "Remove skills older than 5 years unless highly relevant",
                    "Add proficiency levels where appropriate"
                ]
            },
            {
                section: "Projects",
                feedback: "Projects section shows initiative but needs more detail on impact and technologies used.",
                suggestions: [
                    "Add GitHub links or live demo URLs",
                    "Mention the tech stack for each project",
                    "Quantify usage or impact where possible"
                ]
            },
            {
                section: "Education",
                feedback: "Education section is clean and well-formatted. Minor improvements possible.",
                suggestions: [
                    "Add relevant coursework if less than 3 years of experience",
                    "Include GPA if above 3.5",
                    "List relevant certifications here or in a dedicated section"
                ]
            }
        ],
        bulletPoints: [
            {
                original: "Worked on website backend",
                improved: "Developed scalable RESTful APIs using Node.js and Express, reducing response latency by 40% and supporting 10,000+ concurrent users."
            },
            {
                original: "Helped with database management",
                improved: "Architected and optimized PostgreSQL database schemas, improving query performance by 60% and reducing storage overhead by 25%."
            },
            {
                original: "Did code reviews",
                improved: "Led weekly code reviews for a team of 6 engineers, maintaining 95% test coverage and reducing production bugs by 30% quarter-over-quarter."
            }
        ],
        keywordAnalysis: {
            matchPercentage: 65,
            matchedKeywords: [
                "React",
                "Node.js",
                "TypeScript",
                "REST API",
                "Agile",
                "Git"
            ],
            missingKeywords: [
                "Docker",
                "Kubernetes",
                "CI/CD",
                "AWS",
                "Microservices"
            ],
            recommendedKeywords: [
                "containerization",
                "cloud deployment",
                "DevOps",
                "system design"
            ],
            jobDescription: ""
        }
    },
    {
        id: "analysis_2",
        fileName: "Alex_SWE_Application.pdf",
        uploadDate: "2026-02-20",
        atsScore: 62,
        summary: "Resume shows potential but needs significant improvements in keyword optimization and achievement quantification to pass modern ATS filters effectively.",
        strengths: [
            "Good variety of technologies listed",
            "Recent education credentials are prominent"
        ],
        weakAreas: [
            "Too many generic phrases",
            "Low keyword match with industry standards",
            "Missing metrics throughout"
        ],
        sectionFeedback: [],
        bulletPoints: [],
        keywordAnalysis: {
            matchPercentage: 48,
            matchedKeywords: [
                "JavaScript",
                "Python",
                "React"
            ],
            missingKeywords: [
                "AWS",
                "Docker",
                "TypeScript",
                "CI/CD",
                "Agile",
                "REST"
            ],
            recommendedKeywords: [
                "cloud",
                "containers",
                "testing",
                "APIs"
            ]
        }
    }
];
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$AI__Resume__Analyser$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AppProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$AI__Resume__Analyser$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "606f4aed8946bfb14d7450c25b9f7e8018cf24158a879f5959c54c224306a6be") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "606f4aed8946bfb14d7450c25b9f7e8018cf24158a879f5959c54c224306a6be";
    }
    const { children } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            user: null,
            isAuthenticated: false,
            analyses: [],
            currentAnalysis: null,
            isAnalyzing: false
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$AI__Resume__Analyser$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "AppProvider[login]": (email, _password)=>{
                setState({
                    "AppProvider[login > setState()]": (prev)=>({
                            ...prev,
                            user: {
                                ...MOCK_USER,
                                email
                            },
                            isAuthenticated: true,
                            analyses: MOCK_ANALYSES
                        })
                }["AppProvider[login > setState()]"]);
            }
        })["AppProvider[login]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const login = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "AppProvider[signup]": (name, email_0, _password_0)=>{
                setState({
                    "AppProvider[signup > setState()]": (prev_0)=>({
                            ...prev_0,
                            user: {
                                id: "user_new",
                                name,
                                email: email_0
                            },
                            isAuthenticated: true,
                            analyses: []
                        })
                }["AppProvider[signup > setState()]"]);
            }
        })["AppProvider[signup]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const signup = t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "AppProvider[logout]": ()=>{
                setState({
                    user: null,
                    isAuthenticated: false,
                    analyses: [],
                    currentAnalysis: null,
                    isAnalyzing: false
                });
            }
        })["AppProvider[logout]"];
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const logout = t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "AppProvider[setCurrentAnalysis]": (analysis)=>{
                setState({
                    "AppProvider[setCurrentAnalysis > setState()]": (prev_1)=>({
                            ...prev_1,
                            currentAnalysis: analysis
                        })
                }["AppProvider[setCurrentAnalysis > setState()]"]);
            }
        })["AppProvider[setCurrentAnalysis]"];
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const setCurrentAnalysis = t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "AppProvider[setIsAnalyzing]": (val)=>{
                setState({
                    "AppProvider[setIsAnalyzing > setState()]": (prev_2)=>({
                            ...prev_2,
                            isAnalyzing: val
                        })
                }["AppProvider[setIsAnalyzing > setState()]"]);
            }
        })["AppProvider[setIsAnalyzing]"];
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const setIsAnalyzing = t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "AppProvider[addAnalysis]": (analysis_0)=>{
                setState({
                    "AppProvider[addAnalysis > setState()]": (prev_3)=>({
                            ...prev_3,
                            analyses: [
                                analysis_0,
                                ...prev_3.analyses
                            ],
                            currentAnalysis: analysis_0
                        })
                }["AppProvider[addAnalysis > setState()]"]);
            }
        })["AppProvider[addAnalysis]"];
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    const addAnalysis = t7;
    let t8;
    if ($[8] !== state) {
        t8 = {
            ...state,
            login,
            signup,
            logout,
            setCurrentAnalysis,
            setIsAnalyzing,
            addAnalysis
        };
        $[8] = state;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== children || $[11] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$AI__Resume__Analyser$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContext.Provider, {
            value: t8,
            children: children
        }, void 0, false, {
            fileName: "[project]/Developer/Projects/AI Resume Analyser/src/context/AppContext.tsx",
            lineNumber: 278,
            columnNumber: 10
        }, this);
        $[10] = children;
        $[11] = t8;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    return t9;
}
_s(AppProvider, "AWMxvYe5GCYkSq+sL8Iw2QSIEoM=");
_c = AppProvider;
function useApp() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$AI__Resume__Analyser$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "606f4aed8946bfb14d7450c25b9f7e8018cf24158a879f5959c54c224306a6be") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "606f4aed8946bfb14d7450c25b9f7e8018cf24158a879f5959c54c224306a6be";
    }
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$AI__Resume__Analyser$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
    if (!ctx) {
        throw new Error("useApp must be used within AppProvider");
    }
    return ctx;
}
_s1(useApp, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "AppProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/Projects/AI Resume Analyser/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$AI__Resume__Analyser$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/Projects/AI Resume Analyser/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Developer/Projects/AI Resume Analyser/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Developer/Projects/AI Resume Analyser/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$AI__Resume__Analyser$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/Projects/AI Resume Analyser/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Developer/Projects/AI Resume Analyser/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Developer/Projects/AI Resume Analyser/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$AI__Resume__Analyser$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/Projects/AI Resume Analyser/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/Developer/Projects/AI Resume Analyser/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/Developer/Projects/AI Resume Analyser/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$AI__Resume__Analyser$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/Projects/AI Resume Analyser/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Developer/Projects/AI Resume Analyser/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=Developer_Projects_AI%20Resume%20Analyser_14865722._.js.map