/**
 * TocJS v1.1.2 (http://github.com/nghuuphuoc/tocjs)
 *
 * Generate a table of contents based on headings
 *
 * @author      http://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2014 Nguyen Huu Phuoc
 * @license     MIT
 */

!function(a){var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULT_OPTIONS,d),this.headings=[],this.$element.addClass(this.options.elementClass);var e=this;a(this.options.selector).each(function(b,c){a(c).data("tagNumber",parseInt(c.tagName.substring(1))).data("index",1).data("numbering","1"),e.headings.push(c)}),this.headings.length>0&&this.render()};b.DEFAULT_OPTIONS={selector:"h1, h2, h3, h4, h5, h6",elementClass:"toc",rootUlClass:"toc-ul-root",ulClass:"toc-ul",prefixLinkClass:"toc-link-",heading:null,indexingFormats:{}},b.prototype={constructor:b,render:function(){for(var b={},c=this.headings,d=this.headings.length,e=0;d>e;e++){var f=a(c[e]).data("tagNumber");if(0==e)b[c[0].tagName]=a(c[0]);else{var g=a(c[e-1]).data("tagNumber"),h=String(a(c[e-1]).data("numbering")).split(".");switch(!0){case f==g:var i=a(c[e-1]).data("index")+1;a(c[e]).data("index",i),1==h.length?a(c[e]).data("numbering",parseInt(h[0])+1):(h.pop(),h.push(i),a(c[e]).data("numbering",h.join("."))),b[c[e].tagName]=a(c[e]);break;case f>g:h.push("1"),a(c[e]).data("index",1).data("numbering",h.join(".")),b[c[e].tagName]=a(c[e]);break;case g>f:var j=b[c[e].tagName],k=String(a(j).data("numbering")).split("."),i=a(j).data("index")+1;a(c[e]).data("index",i),1==k.length?a(c[e]).data("numbering",parseInt(k[0])+1):(k.pop(),k.push(i),a(c[e]).data("numbering",k.join("."))),b[c[e].tagName]=a(c[e])}}}var l={},m=a("<ul/>").addClass(this.options.rootUlClass).addClass(this.options.ulClass).appendTo(this.$element);this.options.heading&&a("<li/>").addClass("toc-heading").wrapInner(a("<a/>").attr("href","#").html(this.options.heading)).appendTo(m);for(var e=0;d>e;e++){var n=this.generateHeadingId(c[e]),o=String(a(c[e]).data("numbering")).split("."),p=a("<a/>").html(a(c[e]).text()).addClass(this.options.prefixLinkClass+o.length).attr("href","#"+n);if(a("<a/>").addClass("toc-anchor").html("#").attr("href","#"+n).hide().appendTo(c[e]),a(c[e]).on("mouseover",function(){a(this).find(".toc-anchor").show()}).on("mouseout",function(){a(this).find(".toc-anchor").hide()}),1==o.length)var q=a("<li/>").wrapInner(p).appendTo(m);else{var r=o.pop(),s=o.join("."),t=l[s].find("ul"),u=t.length>0?t.get(0):a("<ul/>").addClass(this.options.ulClass).appendTo(l[s]),q=a("<li/>").wrapInner(p).appendTo(u);o.push(r)}l[o.join(".")]=q,this.prependIndexing(e,p)}},generateHeadingId:function(b){if(!a(b).attr("id")){for(var c=a(b).text().toLowerCase().replace(/\s+|\/|\\/g,"-").replace(/á|à|ạ|ả|ã|ă|ắ|ằ|ặ|ẳ|ẵ|â|ấ|ầ|ậ|ẩ|ẫ|ä/g,"a").replace(/đ/g,"d").replace(/é|è|ẹ|ẻ|ẽ|ê|ế|ề|ệ|ể|ễ/g,"e").replace(/í|ì|ị|ỉ|ĩ/g,"i").replace(/ó|ò|ọ|ỏ|õ|ô|ố|ồ|ộ|ổ|ỗ|ơ|ớ|ờ|ợ|ở|ỡ/g,"o").replace(/ú|ù|ụ|ủ|ũ|ư|ứ|ừ|ự|ử|ữ/g,"u").replace(/ý|ỳ|ỵ|ỷ|ỹ/g,"y").replace(/[^a-z0-9-]/g,""),d=!0,e=0;d;)d=a("#"+c+(0==e?"":"-"+e)).length>0,d?e++:c+=0==e?"":"-"+e;return a(b).attr("id",c),c}return a(b).attr("id")},prependIndexing:function(b,c){var d=this.headings[b],e=parseInt(a(d).data("tagNumber")),f=this.getIndexingFormat(e);if(null!=f){for(var g=String(a(d).data("numbering")).split("."),h=g.length,i=[],j=0,k=0;h>k;k++)j=k+(e-h)+1,f=this.getIndexingFormat(j),f&&i.push(this.convertIndexing(g[k],f));if(i.length>0){var l=i.join(". ")+". ";a(c).prepend(l),a(d).prepend(l)}}},getIndexingFormat:function(a){if("object"==typeof this.options.indexingFormats)return this.options.indexingFormats["h"+a]?this.options.indexingFormats["h"+a]:null;if("string"==typeof this.options.indexingFormats){if(-1!=["upperAlphabet","lowerAlphabet","number","upperRoman","lowerRoman"].indexOf(this.options.indexingFormats))return this.options.indexingFormats;if(this.options.indexingFormats.length<a)return null;switch(this.options.indexingFormats[a-1]){case"1":case 1:return"number";case"A":return"upperAlphabet";case"a":return"lowerAlphabet";case"I":return"upperRoman";case"i":return"lowerRoman";default:return null}}return null},convertIndexing:function(a,b){var c="abcdefghijklmnopqrstuvwxyz",d="ABCDEFGHIJKLMNOPQRSTUVWXYZ",e=c.length;switch(b){case"upperAlphabet":case"A":return a>e?d[a%e-1]:d[a-1];case"lowerAlphabet":case"a":return a>e?c[a%e-1]:c[a-1];case"number":case"1":case 1:return a;case"upperRoman":case"I":return this.convertToRomanNumeral(a);case"lowerRoman":case"i":return this.convertToRomanNumeral(a).toLowerCase();default:return"_"}},convertToRomanNumeral:function(a){if(!+a)return"";for(var b=String(+a).split(""),c=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"],d="",e=3;e--;)d=(c[+b.pop()+10*e]||"")+d;return Array(+b.join("")+1).join("M")+d}},a.fn.toc=function(c){return this.each(function(){var d=a(this),e=d.data("toc");e||d.data("toc",e=new b(this,c))})},a.fn.toc.Constructor=b}(window.jQuery);
$(function() {
    // Create share button
    // new Share('#shareButton');

    $('[data-toggle="tooltip"]').tooltip();

    $('#toggleButton').on('click', function() {
        $(this).find('i').toggleClass('fa-navicon fa-close');
        $('body').toggleClass('doc-nav-shown');
    });

    $('form').each(function() {
        $(this).on('success.form.fv', function(e) {
            e.preventDefault();
        });
    });

    // Create table of contents
    if ($('#toc').length) {
        $('#toc')
            .css('max-width', $('#toc').width())
            .toc({
                selector: '#main h2, #main h3, #main h4',
                elementClass: 'toc',
                ulClass: 'nav',
                indexingFormats: '______'
            });
    }

    // Switch framework handler
    $('iframe.doc-demo-frame').each(function() {
        var $this = $(this);
        $('<div/>').addClass('doc-demo-loader').html('<i class="fa fa-refresh fa-spin fa-2x"></i>').hide().insertBefore($this);
        $this.on('load', function() {
            $(this).prev().hide().end().show();
        });
    });

    $('a[data-demo-framework]').on('click', function(e) {
        e.preventDefault();
        var $this     = $(this),
            framework = $this.attr('data-demo-framework'),
            url       = $this.attr('href'),
            $target   = $($this.attr('data-demo-target'));

        $this
            .closest('.doc-demo')
            .find('.doc-demo-direct a')
            .attr('href', url);

        $this
            .closest('ul')
                .find('li')
                    .removeClass('active')
                    .end()
            .end()
            .parent().addClass('active');

        $this.closest('.dropdown').find('span').eq(0).html($this.html());

        $target
            .closest('.tab-content')
            .find('[data-demo-code]')
                .hide()
                .filter('[data-demo-code="' + framework.toLowerCase() + '"]').show();

        $target.height('');
        $target.hide().prev().fadeIn('fast').promise().then(function() {
            $target.css('visibility', 'hidden').attr('src', url);
        });
    });

    $('.doc-demo').each(function() {
        $(this).find('a[data-demo-framework]').eq(0).click();
    });
    // $('a[data-demo-framework="bootstrap"]').click();
});
