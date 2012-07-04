(function($) {

var config   = MT.Editor.TinyMCE.config;
var base_url = StaticURI + 'plugins/TableFeatureForTinyMCE/';
var buttons  = config.plugin_mt_wysiwyg_buttons3 + ',tablecontrols,|,visualaid';

$.extend(config, {
    plugins: config.plugins + ',table',
    content_css: config.content_css + ',' + base_url + 'skin/content.css',
    plugin_mt_wysiwyg_buttons3: buttons
});

})(jQuery);
