(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://cdpdzngtlyexqeeyoodn.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkcGR6bmd0bHlleHFlZXlvb2RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxMDg3MTgsImV4cCI6MjA4ODY4NDcxOH0.pFlNRj4VK-jHPU_Th8D6zq4vGQVy5_LEGB1CaP_7abc");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/AppContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppProvider",
    ()=>AppProvider,
    "useApp",
    ()=>useApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AppProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "73fed8b86ac0c636e67fa12985f30b66d81a9f812ca848c404e5bf4d0c7529e6") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "73fed8b86ac0c636e67fa12985f30b66d81a9f812ca848c404e5bf4d0c7529e6";
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
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "AppProvider[useEffect()]": ()=>{
                const checkUser = {
                    "AppProvider[useEffect() > checkUser]": async ()=>{
                        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                        if (data.user) {
                            setState({
                                "AppProvider[useEffect() > checkUser > setState()]": (prev)=>({
                                        ...prev,
                                        user: {
                                            id: data.user.id,
                                            name: data.user.email ?? "",
                                            email: data.user.email ?? ""
                                        },
                                        isAuthenticated: true
                                    })
                            }["AppProvider[useEffect() > checkUser > setState()]"]);
                        }
                        setLoading(false);
                    }
                }["AppProvider[useEffect() > checkUser]"];
                checkUser();
                const { data: authListener } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                    "AppProvider[useEffect() > supabase.auth.onAuthStateChange()]": (_event, session)=>{
                        if (session?.user) {
                            setState({
                                "AppProvider[useEffect() > supabase.auth.onAuthStateChange() > setState()]": (prev_0)=>({
                                        ...prev_0,
                                        user: {
                                            id: session.user.id,
                                            name: session.user.email ?? "",
                                            email: session.user.email ?? ""
                                        },
                                        isAuthenticated: true
                                    })
                            }["AppProvider[useEffect() > supabase.auth.onAuthStateChange() > setState()]"]);
                        } else {
                            setState(_AppProviderUseEffectSupabaseAuthOnAuthStateChangeSetState);
                        }
                    }
                }["AppProvider[useEffect() > supabase.auth.onAuthStateChange()]"]);
                return ()=>{
                    authListener.subscription.unsubscribe();
                };
            }
        })["AppProvider[useEffect()]"];
        t3 = [];
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    const login = _AppProviderLogin;
    const signup = _AppProviderSignup;
    const logout = _AppProviderLogout;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "AppProvider[setCurrentAnalysis]": (analysis)=>{
                setState({
                    "AppProvider[setCurrentAnalysis > setState()]": (prev_2)=>({
                            ...prev_2,
                            currentAnalysis: analysis
                        })
                }["AppProvider[setCurrentAnalysis > setState()]"]);
            }
        })["AppProvider[setCurrentAnalysis]"];
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const setCurrentAnalysis = t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "AppProvider[setIsAnalyzing]": (val)=>{
                setState({
                    "AppProvider[setIsAnalyzing > setState()]": (prev_3)=>({
                            ...prev_3,
                            isAnalyzing: val
                        })
                }["AppProvider[setIsAnalyzing > setState()]"]);
            }
        })["AppProvider[setIsAnalyzing]"];
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const setIsAnalyzing = t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "AppProvider[addAnalysis]": (analysis_0)=>{
                setState({
                    "AppProvider[addAnalysis > setState()]": (prev_4)=>({
                            ...prev_4,
                            analyses: [
                                analysis_0,
                                ...prev_4.analyses
                            ],
                            currentAnalysis: analysis_0
                        })
                }["AppProvider[addAnalysis > setState()]"]);
            }
        })["AppProvider[addAnalysis]"];
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const addAnalysis = t6;
    let t7;
    if ($[7] !== loading || $[8] !== state) {
        t7 = {
            ...state,
            loading,
            login,
            signup,
            logout,
            setCurrentAnalysis,
            setIsAnalyzing,
            addAnalysis
        };
        $[7] = loading;
        $[8] = state;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== children || $[11] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContext.Provider, {
            value: t7,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/context/AppContext.tsx",
            lineNumber: 202,
            columnNumber: 10
        }, this);
        $[10] = children;
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    return t8;
}
_s(AppProvider, "5q5A2wzbfU4IpEF2htb2nhEXJdY=");
_c = AppProvider;
async function _AppProviderLogout() {
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
}
async function _AppProviderSignup(name, email_0, password_0) {
    const { error: error_0 } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
        email: email_0,
        password: password_0,
        options: {
            data: {
                name
            }
        }
    });
    if (error_0) {
        alert(error_0.message);
    }
}
async function _AppProviderLogin(email, password) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
        email,
        password
    });
    if (error) {
        alert(error.message);
    }
}
function _AppProviderUseEffectSupabaseAuthOnAuthStateChangeSetState(prev_1) {
    return {
        ...prev_1,
        user: null,
        isAuthenticated: false
    };
}
function useApp() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "73fed8b86ac0c636e67fa12985f30b66d81a9f812ca848c404e5bf4d0c7529e6") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "73fed8b86ac0c636e67fa12985f30b66d81a9f812ca848c404e5bf4d0c7529e6";
    }
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
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
]);

//# sourceMappingURL=src_0114a3e5._.js.map