(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("fc0f77d5-a172-4480-9c96-be0545b8a9ca");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fc0f77d5-a172-4480-9c96-be0545b8a9ca' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"601d2993-e65c-423a-80f9-fdb2554b6ab5":{"roots":{"references":[{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"68155"},{"id":"68150"}]},"id":"68160","type":"LegendItem"},{"attributes":{},"id":"68102","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68139","type":"Circle"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"68140"},{"id":"68145"}]},"id":"68159","type":"LegendItem"},{"attributes":{},"id":"68123","type":"UndoTool"},{"attributes":{},"id":"68170","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68154","type":"Circle"},{"attributes":{"data_source":{"id":"68137"},"glyph":{"id":"68138"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68139"},"selection_glyph":null,"view":{"id":"68141"}},"id":"68140","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"68149","type":"Line"},{"attributes":{},"id":"68175","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68147"},"glyph":{"id":"68148"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68149"},"selection_glyph":null,"view":{"id":"68151"}},"id":"68150","type":"GlyphRenderer"},{"attributes":{},"id":"68124","type":"SaveTool"},{"attributes":{},"id":"68106","type":"LinearScale"},{"attributes":{},"id":"68104","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68126","type":"BoxAnnotation"},{"attributes":{"source":{"id":"68142"}},"id":"68146","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68127","type":"PolyAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68170"},"selection_policy":{"id":"68171"}},"id":"68142","type":"ColumnDataSource"},{"attributes":{},"id":"68118","type":"ResetTool"},{"attributes":{"overlay":{"id":"68127"}},"id":"68122","type":"LassoSelectTool"},{"attributes":{"overlay":{"id":"68126"}},"id":"68120","type":"BoxZoomTool"},{"attributes":{"axis_label":"ESS","formatter":{"id":"68165"},"ticker":{"id":"68115"}},"id":"68114","type":"LinearAxis"},{"attributes":{"callback":null},"id":"68125","type":"HoverTool"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"68167"},"ticker":{"id":"68111"}},"id":"68110","type":"LinearAxis"},{"attributes":{},"id":"68169","type":"UnionRenderers"},{"attributes":{"axis":{"id":"68110"},"ticker":null},"id":"68113","type":"Grid"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"68148","type":"Line"},{"attributes":{"children":[[{"id":"68101"},0,0]]},"id":"68179","type":"GridBox"},{"attributes":{"source":{"id":"68152"}},"id":"68156","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68168"},"selection_policy":{"id":"68169"}},"id":"68137","type":"ColumnDataSource"},{"attributes":{},"id":"68167","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"68152"},"glyph":{"id":"68153"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68154"},"selection_glyph":null,"view":{"id":"68156"}},"id":"68155","type":"GlyphRenderer"},{"attributes":{},"id":"68119","type":"PanTool"},{"attributes":{},"id":"68168","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68172"},"selection_policy":{"id":"68173"}},"id":"68147","type":"ColumnDataSource"},{"attributes":{},"id":"68173","type":"UnionRenderers"},{"attributes":{"source":{"id":"68147"}},"id":"68151","type":"CDSView"},{"attributes":{"click_policy":"hide","items":[{"id":"68159"},{"id":"68160"}],"location":"center_right","orientation":"horizontal"},"id":"68158","type":"Legend"},{"attributes":{"toolbars":[{"id":"68128"}],"tools":[{"id":"68118"},{"id":"68119"},{"id":"68120"},{"id":"68121"},{"id":"68122"},{"id":"68123"},{"id":"68124"},{"id":"68125"}]},"id":"68180","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"68114"},"dimension":1,"ticker":null},"id":"68117","type":"Grid"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68153","type":"Circle"},{"attributes":{},"id":"68171","type":"UnionRenderers"},{"attributes":{"above":[{"id":"68158"}],"below":[{"id":"68110"}],"center":[{"id":"68113"},{"id":"68117"}],"left":[{"id":"68114"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"68140"},{"id":"68145"},{"id":"68150"},{"id":"68155"},{"id":"68157"}],"title":{"id":"68161"},"toolbar":{"id":"68128"},"toolbar_location":null,"x_range":{"id":"68102"},"x_scale":{"id":"68106"},"y_range":{"id":"68104"},"y_scale":{"id":"68108"}},"id":"68101","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"68144","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68118"},{"id":"68119"},{"id":"68120"},{"id":"68121"},{"id":"68122"},{"id":"68123"},{"id":"68124"},{"id":"68125"}]},"id":"68128","type":"Toolbar"},{"attributes":{"children":[{"id":"68181"},{"id":"68179"}]},"id":"68182","type":"Column"},{"attributes":{"data_source":{"id":"68142"},"glyph":{"id":"68143"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68144"},"selection_glyph":null,"view":{"id":"68146"}},"id":"68145","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68137"}},"id":"68141","type":"CDSView"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"68157","type":"Span"},{"attributes":{},"id":"68111","type":"BasicTicker"},{"attributes":{"text":"b"},"id":"68161","type":"Title"},{"attributes":{},"id":"68121","type":"WheelZoomTool"},{"attributes":{},"id":"68172","type":"Selection"},{"attributes":{},"id":"68108","type":"LinearScale"},{"attributes":{"toolbar":{"id":"68180"},"toolbar_location":"above"},"id":"68181","type":"ToolbarBox"},{"attributes":{},"id":"68174","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68138","type":"Circle"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"68143","type":"Line"},{"attributes":{},"id":"68115","type":"BasicTicker"},{"attributes":{},"id":"68165","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68174"},"selection_policy":{"id":"68175"}},"id":"68152","type":"ColumnDataSource"}],"root_ids":["68182"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"601d2993-e65c-423a-80f9-fdb2554b6ab5","root_ids":["68182"],"roots":{"68182":"fc0f77d5-a172-4480-9c96-be0545b8a9ca"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();