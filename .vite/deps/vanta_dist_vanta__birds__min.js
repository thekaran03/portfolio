import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/vanta/dist/vanta.birds.min.js
var require_vanta_birds_min = __commonJS({
  "node_modules/vanta/dist/vanta.birds.min.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports._vantaEffect = t() : e._vantaEffect = t();
    }("undefined" != typeof self ? self : exports, () => (() => {
      "use strict";
      var e = { d: (t2, i2) => {
        for (var n2 in i2)
          e.o(i2, n2) && !e.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: i2[n2] });
      }, o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r: (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      } }, t = {};
      function i() {
        return "undefined" != typeof navigator ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 600 : null;
      }
      e.r(t), e.d(t, { default: () => P }), Number.prototype.clamp = function(e2, t2) {
        return Math.min(Math.max(this, e2), t2);
      };
      function n(e2) {
        for (; e2.children && e2.children.length > 0; )
          n(e2.children[0]), e2.remove(e2.children[0]);
        e2.geometry && e2.geometry.dispose(), e2.material && (Object.keys(e2.material).forEach((t2) => {
          e2.material[t2] && null !== e2.material[t2] && "function" == typeof e2.material[t2].dispose && e2.material[t2].dispose();
        }), e2.material.dispose());
      }
      const o = "object" == typeof window;
      let s = o && window.THREE || {};
      o && !window.VANTA && (window.VANTA = {});
      const r = o && window.VANTA || {};
      r.register = (e2, t2) => r[e2] = (e3) => new t2(e3), r.version = "0.5.24";
      const a = function() {
        return Array.prototype.unshift.call(arguments, "[VANTA]"), console.error.apply(this, arguments);
      };
      r.VantaBase = class {
        constructor(e2 = {}) {
          if (!o)
            return false;
          r.current = this, this.windowMouseMoveWrapper = this.windowMouseMoveWrapper.bind(this), this.windowTouchWrapper = this.windowTouchWrapper.bind(this), this.windowGyroWrapper = this.windowGyroWrapper.bind(this), this.resize = this.resize.bind(this), this.animationLoop = this.animationLoop.bind(this), this.restart = this.restart.bind(this);
          const t2 = "function" == typeof this.getDefaultOptions ? this.getDefaultOptions() : this.defaultOptions;
          if (this.options = Object.assign({ mouseControls: true, touchControls: true, gyroControls: false, minHeight: 200, minWidth: 200, scale: 1, scaleMobile: 1 }, t2), (e2 instanceof HTMLElement || "string" == typeof e2) && (e2 = { el: e2 }), Object.assign(this.options, e2), this.options.THREE && (s = this.options.THREE), this.el = this.options.el, null == this.el)
            a('Instance needs "el" param!');
          else if (!(this.options.el instanceof HTMLElement)) {
            const e3 = this.el;
            if (this.el = (i2 = e3, document.querySelector(i2)), !this.el)
              return void a("Cannot find element", e3);
          }
          var i2, n2;
          this.prepareEl(), this.initThree(), this.setSize();
          try {
            this.init();
          } catch (e3) {
            return a("Init error", e3), this.renderer && this.renderer.domElement && this.el.removeChild(this.renderer.domElement), void (this.options.backgroundColor && (console.log("[VANTA] Falling back to backgroundColor"), this.el.style.background = (n2 = this.options.backgroundColor, "number" == typeof n2 ? "#" + ("00000" + n2.toString(16)).slice(-6) : n2)));
          }
          this.initMouse(), this.resize(), this.animationLoop();
          const l2 = window.addEventListener;
          l2("resize", this.resize), window.requestAnimationFrame(this.resize), this.options.mouseControls && (l2("scroll", this.windowMouseMoveWrapper), l2("mousemove", this.windowMouseMoveWrapper)), this.options.touchControls && (l2("touchstart", this.windowTouchWrapper), l2("touchmove", this.windowTouchWrapper)), this.options.gyroControls && l2("deviceorientation", this.windowGyroWrapper);
        }
        setOptions(e2 = {}) {
          Object.assign(this.options, e2), this.triggerMouseMove();
        }
        prepareEl() {
          let e2, t2;
          if ("undefined" != typeof Node && Node.TEXT_NODE)
            for (e2 = 0; e2 < this.el.childNodes.length; e2++) {
              const t3 = this.el.childNodes[e2];
              if (t3.nodeType === Node.TEXT_NODE) {
                const e3 = document.createElement("span");
                e3.textContent = t3.textContent, t3.parentElement.insertBefore(e3, t3), t3.remove();
              }
            }
          for (e2 = 0; e2 < this.el.children.length; e2++)
            t2 = this.el.children[e2], "static" === getComputedStyle(t2).position && (t2.style.position = "relative"), "auto" === getComputedStyle(t2).zIndex && (t2.style.zIndex = 1);
          "static" === getComputedStyle(this.el).position && (this.el.style.position = "relative");
        }
        applyCanvasStyles(e2, t2 = {}) {
          Object.assign(e2.style, { position: "absolute", zIndex: 0, top: 0, left: 0, background: "" }), Object.assign(e2.style, t2), e2.classList.add("vanta-canvas");
        }
        initThree() {
          s.WebGLRenderer ? (this.renderer = new s.WebGLRenderer({ alpha: true, antialias: true }), this.el.appendChild(this.renderer.domElement), this.applyCanvasStyles(this.renderer.domElement), isNaN(this.options.backgroundAlpha) && (this.options.backgroundAlpha = 1), this.scene = new s.Scene()) : console.warn("[VANTA] No THREE defined on window");
        }
        getCanvasElement() {
          return this.renderer ? this.renderer.domElement : this.p5renderer ? this.p5renderer.canvas : void 0;
        }
        getCanvasRect() {
          const e2 = this.getCanvasElement();
          return !!e2 && e2.getBoundingClientRect();
        }
        windowMouseMoveWrapper(e2) {
          const t2 = this.getCanvasRect();
          if (!t2)
            return false;
          const i2 = e2.clientX - t2.left, n2 = e2.clientY - t2.top;
          i2 >= 0 && n2 >= 0 && i2 <= t2.width && n2 <= t2.height && (this.mouseX = i2, this.mouseY = n2, this.options.mouseEase || this.triggerMouseMove(i2, n2));
        }
        windowTouchWrapper(e2) {
          const t2 = this.getCanvasRect();
          if (!t2)
            return false;
          if (1 === e2.touches.length) {
            const i2 = e2.touches[0].clientX - t2.left, n2 = e2.touches[0].clientY - t2.top;
            i2 >= 0 && n2 >= 0 && i2 <= t2.width && n2 <= t2.height && (this.mouseX = i2, this.mouseY = n2, this.options.mouseEase || this.triggerMouseMove(i2, n2));
          }
        }
        windowGyroWrapper(e2) {
          const t2 = this.getCanvasRect();
          if (!t2)
            return false;
          const i2 = Math.round(2 * e2.alpha) - t2.left, n2 = Math.round(2 * e2.beta) - t2.top;
          i2 >= 0 && n2 >= 0 && i2 <= t2.width && n2 <= t2.height && (this.mouseX = i2, this.mouseY = n2, this.options.mouseEase || this.triggerMouseMove(i2, n2));
        }
        triggerMouseMove(e2, t2) {
          void 0 === e2 && void 0 === t2 && (this.options.mouseEase ? (e2 = this.mouseEaseX, t2 = this.mouseEaseY) : (e2 = this.mouseX, t2 = this.mouseY)), this.uniforms && (this.uniforms.iMouse.value.x = e2 / this.scale, this.uniforms.iMouse.value.y = t2 / this.scale);
          const i2 = e2 / this.width, n2 = t2 / this.height;
          "function" == typeof this.onMouseMove && this.onMouseMove(i2, n2);
        }
        setSize() {
          this.scale || (this.scale = 1), i() && this.options.scaleMobile ? this.scale = this.options.scaleMobile : this.options.scale && (this.scale = this.options.scale), this.width = Math.max(this.el.offsetWidth, this.options.minWidth), this.height = Math.max(this.el.offsetHeight, this.options.minHeight);
        }
        initMouse() {
          (!this.mouseX && !this.mouseY || this.mouseX === this.options.minWidth / 2 && this.mouseY === this.options.minHeight / 2) && (this.mouseX = this.width / 2, this.mouseY = this.height / 2, this.triggerMouseMove(this.mouseX, this.mouseY));
        }
        resize() {
          this.setSize(), this.camera && (this.camera.aspect = this.width / this.height, "function" == typeof this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix()), this.renderer && (this.renderer.setSize(this.width, this.height), this.renderer.setPixelRatio(window.devicePixelRatio / this.scale)), "function" == typeof this.onResize && this.onResize();
        }
        isOnScreen() {
          const e2 = this.el.offsetHeight, t2 = this.el.getBoundingClientRect(), i2 = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop, n2 = t2.top + i2;
          return n2 - window.innerHeight <= i2 && i2 <= n2 + e2;
        }
        animationLoop() {
          this.t || (this.t = 0), this.t2 || (this.t2 = 0);
          const e2 = performance.now();
          if (this.prevNow) {
            let t2 = (e2 - this.prevNow) / (1e3 / 60);
            t2 = Math.max(0.2, Math.min(t2, 5)), this.t += t2, this.t2 += (this.options.speed || 1) * t2, this.uniforms && (this.uniforms.iTime.value = 0.016667 * this.t2);
          }
          return this.prevNow = e2, this.options.mouseEase && (this.mouseEaseX = this.mouseEaseX || this.mouseX || 0, this.mouseEaseY = this.mouseEaseY || this.mouseY || 0, Math.abs(this.mouseEaseX - this.mouseX) + Math.abs(this.mouseEaseY - this.mouseY) > 0.1 && (this.mouseEaseX += 0.05 * (this.mouseX - this.mouseEaseX), this.mouseEaseY += 0.05 * (this.mouseY - this.mouseEaseY), this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))), (this.isOnScreen() || this.options.forceAnimate) && ("function" == typeof this.onUpdate && this.onUpdate(), this.scene && this.camera && (this.renderer.render(this.scene, this.camera), this.renderer.setClearColor(this.options.backgroundColor, this.options.backgroundAlpha)), this.fps && this.fps.update && this.fps.update(), "function" == typeof this.afterRender && this.afterRender()), this.req = window.requestAnimationFrame(this.animationLoop);
        }
        restart() {
          if (this.scene)
            for (; this.scene.children.length; )
              this.scene.remove(this.scene.children[0]);
          "function" == typeof this.onRestart && this.onRestart(), this.init();
        }
        init() {
          "function" == typeof this.onInit && this.onInit();
        }
        destroy() {
          "function" == typeof this.onDestroy && this.onDestroy();
          const e2 = window.removeEventListener;
          e2("touchstart", this.windowTouchWrapper), e2("touchmove", this.windowTouchWrapper), e2("scroll", this.windowMouseMoveWrapper), e2("mousemove", this.windowMouseMoveWrapper), e2("deviceorientation", this.windowGyroWrapper), e2("resize", this.resize), window.cancelAnimationFrame(this.req);
          const t2 = this.scene;
          t2 && t2.children && n(t2), this.renderer && (this.renderer.domElement && this.el.removeChild(this.renderer.domElement), this.renderer = null, this.scene = null), r.current === this && (r.current = null);
        }
      };
      const l = r.VantaBase;
      let h = "object" == typeof window && window.THREE, { Camera: c, ClampToEdgeWrapping: d, DataTexture: u, FloatType: p, Mesh: m, NearestFilter: f, PlaneBufferGeometry: v, RGBAFormat: y, Scene: g, ShaderMaterial: w, WebGLRenderTarget: b } = h || {};
      const x = function(e2, t2, i2, n2) {
        n2 && ({ Camera: c, ClampToEdgeWrapping: d, DataTexture: u, FloatType: p, Mesh: m, NearestFilter: f, PlaneBufferGeometry: v, RGBAFormat: y, Scene: g, ShaderMaterial: w, WebGLRenderTarget: b } = n2), this.variables = [], this.currentTextureIndex = 0;
        var o2 = p, s2 = new g(), r2 = new c();
        r2.position.z = 1;
        var a2 = { passThruTexture: { value: null } }, l2 = T2("uniform sampler2D passThruTexture;\n\nvoid main() {\n\n	vec2 uv = gl_FragCoord.xy / resolution.xy;\n\n	gl_FragColor = texture2D( passThruTexture, uv );\n\n}\n", a2), h2 = new m(new v(2, 2), l2);
        function x2(i3) {
          i3.defines.resolution = "vec2( " + e2.toFixed(1) + ", " + t2.toFixed(1) + " )";
        }
        function T2(e3, t3) {
          var i3 = new w({ uniforms: t3 = t3 || {}, vertexShader: "void main()	{\n\n	gl_Position = vec4( position, 1.0 );\n\n}\n", fragmentShader: e3 });
          return x2(i3), i3;
        }
        s2.add(h2), this.setDataType = function(e3) {
          return o2 = e3, this;
        }, this.addVariable = function(e3, t3, i3) {
          var n3 = { name: e3, initialValueTexture: i3, material: this.createShaderMaterial(t3), dependencies: null, renderTargets: [], wrapS: null, wrapT: null, minFilter: f, magFilter: f };
          return this.variables.push(n3), n3;
        }, this.setVariableDependencies = function(e3, t3) {
          e3.dependencies = t3;
        }, this.init = function() {
          if (!i2.capabilities.isWebGL2 && !i2.extensions.get("OES_texture_float"))
            return "No OES_texture_float support for float textures.";
          if (0 === i2.capabilities.maxVertexTextures)
            return "No support for vertex shader textures.";
          for (var n3 = 0; n3 < this.variables.length; n3++) {
            var o3 = this.variables[n3];
            o3.renderTargets[0] = this.createRenderTarget(e2, t2, o3.wrapS, o3.wrapT, o3.minFilter, o3.magFilter), o3.renderTargets[1] = this.createRenderTarget(e2, t2, o3.wrapS, o3.wrapT, o3.minFilter, o3.magFilter), this.renderTexture(o3.initialValueTexture, o3.renderTargets[0]), this.renderTexture(o3.initialValueTexture, o3.renderTargets[1]);
            var s3 = o3.material, r3 = s3.uniforms;
            if (null !== o3.dependencies)
              for (var a3 = 0; a3 < o3.dependencies.length; a3++) {
                var l3 = o3.dependencies[a3];
                if (l3.name !== o3.name) {
                  for (var h3 = false, c2 = 0; c2 < this.variables.length; c2++)
                    if (l3.name === this.variables[c2].name) {
                      h3 = true;
                      break;
                    }
                  if (!h3)
                    return "Variable dependency not found. Variable=" + o3.name + ", dependency=" + l3.name;
                }
                r3[l3.name] = { value: null }, s3.fragmentShader = "\nuniform sampler2D " + l3.name + ";\n" + s3.fragmentShader;
              }
          }
          return this.currentTextureIndex = 0, null;
        }, this.compute = function() {
          for (var e3 = this.currentTextureIndex, t3 = 0 === this.currentTextureIndex ? 1 : 0, i3 = 0, n3 = this.variables.length; i3 < n3; i3++) {
            var o3 = this.variables[i3];
            if (null !== o3.dependencies)
              for (var s3 = o3.material.uniforms, r3 = 0, a3 = o3.dependencies.length; r3 < a3; r3++) {
                var l3 = o3.dependencies[r3];
                s3[l3.name].value = l3.renderTargets[e3].texture;
              }
            this.doRenderTarget(o3.material, o3.renderTargets[t3]);
          }
          this.currentTextureIndex = t3;
        }, this.getCurrentRenderTarget = function(e3) {
          return e3.renderTargets[this.currentTextureIndex];
        }, this.getAlternateRenderTarget = function(e3) {
          return e3.renderTargets[0 === this.currentTextureIndex ? 1 : 0];
        }, this.addResolutionDefine = x2, this.createShaderMaterial = T2, this.createRenderTarget = function(i3, n3, s3, r3, a3, l3) {
          return new b(i3 = i3 || e2, n3 = n3 || t2, { wrapS: s3 = s3 || d, wrapT: r3 = r3 || d, minFilter: a3 = a3 || f, magFilter: l3 = l3 || f, format: y, type: o2, stencilBuffer: false, depthBuffer: false });
        }, this.createTexture = function() {
          var i3 = new Float32Array(e2 * t2 * 4);
          return new u(i3, e2, t2, y, p);
        }, this.renderTexture = function(e3, t3) {
          a2.passThruTexture.value = e3, this.doRenderTarget(l2, t3), a2.passThruTexture.value = null;
        }, this.doRenderTarget = function(e3, t3) {
          var n3 = i2.getRenderTarget();
          h2.material = e3, i2.setRenderTarget(t3), i2.render(s2, r2), h2.material = l2, i2.setRenderTarget(n3);
        };
      };
      let T = "object" == typeof window && window.THREE;
      const M = !i();
      let z = 32, S = z * z;
      const C = 800, V = (e2 = {}) => {
        const t2 = new T.BufferGeometry(), i2 = [];
        function n2(t3, n3, o3) {
          const s2 = 1.5 * (e2.birdSize || 1);
          i2.push(new T.Vector3(t3 * s2, n3 * s2, o3 * s2));
        }
        n2(5, 0, 0), n2(-5, -1, 1), n2(-5, 0, 0), n2(-5, -2, -1), n2(0, 2, -6), n2(0, 2, 6), n2(2, 0, 0), n2(-3, 0, 0), t2.setFromPoints(i2);
        const o2 = [];
        return o2.push(0, 2, 1), o2.push(4, 7, 6), o2.push(5, 6, 7), t2.setIndex(o2), t2;
      };
      class R {
        constructor(e2) {
          var t2, i2, n2 = new T.Vector3(), o2 = 500, s2 = 500, r2 = 200, a2 = 0.1, l2 = e2;
          this.position = new T.Vector3(), this.velocity = new T.Vector3(), t2 = new T.Vector3(), this.setGoal = function(e3) {
            i2 = e3;
          }, this.setWorldSize = function(e3, t3, i3) {
            o2 = e3, s2 = t3, r2 = i3;
          }, this.run = function(e3) {
            n2.set(-o2, this.position.y, this.position.z), (n2 = this.avoid(n2)).multiplyScalar(5), t2.add(n2), n2.set(o2, this.position.y, this.position.z), (n2 = this.avoid(n2)).multiplyScalar(5), t2.add(n2), n2.set(this.position.x, -s2, this.position.z), (n2 = this.avoid(n2)).multiplyScalar(5), t2.add(n2), n2.set(this.position.x, s2, this.position.z), (n2 = this.avoid(n2)).multiplyScalar(5), t2.add(n2), n2.set(this.position.x, this.position.y, -r2), (n2 = this.avoid(n2)).multiplyScalar(5), t2.add(n2), n2.set(this.position.x, this.position.y, r2), (n2 = this.avoid(n2)).multiplyScalar(5), t2.add(n2), Math.random() > 0.5 && this.flock(e3), this.move();
          }, this.flock = function(e3) {
            i2 && t2.add(this.reach(i2, 5e-3)), t2.add(this.alignment(e3)), t2.add(this.cohesion(e3)), t2.add(this.separation(e3));
          }, this.move = function() {
            this.velocity.add(t2);
            var e3 = this.velocity.length();
            e3 > 2.5 && this.velocity.divideScalar(e3 / 2.5), this.position.add(this.velocity), t2.set(0, 0, 0);
          }, this.checkBounds = function() {
            this.position.x > o2 && (this.position.x = -o2), this.position.x < -o2 && (this.position.x = o2), this.position.y > s2 && (this.position.y = -s2), this.position.y < -s2 && (this.position.y = s2), this.position.z > r2 && (this.position.z = -r2), this.position.z < -r2 && (this.position.z = r2);
          }, this.avoid = function(e3) {
            var t3 = new T.Vector3();
            return t3.copy(this.position), t3.sub(e3), t3.multiplyScalar(1 / this.position.distanceToSquared(e3)), t3;
          }, this.repulse = function(e3) {
            var i3 = this.position.distanceTo(e3);
            if (i3 < 150) {
              var n3 = new T.Vector3();
              n3.subVectors(this.position, e3), n3.multiplyScalar(0.5 / i3), t2.add(n3);
            }
          }, this.reach = function(e3, t3) {
            var i3 = new T.Vector3();
            return i3.subVectors(e3, this.position), i3.multiplyScalar(t3), i3;
          }, this.alignment = function(e3) {
            var t3, i3, n3 = new T.Vector3(), o3 = 0;
            const s3 = 100 * l2.alignment / 20;
            for (var r3 = 0, h2 = e3.length; r3 < h2; r3++)
              Math.random() > 0.6 || (i3 = (t3 = e3[r3]).position.distanceTo(this.position)) > 0 && i3 <= s3 && (n3.add(t3.velocity), o3++);
            if (o3 > 0) {
              n3.divideScalar(o3);
              var c2 = n3.length();
              c2 > a2 && n3.divideScalar(c2 / a2);
            }
            return n3;
          }, this.cohesion = function(e3) {
            var t3, i3, n3 = new T.Vector3(), o3 = new T.Vector3(), s3 = 0;
            const r3 = 100 * l2.cohesion / 20;
            for (var h2 = 0, c2 = e3.length; h2 < c2; h2++)
              Math.random() > 0.6 || (i3 = (t3 = e3[h2]).position.distanceTo(this.position)) > 0 && i3 <= r3 && (n3.add(t3.position), s3++);
            s3 > 0 && n3.divideScalar(s3), o3.subVectors(n3, this.position);
            var d2 = o3.length();
            return d2 > a2 && o3.divideScalar(d2 / a2), o3;
          }, this.separation = function(e3) {
            var t3, i3, n3 = new T.Vector3(), o3 = new T.Vector3();
            const s3 = 100 * l2.separation / 20;
            for (var r3 = 0, a3 = e3.length; r3 < a3; r3++)
              Math.random() > 0.6 || (i3 = (t3 = e3[r3]).position.distanceTo(this.position)) > 0 && i3 <= s3 && (o3.subVectors(this.position, t3.position), o3.normalize(), o3.divideScalar(i3), n3.add(o3));
            return n3;
          };
        }
      }
      class E extends l {
        static initClass() {
          this.prototype.defaultOptions = { backgroundColor: 465199, color1: 16711680, color2: 53759, colorMode: "varianceGradient", birdSize: 1, wingSpan: 30, speedLimit: 5, separation: 20, alignment: 20, cohesion: 20, quantity: 5 };
        }
        constructor(e2) {
          T = e2.THREE || T, super(e2);
        }
        initComputeRenderer() {
          this.gpuCompute = new x(z, z, this.renderer, T);
          const e2 = this.gpuCompute.createTexture(), t2 = this.gpuCompute.createTexture();
          !function(e3) {
            const t3 = e3.image.data;
            let i3 = 0;
            const n2 = t3.length;
            (() => {
              const e4 = [];
              for (; i3 < n2; ) {
                const n3 = Math.random() * C - 400, o2 = Math.random() * C - 400, s2 = Math.random() * C - 400;
                t3[i3 + 0] = n3, t3[i3 + 1] = o2, t3[i3 + 2] = s2, t3[i3 + 3] = 1, e4.push(i3 += 4);
              }
            })();
          }(e2), function(e3) {
            const t3 = e3.image.data;
            let i3 = 0;
            const n2 = t3.length;
            (() => {
              const e4 = [];
              for (; i3 < n2; ) {
                const n3 = Math.random() - 0.5, o2 = Math.random() - 0.5, s2 = Math.random() - 0.5;
                t3[i3 + 0] = 10 * n3, t3[i3 + 1] = 10 * o2, t3[i3 + 2] = 10 * s2, t3[i3 + 3] = 1, e4.push(i3 += 4);
              }
            })();
          }(t2), this.velocityVariable = this.gpuCompute.addVariable("textureVelocity", "uniform float time;\nuniform float testing;\nuniform float delta; // about 0.016\nuniform float separationDistance; // 20\nuniform float alignmentDistance; // 40\nuniform float cohesionDistance;\nuniform float speedLimit;\nuniform float freedomFactor;\nuniform vec3 predator;\n\nconst float width = resolution.x;\nconst float height = resolution.y;\n\nconst float PI = 3.141592653589793;\nconst float PI_2 = PI * 2.0;\n// const float VISION = PI * 0.55;\n\nfloat zoneRadius = 40.0;\nfloat zoneRadiusSquared = 1600.0;\n\nfloat separationThresh = 0.45;\nfloat alignmentThresh = 0.65;\n\nconst float UPPER_BOUNDS = BOUNDS;\nconst float LOWER_BOUNDS = -UPPER_BOUNDS;\n\nfloat rand(vec2 co){\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvoid main() {\n\n  zoneRadius = separationDistance + alignmentDistance + cohesionDistance;\n  separationThresh = separationDistance / zoneRadius;\n  alignmentThresh = ( separationDistance + alignmentDistance ) / zoneRadius;\n  zoneRadiusSquared = zoneRadius * zoneRadius;\n\n\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n  vec3 birdPosition, birdVelocity;\n\n  vec3 selfPosition = texture2D( texturePosition, uv ).xyz;\n  vec3 selfVelocity = texture2D( textureVelocity, uv ).xyz;\n\n  float dist;\n  vec3 dir; // direction\n  float distSquared;\n\n  float separationSquared = separationDistance * separationDistance;\n  float cohesionSquared = cohesionDistance * cohesionDistance;\n\n  float f;\n  float percent;\n\n  vec3 velocity = selfVelocity;\n\n  float limit = speedLimit;\n\n  dir = predator * UPPER_BOUNDS - selfPosition;\n  dir.z = 0.;\n  // dir.z *= 0.6;\n  dist = length( dir );\n  distSquared = dist * dist;\n\n  float preyRadius = 150.0;\n  float preyRadiusSq = preyRadius * preyRadius;\n\n  // move birds away from predator\n  if (dist < preyRadius) {\n\n    f = ( distSquared / preyRadiusSq - 1.0 ) * delta * 100.;\n    velocity += normalize( dir ) * f;\n    limit += 5.0;\n  }\n\n  // if (testing == 0.0) {}\n  // if ( rand( uv + time ) < freedomFactor ) {}\n\n  // Attract flocks to the center\n  vec3 central = vec3( 0., 0., 0. );\n  dir = selfPosition - central;\n  dist = length( dir );\n\n  dir.y *= 2.5;\n  velocity -= normalize( dir ) * delta * 5.;\n\n  for (float y=0.0;y<height;y++) {\n    for (float x=0.0;x<width;x++) {\n\n      vec2 ref = vec2( x + 0.5, y + 0.5 ) / resolution.xy;\n      birdPosition = texture2D( texturePosition, ref ).xyz;\n\n      dir = birdPosition - selfPosition;\n      dist = length(dir);\n\n      if (dist < 0.0001) continue;\n\n      distSquared = dist * dist;\n\n      if (distSquared > zoneRadiusSquared ) continue;\n\n      percent = distSquared / zoneRadiusSquared;\n\n      if ( percent < separationThresh ) { // low\n\n        // Separation - Move apart for comfort\n        f = (separationThresh / percent - 1.0) * delta;\n        velocity -= normalize(dir) * f;\n\n      } else if ( percent < alignmentThresh ) { // high\n\n        // Alignment - fly the same direction\n        float threshDelta = alignmentThresh - separationThresh;\n        float adjustedPercent = ( percent - separationThresh ) / threshDelta;\n\n        birdVelocity = texture2D( textureVelocity, ref ).xyz;\n\n        f = ( 0.5 - cos( adjustedPercent * PI_2 ) * 0.5 + 0.5 ) * delta;\n        velocity += normalize(birdVelocity) * f;\n\n      } else {\n\n        // Attraction / Cohesion - move closer\n        float threshDelta = 1.0 - alignmentThresh;\n        float adjustedPercent = ( percent - alignmentThresh ) / threshDelta;\n\n        f = ( 0.5 - ( cos( adjustedPercent * PI_2 ) * -0.5 + 0.5 ) ) * delta;\n\n        velocity += normalize(dir) * f;\n\n      }\n    }\n  }\n\n  // this make tends to fly around than down or up\n  // if (velocity.y > 0.) velocity.y *= (1. - 0.2 * delta);\n\n  // Speed Limits\n  if ( length( velocity ) > limit ) {\n    velocity = normalize( velocity ) * limit;\n  }\n\n  gl_FragColor = vec4( velocity, 1.0 );\n\n}", t2), this.positionVariable = this.gpuCompute.addVariable("texturePosition", "uniform float time;\nuniform float delta;\n\nvoid main() {\n\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n  vec4 tmpPos = texture2D( texturePosition, uv );\n  vec3 position = tmpPos.xyz;\n  vec3 velocity = texture2D( textureVelocity, uv ).xyz;\n\n  float phase = tmpPos.w;\n\n  phase = mod( ( phase + delta +\n    length( velocity.xz ) * delta * 3. +\n    max( velocity.y, 0.0 ) * delta * 6. ), 62.83 );\n\n  gl_FragColor = vec4( position + velocity * delta * 15. , phase );\n\n}", e2), this.gpuCompute.setVariableDependencies(this.velocityVariable, [this.positionVariable, this.velocityVariable]), this.gpuCompute.setVariableDependencies(this.positionVariable, [this.positionVariable, this.velocityVariable]), this.positionUniforms = this.positionVariable.material.uniforms, this.velocityUniforms = this.velocityVariable.material.uniforms, this.positionUniforms.time = { value: 0 }, this.positionUniforms.delta = { value: 0 }, this.velocityUniforms.time = { value: 1 }, this.velocityUniforms.delta = { value: 0 }, this.velocityUniforms.testing = { value: 1 }, this.velocityUniforms.separationDistance = { value: 1 }, this.velocityUniforms.alignmentDistance = { value: 1 }, this.velocityUniforms.cohesionDistance = { value: 1 }, this.velocityUniforms.speedLimit = { value: 1 }, this.velocityUniforms.freedomFactor = { value: 1 }, this.velocityUniforms.predator = { value: new T.Vector3() }, this.velocityVariable.material.defines.BOUNDS = C.toFixed(2), this.velocityVariable.wrapS = T.RepeatWrapping, this.velocityVariable.wrapT = T.RepeatWrapping, this.positionVariable.wrapS = T.RepeatWrapping, this.positionVariable.wrapT = T.RepeatWrapping;
          const i2 = this.gpuCompute.init();
          null !== i2 && console.error(i2);
        }
        initGpgpuBirds() {
          const e2 = ((e3) => {
            const t3 = new T.BufferGeometry();
            e3.quantity && (z = Math.pow(2, e3.quantity), S = z * z);
            const i3 = 3 * S, n2 = 3 * i3, o2 = new T.BufferAttribute(new Float32Array(3 * n2), 3), s2 = new T.BufferAttribute(new Float32Array(3 * n2), 3), r2 = new T.BufferAttribute(new Float32Array(2 * n2), 2), a2 = new T.BufferAttribute(new Float32Array(n2), 1);
            t3.setAttribute || (t3.setAttribute = t3.addAttribute), t3.setAttribute("position", o2), t3.setAttribute("birdColor", s2), t3.setAttribute("reference", r2), t3.setAttribute("birdVertex", a2);
            let l2 = 0;
            const h2 = function() {
              for (let e4 = 0; e4 < arguments.length; e4++)
                o2.array[l2++] = arguments[e4];
            }, c2 = e3.wingSpan || 20, d2 = e3.birdSize || 1;
            for (let e4 = 0; e4 < S; e4++)
              h2(0, -0, -20 * d2, 0, 4 * d2, -20 * d2, 0, 0, 30 * d2), h2(0, 0, -15 * d2, -c2 * d2, 0, 0, 0, 0, 15 * d2), h2(0, 0, 15 * d2, c2 * d2, 0, 0, 0, 0, -15 * d2);
            const u2 = {};
            for (l2 = 0; l2 < 3 * i3; l2++) {
              const t4 = ~~(l2 / 3), i4 = t4 % z / z, n3 = ~~(t4 / z) / z, o3 = ~~(l2 / 9) / S, h3 = o3.toString(), c3 = -1 != e3.colorMode.indexOf("Gradient");
              let d3;
              d3 = !c3 && u2[h3] ? u2[h3] : e3.effect.getNewCol(o3), c3 || u2[h3] || (u2[h3] = d3), s2.array[3 * l2 + 0] = d3.r, s2.array[3 * l2 + 1] = d3.g, s2.array[3 * l2 + 2] = d3.b, r2.array[2 * l2] = i4, r2.array[2 * l2 + 1] = n3, a2.array[l2] = l2 % 9;
            }
            return t3.scale(0.2, 0.2, 0.2);
          })(Object.assign({}, this.options, { effect: this }));
          this.birdUniforms = { color: { value: new T.Color(16720384) }, texturePosition: { value: null }, textureVelocity: { value: null }, time: { value: 1 }, delta: { value: 0 }, birdSize: { value: this.options.birdSize } };
          const t2 = new T.ShaderMaterial({ uniforms: this.birdUniforms, vertexShader: "attribute vec2 reference;\nattribute float birdVertex;\n\nattribute vec3 birdColor;\n\nuniform sampler2D texturePosition;\nuniform sampler2D textureVelocity;\n\nvarying vec4 vColor;\nvarying float z;\n\nuniform float time;\nuniform float birdSize;\n\nvoid main() {\n\n  vec4 tmpPos = texture2D( texturePosition, reference );\n  vec3 pos = tmpPos.xyz;\n  vec3 velocity = normalize(texture2D( textureVelocity, reference ).xyz);\n\n  vec3 newPosition = position;\n\n  if ( birdVertex == 4.0 || birdVertex == 7.0 ) {\n    // flap wings\n    newPosition.y = sin( tmpPos.w ) * 5. * birdSize;\n  }\n\n  newPosition = mat3( modelMatrix ) * newPosition;\n\n  velocity.z *= -1.;\n  float xz = length( velocity.xz );\n  float xyz = 1.;\n  float x = sqrt( 1. - velocity.y * velocity.y );\n\n  float cosry = velocity.x / xz;\n  float sinry = velocity.z / xz;\n\n  float cosrz = x / xyz;\n  float sinrz = velocity.y / xyz;\n\n  mat3 maty =  mat3(\n    cosry, 0, -sinry,\n    0    , 1, 0     ,\n    sinry, 0, cosry\n  );\n\n  mat3 matz =  mat3(\n    cosrz , sinrz, 0,\n    -sinrz, cosrz, 0,\n    0     , 0    , 1\n  );\n  newPosition =  maty * matz * newPosition;\n  newPosition += pos;\n  z = newPosition.z;\n\n  vColor = vec4( birdColor, 1.0 );\n  gl_Position = projectionMatrix *  viewMatrix  * vec4( newPosition, 1.0 );\n}", fragmentShader: "varying vec4 vColor;\nvarying float z;\nuniform vec3 color;\nvoid main() {\n  // Fake colors for now\n  float rr = 0.2 + ( 1000. - z ) / 1000. * vColor.x;\n  float gg = 0.2 + ( 1000. - z ) / 1000. * vColor.y;\n  float bb = 0.2 + ( 1000. - z ) / 1000. * vColor.z;\n  gl_FragColor = vec4( rr, gg, bb, 1. );\n}", side: T.DoubleSide }), i2 = new T.Mesh(e2, t2);
          return i2.rotation.y = Math.PI / 2, i2.matrixAutoUpdate = false, i2.updateMatrix(), this.scene.add(i2);
        }
        getNewCol(e2) {
          const t2 = this.options, i2 = null != t2.color1 ? t2.color1 : 4456448, n2 = null != t2.color2 ? t2.color2 : 6684672, o2 = new T.Color(i2), s2 = new T.Color(n2);
          let r2, a2;
          if (a2 = -1 != t2.colorMode.indexOf("Gradient") ? Math.random() : e2, 0 == t2.colorMode.indexOf("variance")) {
            const e3 = (o2.r + Math.random() * s2.r).clamp(0, 1), t3 = (o2.g + Math.random() * s2.g).clamp(0, 1), i3 = (o2.b + Math.random() * s2.b).clamp(0, 1);
            r2 = new T.Color(e3, t3, i3);
          } else
            r2 = 0 == t2.colorMode.indexOf("mix") ? new T.Color(i2 + a2 * n2) : o2.lerp(s2, a2);
          return r2;
        }
        onInit() {
          this.camera = new T.PerspectiveCamera(75, this.width / this.height, 1, 3e3), this.camera.position.z = 350, this.fog = new T.Fog(16777215, 100, 1e3), this.mouseX = this.mouseY = 0;
          const e2 = this.birds = [], t2 = this.boids = [], i2 = this.options;
          let n2, o2;
          if (M)
            try {
              this.initComputeRenderer(), this.valuesChanger = this.valuesChanger.bind(this), this.valuesChanger(), this.initGpgpuBirds();
            } catch (e3) {
              console.error("[vanta.js] birds init error: ", e3);
            }
          else {
            const l2 = 6 * Math.pow(2, i2.quantity);
            for (var s2 = 0; s2 < l2; s2++) {
              n2 = t2[s2] = new R(i2), n2.position.x = 400 * Math.random() - 200, n2.position.y = 400 * Math.random() - 200, n2.position.z = 400 * Math.random() - 200, n2.velocity.x = 2 * Math.random() - 1, n2.velocity.y = 2 * Math.random() - 1, n2.velocity.z = 2 * Math.random() - 1, n2.setWorldSize(500, 500, 300);
              const h2 = -1 != i2.colorMode.indexOf("Gradient"), c2 = V(i2), d2 = c2.attributes.position.length, u2 = new T.BufferAttribute(new Float32Array(d2), 3);
              if (h2)
                for (var r2 = 0; r2 < c2.index.array.length; r2 += 3)
                  for (var a2 = 0; a2 <= 2; a2++) {
                    const e3 = c2.index.array[r2 + a2], t3 = this.getNewCol();
                    u2.array[3 * e3] = t3.r, u2.array[3 * e3 + 1] = t3.g, u2.array[3 * e3 + 2] = t3.b;
                  }
              else {
                const e3 = this.getNewCol(s2 / l2);
                for (r2 = 0; r2 < u2.array.length; r2 += 3)
                  u2.array[r2] = e3.r, u2.array[r2 + 1] = e3.g, u2.array[r2 + 2] = e3.b;
              }
              c2.setAttribute("color", u2), o2 = e2[s2] = new T.Mesh(c2, new T.MeshBasicMaterial({ color: 16777215, side: T.DoubleSide, vertexColors: T.VertexColors })), o2.phase = Math.floor(62.83 * Math.random()), o2.position.x = t2[s2].position.x, o2.position.y = t2[s2].position.y, o2.position.z = t2[s2].position.z, this.scene.add(o2);
            }
          }
        }
        valuesChanger() {
          this.velocityUniforms && (this.velocityUniforms.separationDistance.value = this.options.separation, this.velocityUniforms.alignmentDistance.value = this.options.alignment, this.velocityUniforms.speedLimit.value = this.options.speedLimit, this.velocityUniforms.cohesionDistance.value = this.options.cohesion);
        }
        onUpdate() {
          this.now = performance.now(), this.last || (this.last = this.now);
          let e2 = (this.now - this.last) / 1e3;
          if (e2 > 1 && (e2 = 1), this.last = this.now, M)
            this.positionUniforms.time.value = this.now, this.positionUniforms.delta.value = e2, this.velocityUniforms.time.value = this.now, this.velocityUniforms.delta.value = e2, this.birdUniforms.time.value = this.now, this.birdUniforms.delta.value = e2, this.velocityUniforms.predator.value.set(this.mouseX, -this.mouseY, 0), this.mouseX = 1e4, this.mouseY = 1e4, this.gpuCompute.compute(), this.birdUniforms.texturePosition.value = this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture, this.birdUniforms.textureVelocity.value = this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture;
          else {
            const e3 = this.birds, n2 = this.boids;
            let o2, s2;
            for (var t2 = 0, i2 = e3.length; t2 < i2; t2++) {
              o2 = n2[t2], o2.run(n2), s2 = e3[t2], s2.rotation.y = Math.atan2(-o2.velocity.z, o2.velocity.x), s2.rotation.z = Math.asin(o2.velocity.y / o2.velocity.length()), s2.phase = (s2.phase + (Math.max(0, s2.rotation.z) + 0.1)) % 62.83;
              const i3 = 16, r2 = 13;
              s2.geometry.attributes.position.array[i3] = s2.geometry.attributes.position.array[r2] = 5 * Math.sin(s2.phase) * this.options.birdSize, s2.geometry.attributes.position.needsUpdate = true, s2.geometry.computeVertexNormals(), s2.position.x = n2[t2].position.x, s2.position.y = n2[t2].position.y, s2.position.z = n2[t2].position.z;
            }
          }
        }
        onMouseMove(e2, t2) {
          if (this.mouseX = e2 - 0.5, this.mouseY = t2 - 0.5, !M) {
            const e3 = this.boids;
            let t3;
            for (var i2 = new T.Vector3(this.mouseX * this.width, -this.mouseY * this.height, 0), n2 = 0, o2 = e3.length; n2 < o2; n2++)
              t3 = e3[n2], i2.z = t3.position.z, t3.repulse(i2);
          }
        }
        onDestroy() {
        }
        onResize() {
        }
      }
      E.initClass();
      const P = r.register("BIRDS", E);
      return t;
    })());
  }
});
export default require_vanta_birds_min();
//# sourceMappingURL=vanta_dist_vanta__birds__min.js.map
