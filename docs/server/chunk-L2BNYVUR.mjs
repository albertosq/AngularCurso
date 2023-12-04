import './polyfills.server.mjs';
import{A as f,B as k,C as _e,D as Ce,E as p,F as Ve,G as y,H as De,I as be,J as T,Q as Me,R as Q,T as Ee,U as j,V as Ae,W as we,Z as Fe,a as ce,b as de,c as he,d as O,da as ee,e as P,f as X,g as l,h as E,i as V,j as u,k as v,l as fe,m as pe,n as me,o as ge,p as K,q as Y,r as _,s,t as ye,u as C,v as D,w as b,x as J,y as ve,z as d}from"./chunk-UO33ELGK.mjs";import{a as g,b as M}from"./chunk-KRLCULJA.mjs";var dt=[],Ie=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=u({type:e}),e.\u0275inj=l({imports:[ee.forRoot(dt),ee]});let t=e;return t})();import ht from"crypto";var U=new Uint8Array(256),G=U.length;function te(){return G>U.length-16&&(ht.randomFillSync(U),G=0),U.slice(G,G+=16)}var a=[];for(let t=0;t<256;++t)a.push((t+256).toString(16).slice(1));function Se(t,e=0){return a[t[e+0]]+a[t[e+1]]+a[t[e+2]]+a[t[e+3]]+"-"+a[t[e+4]]+a[t[e+5]]+"-"+a[t[e+6]]+a[t[e+7]]+"-"+a[t[e+8]]+a[t[e+9]]+"-"+a[t[e+10]]+a[t[e+11]]+a[t[e+12]]+a[t[e+13]]+a[t[e+14]]+a[t[e+15]]}import ft from"crypto";var ie={randomUUID:ft.randomUUID};function pt(t,e,n){if(ie.randomUUID&&!e&&!t)return ie.randomUUID();t=t||{};let i=t.random||(t.rng||te)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){n=n||0;for(let r=0;r<16;++r)e[n+r]=i[r];return e}return Se(i)}var A=pt;var xe=(()=>{let e=class e{onNewCharacter(i){let r=g({id:A()},i);this.characters.push(r)}onDelete(i){this.characters=this.characters.filter(r=>r.id!==i)}constructor(){this.characters=[{id:A(),name:"Krilin",power:1e3},{id:A(),name:"Goku",power:9500},{id:A(),name:"Vegeta",power:8e3}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=X({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function gt(t,e){if(t&1){let n=_e();d(0,"li",2)(1,"span",3),y(2),f(),y(3),d(4,"button",4),p("click",function(){let o=pe(n).$implicit,h=Ve();return me(h.onDeleteCharacter(o.id))}),y(5,"X"),f()()}if(t&2){let n=e.$implicit,i=e.index;_(2),De(i+1),_(1),be(" ",n.name," - Power: ",n.power," ")}}var Ne=(()=>{let e=class e{constructor(){this.characterList=[],this.onDelete=new C}onDeleteCharacter(i){i&&this.onDelete.emit(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=V({type:e,selectors:[["app-dbz-list"]],inputs:{characterList:"characterList"},outputs:{onDelete:"onDelete"},decls:4,vars:1,consts:[[1,"list-group"],["class","list-group-item d-flex justify-content-between align-items-center",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"text-primary"],[1,"btn","btn-danger",3,"click"]],template:function(r,o){r&1&&(d(0,"h4"),y(1,"Listado"),f(),d(2,"ul",0),ve(3,gt,6,3,"li",1),f()),r&2&&(_(3),b("ngForOf",o.characterList))},dependencies:[Ee],styles:["[_nghost-%COMP%]{display:block}"]});let t=e;return t})();var He=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(s(Y),s(K))},e.\u0275dir=v({type:e});let t=e;return t})(),vt=(()=>{let e=class e extends He{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=ge(e)))(o||e)}})(),e.\u0275dir=v({type:e,features:[D]});let t=e;return t})(),Be=new E("NgValueAccessor");var _t={provide:Be,useExisting:O(()=>z),multi:!0};function Ct(){let t=Q()?Q().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Vt=new E("CompositionEventMode"),z=(()=>{let e=class e extends He{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ct())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(s(Y),s(K),s(Vt,8))},e.\u0275dir=v({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&p("input",function(c){return o._handleInput(c.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(c){return o._compositionEnd(c.target.value)})},features:[T([_t]),D]});let t=e;return t})();var Re=new E("NgValidators"),Le=new E("NgAsyncValidators");function $e(t){return t!=null}function We(t){return Ce(t)?ce(t):t}function ze(t){let e={};return t.forEach(n=>{e=n!=null?g(g({},e),n):e}),Object.keys(e).length===0?null:e}function qe(t,e){return e.map(n=>n(t))}function Dt(t){return!t.validate}function Ze(t){return t.map(e=>Dt(e)?e:n=>e.validate(n))}function bt(t){if(!t)return null;let e=t.filter($e);return e.length==0?null:function(n){return ze(qe(n,e))}}function re(t){return t!=null?bt(Ze(t)):null}function Mt(t){if(!t)return null;let e=t.filter($e);return e.length==0?null:function(n){let i=qe(n,e).map(We);return he(i).pipe(de(ze))}}function oe(t){return t!=null?Mt(Ze(t)):null}function Oe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Et(t){return t._rawValidators}function At(t){return t._rawAsyncValidators}function ne(t){return t?Array.isArray(t)?t:[t]:[]}function B(t,e){return Array.isArray(t)?t.includes(e):t===e}function Pe(t,e){let n=ne(e);return ne(t).forEach(r=>{B(n,r)||n.push(r)}),n}function ke(t,e){return ne(e).filter(n=>!B(t,n))}var R=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=re(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=oe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},F=class extends R{get formDirective(){return null}get path(){return null}},N=class extends R{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},L=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},wt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ti=M(g({},wt),{"[class.ng-submitted]":"isSubmitted"}),Xe=(()=>{let e=class e extends L{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(N,2))},e.\u0275dir=v({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&J("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[D]});let t=e;return t})(),Ke=(()=>{let e=class e extends L{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(F,10))},e.\u0275dir=v({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&J("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[D]});let t=e;return t})();var I="VALID",H="INVALID",w="PENDING",S="DISABLED";function Ye(t){return(q(t)?t.validators:t)||null}function Ft(t){return Array.isArray(t)?re(t):t||null}function Je(t,e){return(q(e)?e.asyncValidators:t)||null}function It(t){return Array.isArray(t)?oe(t):t||null}function q(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function St(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new P(1e3,"");if(!i[n])throw new P(1001,"")}function xt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new P(1002,"")})}var $=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===I}get invalid(){return this.status===H}get pending(){return this.status==w}get disabled(){return this.status===S}get enabled(){return this.status!==S}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Pe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Pe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ke(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ke(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=w,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=S,this.errors=null,this._forEachChild(i=>{i.disable(M(g({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(M(g({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(i=>{i.enable(M(g({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(M(g({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===w)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=w,this._hasOwnPendingAsyncValidator=!0;let n=We(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new C,this.statusChanges=new C}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?H:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(w)?w:this._anyControlsHaveStatus(H)?H:I}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ft(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=It(this._rawAsyncValidators)}},W=class extends ${constructor(e,n,i){super(Ye(n),Je(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){xt(this,!0,e),Object.keys(e).forEach(i=>{St(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var se=new E("CallSetDisabledState",{providedIn:"root",factory:()=>ae}),ae="always";function Nt(t,e){return[...e.path,t]}function Qe(t,e,n=ae){et(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Pt(t,e),Tt(t,e),kt(t,e),Ot(t,e)}function Te(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Ot(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function et(t,e){let n=Et(t);e.validator!==null?t.setValidators(Oe(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=At(t);e.asyncValidator!==null?t.setAsyncValidators(Oe(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Te(e._rawValidators,r),Te(e._rawAsyncValidators,r)}function Pt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&tt(t,e)})}function kt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&tt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function tt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Tt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function jt(t,e){t==null,et(t,e)}function Gt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Ut(t){return Object.getPrototypeOf(t.constructor)===vt}function Ht(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Bt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===z?n=o:Ut(o)?i=o:r=o}),r||i||n||null}var Rt={provide:F,useExisting:O(()=>le)},x=(()=>Promise.resolve())(),le=(()=>{let e=class e extends F{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new C,this.form=new W({},re(i),oe(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){x.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),Qe(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){x.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){x.then(()=>{let r=this._findContainer(i.path),o=new W({});jt(o,i),r.registerControl(i.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){x.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){x.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submitted=!0,Ht(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(s(Re,10),s(Le,10),s(se,8))},e.\u0275dir=v({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&p("submit",function(c){return o.onSubmit(c)})("reset",function(){return o.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[T([Rt]),D]});let t=e;return t})();function je(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ge(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Lt=class extends ${constructor(e=null,n,i){super(Ye(n),Je(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),q(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ge(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){je(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){je(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ge(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var $t={provide:N,useExisting:O(()=>ue)},Ue=(()=>Promise.resolve())(),ue=(()=>{let e=class e extends N{constructor(i,r,o,h,c,ct){super(),this._changeDetectorRef=c,this.callSetDisabledState=ct,this.control=new Lt,this._registered=!1,this.name="",this.update=new C,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Bt(this,h)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),Gt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Qe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Ue.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&Me(r);Ue.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Nt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(s(F,9),s(Re,10),s(Le,10),s(Be,10),s(ye,8),s(se,8))},e.\u0275dir=v({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[T([$t]),D,fe]});let t=e;return t})(),it=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=v({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Wt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=u({type:e}),e.\u0275inj=l({});let t=e;return t})();var zt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=u({type:e}),e.\u0275inj=l({imports:[Wt]});let t=e;return t})();var nt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:se,useValue:i.callSetDisabledState??ae}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=u({type:e}),e.\u0275inj=l({imports:[zt]});let t=e;return t})();var rt=(()=>{let e=class e{constructor(){this.onNewCharacter=new C,this.character={name:"",power:0}}emitCharacter(){if(this.character.name.length!==0){this.onNewCharacter.emit(this.character);debugger;this.character.name="",this.character.power=0}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=V({type:e,selectors:[["app-dbz-add-character"]],outputs:{onNewCharacter:"onNewCharacter"},decls:7,vars:2,consts:[[1,"row",3,"ngSubmit"],["type","text","name","name","placeholder","Nombre",1,"form-control","mb-2",3,"ngModel","ngModelChange"],["type","text","name","power","placeholder","Poder",1,"form-control","mb-2",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary"]],template:function(r,o){r&1&&(d(0,"h4"),y(1,"Agregar Personajes"),f(),d(2,"form",0),p("ngSubmit",function(){return o.emitCharacter()}),d(3,"input",1),p("ngModelChange",function(c){return o.character.name=c}),f(),d(4,"input",2),p("ngModelChange",function(c){return o.character.power=c}),f(),d(5,"button",3),y(6,"Agregar"),f()()),r&2&&(_(3),b("ngModel",o.character.name),_(1),b("ngModel",o.character.power))},dependencies:[it,z,Xe,Ke,ue,le],styles:["[_nghost-%COMP%]{display:block}"]});let t=e;return t})();var ot=(()=>{let e=class e{constructor(i){this.dbzService=i}get characters(){return[...this.dbzService.characters]}onDeleteCharacter(i){this.dbzService.onDelete(i)}onNewCharacter(i){this.dbzService.onNewCharacter(i)}};e.\u0275fac=function(r){return new(r||e)(s(xe))},e.\u0275cmp=V({type:e,selectors:[["app-dbz-main-page"]],decls:8,vars:1,consts:[[1,"row"],[1,"col"],[3,"characterList","onDelete"],[3,"onNewCharacter"]],template:function(r,o){r&1&&(d(0,"h1"),y(1,"BZM Personajes"),f(),k(2,"hr"),d(3,"div",0)(4,"div",1)(5,"app-dbz-list",2),p("onDelete",function(c){return o.onDeleteCharacter(c)}),f()(),d(6,"div",1)(7,"app-dbz-add-character",3),p("onNewCharacter",function(c){return o.onNewCharacter(c)}),f()()()),r&2&&(_(5),b("characterList",o.characters))},dependencies:[Ne,rt],encapsulation:2});let t=e;return t})();var Z=(()=>{let e=class e{constructor(){this.title="Mi primera app de Angular"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=V({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(r,o){r&1&&k(0,"app-dbz-main-page")},dependencies:[ot]});let t=e;return t})();var st=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=u({type:e}),e.\u0275inj=l({});let t=e;return t})();var at=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=u({type:e}),e.\u0275inj=l({imports:[j]});let t=e;return t})();var lt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=u({type:e}),e.\u0275inj=l({imports:[j,nt]});let t=e;return t})();var ut=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=u({type:e,bootstrap:[Z]}),e.\u0275inj=l({providers:[we()],imports:[Ae,st,at,Ie,lt]});let t=e;return t})();var Kt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=u({type:e,bootstrap:[Z]}),e.\u0275inj=l({imports:[ut,Fe]});let t=e;return t})();export{Kt as a};
