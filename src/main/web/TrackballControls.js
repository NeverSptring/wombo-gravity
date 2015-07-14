/**
 * @author Eberhard Graether / http://egraether.com/
 * @author Mark Lundin 	/ http://mark-lundin.com
 * @author Simone Manini / http://daron1337.github.io
 * @author Luca Antiga 	/ http://lantiga.github.io
 */
THREE.TrackballControls=function(e,t){function o(e){d.enabled!==!1&&(window.removeEventListener("keydown",o),m=g,g===u.NONE&&(e.keyCode!==d.keys[u.ROTATE]||d.noRotate?e.keyCode!==d.keys[u.ZOOM]||d.noZoom?e.keyCode!==d.keys[u.PAN]||d.noPan||(g=u.PAN):g=u.ZOOM:g=u.ROTATE))}function n(){d.enabled!==!1&&(g=m,window.addEventListener("keydown",o,!1))}function a(e){d.enabled!==!1&&(e.preventDefault(),e.stopPropagation(),g===u.NONE&&(g=e.button),g!==u.ROTATE||d.noRotate?g!==u.ZOOM||d.noZoom?g!==u.PAN||d.noPan||(N.copy(L(e.pageX,e.pageY)),V.copy(N)):(b.copy(L(e.pageX,e.pageY)),O.copy(b)):(w.copy(A(e.pageX,e.pageY)),v.copy(w)),document.addEventListener("mousemove",c,!1),document.addEventListener("mouseup",s,!1),d.dispatchEvent(j))}function c(e){d.enabled!==!1&&(e.preventDefault(),e.stopPropagation(),g!==u.ROTATE||d.noRotate?g!==u.ZOOM||d.noZoom?g!==u.PAN||d.noPan||V.copy(L(e.pageX,e.pageY)):O.copy(L(e.pageX,e.pageY)):(v.copy(w),w.copy(A(e.pageX,e.pageY))))}function s(e){d.enabled!==!1&&(e.preventDefault(),e.stopPropagation(),g=u.NONE,document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",s),d.dispatchEvent(k))}function i(e){if(d.enabled!==!1){e.preventDefault(),e.stopPropagation();var t=0;e.wheelDelta?t=e.wheelDelta/40:e.detail&&(t=-e.detail/3),b.y+=.01*t,d.dispatchEvent(j),d.dispatchEvent(k)}}function r(e){if(d.enabled!==!1){switch(e.touches.length){case 1:g=u.TOUCH_ROTATE,w.copy(A(e.touches[0].pageX,e.touches[0].pageY)),v.copy(w);break;case 2:g=u.TOUCH_ZOOM_PAN;var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY;H=R=Math.sqrt(t*t+o*o);var n=(e.touches[0].pageX+e.touches[1].pageX)/2,a=(e.touches[0].pageY+e.touches[1].pageY)/2;N.copy(L(n,a)),V.copy(N);break;default:g=u.NONE}d.dispatchEvent(j)}}function p(e){if(d.enabled!==!1)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:v.copy(w),w.copy(A(e.touches[0].pageX,e.touches[0].pageY));break;case 2:var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY;H=Math.sqrt(t*t+o*o);var n=(e.touches[0].pageX+e.touches[1].pageX)/2,a=(e.touches[0].pageY+e.touches[1].pageY)/2;V.copy(L(n,a));break;default:g=u.NONE}}function h(e){if(d.enabled!==!1){switch(e.touches.length){case 1:v.copy(w),w.copy(A(e.touches[0].pageX,e.touches[0].pageY));break;case 2:R=H=0;var t=(e.touches[0].pageX+e.touches[1].pageX)/2,o=(e.touches[0].pageY+e.touches[1].pageY)/2;V.copy(L(t,o)),N.copy(V)}g=u.NONE,d.dispatchEvent(k)}}var d=this,u={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=[65,83,68],this.target=new THREE.Vector3;var E=1e-6,l=new THREE.Vector3,g=u.NONE,m=u.NONE,y=new THREE.Vector3,v=new THREE.Vector2,w=new THREE.Vector2,f=new THREE.Vector3,T=0,b=new THREE.Vector2,O=new THREE.Vector2,R=0,H=0,N=new THREE.Vector2,V=new THREE.Vector2;this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone();var D={type:"change"},j={type:"start"},k={type:"end"};this.handleResize=function(){if(this.domElement===document)this.screen.left=0,this.screen.top=0,this.screen.width=window.innerWidth,this.screen.height=window.innerHeight;else{var e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height}},this.handleEvent=function(e){"function"==typeof this[e.type]&&this[e.type](e)};var L=function(){var e=new THREE.Vector2;return function(t,o){return e.set((t-d.screen.left)/d.screen.width,(o-d.screen.top)/d.screen.height),e}}(),A=function(){var e=new THREE.Vector2;return function(t,o){return e.set((t-.5*d.screen.width-d.screen.left)/(.5*d.screen.width),(d.screen.height+2*(d.screen.top-o))/d.screen.width),e}}();this.rotateCamera=function(){var e,t=new THREE.Vector3,o=new THREE.Quaternion,n=new THREE.Vector3,a=new THREE.Vector3,c=new THREE.Vector3,s=new THREE.Vector3;return function(){s.set(w.x-v.x,w.y-v.y,0),e=s.length(),e?(y.copy(d.object.position).sub(d.target),n.copy(y).normalize(),a.copy(d.object.up).normalize(),c.crossVectors(a,n).normalize(),a.setLength(w.y-v.y),c.setLength(w.x-v.x),s.copy(a.add(c)),t.crossVectors(s,y).normalize(),e*=d.rotateSpeed,o.setFromAxisAngle(t,e),y.applyQuaternion(o),d.object.up.applyQuaternion(o),f.copy(t),T=e):!d.staticMoving&&T&&(T*=Math.sqrt(1-d.dynamicDampingFactor),y.copy(d.object.position).sub(d.target),o.setFromAxisAngle(f,T),y.applyQuaternion(o),d.object.up.applyQuaternion(o)),v.copy(w)}}(),this.zoomCamera=function(){var e;g===u.TOUCH_ZOOM_PAN?(e=R/H,R=H,y.multiplyScalar(e)):(e=1+(O.y-b.y)*d.zoomSpeed,1!==e&&e>0&&(y.multiplyScalar(e),d.staticMoving?b.copy(O):b.y+=(O.y-b.y)*this.dynamicDampingFactor))},this.panCamera=function(){var e=new THREE.Vector2,t=new THREE.Vector3,o=new THREE.Vector3;return function(){e.copy(V).sub(N),e.lengthSq()&&(e.multiplyScalar(y.length()*d.panSpeed),o.copy(y).cross(d.object.up).setLength(e.x),o.add(t.copy(d.object.up).setLength(e.y)),d.object.position.add(o),d.target.add(o),d.staticMoving?N.copy(V):N.add(e.subVectors(V,N).multiplyScalar(d.dynamicDampingFactor)))}}(),this.checkDistances=function(){d.noZoom&&d.noPan||(y.lengthSq()>d.maxDistance*d.maxDistance&&d.object.position.addVectors(d.target,y.setLength(d.maxDistance)),y.lengthSq()<d.minDistance*d.minDistance&&d.object.position.addVectors(d.target,y.setLength(d.minDistance)))},this.update=function(){y.subVectors(d.object.position,d.target),d.noRotate||d.rotateCamera(),d.noZoom||d.zoomCamera(),d.noPan||d.panCamera(),d.object.position.addVectors(d.target,y),d.checkDistances(),d.object.lookAt(d.target),l.distanceToSquared(d.object.position)>E&&(d.dispatchEvent(D),l.copy(d.object.position))},this.reset=function(){g=u.NONE,m=u.NONE,d.target.copy(d.target0),d.object.position.copy(d.position0),d.object.up.copy(d.up0),y.subVectors(d.object.position,d.target),d.object.lookAt(d.target),d.dispatchEvent(D),l.copy(d.object.position)},this.domElement.addEventListener("contextmenu",function(e){e.preventDefault()},!1),this.domElement.addEventListener("mousedown",a,!1),this.domElement.addEventListener("mousewheel",i,!1),this.domElement.addEventListener("DOMMouseScroll",i,!1),this.domElement.addEventListener("touchstart",r,!1),this.domElement.addEventListener("touchend",h,!1),this.domElement.addEventListener("touchmove",p,!1),window.addEventListener("keydown",o,!1),window.addEventListener("keyup",n,!1),this.handleResize(),this.update()},THREE.TrackballControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.TrackballControls.prototype.constructor=THREE.TrackballControls;
