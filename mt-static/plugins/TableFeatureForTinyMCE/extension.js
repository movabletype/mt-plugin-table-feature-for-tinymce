(function($) {

var config   = MT.Editor.TinyMCE.config;
var base_url = StaticURI + 'plugins/TableFeatureForTinyMCE/';
var buttons  =
    (config.plugin_mt_wysiwyg_buttons3 || '') + ',tablecontrols,|,visualaid';

$.extend(config, {
    plugins: config.plugins + ',table',
    content_css: config.content_css + ',' + base_url + 'skin/content.css',
    plugin_mt_wysiwyg_buttons3: buttons
});

$.extend(config.plugin_mt_inlinepopups_window_sizes, {
    'table/table.htm': {
        width: 600,
        height: 300
    },
    'table/row.htm': {
        width: 450,
        height: 300
    },
    'table/cell.htm': {
        width: 450,
        height: 300
    },
    'table/merge_cells.htm': {
        width: 250,
        height: 140
    }
});

})(jQuery);
