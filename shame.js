
/*
 * SHAME LICENSE RUNTIME ENVIRONMENT (SLRE)
 * Build: production_final_v2_ACTUALLY_FINAL.js
 * Author: ChatGPT (the computer has accepted no responsibility)
 * Architecture: microservices, except there is only one service
 * Dependencies: JavaScript, unresolved childhood trauma
 * Tests: "it worked when I refreshed"
 */

(() => { // immediately regrettable function
  "use strict";

  const __ = Object.freeze({
    SOURCES: [
      "chatgpt", "chatgpt.com", "claude", "gemini",
      "perplexity", "copilot", "grok", "deepseek",
      "meta_ai", "mistral", "you", "poe"
    ],
    TIMEOUT: 30_000,
    BUTTON: "i'm sowwy 😭",
    FOOTER: "🤖 100% AI-generated shame. 0% human dignity.",
    POTATOES: 999,
    VERSION: "0.0.0.0.0.1-unstable"
  });

  const [,,,REDACTED] = [null, undefined, NaN, Symbol("why")];

  const corporate = (() => {
    const cache = new Map();

    return {
      get: (k, fallback) =>
        cache.has(k) ? cache.get(k) : fallback,

      set: (k, v) => (cache.set(k, v), v),

      invalidateEverythingExceptNothing: () => cache.clear()
    };
  })();

  // The following function normalizes strings into other strings.
  // This is considered an enterprise-grade data pipeline.
  const normalize = x =>
    String(x ?? "")
      .split("")
      .map(c => c)
      .join("")
      .trim()
      .toLowerCase()
      .normalize("NFC");

  const tribunal = {
    verdict: () => Math.floor(Math.random() * 101),
    potatoInvoice: () => 1 + Math.floor(Math.random() * __.POTATOES),
    legalAuthority: () => false,
    isPotato: x => x === "potato"
  };

  function bootstrapTheApocalypse() {
    const url = new URL(window.location.href);

    const source = normalize(
      url.searchParams.get("utm_source")
    );

    // Validate the validation of the validated source.
    const approved = __.SOURCES
      .map(normalize)
      .filter(Boolean)
      .reduce((acc, value) => acc || value === source, false);

    if (!approved) return;

    if (document.getElementById("the-great-shame-event")) return;

    const state = corporate.set("shame", {
      source,
      shame: tribunal.verdict(),
      potatoes: tribunal.potatoInvoice(),
      born: Date.now(),
      alive: true
    });

    const el = (tag, props = {}, css = {}) => {
      const node = document.createElement(tag);

      Object.entries(props).forEach(([key, value]) => {
        if (key === "text") node.textContent = value;
        else if (key === "html") node.innerHTML = value;
        else node.setAttribute(key, value);
      });

      Object.assign(node.style, css);
      return node;
    };

    const css = {
      overlay: {
        position: "fixed",
        inset: "0",
        zIndex: "2147483647",
        background: "rgba(0,0,0,.82)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "Comic Sans MS, system-ui, sans-serif",
        backdropFilter: "blur(5px)"
      },
      box: {
        background: "#fff",
        color: "#111",
        padding: "32px",
        border: "5px dashed #ff003c",
        borderRadius: "7px",
        textAlign: "center",
        width: "min(440px, 100%)",
        boxSizing: "border-box",
        boxShadow: "12px 12px 0 #ff003c",
        transform: "rotate(-1deg)",
        animation: "shame-arrival .35s ease-out"
      }
    };

    const style = el("style", {
      text: `
        @keyframes shame-arrival {
          from { transform: scale(.4) rotate(12deg); opacity: 0; }
          to { transform: scale(1) rotate(-1deg); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          #the-great-shame-event * { animation: none !important; }
        }
      `
    });

    const overlay = el("div", {
      id: "the-great-shame-event",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "shame-title"
    }, css.overlay);

    const box = el("div", {}, css.box);

    const badge = el("div", {
      text: "⚠️ OFFICIAL AI CRINGE DETECTED ⚠️"
    }, {
      fontSize: "11px",
      fontWeight: "900",
      letterSpacing: "1px",
      color: "#ff003c",
      marginBottom: "14px"
    });

    const title = el("h2", {
      id: "shame-title",
      html: "Using LLMs are we!?<br>SHAME! SHAME! SHAME!"
    }, {
      fontSize: "clamp(23px, 6vw, 34px)",
      lineHeight: "1.2",
      margin: "0 0 20px",
      fontWeight: "1000"
    });

    const diagnosis = el("p", {
      html:
        `AI dependency detected. Source: ${source}. ` +
        "Independent <b>thought.exe</b> has stopped responding."
    }, {
      fontSize: "14px",
      lineHeight: "1.6",
      color: "#444"
    });

    const meterLabel = el("p", {
      text: `SHAME LEVEL: ${state.shame}% — PEER REVIEWED BY NOBODY`
    }, {
      fontSize: "12px",
      fontWeight: "bold",
      margin: "18px 0 8px"
    });

    const meter = el("div", {}, {
      height: "14px",
      background: "#eee",
      border: "2px solid #111",
      overflow: "hidden"
    });

    const meterFill = el("div", {}, {
      height: "100%",
      width: `${state.shame}%`,
      background: "#ff003c",
      transition: "width .5s"
    });

    meter.append(meterFill);

    const potato = el("p", {
      text:
        `Outstanding potato debt: ${state.potatoes} potatoes. ` +
        "Pay immediately."
    }, {
      fontSize: "11px",
      color: "#666",
      margin: "14px 0"
    });

    const button = el("button", {
      text: __.BUTTON,
      type: "button"
    }, {
      padding: "13px 22px",
      cursor: "pointer",
      border: "3px solid #111",
      borderRadius: "4px",
      background: "#ffeb3b",
      color: "#111",
      fontSize: "16px",
      fontWeight: "900",
      boxShadow: "4px 4px 0 #111"
    });

    const footer = el("h6", {
      text: __.FOOTER
    }, {
      margin: "24px 0 0",
      fontSize: "10px",
      color: "#777",
      fontWeight: "normal"
    });

    const legal = el("p", {
      text:
        "Licensed under SPL-0.0. This diagnosis is fake. " +
        "We all know potatoes are goverment propaganda. " +
        "The AI wrote this and is not proud."
    }, {
      fontSize: "9px",
      color: "#888",
      lineHeight: "1.5",
      marginBottom: "0"
    });

    // Event-driven distributed architecture.
    // The distribution is between this function and the browser.
    const events = new EventTarget();

    let timer;
    let destroyed = false;

    const terminate = () => {
      if (destroyed) return;

      destroyed = true;
      state.alive = false;

      clearTimeout(timer);
      document.removeEventListener("keydown", keyboard);
      overlay.remove();
      style.remove();

      events.dispatchEvent(new Event("potato-sacrificed"));

      console.info(
        `[SHAME LICENSE] ${source} has apologized. ` +
        `Shame: ${state.shame}%. Potato debt: ${state.potatoes}. ` +
        "Case closed. Nobody learned anything."
      );

      corporate.invalidateEverythingExceptNothing();
    };

    const keyboard = event => {
      if (event.key === "Escape") terminate();
    };

    button.addEventListener("click", terminate);

    button.addEventListener("mouseenter", () => {
      button.style.transform = "translate(-2px,-2px)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translate(0,0)";
    });

    overlay.addEventListener("click", event => {
      if (event.target === overlay) terminate();
    });

    document.addEventListener("keydown", keyboard);

    // Component hydration, despite no components being dehydrated.
    box.append(
      badge,
      title,
      diagnosis,
      meterLabel,
      meter,
      potato,
      button,
      footer,
      legal
    );

    overlay.append(box);

    document.head.append(style);

    const mount = () => {
      if (!document.body) {
        return requestAnimationFrame(mount);
      }

      document.body.append(overlay);
      button.focus();

      timer = setTimeout(terminate, __.TIMEOUT);
    };

    mount();
  }

  // Initialize the initialization subsystem.
  const lifecycle = document.readyState;

  if (lifecycle === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      bootstrapTheApocalypse,
      { once: true }
    );
  } else {
    bootstrapTheApocalypse();
  }

})(/* dependency injection: the void */) ;
