//<![CDATA[	
// Order B01
//version 4.07
var SC = {
	USD:{s:'$'	, t:'USD'},//U.S. Dollar
};
var CURRENCY_CODE =  SC.USD;// see the list above
var PAYPAL_EMAIL = '';
var CURRENCY_POS = 'before';// before or after the price value
var SEP_LONG_PRICE = ' ';// separator for long price text (1.2.0)
var SHIPPING_FEE = 20;// per order, 0 is free
var SHIPPING_FEE_FOR_EACH_ITEM = 3.3;// per item, 0 is free
var ENABLE_DIRECT_BANK_TRANSFER = true;
var ENABLE_CHEQUE = true;
var ENABLE_CASH_ON_DELIVERY = true;
var ENABLE_PAYPAL = true;
var FIELD_CITY = true; // set false to hide country list (1.2.0)
var FIELD_FULL_NAME = true;
var FIELD_PIN_BB = true;
var FIELD_DISTRICT = true;
var FIELD_ADDRESS = true;
var FIELD_PROVINCE = true;
var FIELD_POST_CODE = true;
var COUPON = new Array();
var SC_MAP = new Array();
var DAY_FORMAT = 'mm/dd/yyyy';
var SUMMARY_LEN = 150;
var DEFAULT_THUMBNAIL = 'https://lorempixel.com/300/500/';
var AJAX_LOADING_IMAGE = 'https://1.bp.blogspot.com/-Qu3p5sfG0_0/U7-BqkiW-nI/AAAAAAAAIVg/fqpTyUkrFkQ/s1600/ajax-loader.gif';
var NUMBER_ITEMS_FOR_COLLECTION = 4;
var CART_CACHE_DURATION = 5; // days
var Blog_Url = window.location.hostname;
var _vNwQ = Blog_Url + '/?page=cart';
var _vWtQ = Blog_Url + '/?page=checkout';
var Developing = false;

var Feed_URL = '/feeds';
if (Developing) {
	Feed_URL = 'https://www.blogger.com/feeds/'+Blog_Id;
}

 _s7ZkT=['','','','.variables i','name','$','undefined','','','','','$','/','TRUE','FALSE','TRUE','FALSE','TRUE','FALSE','TRUE','FALSE','TRUE','FALSE','TRUE','FALSE','TRUE','FALSE','TRUE','FALSE','TRUE','FALSE','TRUE','FALSE','TRUE','FALSE','TRUE','FALSE','TRUE','FALSE','','USD','','$','','','before','.slide','<a class="slide-left slide-control white block abs"><i class="fa fa-angle-left"></i></a><a class="slide-right slide-control white block abs"><i class="fa fa-angle-right"></i></a>','#header-1','.inner','.image','a.slide-content','.slide-content-wrapper','.image','left','100%','max-width','px','top','px','style','position','static','max-width','px','end-top','end-left','.slide-content-wrapper','top','position','absolute','.pre-title','left','50%','start-left','start-top','end-top','top','end-top','px','left','start-left','px','.title','bottom','100%','top','px','bottom','auto','left','px','start-top','start-left','.caption','top','100%','top','px','left','px','start-top','start-left','.button','padding','px','','left','px','right','auto','start-left','start-top','end-top','top','end-top','px','undefined','opacity','1','visibility','hidden','undefined','a.slide-content','start-left','px','start-top','px','easeOutBack','a.image','100%','easeOutBack','visibility','hidden','visibility','visible','a.slide-content','end-left','px','end-top','px','easeOutBack','a.image','.inner','px','easeOutBack','undefined','.inner','.slide-control','top','px','.slide-left','px','px','undefined','.slide-control','.slide-left','100%','100%',"body",'undefined','undefined','.slide-left','undefined','.slide-right','undefined','.slide','<a class="slide-right slide-control white block abs"><i class="fa fa-angle-left"></i></a><a class="slide-left slide-control white block abs"><i class="fa fa-angle-right"></i></a>','#header-1','.inner','.image','a.slide-content','.slide-content-wrapper','.image','right','100%','max-width','px','top','px','style','position','static','max-width','px','end-top','end-left','.slide-content-wrapper','top','position','absolute','.pre-title','right','50%','start-left','start-top','end-top','top','end-top','px','right','start-left','px','.title','bottom','100%','top','px','bottom','auto','right','px','start-top','start-left','.caption','top','100%','top','px','right','px','start-top','start-left','.button','padding','px','','right','px','right','auto','start-left','start-top','end-top','top','end-top','px','undefined','opacity','1','visibility','hidden','undefined','a.slide-content','start-left','px','start-top','px','easeOutBack','a.image','100%','easeOutBack','visibility','hidden','visibility','visible','a.slide-content','end-left','px','end-top','px','easeOutBack','a.image','.inner','px','easeOutBack','undefined','.inner','.slide-control','top','px','.slide-left','px','px','undefined','.slide-control','.slide-left','100%','100%',"body",'undefined','undefined','.slide-left','undefined','.slide-right','undefined','.translator i[data-key="','"]','','\u003cimg ','src\u003d\"','\"','src\u003d\'','\'','','data-thumbnail-src\u003d\"','\"','','\u003ciframe ','src\u003d\"','\"','http://www.youtube.com/watch?v=','','http://www.youtube.com/embed/','','//www.youtube.com/embed/','','//www.youtube.com/watch?v=','','?','?','&','&','http://img.youtube.com/vi/','/mqdefault.jpg','',':',':','-','',' ','','%','%','','',':',':','-','',' ','','%','%','','%','-','%','-','','.image-list','id','.widget.Image','','','','h2','.widget-content','img','src','.caption','a','href','margin-top','0','h','w','.postthumb','.postthumb','width','px','height','px','margin-top','px','.postthumb img','height','width','src','/s72-c/','/s72-c/','/s1600/','<img src="','" class="thumbnail"/>','youtube.com','/default.','/default.','/mqdefault.','<img src="','" class="thumbnail"/>','.postthumb img','w','h','load','w','h','load','undefined','mm/dd/yyyy','undefined','undefined','http://lorempixel.com/300/500/','','','','','','','comments','Anonymous','','http://img1.blogblog.com/img/anon36.png','','entry','post-','published','category','title','content','summary','','','','...','link','alternate','replies','name','uri','gd$image','http://img1.blogblog.com/img/blank.gif','','media$thumbnail','','thr$total',' ','','','','','thr$in-reply-to','thr$in-reply-to','thr$in-reply-to','/default/','/summary/','?alt=json-in-script','gd$extendedProperty','blogger.itemClass','pid-','','undefined','mm/dd/yyyy','undefined','undefined','http://lorempixel.com/300/500/','blog-','.comments','','category','','title','','subtitle','Anonymous','','http://img1.blogblog.com/img/anon36.png','name','uri','gd$image','http://img1.blogblog.com/img/blank.gif','entry','post-','','published','category','','title','','content','','summary','','','','...','','comments','link','alternate','replies','Anonymous','','http://img1.blogblog.com/img/anon36.png','name','uri','gd$image','http://img1.blogblog.com/img/blank.gif','','media$thumbnail','','thr$total',' ','','','','','thr$in-reply-to','thr$in-reply-to','thr$in-reply-to','/default/','/summary/','?alt=json-in-script','','gd$extendedProperty','blogger.itemClass','pid-','','-','dd','mm','yyyy','cookie','; expires=','; path=/',"=",'test','ok','',";","=","=","",'',"undefined",'','','?','#','://','/','archive.html','/search?updated-min=','/search?','/search/label/','/p/','.html','/cart/','?page=cart','/checkout/','?page=checkout','/confirm/','?page=confirm','/b/','admin','yes','.item-control','.item-control','display','none','','','.','','','.','#primary','<div class="wide section" id="blog"><div class="widget Blog" id="Blog1"><div class="blog-posts hfeed"><div class="clear"></div></div></div></div><div class="clear"></div>','#header-2','','string','!0','','','','','string','$','%','!0','<div class="property out-of-stock efont">','Sold Out','</div>','<div class="property discount color-bg efont"><span class="label discount">','% OFF</span>','<span class="old" data-old="','">','</span><span class="current" data-price="','">','</span></div>','<div class="property normal color-bg efont" data-price="','">','</div>','.blog-posts.hfeed.index .index-post','even','odd','triple','quad','#popular-items .index-post','even','odd','triple','quad','#home-horizon-section-2 .widget','even','odd','triple','quad','span.trans','data-key','.follow-by-email-submit','SUBSCRIBE','.follow-by-email-address','placeholder','Email address...','#header .menu a','$','sub','<span class="tab"></span>','#header .menu-toggle','#header .menu','display','none','#header .menu-toggle','#header .menu','display','none','#header .menu-toggle','#header .menu','display','none','#header .menu','#header .menu-toggle','slider','#slider','<div class="wide inner"></div>','','','[',']','[',']','','[',']','[',']','<div class="slide">','','<a href="','" class="slide-content pre-title efont white block">','</a>','<a href="','" class="slide-content title efont white block">','</a>','<a href="','" class="slide-content caption white block">','</a>','<a href="','" class="slide-content button efont white color-bg black-hover inb">','</a>','<div class="slide-content-wrapper">','</div>','<a href="','" class="image block abs"><img alt="slide-image" src="','"/></a>','</div>','html[dir="rtl"]','#bar .tabs .active','#bar .tabs','#bar .arrow','left','px','#bar .inner .tabs','#bar .inner','<div class="breadcrumb"></div>','#bar .tabs a','#bar .tabs a.active','active','active','.search-toggle','.search-overlay','#search-form','30%','easeOutBack','.search-overlay','.search-overlay','#search-form','100%',"body",'.search-overlay','display','none','.search-overlay','#search-form','100%','.index-post','.property','.out-of-stock','.add-to-cart','','Lebih Rinci','','disabled','.current-price','.add-to-cart','','Lebih Rinci','','href','.tabs a','.tabs a','active','active','.latest','#blog','#home-random','#popular-items','.random','#blog','#home-random','#popular-items','.popular','#blog','#home-random','#popular-items','.label-information','$','%','!0','data-count','data-url','.post-tags a[rel="tag"]','$','%','!0','.breadcrumb','<a href="/" class="black color-hover">','Home','</a><span class="sep">/</span>','<a href="','?max-results=8" class="black color-hover">','</a>','.post-tags a[rel="tag"]','href','href','<a href="','?max-results=8" class="black color-hover">','</a><span class="sep">/</span>','<span class="bc-post-title black">404</span>','title','___','404','title','<span class="bc-post-title black">','Archive','</span>','<span class="bc-post-title black">','Cart','</span>','title','___','Cart','title','<span class="bc-post-title black">','Checkout','</span>','title','___','Checkout','title','<span class="bc-post-title black">','Confirm','</span>','title','___','Confirm','title','#home-horizon-section .widget.Text .widget-content','##','##','<span class="icon"><i class="fa fa-','"></i></span>','.post .post-description img','src','src','br','a','br','div.separator','br','div.separator','br','div.separator','a','div.separator','.post-header .desc-image-list','','<div class="full">','<div class="postthumb"><img src="','" alt="post-full-image"/></div>','<div class="postthumb" style="opacity: 0" ><img src="','" alt="post-full-image"/></div>','</div>','<div class="thumb">','<a class="postthumb"><img src="','" alt="post-thumb-image"/></a>','<div class="clear"></div></div>','.post-header .desc-image-list .thumb .postthumb','img','src','.post-header .desc-image-list .full .postthumb','opacity','1','.post-header .desc-image-list .full .postthumb','img','src','.post.hentry .post-header-meta-2','','','','%','<span class="inb old-price efont">','</span>','$','<span class="inb cur-price efont" itemprop="price">','</span>','<span class="inb color-bg white efont on-sale">','On sale','</span>','!0','<span class="inb white out-of-stock efont">','Out of stock','</span>','add_to_cart','add_to_confirm','','','(',')','(','(',')','','','(',')','','','(',')','','','(',')','','.confirm-toggle','hide','title','View confirm','.cart-toggle','hide','title','Lihat Keranjang','.post-header-action-buttons','','data-id','<div class="action-button-wrapper add-to-cart-button-wrapper rel">','','','<a class="add-to-cart" data-id="','">','',' <input style="display:none;" type="number" class="counter b" value="1"/> ','Beli',' <i class="fa fa-shopping-cart icon"></i></a>','<div class="clear"></div>','</div>','<div class="action-button-wrapper add-to-confirm-button-wrapper rel">','<a class="add-to-confirm" data-id="','">','Bookmark',' <i class="fa fa-heart"></i></a>','<div class="clear"></div>','</div>','<div class="clear"></div>','<div class="shopping-msg"></div>','<div class="clear"></div>','.post-header-action-buttons .change-cart-counter-button','.post-header-action-buttons .add-to-cart .counter','.add-to-cart-up','.post-header-action-buttons .add-to-cart .counter','.cart-toggle','.confirm-toggle','.number','.fa','<span class="number">','</span>','.disabled','.counter','.counter','data-id','.counter','.shopping-item.hentry','h1.shopping-title','.shopping-msg','<p><span style="color:#F1EF62;"> "','" ','</span>telah dimasukan kedalam keranjang belanjaan Anda.</p>','<a href="/?page=cart">Lihat Keranjang','</a><a class="msg-btn">Lanjut Belanja','</a>','.in-list','<i class="fa fa-check"></i> ','Add to cart','.add-to-cart','.add-to-confirm','.disabled','data-id','.shopping-item','h1.shopping-title','.shopping-msg','<span class="icon green-bg white"><i class="fa fa-check"></i></span> "','" ','was successfully added to your confirm','. <a href="/?page=confirm">','View confirm','</a>','<div class="cart-content white-bg abs right0">	<div class="cart-list">	</div>	<p class="total"><strong>','Subtotal',':</strong> <span class="amount">','<span class="value">0</span>','</span></p>	<p class="buttons">		<a href="/?page=cart" class="button viewcart grey-bg black color-bg-hover white-hover inb efont">','Lihat Keranjang','</a>','','</p></div>','.cart-toggle-wrapper','','.cart-content','/posts/default/','?alt=json-in-script','.cart-content','','$','<tr class="cart-item" data-id="','"><td class="cart-item-thumb">			<a href="','">				<img src="','" alt="cart-item-thumb"></a>				</td>		<td class="cart-item-title">		<a href="','">','</a>	</td>				<td class="number">','</td><td class="price-value" data-price="','">','</td><td class="cart-item-remove" data-id="','" title="Remove from cart">×</td></tr><div class="clear"></div>','<table class="cart-item-table" cellspacing="0"><thead>							<tr>								<th class="cart-thumbnail">&nbsp;</th>								<th class="cart-name">Barang</th>								<th class="product-quantity">Jumlah</th>			<th class="product-price">Harga</th>					<th class="cart-remove">&nbsp;</th>						</tr>						</thead><tbody>','</tbody></table>','<div class="clear"></div>','.cart-toggle-wrapper .cart-content .cart-list','.cart-toggle-wrapper .cart-content .cart-list .ajax-loader','.cart-toggle-wrapper .cart-content .cart-list .cart-item','.price-value','data-price','.number','.cart-toggle-wrapper .cart-content .total .amount .value','.cart-toggle-wrapper .cart-content .cart-list .cart-item .cart-item-remove','data-id','Can not get item from server!',"jsonp",'Can not get data from server!','.cart-toggle','.number','.cart-toggle-wrapper .cart-content','.cart-toggle-wrapper .cart-content .cart-list','<img class="ajax-loader" src="','"/>','.cart-toggle-wrapper .cart-content .total .value','0','','.cart-toggle-wrapper .cart-content','.cart-toggle-wrapper','.disabled','.cart-toggle-wrapper','.disabled','.cart-toggle-wrapper','.cart-content','data-id','.index-post[data-id="','"]','.index-post','.blog-posts.hfeed','<div class="empty-confirm empty-msg">','The confirm is empty now','</div>','/posts/default/','?alt=json-in-script','','',' even',' odd',' triple',' quad','<div class="index-post small shopping-item','" data-id="','">','<a class="postthumb" href="','">','<img src="','" class="thumbnail"/>','</a>','<div class="content tcenter">','<h2 class="shopping-title"><a class="black color-hover" href="','">','</a></h2>','<a class="add-to-cart in-list" data-id="','"><span class="text black-hover">+ ','Add to cart',' +</span></a>','<a class="add-to-cart disabled" href="','"><span class="text black-hover">+ ','Readmore',' +</span></a>','<div class="clear"></div>','<a class="remove-from-confirm" data-id="','"><span class="text black color-hover">','Remove from confirm','</span></a>','</div>','<div class="clear"></div></div>','.blog-posts.hfeed .ajax-loader','.blog-posts.hfeed .ajax-loader','.blog-posts.hfeed .index-post a.add-to-cart','.blog-posts.hfeed .index-post a.remove-from-confirm','Can not get item from server!',"jsonp",'Can not get data from server!','body','confirm','.blog-posts.hfeed','confirm-page','.blog-posts.hfeed','<img class="ajax-loader" src="','"/>','.blog-posts.hfeed','<div class="empty-confirm empty-msg">','The confirm is empty now','</div>','','body','cart','.blog-posts.hfeed','cart-page','.cart-toggle-wrapper','disabled','.blog-posts.hfeed','<div class="cart-page-buttons"></div>','.blog-posts.hfeed','<div class="cart-page-subtotal"></div>','.blog-posts.hfeed','<div class="cart-page-content"></div>','/posts/default/','?alt=json-in-script','','$','<tr class="cart_item" data-id="','">					<td class="product-remove">						<a class="remove" title="','Remove from cart','" data-id="','">×</a>					</td>					<td class="product-thumbnail">						<a href="','"><img src="','"></a>					</td>					<td class="product-name">						<a href="','">','</a>					</td>					<td class="product-price">						<span class="amount">','<span class="price-value" data-id="','" data-price="','">','</span>','</span>					</td>					<td class="product-quantity">						<div class="quantity buttons_added"><input type="button" value="-" class="minus" data-id="','"><input type="number" step="1" min="1" name="cart[','][qty]" value="','" class="input-text qty text" size="4"><input type="button" value="+" class="plus" data-id="','"></div>					</td>					<td class="product-subtotal">						<span class="amount">','<span class="subtotal-value">','</span>','</span>					</td>				</tr>','<table class="cart-page-table" cellspacing="0"><thead>							<tr>								<th class="product-remove">&nbsp;</th>								<th class="product-thumbnail">&nbsp;</th>								<th class="product-name">','Barang','</th>								<th class="product-price">','Harga','</th>								<th class="product-quantity">','Jumlah','</th>								<th class="product-subtotal">','Total','</th>							</tr>						</thead><tbody>','</tbody></table>','.cart-page-content','.cart-page-content .cart_item','data-id','.price-value[data-id="','"]','data-price','input[name="cart[','][qty]"]','.cart-page-subtotal','<strong class="label">','Subtotal',':</strong> <span class="subtotal-value">','<span class="value">','</span>','</span>','.cart-page-buttons','<a class="update-cart-page inb color-bg white-bg black-bg-hover black white-hover">','Perbarui Keranjang','  <i class="fa fa-refresh"></i></a> <a class="proceed-checkout inb color-bg white green-bg-hover" href="?page=checkout">','Lanjutkan',' <i class="fa fa-long-arrow-right"></i></a>','.cart_item .product-quantity input[type="button"]','data-id','input[name="cart[','][qty]"]','.minus','input[name="cart[','][qty]"]','input[name="cart[','][qty]"]','.update-cart-page','.cart_item','data-id','input[name="cart[','][qty]"]','.cart_item .remove','data-id','Can not get item from server!',"jsonp",'Can not get data from server!','','.cart-page-content','','.cart-page-subtotal','','.cart-page-buttons','','.cart-page-content','<img class="ajax-loader" src="','"/>','.blog-posts.hfeed','<div class="empty-cart empty-msg">','The cart is empty now','</div>','Åland Islands','Afghanistan','Albania','Algeria','Andorra','Angola','Anguilla','Antarctica','Antigua and Barbuda','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belau','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bonaire Saint Eustatius and Saba','Bosnia and Herzegovina','Botswana','Bouvet Island','Brazil','British Indian Ocean Territory','British Virgin Islands','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Cayman Islands','Central African Republic','Chad','Chile','China','Christmas Island','Cocos (Keeling) Islands','Colombia','Comoros','Congo (Brazzaville)','Congo (Kinshasa)','Cook Islands','Costa Rica','Croatia','Cuba','CuraÇao','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Guiana','French Polynesia','French Southern Territories','Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada','Guadeloupe','Guatemala','Guernsey','Guinea','Guinea-Bissau','Guyana','Haiti','Heard Island and McDonald Islands','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Isle of Man','Israel','Italy','Ivory Coast','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macao S.A.R. China','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','Netherlands Antilles','New Caledonia','New Zealand','Nicaragua','Niger','Nigeria','Niue','Norfolk Island','North Korea','Norway','Oman','Pakistan','Palestinian Territory','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Pitcairn','Poland','Portugal','Qatar','Republic of Ireland','Reunion','Romania','Russia','Rwanda','São Tomé and Príncipe','Saint Barthélemy','Saint Helena','Saint Kitts and Nevis','Saint Lucia','Saint Martin (Dutch part)','Saint Martin (French part)','Saint Pierre and Miquelon','Saint Vincent and the Grenadines','San Marino','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Georgia/Sandwich Islands','South Korea','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Svalbard and Jan Mayen','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tokelau','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Turks and Caicos Islands','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom (UK)','United States (US)','Uruguay','Uzbekistan','Vanuatu','Vatican','Venezuela','Vietnam','Wallis and Futuna','Western Sahara','Western Samoa','Yemen','Zambia','Zimbabwe','','','','','','','','','','','','','','','','','','','','#ship-to-different-address-checkbox',':checked','','p.validate-required','.billing-fields p.validate-required','input[type="text"]','id','_email','@','.','id','_phone','+','id','_postcode','#billCities option:selected','','#billfirst_name','','#billbank','','#billDistrict','','#billAddress','','#billProvince','','#billPostcode','','#billEmail','#billPhone','#shipping_country','','#shipping_first_name','','#shipping_last_name','','#shipping_district','','#shipping_address','','#shipping_city','','#shipping_postcode','','#order_comments','.checkout-page .payment-methods input[name="payment_method"][checked="checked"]','#ship-to-different-address-checkbox',':checked','.checkout-page .contact-form-wrapper','.contact-form-name',' ','.contact-form-email','<table style="margin:0;padding:0;background:#f8f8f8;height:100%;width:100%"><tbody><tr><td>','<table style="margin:0 auto;padding:0" align="center" width="600"><tbody><tr><td style="color:#999;font-family:Calibri;line-height:1.5;margin:0;padding:0" align="left">','<table style="margin:0;padding:0" width="100%"><tbody><tr>','','</td></tr></tbody></table>','</td></tr><tr><td>','<table style="margin:0;padding:0" align="left" width="100%"><tbody><tr><td align="left" width="550"><table style="margin:0;padding:0" align="left" width="100%"><tbody><tr>','<td style="line-height:1.5;margin:0;padding:0"><div><h1 style="border-bottom-color:#e8e8e8;border-bottom-style:solid;border-bottom-width:1px;color:#808080;display:block;font-family:Calibri;font-size:24px;font-weight:bold;line-height:80%;margin:0 0 10px;padding:0 0 10px;text-align:left" align="left">','Invoice Pembelian Barang','</h1></div><div>','<p style="color:#555;font-family:Calibri;font-size:15px;line-height:1.5;margin:0;padding:0">Terima kasih atas kepercayaan Anda telah berbelanja di toko online kami. Berikut adalah penjelasan tagihan pembayaran.</p></div><div>','<table style="background:#ffffff;border:1px solid #ccc;font-size:15px;margin:0 0 25px;padding:0" bgcolor="#FFFFFF" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><th colspan="3" style="background:#D64937;border-color:#D64937;border-style:solid solid none;border-width:1px;color:#ffffff;padding-left:10px;padding-right:10px">','<h2 style="color:#ffffff;font-family:Calibri;font-size:15px;line-height:1.5;margin:0;padding:5px 0">','Tagihan Pembayaran No. #','</h2></th></tr>','<tr><td colspan="2" style="background:#ffffff;border-bottom:1px solid #ccc;border-right:1px solid #ccc;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="left" bgcolor="#FFFFFF" valign="top">Tanggal Pemesanan</td><td style="background:#ffffff;border-bottom:1px solid #ccc;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="left" bgcolor="#FFFFFF" valign="top"><strong style="color:#555;font-size:15px">','</strong></td></tr><tr>','<td colspan="2" style="background:#ffffff;border-bottom:1px solid #ccc;border-right:1px solid #ccc;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="left" bgcolor="#FFFFFF" valign="top">','Pembeli','</td><td style="background:#ffffff;border-bottom:1px solid #ccc;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="left" bgcolor="#FFFFFF" valign="top"><strong style="color:#555;font-size:15px">','</strong></td><tr>','<td colspan="2" style="background:#ffffff;border-bottom:1px solid #ccc;border-right:1px solid #ccc;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="left" bgcolor="#FFFFFF" valign="top">','Kurir Pilihan</td><td style="background:#ffffff;border-bottom:1px solid #ccc;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="left" bgcolor="#FFFFFF" valign="top"><strong style="color:#555;font-size:15px">','</strong></td></tr><tr>','<td colspan="2" style="background:#ffffff;border-bottom:1px solid #ccc;border-right:1px solid #ccc;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="left" bgcolor="#FFFFFF" valign="top">','Metode Pembayaran','</td><td style="background:#ffffff;border-bottom:1px solid #ccc;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="left" bgcolor="#FFFFFF" valign="top"><strong style="color:#555;font-size:15px">Transfer Bank</strong></td></tr><tr>','<td colspan="3" style="background:#ffffff;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" bgcolor="#FFFFFF"><p style="color:#555;font-family:Calibri;font-size:15px;line-height:1.5;margin:0;padding:0">','Catatan Pembeli','</p>','</td></tr><tr><th colspan="3" style="background:#D64937;border-color:#D64937;border-style:solid solid none;border-width:1px;color:#ffffff;padding-left:10px;padding-right:10px" bgcolor="#D64937">','</th></tr><tr><td style="background:#f0f0f0;border-bottom:1px solid #ccc;border-right:1px solid #ccc;color:#555;font-family:Calibri;font-size:11px;line-height:1.5;margin:0;padding:5px 10px" align="center" bgcolor="#F0F0F0" valign="top" width="25%"><strong style="color:#555;font-size:15px">','Nama','</strong></td><td style="background:#f0f0f0;border-bottom:1px solid #ccc;border-right:1px solid #ccc;color:#555;font-family:Calibri;font-size:11px;line-height:1.5;margin:0;padding:5px 10px" align="center" bgcolor="#F0F0F0" valign="top" width="10%">','Jumlah','</td><td style="background:#f0f0f0;border-bottom:1px solid #ccc;color:#555;font-family:Calibri;font-size:11px;line-height:1.5;margin:0;padding:5px 10px" align="right" bgcolor="#F0F0F0" valign="top" width="25%"><strong style="color:#555;font-size:15px">','Harga','</strong></td></tr>','<tr><td style="background:#ffffff;border-bottom:1px solid #ccc;border-right:1px solid #ccc;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="left" bgcolor="#FFFFFF" valign="middle" width="25%">','<a style="font-family: Calibri; font-size: 15px; font-weight: bold; line-height: 1.5; margin: 0px; padding:0px; text-decoration:none!important; color:#D64937!important;" href="','" target="_blank">','</a></td>','<td style="background:#ffffff;border-bottom:1px solid #ccc;border-right:1px solid #ccc;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="center" bgcolor="#FFFFFF" valign="middle" width="10%">','</td><td style="background:#ffffff;border-bottom:1px solid #ccc;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="right" bgcolor="#FFFFFF" valign="middle" width="25%">','<strong style="color:#555;font-size:15px">','</strong></td></tr>','<tr><td colspan="2" style="background:#ffffff;border-bottom:1px solid #ccc;border-right:1px solid #ccc;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="left" bgcolor="#FFFFFF" valign="top">','Total Harga Barang','</td><td style="background:#ffffff;border-bottom:1px solid #ccc;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="right" bgcolor="#FFFFFF" valign="top" width="25%"><strong style="color:#555;font-size:15px">','</strong></td></tr>','<tr><td colspan="2" style="background:#ffffff;border-bottom:1px solid #ccc;border-right:1px solid #ccc;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="left" bgcolor="#FFFFFF" valign="top">','Biaya Kirim Barang','</td><td style="background:#ffffff;border-bottom:1px solid #ccc;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="right" bgcolor="#FFFFFF" valign="top" width="25%"><strong style="color:#555;font-size:15px">','</strong></td></tr>','<tr><td colspan="2" style="background:#ffffff;border-bottom:1px solid #ccc;border-right:1px solid #ccc;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="left" bgcolor="#FFFFFF" valign="top">','Kode Pembayaran','<small>(Hanya dibebankan kepada pembeli)</small></td><td style="background:#ffffff;border-bottom:1px solid #ccc;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="right" bgcolor="#FFFFFF" valign="top" width="25%"><strong style="color:#555;font-size:15px">','923','</strong></td></tr>','<tr><td colspan="2" style="background:#ffffff;border-right:1px solid #ccc;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="left" bgcolor="#FFFFFF" valign="top"><strong style="color:#555;font-size:15px">','TOTAL PEMBAYARAN','</strong></td><td style="background:#ffffff;color:#555;font-family:Calibri;line-height:1.5;margin:0;padding:5px 10px" align="right" bgcolor="#FFFFFF" valign="top" width="25%"><strong style="color:#555;font-size:15px">','</strong></td></tr>','</tbody></table></div><div><p style="color:#555;font-family:Calibri;font-size:15px;line-height:1.5;margin:0;padding:0"><strong style="color:#555;font-size:15px">','Alamat Tujuan Pengiriman','</strong></p><p style="color:#555;font-family:Calibri;font-size:15px;line-height:1.5;margin:0;padding:0">','</p><hr/><p>Jika sudah melakukan transfer silahkan klik tombol dibawah ini!</p><center><a class="btn-konf" style="color:#fff;font-size:15px;text-decoration:none;background:#D64937;padding:10px 30px;border-radius:3px;" target="_blank" href="','/?page=confirm">Saya Sudah Transfer</a></center><br/><h2><b>Butuh Bantuan?</b></h2><br/>Silahkan kontak <i>customer service</i> toko online kami<br/>No.HP/Telp: ','<br/><a class="btn-wa" href="https://api.whatsapp.com/send?phone=','&amp;text=Halo%20Saya%20butuh%20bantuan%20untuk%20pemesanan">Buka WhatsApp</a>','</div></td></tr></tbody></table></td></tr></tbody></table>','</td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>','Country',': ','\n','    ','Postcode / Zip',': ','\n','\n','Informasi Tambahan','\n','-----------------------------------------------------------\n','','Order Details','\n','============================================================\n','    ','Product',': ','\n','    ','Price',': ','\n','    ','Jumlah',': ','\n','    ','Total',': ','\n','    ','Link',': ','\n','============================================================\n','Subtotal',': ','\n','-----------------------------------------------------------\n','Coupon code',': ','\n','Coupon value',': ','\n','Subtotal after applied coupon',': ','\n','-----------------------------------------------------------\n','Ongkir JNE',': ','\n','-----------------------------------------------------------\n','Total',': ','\n','============================================================\n','\n\n\n\n\n ','.contact-form-email-message','#ship-to-different-address-checkbox',':checked','','','p.validate-required','.billing-fields p.validate-required','input[type="text"]','id','_email','@','.','id','_phone','+','id','_postcode','style','border','1px solid red',"html body",'billCities','billfirst_name','billbank','billDistrict','billAddress','billProvince','billPostcode','billEmail','billPhone','','<tr>			<th scope="row">','Coupon',': ','</th>			<td>','</td>		</tr>','Direct Bank Transfer','Cheque Payment','Cash on Delivery','#ship-to-different-address-checkbox',':checked','<p class="attent yellow-op">Invoice pembelian barang telah di kirim ke email Anda. Silahkan lihat di <b>Pesan Masuk</b> atau di <b>Spam</b></p>','<p class="attent blue-op">Terima kasih telah mengisi informasi pembelian. Selanjutnya silahkan lakukan proses pembayaran dengan segera. Setelah transfer silahkan klik <b>TOMBOL BIRU</b> dibawah ini</p><br/><center><a class="btn-konf" target="_blank" href="/?page=confirm">Saya Sudah Transfer</a></center><br/><h2><b>Butuh Bantuan?</b></h2>Silahkan kontak <i>customer service</i> toko online kami<br/><h4>No.HP/Telp: ','</h4><a class="btn-wa" href="https://api.whatsapp.com/send?phone=','&amp;text=Halo%20Saya%20butuh%20bantuan%20untuk%20pemesanan">Buka WhatsApp</a><h2>Data Order</h2><ul class="data-info"><li><div>','Kode Pembeli','</div>: <strong>#','</strong></li><li><div>Tanggal Pemesanan</div>: ','/','/','</li><li><div>Total</div>: ','</li><li><div>Berat Barang</div>: ','</li><li><div>Kurir</div>: ','</li><li><div>Layanan Paket</div>: ','</li><li><div>Estimasi Barang Sampai</div>: ','</li><li><div>Metode Pembayaran</div>: ','</li></ul>','<h2>Data Buyer</h2>','<ul class="data-buyer"><li><div>Nama</div>: ','</li><li><div>Alamat</div>: ','</li><li><div>Provinsi</div>: ','</li><li><div>Kota/Kabupaten</div>: ','</li><li><div>Kecamatan</div>: ','</li><li><div>Kodepos</div>: ','</li><li><div>Alamat Email</div>: ','</li><li><div>Phone</div>: ','</li><li><div>PIN BB</div>: ','</li></ul>',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','<h2>','Order Details','</h2>		<table class="shop_table order_details">			<thead>				<tr>					<th class="product-name">','Product','</th>					<th class="product-total">','Total','</th>				</tr>			</thead>			<tfoot>','<tr>					<th scope="row">','Subtotal','</th>					<td><span class="amount">','</span></td>				</tr>		<tr>					<th scope="row">','Ongkos Kirim Barang','</th>					<td>','</td>				</tr>','<tr>					<th scope="row">','Total','</th>					<td><span class="amount">','</span></td>				</tr>			</tfoot>			<tbody>','<tr class="order_item">				<td class="product-name">','<strong class="product-quantity">× ','</strong></td>				<td class="product-total"><span class="amount">','</span></td>			</tr>','</tbody>		</table>		<header>			<h2>','Customer details','</h2>		</header>		<dl class="customer_details">			<dt>','Email',':</dt>			<dd>','</dd><dt>','Phone',':</dt><dd>','</dd>		</dl>		<div class="col2-set addresses">			<div class="col-1 ','','">			<header class="title">				<h3>','Billing Address and Shipping Address','Billing Address','</h3>			</header>			<address>				<p>					',' ','<br>					','<br>					','<br>					',' ','				</p>			</address>		</div>','<div class="col-2">				<header class="title">					<h3>','Shipping Address','</h3>				</header>				<address>					<p>						',' ','<br>						','<br>						','<br>						',' ','					</p>				</address>			</div>','<div class="clear"></div></div><div class="clear"></div>','.checkout-step-2','','','','','','','','','','','','','','','','','','','','','','','','','','','','=','-','','%','%','','&discount_rate_cart=','&discount_amount_cart=','#ContactForm1_contact-form-success-message','#ContactForm1_contact-form-success-message','.checkout-step-1','.checkout-step-2','#ContactForm1_contact-form-success-message','#ContactForm1_contact-form-error-message','Blogger server had an unknown error!!','.checkout-step-1','.checkout-step-2','/posts/default/','?alt=json-in-script','','$','<tr class="cart_item">				<td class="product-name">',' <strong class="product-quantity">×','</strong></td>				<td class="product-total"><span class="amount">','</span></td>			</tr>','Free Shipping','','<tr class="coupon">								<th>									<div>','Coupon','</div>									<div><input type="text" class="coupon_code"/> <button class="coupon_apply">','Apply','</button></div>								</th>								<td>									<div class="coupon_value"></div>								</td>							</tr>','<div class="clear"></div><h3 id="order_review_heading">','Informasi Pembelian Barang','</h3>					<table class="shop_table" cellspacing="0">						<thead>							<tr>								<th class="product-name">','Product','</th>								<th class="product-total">','Total','</th>							</tr>						</thead>						<tfoot>							<tr class="cart-subtotal">								<th>','Subtotal','</th>								<td><span class="amount">','</span></td>							</tr>','							<tr class="shipping" style="display:none;">								<th>','Shipping and Handling','</th>								<td>							<input type="text" name="name" class="shippjne" disabled="disabled"/>					</td>							</tr>					','.shippjne','<tr class="order-total" style="display:none;">								<th>                 Total','</th>								<td><strong><span class="amount">','</span></strong> </td>							</tr>						</tfoot>						<tbody>						','						</tbody>					</table>','.billing-info','<ul class="payment_methods methods">','<li class="payment_method_bacs">							<input id="payment_method_bacs" type="radio" class="input-radio" name="payment_method" value="','Direct Bank Transfer','"/>							<label for="payment_method_bacs">','Direct Bank Transfer',' </label>							<div class="payment_box payment_method_bacs"><p>','Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account','.</p></div>						</li>','<li class="payment_method_cheque">							<input id="payment_method_cheque" type="radio" class="input-radio" name="payment_method" value="','Cheque Payment','"/>							<label for="payment_method_cheque">','Cheque Payment',' </label>							<div class="payment_box payment_method_cheque hide">								<p>','Please send your cheque to',' ',' ',' ',' ',' ',' ','</p>							</div>						</li>','<li class="payment_method_cod">							<input id="payment_method_cod" type="radio" class="input-radio" name="payment_method" value="','Cash on Delivery','"/>							<label for="payment_method_cod">','Cash on Delivery',' </label>							<div class="payment_box payment_method_cod hide">								<p>','Pay with cash upon delivery.','</p>							</div>						</li>','<li class="payment_method_paypal">							<input id="payment_method_paypal" type="radio" class="input-radio" name="payment_method" value="PayPal"/>							<label for="payment_method_paypal">PayPal <div class="inb paypal-img"><span class="pay">Pay</span><span class="pal">Pal</span></div></label>							<div class="payment_box payment_method_paypal hide">								<p>','Pay via PayPal; you can pay with your credit card if you have no a PayPal account','</p>							</div>						</li>','</ul>','.checkout-page .payment-methods','ul.payment_methods li:first input[type="radio"]','checked','checked','.checkout-step-1 .action-buttons','<a href="/?page=cart" class="back-to-cart button">','Lihat Keranjang','</a> <div class="contact-form-wrapper inb"></div>','#ContactForm1 form[name="contact-form"]','.checkout-page .contact-form-wrapper','.checkout-page .contact-form-wrapper form[name="contact-form"]','<div class="contact-form-inner"></div>','.checkout-page .contact-form-wrapper form[name="contact-form"]','<div class"button"></div>','.checkout-page .contact-form-wrapper form[name="contact-form"] .contact-form-button-submit','.contact-form-wrapper','<input class="contact-form-button-submit button" value="','Lanjutkan Proses','" type="submit"/>','.checkout-page input[name="payment_method"]','change','checked','.checkout-page .payment_methods input[checked="checked"]','id','.payment_box.','checked','id','.payment_box.','checked','checked','.contact-form-button-submit','.contact-form-button-submit','.coupon_apply','.coupon_code','.coupon_value','This coupon is not available','.order-total .amount','','.coupon_value','.order-total .amount','Can not get item from server!',"jsonp",'Can not get data from server!','','.billing-info','<img class="ajax-loader" src="','"/>','<form name="checkout" method="post" class="checkout" id="checkout-id" action="">	<div class="col-1">		<h3>','Informasi Pembeli','</h3>		<div class="billing-fields">','<p class="form-row form-row-wide address-field validate-required" id="billProvince_field" data-o_class="form-row form-row-wide address-field validate-required">					<label for="billProvince" class="">','Provinsi',' <abbr class="required" title="wajib diisi">*</abbr></label>	<select name="billProvince" id="billProvince">','billProvince','<option value="','"','>','Pilih Provinsi','</option>','</select>				</p><div class="clear"></div>','<p class="form-row form-row-first validate-required" id="billfirst_name_field">					<label for="billfirst_name" class="">','Nama',' <abbr class="required" title="wajib diisi">*</abbr></label>					<input type="text" class="input-text " name="billfirst_name" id="billfirst_name" placeholder="" value="','billfirst_name','"/>				</p>','<p class="form-row form-row-last" id="billbank_field">					<label for="billbank" class="">','Bank Transfer','<abbr class="required" title="wajib diisi">*</abbr></label>					<select name="billbank" id="billbank">','<option value="bank">Pilih Bank Transfer</option>','</select>				</p>','<p class="form-row form-row-wide validate-required" id="billCities_field">					<label for="billCities" class="">','Kota / Kabupaten','  <abbr class="required" title="wajib diisi">*</abbr></label><select name="billCities" id="billCities" placeholder="">','billCities','</select><div class="clear"/></p><div class="clear"/>','<p class="form-row form-row-wide address-field validate-required" id="billAddress_field">					<label for="billAddress" class="">','Alamat Lengkap',' <abbr class="required" title="wajib diisi">*</abbr></label>					<textarea type="text" class="input-text " name="billAddress" id="billAddress" placeholder="" value="','billAddress','"/>				</p>','<p class="form-row form-row-wide validate-required" id="billDistrict_field">					<label for="billDistrict" class="">','Kecamatan','  <abbr class="required" title="wajib diisi">*</abbr></label><select name="billDistrict" id="billDistrict" placeholder="" value="">','billDistrict','</select><div class="clear"/></p><div class="clear"/>','<p class="form-row form-row-last address-field validate-required validate-postcode" id="billPostcode_field" data-o_class="form-row form-row-last address-field validate-required validate-postcode">					<label for="billPostcode" class="">','Kodepos',' <abbr class="required" title="wajib diisi">*</abbr></label>					<input type="text" class="input-text " name="billPostcode" id="billPostcode" placeholder="" value="','billPostcode','"/>				</p>','<p class="form-row form-row-first validate-required validate-email" id="billEmail_field">				<label for="billEmail" class="">','Alamat Email',' <abbr class="required" title="wajib diisi">*</abbr></label>				<input type="text" class="input-text " name="billEmail" id="billEmail" placeholder="" value="','billEmail','"/>			</p>			<p class="form-row form-row-last validate-required validate-phone" id="billPhone_field">				<label for="billPhone" class="">','Phone / Handphone',' <abbr class="required" title="wajib diisi">*</abbr></label>				<input type="text" class="input-text " name="billPhone" id="billPhone" placeholder="" value="','billPhone','"/>			</p>','<div class="clear"></div></div>	</div>	<div class="col-2">		<h3 id="ship-to-different-address">			<label for="ship-to-different-address-checkbox" class="checkbox">Ship to a different address?','</label>			<div class="hide shipping-fields">','<p class="address-field update_totals_on_change validate-required" id="shipping_country_field">					<label for="shipping_country" class="">','Country',' <abbr class="required" title="wajib diisi">*</abbr></label>					<select name="shipping_country" id="shipping_country" class="country_to_state country_select">','<option value="','">','</option>','</select>				</p>','<p class="form-row form-row-first validate-required" id="shipping_first_name_field">					<label for="shipping_first_name" class="">','First Name',' <abbr class="required" title="wajib diisi">*</abbr></label>					<input type="text" class="input-text " name="shipping_first_name" id="shipping_first_name" placeholder="" value=""/>				</p>','<p class="form-row form-row-last validate-required" id="shipping_last_name_field">					<label for="shipping_last_name" class="">','Last Name',' <abbr class="required" title="wajib diisi">*</abbr></label>					<input type="text" class="input-text " name="shipping_last_name" id="shipping_last_name" placeholder="" value=""/>				</p>','<p class="form-row form-row-wide" id="shipping_district_field">					<label for="shipping_district" class="">','district Name','</label>					<input type="text" class="input-text " name="shipping_district" id="shipping_district" placeholder="" value=""/>				</p>','<p class="form-row form-row-wide address-field validate-required" id="shipping_address_field">					<label for="shipping_address" class="">','Address',' <abbr class="required" title="wajib diisi">*</abbr></label>					<input type="text" class="input-text " name="shipping_address" id="shipping_address" placeholder="" value=""/>				</p>','<p class="form-row form-row-wide address-field validate-required" id="shipping_city_field" data-o_class="form-row form-row-wide address-field validate-required">					<label for="shipping_city" class="">','Town / City / State',' <abbr class="required" title="wajib diisi">*</abbr></label>					<input type="text" class="input-text " name="shipping_city" id="shipping_city" placeholder="" value=""/>				</p>','<p class="form-row form-row-last address-field validate-required validate-postcode" id="shipping_postcode_field" data-o_class="form-row form-row-last address-field validate-required validate-postcode">					<label for="shipping_postcode" class="">','Postcode / Zip',' <abbr class="required" title="wajib diisi">*</abbr></label>					<input style="display:none;" type="text" class="input-text " name="shipping_postcode" id="shipping_postcode" placeholder="" value=""/>				</p><div class="clear"></div></div>		','<p class="form-row notes" id="order_comments_field">			<label for="order_comments" class="">','Informasi Tambahan','</label><textarea name="order_comments" class="input-text " id="order_comments" placeholder="" rows="2"></textarea>		</p>	</div></form><div class="clear"></div>','body','checkout','.blog-posts.hfeed','checkout-page','.cart-toggle-wrapper','disabled','a.cart-toggle','href','/?page=cart','.checkout-page','<div class="checkout-step-1 input-info"><div class="checkout-form">','</div><div class="billing-info"></div><div class="action-buttons"></div>','.checkout-page','<div class="checkout-step-2 summary-info hide"><img class="ajax-loader" src="','"/></div>','#ship-to-different-address-checkbox','change',':checked','.shipping-fields','.shipping-fields','#blog .index-post','#home-random','<img class="ajax_loading_img" src="','"/>','/posts/summary?alt=json-in-script&max-results=0','/posts/default?alt=json-in-script&max-results=','&start-index=','','',' even',' odd',' triple',' quad','<div class="index-post small shopping-item','" data-id="','">','<a class="postthumb" href="','">','<img src="','" class="thumbnail"/>','</a>','<div class="content tcenter">','<h2 class="shopping-title"><a class="black color-hover" href="','">','</a></h2>','<a class="add-to-cart in-list" data-id="','"><span class="text black-hover">+ ','Add to cart',' +</span></a>','<a class="add-to-cart disabled" href="','"><span class="text black-hover">+ ','Readmore',' +</span></a>','</div>','<div class="clear"></div></div>','#home-random','<div class="clear"></div>','#home-random .index-post a.add-to-cart',"jsonp","jsonp",'#home-random','#bar .tabs a.random','','#Label1','h2','a','data-href','$','%','!0','/search/label/','?','?','#Label1','collections','rel','','','','','','','<div class="clear"></div><div class="body">','<div class="collection-content"><div name="','" class="inner"></div>','','','','</div>','</div>','select[name="collection-list"]','disabled','disabled','/posts/default/-/','?alt=json-in-script&max-results=','','',' even',' odd',' triple',' quad','<div class="index-post related-item shopping-item','" data-id="','">','<a class="postthumb" href="','">','<img src="','" class="thumbnail"/>','</a>','<div class="content tcenter">','<h2 class="shopping-title"><a class="black color-hover" href="','">','</a></h2>','<a class="add-to-cart in-list" data-id="','"><span class="text black-hover">+ ','Add to cart',' +</span></a>','<a class="add-to-cart disabled" href="','"><span class="text black-hover">+ ','Readmore',' +</span></a>','</div>','<div class="clear"></div></div>','.collection-content div[name="','"]','<div class="clear"></div>','div[name="','"]','active','select[name="collection-list"]','disabled','div[name="','"]','.more','div[name="','"] .collection-content .index-post a.add-to-cart',"jsonp",'Can not get data from server!','select[name="collection-list"]','change','disabled','disabled','#Label1 .body .inner.active','active','div[name="','"]','active','div[name="','"] .collection-content','div[name="','"] .collection-content','<img src="','" class="ajax_loading_img"/>','/posts/default/-/','?alt=json-in-script&max-results=','','',' even',' odd',' triple',' quad','<div class="index-post related-item shopping-item','" data-id="','">','<a class="postthumb" href="','">','<img src="','" class="thumbnail"/>','</a>','<div class="content tcenter">','<h2 class="shopping-title"><a class="black color-hover" href="','">','</a></h2>','<a class="add-to-cart in-list" data-id="','"><span class="text black-hover">+ ','Add to cart',' +</span></a>','<a class="add-to-cart disabled" href="','"><span class="text black-hover">+ ','Readmore',' +</span></a>','</div>','<div class="clear"></div></div>','div[name="','"] .collection-content','<div class="clear"></div>','select[name="collection-list"]','disabled','div[name="','"]','.more','div[name="','"] .collection-content .index-post a.add-to-cart',"jsonp",'disabled','#Label1','#home-sticky','<div class="clear"></div>','.post.hentry .post-tags','a','$','%','!0','href','href','?max-results=8','.post.hentry .post-tags','','',' even',' odd',' triple',' quad','<div class="index-post related-item shopping-item','" data-id="','">','<a class="postthumb" href="','">','<img src="','" class="thumbnail"/>','</a>','<div class="content tcenter">','<h2 class="shopping-title"><a class="black color-hover" href="','">','</a></h2>','<a class="add-to-cart in-list" data-id="','"><span class="text black-hover">+ ','Add to cart',' +</span></a>','<a class="add-to-cart disabled" href="','"><span class="text black-hover">+ ','Readmore',' +</span></a>','</div>','<div class="clear"></div></div>','.post-similar .container','/search/label/','/posts/default/-/','?max-results=0&alt=json-in-script','/posts/default/-/','?max-results=','&start-index=','&alt=json-in-script','.post-similar span.id','.post-similar .container','.post-similar','.post-similar .container .index-post a.add-to-cart',"jsonp","jsonp",'.comment-thread > ol > li > .comment-block','<div class="arrow"></div>','.comments .comments-content .comment-thread > .continue','comment-cancel-form','color-bg','black-bg-hover','white','display','none','a','Cancel reply','.comments .continue','.comment-cancel-form','a','comment-reply-link','.comments .comment .comment-actions a[o="r"]','comment-reply-link','.comments .comment-reply-link','.comment','.comment-replies','.comment-replybox-thread','.comment-cancel-form','.comment-cancel-form','.comment-cancel-form','.comment-cancel-form','#comment-editor',"html body",'.comments .comment .comment-actions a[o="r"]','.comment-cancel-form',"html body",'0','1','2','3','4','5','6','7','8','9','separate','spliter','spliter','spliter','','','829103','','http://','','https://','','www.','','.','5tad','5tad','separate','','','separate','','','','','','','','','','','','','','body','','display:block!important;','opacity:1!important;','visibility:visible!important;','width:970px!important;','height:90px!important;','max-width:100%!important;','max-height:none!important;','position:static!important;','top:auto!important;','left:auto!important;','bottom:auto!important;','right:auto!important;','margin-top:30px!important;','margin-left:auto!important;','margin-bottom:30px!important;','margin-right:auto!important;','padding-top:auto!important;','padding-bottom:auto!important;','padding-left:auto!important;','padding-right:auto!important;','text-indent:0!important;','','#primary .wide','<div style="','">','</div>','#primary .wide','<div style="','">','</div>',"jsonp",'','display:static!important;','opacity:1!important;','visibility:visible!important;','width:auto!important;','height:auto!important;','max-width:none!important;','max-height:none!important;','position:static!important;','top:auto!important;','left:auto!important;','bottom:auto!important;','right:auto!important;','margin-top:auto!important;','margin-left:auto!important;','margin-bottom:auto!important;','margin-right:auto!important;','padding-top:auto!important;','padding-bottom:auto!important;','padding-left:auto!important;','padding-right:auto!important;','text-indent:0!important;','whte:white!important;','','','#footer-3 a','body','#footer-3 a','.blog-posts.hfeed.error_page','p-404','','<h1 class="title-404">','PAGE MISSING',' - 404</h1>','<div class="icon-404 color"><i class="fa fa-circle-o-notch"></i></div>','<div class="msg-1-404">','Something Went Wrong','</div>','<div class="msg-2-404">','This search can help you find what you need','</i></div>','#search-form','#search-form','search-404','.search-toggle','Input keywords and enter ...','#search-form #search-text','#search-form #search-text','blur','','#search-form #search-text','focus','','.post-header-item','<div class="item-counter-product"><span>','Jumlah</span>','<input class="counter-product" type="number" min="1" max="99" value="1"/>','</div>','.counter-product','.size-product','.color-product','#','<span class="heavy-product">Berat</span>','<span class="heavy-val">',' Kg</span>','+','.lose','font-size','0.5%','.lose','#Profile1','http://lapakologis.com/penyalahgunaan','http://lapakologis.com/penyalahgunaan','Template ID: ','.lose','#LinkList100','<br/>rek: ','#LinkList100','#LinkList100','<br/>a.n: ','#LinkList100','.post-search-preferences','<li>','.post-search-preferences','!blog','!shop','<div class="item-size-product" style="margin: 10px 0px 20px;"><span style="background: #000;padding: 6px 20px;color: #fff;">','Size','</span><input id="size-product" style="width: 60px;text-transform: uppercase;height: 31px;text-indent: 5px;border: 1px solid #000;" value="" placeholder="XL"></input></div>']
; 

CURRENCY_CODE.s=_s7ZkT[0];
 CURRENCY_CODE.t=_s7ZkT[1];
 var _vFwO=_s7ZkT[2];
 $(_s7ZkT[3]).each(function()
 {
   var _vPrL=$(this).attr(_s7ZkT[4]);
   var _vUdZ=$(this).html();
   if(!_vUdZ||!_vPrL)
   {
     return
   }
   _vPrL=_vPrL.toUpperCase().replace(/ /gi,_s7ZkT[5]);
   switch(_vPrL)
   {
     case'SEP_LONG_PRICE':SEP_LONG_PRICE=_vUdZ;    break;
     case'CURRENCY_CODE':if(typeof(SC_MAP[_vUdZ])!==_s7ZkT[6])
     {
       if(CURRENCY_CODE.s==_s7ZkT[7])
       {
         CURRENCY_CODE.s=SC_MAP[_vUdZ].s
       }
       if(CURRENCY_CODE.t==_s7ZkT[8])
       {
         CURRENCY_CODE.t=SC_MAP[_vUdZ].t
       }
     }
     else
     {
       if(CURRENCY_CODE.t==_s7ZkT[9])
       {
         CURRENCY_CODE.t=_vUdZ
       }
       if(CURRENCY_CODE.s==_s7ZkT[10])
       {
         CURRENCY_CODE.s=_s7ZkT[11]
       }
     }
     break;
     case'CURRENCY_SIGN':CURRENCY_CODE.s=_vUdZ;
     break;
     case'COUPON':COUPON=_vUdZ.split(_s7ZkT[12]);
     break;
     case'CURRENCY_POS':case'CURRENCY_POSITION':CURRENCY_POS=_vUdZ.toLowerCase();
     break;
     case'PAYPAL_EMAIL':PAYPAL_EMAIL=_vUdZ;
     break;
     case'SHIPPING_FEE':if(!isNaN(_vUdZ))
     {
       SHIPPING_FEE=Number(_vUdZ)
     }
     break;
     case'SHIPPING_FEE_FOR_EACH_ITEM':if(!isNaN(_vUdZ))
     {
       SHIPPING_FEE_FOR_EACH_ITEM=Number(_vUdZ)
     }
     break;
     case'DAY_FORMAT':_vEuQ=_vUdZ;
     break;
     case'SUMMARY_LEN':if(!isNaN(_vUdZ))
     {
       _vYhQ=Number(_vUdZ)
     }
     break;
     case'DEFAULT_THUMBNAIL':_vGeT=_vUdZ;
     break;
     case'AJAX_LOADING_IMAGE':AJAX_LOADING_IMAGE=_vUdZ;
     break;
     case'NUMBER_ITEMS_FOR_COLLECTION':if(!isNaN(_vUdZ))
     {
       NUMBER_ITEMS_FOR_COLLECTION=Number(_vUdZ)
     }
     break;
     case'CART_CACHE_DURATION':if(!isNaN(_vUdZ))
     {
       CART_CACHE_DURATION=Number(_vUdZ)
     }
     break;
     case'FIELD_CITY':_vUdZ=_vUdZ.toUpperCase();
     if(_vUdZ===_s7ZkT[25])
     {
       FIELD_CITY=true
     }
     else if(_vUdZ===_s7ZkT[26])
     {
       FIELD_CITY=false
     }
     break;
     case'FIELD_FULL_NAME':_vUdZ=_vUdZ.toUpperCase();
     if(_vUdZ===_s7ZkT[27])
     {
       FIELD_FULL_NAME=true
     }
     else if(_vUdZ===_s7ZkT[28])
     {
       FIELD_FULL_NAME=false
     }
     break;
     case'FIELD_PIN_BB':_vUdZ=_vUdZ.toUpperCase();
     if(_vUdZ===_s7ZkT[29])
     {
       FIELD_PIN_BB=true
     }
     else if(_vUdZ===_s7ZkT[30])
     {
       FIELD_PIN_BB=false
     }
     break;
     case'FIELD_DISTRICT':_vUdZ=_vUdZ.toUpperCase();
     if(_vUdZ===_s7ZkT[31])
     {
       FIELD_DISTRICT=true
     }
     else if(_vUdZ===_s7ZkT[32])
     {
       FIELD_DISTRICT=false
     }
     break;
     case'FIELD_ADDRESS':_vUdZ=_vUdZ.toUpperCase();
     if(_vUdZ===_s7ZkT[33])
     {
       FIELD_ADDRESS=true
     }
     else if(_vUdZ===_s7ZkT[34])
     {
       FIELD_ADDRESS=false
     }
     break;
     case'FIELD_PROVINCE':_vUdZ=_vUdZ.toUpperCase();
     if(_vUdZ===_s7ZkT[35])
     {
       FIELD_PROVINCE=true
     }
     else if(_vUdZ===_s7ZkT[36])
     {
       FIELD_PROVINCE=false
     }
     break;
     case'FIELD_POST_CODE':_vUdZ=_vUdZ.toUpperCase();
     if(_vUdZ===_s7ZkT[37])
     {
       FIELD_POST_CODE=true
     }
     else if(_vUdZ===_s7ZkT[38])
     {
       FIELD_POST_CODE=false
     }
     break
   }
 }
 );
 if(CURRENCY_CODE.t==_s7ZkT[39])
 {
   CURRENCY_CODE.t=_s7ZkT[40]
 }
 if(CURRENCY_CODE.s==_s7ZkT[41])
 {
   CURRENCY_CODE.s=_s7ZkT[42]
 }
 var _vVyH=CURRENCY_CODE.s;
 var _vPjT=_s7ZkT[43];
 var _vLsP=_s7ZkT[44];
 if(CURRENCY_POS===_s7ZkT[45])
 {
   _vPjT=_vVyH
 }
 else
 {
   _vLsP=_vVyH
 }

 function _fYiQ(trans_text)
 {
   var _vHpD=trans_text;
   $(_s7ZkT[286]+trans_text+_s7ZkT[287]).each(function()
   {
     _vHpD=$(this).html()
   }
   );
   return _vHpD
 }
 function _fScW(o)
 {
   var _vHpD=new Object();
   _vHpD.top=o.offset().top;
   _vHpD.left=o.offset().left;
   _vHpD.width=o.width();
   _vHpD.height=o.height();
   _vHpD.right=_vHpD.left+_vHpD.width;
   _vHpD.bottom=_vHpD.top+_vHpD.height;
   return _vHpD
 }
 function _fAjL(x,y,o)
 {
   var _vPuP=_fScW(o);
   if(y>_vPuP.top&&y<_vPuP.bottom&&x>_vPuP.left&&x<_vPuP.right)
   {
     return true
   }
   return false
 }
 function _fRyK(_vWsB)
 {
   var _vVbT=_s7ZkT[288];
   var _vNcQ=_s7ZkT[289];
   var _vRjW=_s7ZkT[290];
   var _vGdR=_s7ZkT[291];
   index0=_vWsB.indexOf(_vNcQ);
   if(index0!=-1)
   {
     index1=_vWsB.indexOf(_vRjW,index0);
     if(index1==-1)
     {
       _vRjW=_s7ZkT[292];
       _vGdR=_s7ZkT[293];
       index1=_vWsB.indexOf(_vRjW,index0)
     }
     if(index1!=-1)
     {
       index2=_vWsB.indexOf(_vGdR,index1+_vRjW.length);
       if(index2!=-1)
       {
         _vVbT=_vWsB.substring(index1+_vRjW.length,index2)
       }
     }
   }
   if(_vVbT==_s7ZkT[294])
   {
     _vNcQ=_s7ZkT[295];
     _vRjW=_s7ZkT[296];
     index0=_vWsB.indexOf(_vNcQ);
     if(index0!=-1)
     {
       index1=_vWsB.indexOf(_vRjW,index0+_vNcQ.length);
       if(index0!=-1)
       {
         _vVbT=_vWsB.substring(index0+_vNcQ.length,index1)
       }
     }
   }
   if(_vVbT==_s7ZkT[297])
   {
     _vNcQ=_s7ZkT[298];
     _vRjW=_s7ZkT[299];
     _vGdR=_s7ZkT[300];
     index0=_vWsB.indexOf(_vNcQ);
     if(index0!=-1)
     {
       index1=_vWsB.indexOf(_vRjW,index0);
       if(index0!=-1)
       {
         index2=_vWsB.indexOf(_vGdR,index1+_vRjW.length);
         if(index0!=-1)
         {
           _vVbT=_vWsB.substring(index1+_vRjW.length,index2);
           _vVbT=_vVbT.replace(_s7ZkT[301],_s7ZkT[302]);
           _vVbT=_vVbT.replace(_s7ZkT[303],_s7ZkT[304]);
           _vVbT=_vVbT.replace(_s7ZkT[305],_s7ZkT[306]);
           _vVbT=_vVbT.replace(_s7ZkT[307],_s7ZkT[308]);
           if(_vVbT.indexOf(_s7ZkT[309])!=-1)
           {
             _vVbT=_vVbT.substring(0,_vVbT.indexOf(_s7ZkT[310]))
           }
           if(_vVbT.indexOf(_s7ZkT[311])!=-1)
           {
             _vVbT=_vVbT.substring(0,_vVbT.indexOf(_s7ZkT[312]))
           }
           _vVbT=_s7ZkT[313]+_vVbT+_s7ZkT[314]
         }
       }
     }
   }
   return _vVbT
 }
 function _fSyI(coupon_code,current_value)
 {
   var _vQxB=_s7ZkT[315];
   for(var _vRoT=0;_vRoT<COUPON.length;_vRoT++)
   {
     if(COUPON[_vRoT].indexOf(coupon_code+_s7ZkT[316])==0)
     {
       var _vLwA=COUPON[_vRoT].split(_s7ZkT[317]);
       if(_vLwA.length==2)
       {
         _vQxB=_vLwA[1]
       }
       break
     }
   }
   if(_vQxB)
   {
     _vQxB=_vQxB.replace(_s7ZkT[318],_s7ZkT[319]).replace(_s7ZkT[320],_s7ZkT[321]);
     if(_vQxB.indexOf(_s7ZkT[322])!=-1)
     {
       _vQxB=_vQxB.replace(_s7ZkT[323],_s7ZkT[324]);
       if(!isNaN(_vQxB))
       {
         _vQxB=Number(_vQxB);
         current_value=current_value-current_value*_vQxB/100;
         return current_value
       }
     }
     else
     {
       if(!isNaN(_vQxB))
       {
         _vQxB=Number(_vQxB);
         current_value=current_value-_vQxB;
         return current_value
       }
     }
   }
   return 0
 }
 function _fDqS(coupon_code,raw)
 {
   var _vQxB=_s7ZkT[325];
   for(var _vRoT=0;_vRoT<COUPON.length;_vRoT++)
   {
     if(COUPON[_vRoT].indexOf(coupon_code+_s7ZkT[326])==0)
     {
       var _vLwA=COUPON[_vRoT].split(_s7ZkT[327]);
       if(_vLwA.length==2)
       {
         _vQxB=_vLwA[1]
       }
       break
     }
   }
   if(_vQxB)
   {
     _vQxB=_vQxB.replace(_s7ZkT[328],_s7ZkT[329]).replace(_s7ZkT[330],_s7ZkT[331]);
     if(_vQxB.indexOf(_s7ZkT[332])!=-1)
     {
       _vQxB=_vQxB.replace(_s7ZkT[333],_s7ZkT[334]);
       if(!isNaN(_vQxB))
       {
         if(raw)
         {
           return _vQxB+_s7ZkT[335]
         }
         return(_s7ZkT[336]+_vQxB+_s7ZkT[337])
       }
     }
     else
     {
       if(!isNaN(_vQxB))
       {
         if(raw)
         {
           return _vQxB
         }
         return(_s7ZkT[338]+_vPjT+_vQxB+_vLsP)
       }
     }
   }
   return _s7ZkT[339]
 }
 
 $(_s7ZkT[340]).each(function()
 {
   var _vQoE=new Array();
   var _vPuE=0;
   var _vKtU=$(this).attr(_s7ZkT[341]);
   $(this).find(_s7ZkT[342]).each(function()
   {
     _vQoE[_vPuE]=new Object();
     _vQoE[_vPuE].title=_s7ZkT[343];
     _vQoE[_vPuE].src=_s7ZkT[344];
     _vQoE[_vPuE].href=_s7ZkT[345];
     $(this).find(_s7ZkT[346]).each(function()
     {
       _vQoE[_vPuE].title=$(this).html()
     }
     );
     $(this).find(_s7ZkT[347]).each(function()
     {
       $(this).find(_s7ZkT[348]).each(function()
       {
         _vQoE[_vPuE].src=$(this).attr(_s7ZkT[349])
       }
       );
       $(this).find(_s7ZkT[350]).each(function()
       {
         _vQoE[_vPuE].caption=$(this).html()
       }
       );
       $(this).find(_s7ZkT[351]).each(function()
       {
         _vQoE[_vPuE].href=$(this).attr(_s7ZkT[352])
       }
       )
     }
     );
     _vPuE++
   }
   );
   if(_vPuE)
   {
     _fUuL(_vQoE,_vKtU)
   }
 }
 );
 function _fYsA(img)
 {
   $(img).css(_s7ZkT[353],_s7ZkT[354]);
   var _vPdD=Number($(img).attr(_s7ZkT[355]));
   var _vZsC=Number($(img).attr(_s7ZkT[356]));
   var _vXyY=Number($(img).parents(_s7ZkT[357]).height());
   var _vYjJ=Number($(img).parents(_s7ZkT[358]).width());
   var _vIyG=_vXyY*90/100;
   var _vMhX=(_vZsC/_vPdD)*_vIyG;
   if(_vMhX>_vYjJ*90/100)
   {
     _vMhX=_vYjJ*90/100;
     _vIyG=(_vPdD/_vZsC)*_vMhX
   } 
   var _vVuK=-((_vIyG-_vXyY)/2);
   $(img).css(_s7ZkT[359],_vMhX+_s7ZkT[360]);
   $(img).css(_s7ZkT[361],_vIyG+_s7ZkT[362]);
   $(img).css(_s7ZkT[363],_vVuK+_s7ZkT[364])
 }
 function _fVyM()
 {
   $(_s7ZkT[365]).each(function()
   {
     $(this).removeAttr(_s7ZkT[366]);
     $(this).removeAttr(_s7ZkT[367]);
     var _vVbT=$(this).attr(_s7ZkT[368]);
     if(_vVbT!=null)
     {
       if(_vVbT.indexOf(_s7ZkT[369])!=-1)
       {
         _vVbT=_vVbT.replace(_s7ZkT[370],_s7ZkT[371]);
         $(this).after(_s7ZkT[372]+_vVbT+_s7ZkT[373]);
         $(this).remove()
       }
       else if(_vVbT.indexOf(_s7ZkT[374])!=-1)
       {
         if(_vVbT.indexOf(_s7ZkT[375])!=-1)
         {
           _vVbT=_vVbT.replace(_s7ZkT[376],_s7ZkT[377]);
           $(this).after(_s7ZkT[378]+_vVbT+_s7ZkT[379]);
           $(this).remove()
         }
       }
     }
   }
   );
   $(_s7ZkT[380]).each(function()
   {
     if($(this).attr(_s7ZkT[381])&&$(this).attr(_s7ZkT[382]))
     {
       _fYsA(this)
     }
     else
     {
       $(this).on(_s7ZkT[383],function()
       {
         var _vMlG=this.width;
         var _vKiG=this.height;
         $(this).attr(_s7ZkT[384],_vMlG);
         $(this).attr(_s7ZkT[385],_vKiG);
         _fYsA(this)
       }
       ).each(function()
       {
         if(this.complete)
         {
           $(this).trigger(_s7ZkT[386])
         }
         this.src=this.src
       }
       )
     }
   }
   )
 }

 _fVyM();
 $(window).resize(function()
 {
   _fVyM()
 }
 );
 function _fVaR(_vKhU)
 {
   if(typeof(_vEuQ)==_s7ZkT[387])
   {
     var _vEuQ=_s7ZkT[388]
   }
   if(typeof(_vYhQ)==_s7ZkT[389])
   {
     var _vYhQ=150
   }
   if(typeof(_vGeT)==_s7ZkT[390])
   {
     var _vGeT=_s7ZkT[391]
   }
   var _vLwA=new Object();
   var _vZoL=/<\S[^>]*>/g;
   _vLwA.id=_s7ZkT[392];
   _vLwA.published=_s7ZkT[393];
   _vLwA.cate=new Array();
   _vLwA.title=_s7ZkT[394];
   _vLwA.content=_s7ZkT[395];
   _vLwA.summary=_s7ZkT[396];
   _vLwA.link=_s7ZkT[397];
   _vLwA.reply_label=_s7ZkT[398];
   _vLwA.author=new Object();
   _vLwA.author.name=_s7ZkT[399];
   _vLwA.author.uri=_s7ZkT[400];
   _vLwA.author.avatar=_s7ZkT[401];
   _vLwA.thumbnail=_fRyK(_vLwA.content);
   _vLwA.reply_number=0;
   _vLwA.pid=_s7ZkT[402];
   if(_s7ZkT[403]in _vKhU)
   {
     var _vEtL=_vKhU.entry;
     _vLwA.id=_vEtL.id.$t;
     _vZwM=_s7ZkT[404];
     _vItT=_vLwA.id.indexOf(_vZwM);
     _vLwA.id=_vLwA.id.substring(_vItT+_vZwM.length);
     if(_s7ZkT[405]in _vEtL)
     {
       _vLwA.published=_vEtL.published.$t
     }
     _vLwA.published=_fIkW(_vLwA.published,_vEuQ);
     if(_s7ZkT[406]in _vEtL)
     {
       for(_vXhO=0;_vXhO<_vEtL.category.length;_vXhO++)
       {
         _vLwA.cate[_vXhO]=_vEtL.category[_vXhO].term
       }
     }
     if(_s7ZkT[407]in _vEtL)
     {
       _vLwA.title=_vEtL.title.$t
     }
     if(_s7ZkT[408]in _vEtL)
     {
       _vLwA.content=_vEtL.content.$t
     }
     if(_s7ZkT[409]in _vEtL)
     {
       _vLwA.summary=_vEtL.summary.$t
     }
     if(_vLwA.summary==_s7ZkT[410])
     {
       _vLwA.summary=_vLwA.content.replace(_vZoL,_s7ZkT[411])
     }
     if(_vLwA.content==_s7ZkT[412])
     {
       _vLwA.content=_vLwA.summary
     }
     if(_vLwA.summary.length>_vYhQ)
     {
       _vLwA.summary=_vLwA.summary.substring(0,_vYhQ)+_s7ZkT[413]
     }
     if(_s7ZkT[414]in _vEtL)
     {
       for(_vXhO=0;_vXhO<_vEtL.link.length;_vXhO++)
       {
         if(_vEtL.link[_vXhO].rel==_s7ZkT[415])
         {
           _vLwA.link=_vEtL.link[_vXhO].href
         }
         if(_vEtL.link[_vXhO].rel==_s7ZkT[416])
         {
           _vLwA.reply_label=_vEtL.link[_vXhO].title
         }
       }
     }
     a0=_vEtL.author[0];
     if(_s7ZkT[417]in a0)
     {
       _vLwA.author.name=a0.name.$t
     }
     if(_s7ZkT[418]in a0)
     {
       _vLwA.author.uri=a0.uri.$t
     }
     if(_s7ZkT[419]in a0)
     {
       if(a0.gd$image.src!=_s7ZkT[420])
       {
         _vLwA.author.avatar=a0.gd$image.src
       }
     }
     _vLwA.thumbnail=_fRyK(_vLwA.content);
     if(_vLwA.thumbnail==_s7ZkT[421]&&_s7ZkT[422]in _vEtL)
     {
       _vLwA.thumbnail=_vEtL.media$thumbnail.url
     }
     if(_vLwA.thumbnail==_s7ZkT[423])
     {
       _vLwA.thumbnail=_vGeT
     }
     if(_s7ZkT[424]in _vEtL)
     {
       _vLwA.reply_number=Number(_vEtL.thr$total.$t)
     }
     _vLwA.reply_label=_vLwA.reply_label.replace(_vLwA.reply_number+_s7ZkT[425],_s7ZkT[426]);
     _vLwA.reply_to=_s7ZkT[427];
     _vLwA.reply_json=_s7ZkT[428];
     _vLwA.reply_title=_s7ZkT[429];
     if(_s7ZkT[430]in _vEtL)
     {
       _vLwA.reply_to=_vEtL[_s7ZkT[431]].href;
       _vLwA.reply_json=_vEtL[_s7ZkT[432]].source;
       _vLwA.reply_json=_vLwA.reply_json.replace(_s7ZkT[433],_s7ZkT[434]);
       _vLwA.reply_json=_vLwA.reply_json+_s7ZkT[435]
     }
     if(_s7ZkT[436]in _vEtL)
     {
       for(_vXhO=0;_vXhO<_vEtL.gd$extendedProperty.length;_vXhO++)
       {
         if(_vEtL.gd$extendedProperty[_vXhO].name==_s7ZkT[437])
         {
           _vLwA.pid=_vEtL.gd$extendedProperty[_vXhO].value
         }
       }
     }
     _vLwA.pid=_vLwA.pid.replace(_s7ZkT[438],_s7ZkT[439])
   }
   return _vLwA
 }
 function _fWaR(_vKhU)
 {
   if(typeof(_vEuQ)==_s7ZkT[440])
   {
     var _vEuQ=_s7ZkT[441]
   }
   if(typeof(_vYhQ)==_s7ZkT[442])
   {
     var _vYhQ=150
   }
   if(typeof(_vGeT)==_s7ZkT[443])
   {
     var _vGeT=_s7ZkT[444]
   }
   var _vCaB=new Object();
   var _vZoL=/<\S[^>]*>/g;
   _vCaB.id=_vKhU.feed.id.$t;
   var _vZwM=_s7ZkT[445];
   var _vItT=_vCaB.id.indexOf(_vZwM);
   _vCaB.id=_vCaB.id.substring(_vItT+_vZwM.length);
   _vCaB.id=_vCaB.id.replace(_s7ZkT[446],_s7ZkT[447]);
   _vCaB.cate=new Array();
   if(_s7ZkT[448]in _vKhU.feed)
   {
     for(_vRoT=0;_vRoT<_vKhU.feed.category.length;_vRoT++)
     {
       _vCaB.cate[_vRoT]=_vKhU.feed.category[_vRoT].term
     }
   }
   _vCaB.title=_s7ZkT[449];
   if(_s7ZkT[450]in _vKhU.feed)
   {
     _vCaB.title=_vKhU.feed.title.$t
   }
   _vCaB.subtitle=_s7ZkT[451];
   if(_s7ZkT[452]in _vKhU.feed)
   {
     _vCaB.subtitle=_vKhU.feed.subtitle.$t
   }
   _vCaB.admin=new Object();
   _vCaB.admin.name=_s7ZkT[453];
   _vCaB.admin.uri=_s7ZkT[454];
   _vCaB.admin.avatar=_s7ZkT[455];
   if(_s7ZkT[456]in _vKhU.feed.author[0])
   {
     _vCaB.admin.name=_vKhU.feed.author[0].name.$t
   }
   if(_s7ZkT[457]in _vKhU.feed.author[0])
   {
     _vCaB.admin.uri=_vKhU.feed.author[0].uri.$t
   }
   if(_s7ZkT[458]in _vKhU.feed.author[0])
   {
     if(_vKhU.feed.author[0].gd$image.src!=_s7ZkT[459])
     {
       _vCaB.admin.avatar=_vKhU.feed.author[0].gd$image.src
     }
   }
   _vCaB.total_entry=Number(_vKhU.feed.openSearch$totalResults.$t);
   _vCaB.start_index=Number(_vKhU.feed.openSearch$startIndex.$t);
   _vCaB.item_per_page=Number(_vKhU.feed.openSearch$itemsPerPage.$t);
   _vCaB.entry_number=0;
   if(_s7ZkT[460]in _vKhU.feed)
   {
     _vCaB.entry_number=_vKhU.feed.entry.length
   }
   _vCaB.entry=new Array();
   for(_vRoT=0;_vRoT<_vCaB.entry_number;_vRoT++)
   {
     _vCaB.entry[_vRoT]=new Object();
     var _vLwA=new Object();
     var _vEtL=_vKhU.feed.entry[_vRoT];
     _vLwA.id=_vEtL.id.$t;
     _vZwM=_s7ZkT[461];
     _vItT=_vLwA.id.indexOf(_vZwM);
     _vLwA.id=_vLwA.id.substring(_vItT+_vZwM.length);
     _vLwA.published=_s7ZkT[462];
     if(_s7ZkT[463]in _vEtL)
     {
       _vLwA.published=_vEtL.published.$t
     }
     _vLwA.published=_fIkW(_vLwA.published,_vEuQ);
     _vLwA.cate=new Array();
     if(_s7ZkT[464]in _vEtL)
     {
       for(_vXhO=0;_vXhO<_vEtL.category.length;_vXhO++)
       {
         _vLwA.cate[_vXhO]=_vEtL.category[_vXhO].term
       }
     }
     _vLwA.title=_s7ZkT[465];
     if(_s7ZkT[466]in _vEtL)
     {
       _vLwA.title=_vEtL.title.$t
     }
     _vLwA.content=_s7ZkT[467];
     if(_s7ZkT[468]in _vEtL)
     {
       _vLwA.content=_vEtL.content.$t
     }
     _vLwA.summary=_s7ZkT[469];
     if(_s7ZkT[470]in _vEtL)
     {
       _vLwA.summary=_vEtL.summary.$t
     }
     if(_vLwA.summary==_s7ZkT[471])
     {
       _vLwA.summary=_vLwA.content.replace(_vZoL,_s7ZkT[472])
     }
     if(_vLwA.content==_s7ZkT[473])
     {
       _vLwA.content=_vLwA.summary
     }
     if(_vLwA.summary.length>_vYhQ)
     {
       _vLwA.summary=_vLwA.summary.substring(0,_vYhQ)+_s7ZkT[474]
     }
     _vLwA.link=_s7ZkT[475];
     _vLwA.reply_label=_s7ZkT[476];
     if(_s7ZkT[477]in _vEtL)
     {
       for(_vXhO=0;_vXhO<_vEtL.link.length;_vXhO++)
       {
         if(_vEtL.link[_vXhO].rel==_s7ZkT[478])
         {
           _vLwA.link=_vEtL.link[_vXhO].href
         }
         if(_vEtL.link[_vXhO].rel==_s7ZkT[479])
         {
           _vLwA.reply_label=_vEtL.link[_vXhO].title
         }
       }
     }
     _vLwA.author=new Object();
     _vLwA.author.name=_s7ZkT[480];
     _vLwA.author.uri=_s7ZkT[481];
     _vLwA.author.avatar=_s7ZkT[482];
     a0=_vEtL.author[0];
     if(_s7ZkT[483]in a0)
     {
       _vLwA.author.name=a0.name.$t
     }
     if(_s7ZkT[484]in a0)
     {
       _vLwA.author.uri=a0.uri.$t
     }
     if(_s7ZkT[485]in a0)
     {
       if(a0.gd$image.src!=_s7ZkT[486])
       {
         _vLwA.author.avatar=a0.gd$image.src
       }
     }
     _vLwA.thumbnail=_fRyK(_vLwA.content);
     if(_vLwA.thumbnail==_s7ZkT[487]&&_s7ZkT[488]in _vEtL)
     {
       _vLwA.thumbnail=_vEtL.media$thumbnail.url
     }
     if(_vLwA.thumbnail==_s7ZkT[489])
     {
       _vLwA.thumbnail=_vGeT
     }
     _vLwA.reply_number=0;
     if(_s7ZkT[490]in _vEtL)
     {
       _vLwA.reply_number=Number(_vEtL.thr$total.$t)
     }
     _vLwA.reply_label=_vLwA.reply_label.replace(_vLwA.reply_number+_s7ZkT[491],_s7ZkT[492]);
     _vLwA.reply_to=_s7ZkT[493];
     _vLwA.reply_json=_s7ZkT[494];
     _vLwA.reply_title=_s7ZkT[495];
     if(_s7ZkT[496]in _vEtL)
     {
       _vLwA.reply_to=_vEtL[_s7ZkT[497]].href;
       _vLwA.reply_json=_vEtL[_s7ZkT[498]].source;
       _vLwA.reply_json=_vLwA.reply_json.replace(_s7ZkT[499],_s7ZkT[500]);
       _vLwA.reply_json=_vLwA.reply_json+_s7ZkT[501]
     }
     _vLwA.pid=_s7ZkT[502];
     if(_s7ZkT[503]in _vEtL)
     {
       for(_vXhO=0;_vXhO<_vEtL.gd$extendedProperty.length;_vXhO++)
       {
         if(_vEtL.gd$extendedProperty[_vXhO].name==_s7ZkT[504])
         {
           _vLwA.pid=_vEtL.gd$extendedProperty[_vXhO].value
         }
       }
     }
     _vLwA.pid=_vLwA.pid.replace(_s7ZkT[505],_s7ZkT[506]);
     _vCaB.entry[_vRoT]=_vLwA
   }
   return _vCaB
 }
 function _fIkW(pub_date,format)
 {
   pub_date=pub_date.split(_s7ZkT[507]);
   _vSyW=new Date(pub_date[0],pub_date[1]-1,pub_date[2].substring(0,2));
   dd=_vSyW.getDate();
   mm=_vSyW.getMonth()+1;
   yyyy=_vSyW.getFullYear();
   format=format.replace(_s7ZkT[508],dd);
   format=format.replace(_s7ZkT[509],mm);
   format=format.replace(_s7ZkT[510],yyyy);
   return format
 }
 function _fNqM()
 {
   if(_s7ZkT[511]in document)
   {
     return true
   }
   return false
 }
 function _fJzG(c_name,_vPrL,exdays)
 {
   if(!_fNqM())
   {
     return false
   }
   var _vDeX=new Date();
   _vDeX.setDate(_vDeX.getDate()+exdays);
   var _vRwI=escape(_vPrL)+((exdays==null)?'':_s7ZkT[512]+_vDeX.toUTCString())+_s7ZkT[513];
   document.cookie=c_name+_s7ZkT[514]+_vRwI;
   if(_fUjU(c_name)!==_vPrL)
   {
     return false
   }
   return true
 }
 function _fKlR()
 {
   if(_fJzG(_s7ZkT[515],_s7ZkT[516]))
   {
     return true
   }
   return false
 }
 function _fUjU(c_name)
 {
   if(!_fNqM())
   {
     return _s7ZkT[517]
   }
   var _vRoT,x,y,ARRcookies=document.cookie.split(_s7ZkT[518]);
   for(_vRoT=0;_vRoT<ARRcookies.length;_vRoT++)
   {
     x=ARRcookies[_vRoT].substr(0,ARRcookies[_vRoT].indexOf(_s7ZkT[519]));
     y=ARRcookies[_vRoT].substr(ARRcookies[_vRoT].indexOf(_s7ZkT[520])+1);
     x=x.replace(/^\s+|\s+$/g,_s7ZkT[521]);
     if(x==c_name)
     {
       return unescape(y)
     }
   }
   return _s7ZkT[522]
 }
 function _fGjP()
 {
   if(typeof(localStorage)!==_s7ZkT[523])
   {
     return true
   }
   return false
 }
 function _fNxB(_vZwM,_vPrL)
 {
   if(_fGjP())
   {
     localStorage.setItem(_vZwM,_vPrL);
     return true
   }
   return false
 }
 function _fXvK(_vZwM)
 {
   if(_fGjP())
   {
     var _vHpD=localStorage.getItem(_vZwM);
     if(_vHpD)
     {
       return _vHpD
     }
   }
   return _s7ZkT[524]
 }
 function _fEbX()
 {
   var _vSyW=new Date();
   var _vEcO=_vSyW.getTime();
   _vEcO+=_vSyW.getSeconds();
   _vEcO+=_vSyW.getMinutes();
   _vEcO+=_vSyW.getHours();
   _vEcO+=_vSyW.getDay();
   _vEcO+=_vSyW.getDate();
   _vEcO+=_vSyW.getMonth();
   _vEcO+=_vSyW.getFullYear();
   return _vEcO
 }
 function _fCzQ(_vZwM,_vScD)
 {
   if(_fKlR())
   {
     return _fJzG(_vZwM,_vScD,365)
   }
   else if(_fGjP())
   {
     return _fNxB(_vZwM,_vScD)
   }
   return false
 }
 function _fNaI(_vZwM,_vScD)
 {
   if(_fKlR())
   {
     return _fUjU(_vZwM)
   }
   else if(_fGjP())
   {
     return _fXvK(_vZwM)
   }
   return _s7ZkT[525]
 }
 
 function _fLjZ()
 {
   var _vGiU=window.location.href;
   if(_vGiU.indexOf(_s7ZkT[530])!=-1||_vGiU.indexOf(_s7ZkT[531])!=-1)
   {
     return true
   }
   return false
 }
 function _fRzY()
 {
   var _vGiU=window.location.href;
   if(_vGiU.indexOf(_s7ZkT[532])!=-1)
   {
     return true
   }
   return false
 }
 function _fCeC()
 {
   var _vGiU=window.location.href;
   if(_vGiU.indexOf(_s7ZkT[533])!=-1)
   {
     return true
   }
   return false
 }
 function _fMcI()
 {
   if(_fLjZ()||_fYtK()||_fCeC()||_fRzY())
   {
     return true
   }
   return false
 }
 function _fSfF()
 {
   var _vGiU=window.location.href;
   if(_vGiU.indexOf(_s7ZkT[534])!=-1)
   {
     return true
   }
   return false
 }
 function _fIdW()
 {
   var _vGiU=window.location.href;
   if(!_fSfF()&&!_fLjZ()&&_vGiU.indexOf(_s7ZkT[535])!=-1)
   {
     return true
   }
   return false
 }
 function _fQoH()
 {
   if(_fSfF()||_fIdW())
   {
     return true
   }
   return false
 }
 function _fBlR()
 {
   var _vGiU=window.location.href;
   if(_vGiU.indexOf(_s7ZkT[536])!=-1||_vGiU.indexOf(_s7ZkT[537])!=-1)
   {
     return true
   }
   return false
 }
 function _fUcX()
 {
   var _vGiU=window.location.href;
   if(_vGiU.indexOf(_s7ZkT[538])!=-1||_vGiU.indexOf(_s7ZkT[539])!=-1)
   {
     return true
   }
   return false
 }
 function _fXcO()
 {
   var _vGiU=window.location.href;
   if(_vGiU.indexOf(_s7ZkT[540])!=-1||_vGiU.indexOf(_s7ZkT[541])!=-1)
   {
     return true
   }
   return false
 }
  function _fTxD()
 {
   var _vGiU=window.location.href;
   if(_vGiU.indexOf(_s7ZkT[4908])!=-1||_vGiU.indexOf(_s7ZkT[4909])!=-1)
   {
     return true
   }
   return false
 }
 function _fVpP()
 {
   var _vGiU=window.location.href;
   if(_vGiU.indexOf(_s7ZkT[542])!=-1)
   {
     return true
   }
   return false
 }
 function _fReF()
 {
   if(!_fMcI()&&!_fQoH()&&!_fBlR()&&!_fUcX()&&!_fTxD()&&!_fXcO()&&!_fVpP())
   {
     return true
   }
   return false
 }
 function _fMxL()
 {
   var _vZwM=_s7ZkT[543];
   var _vUdZ=_s7ZkT[544];
   if(_fKlR())
   {
     if(_fUjU(_vZwM)==_vUdZ)
     {
       _fJzG(_vZwM,_vUdZ,300);
       return true
     }
   }
   else if(_fGjP)
   {
     if(localStorage.getItem(_vZwM)==_vUdZ)
     {
       localStorage.setItem(_vZwM,_vUdZ);
       return true
     }
   }
   if($(_s7ZkT[545]).length)
   {
     var _vTfN=false;
     $(_s7ZkT[546]).each(function()
     {
       if(!_vTfN)
       {
         if($(this).css(_s7ZkT[547])!=_s7ZkT[548])
         {
           if(_fKlR())
           {
             _fJzG(_vZwM,_vUdZ,300)
           }
           else if(_fGjP)
           {
             localStorage.setItem(_vZwM,_vUdZ)
           }
           _vTfN=true
         }
       }
     }
     );
     if(_vTfN)
     {
       return true
     }
   }
   if(_fVpP())
   {
     if(_fKlR())
     {
       _fJzG(_vZwM,_vUdZ,300)
     }
     else if(_fGjP)
     {
       localStorage.setItem(_vZwM,_vUdZ)
     }
     return true
   }
   return false
 }
 
// atik 4

 if(SLIDER == 'NO' || SLIDER == 'no' || SLIDER == 'No')
 {
	$('.row').remove();
 }
var _vSpL = '<option>Pilih Kurir</option>';
if(JNE == 'yes' || JNE == 'Yes' || JNE == 'YES')
{
	_vSpL += '<option value="jne">Jalur Nugraha Ekakurir (JNE)</option>';
}
else{
	_vSpL +='';
}
if(TIKI == 'yes' || TIKI == 'Yes' || TIKI == 'YES')
{
	_vSpL +='<option value="tiki">Citra Van Titipan Kilat (TIKI)</option>';
}
else
{
	_vSpL +='';
}
if(POS == 'yes' || POS == 'Yes' || POS == 'YES')
{
	_vSpL +='<option value="pos">POS Indonesia</option>';
}
else
{
	_vSpL +='';
}
if(SICEPAT == 'yes' || SICEPAT == 'Yes' || SICEPAT == 'YES')
{
	_vSpL +='<option value="sicepat">SiCepat Express</option>';
}
else
{
	_vSpL +='';
}
if(JNT == 'yes' || JNT == 'Yes' || JNT == 'YES')
{
	_vSpL +='<option value="jnt">J&T Express</option>';
}
else
{
	_vSpL +='';
}
if(JET == 'yes' || JET == 'Yes' || JET == 'YES')
{
	_vSpL +='<option value="jet">JET Express</option>';
}
else
{
	_vSpL +='';
}
_vSpL += '</select>';


 
 var rbtloc = '0Xuy7qYwN';
var rbthrf = $('#main-js').attr('src');
var rbttxt = 'situs ini terjadi kesalahan atau telah melanggar ketentuan. silahkan lakukan pemulihan dengan membaca tata caranya dibawah ini.';
var rbttgt = '"<b>situs ini ilegal</b>"<br/> segera perbaiki kesalanan dalam situs ini. kami pihak sebagai pengembang mengecam situs ini dan akan kami <i>redirect</i> bilamana tidak dipulihkan.';
var rbtacc = '<a class="anco" style="padding: 5px 10px;position: relative;top: 5px;background:#990000!important;color:#FFF;" targer="_blank" href="';
var rbtahf = '">pulihkan</a></span>';
var rbtscc = '<span class="erinfo" style="display:block!important;clear:left!important;visibility:visible!important;width:100%!important;z-index:99!important;border-bottom:3px solid #900!important;text-align:center;background:#FF1A1A!important;padding: 10px 0px;color:#FFF;text-transform:capitalize!important;">';
var rbtsqq = '<span class="erinfo" id="activation" style="display:block!important;clear:left!important;visibility:visible!important;width:100%!important;z-index:99!important;border-bottom:3px solid #4A9A19!important;text-align:center;background:#5EC620!important;padding: 10px 0px;color:#FFF;text-transform:capitalize!important;">';
var rbteco = '';
var rbtlap = 'https://lapakologis.com/kesalahan-penyalahgunaan/';
var rbtacv = 'template ini belum valid <br/> segera lakukan aktivasi untuk menggunakan template ini. Gunakan kode lisensi dibawah ini dan baca tata cara melakukan aktivasi.';
var rbtgac = '<input class="lisensi" name="lisensi" style=" border: 3px solid #3F8415 !important;border-radius: 4px;padding: 5px 10px;margin: 10px 0px;text-align: center;color: #FFF;background: #4A9A19; font-size:15px; font-weight:bold;" onclick="this.select()" value="';
var rbtgad = '"/>'
var _vMgH=$(_s7ZkT[2391]).val();
var _vUkM=$(_s7ZkT[2392]).val();
var _vGpL=$('.g-profile').attr('href');
var _vGtV='';
	if (_vGpL.indexOf("https://plus.google.com") == 0)
	{
	 _vGtV = _vGpL.substring(24);
	}
	else
	{
	 _vGtV = _vGpL.substring(32);
	}
	   var rbtocc = rbtacc;
	   var rbtact = 'http://docs.lapakologis.com/pengaturan/cara-melakukan-aktivasi-template-lapakpress';
	   var rbtocc = rbtocc.replace(/990000/gi, "4A9A19");
	   var rbtahv = rbtahf.replace(/pulihkan/gi, "cara aktivasi");
	if(_vMgH == null || _vMgH == undefined)
	{
	  rbtbcc = rbtscc;
	  rbtbcc = rbtbcc.replace(/FF1A1A/gi, "000000");
	  var rbterr = '#444';
	   rbteco = rbtbcc+rbterr+'<br/>'+rbttgt+'<br/>'+rbtacc+rbtlap+rbterr+rbtahf;
	  $('#info-wrapper').append(rbteco);
	}
	if(_vUkM == null || _vUkM == undefined)
	{
	  var rbterr = '#1003';
	   rbteco = rbtscc+rbterr+'<br/>'+rbttxt+'<br/>'+rbtacc+rbtlap+rbterr+rbtahf;
	  $('#info-wrapper').append(rbteco);
	}
	if(rbthrf == undefined || rbthrf.indexOf(rbtloc) ==-1)
	{
	  var rbterr = '#1002';
	   rbteco	= rbtscc+rbterr+'<br/>'+rbttxt+'<br/>'+rbtacc+rbterr+rbtahf;
	  $('#info-wrapper').append(rbteco);
	}
 $(_s7ZkT[2388]).css(_s7ZkT[2389],_s7ZkT[2390])
var _vLoW=_s7ZkT[2395] + _vGtV; 
$(_s7ZkT[2396]).html(_vLoW);
	
$(document).ready(function(){ 
var _eMkG=$(_s7ZkT[2397]).html();
var _eStS=_eMkG.replace(/#/gi, _s7ZkT[2398]);
$(_s7ZkT[2399]).html(_eStS);

var _eGtT=$(_s7ZkT[2400]).html();
var _eUgS=_eGtT.replace(/@/gi, _s7ZkT[2401]);
$(_s7ZkT[2402]).html(_eUgS);
 });
 
$("#bank-wrapper").hide();
 if (window.location.href == 'http://' + _vNwQ || window.location.href == 'http://' + _vNwQ + '&m=1' || window.location.href == 'https://' + _vNwQ || window.location.href == 'https://' + _vNwQ + '&m=1')
 {
	 $("#bank-wrapper").hide();
	 $("#find-us-wrapper").hide();
	 $("#sidebar-wrapper").hide();
	 $(".row").hide();
 }
  else if (window.location.href =='http://' + _vWtQ || window.location.href == 'http://' + _vWtQ + '&m=1' || window.location.href == 'https://' + _vWtQ|| window.location.href == 'https://' + _vWtQ + '&m=1')
 {
	 $(".row").hide();
	 $("#yahoo-wrapper").hide();
	 $("#social-wrapper").hide();
	 $("#find-us-wrapper").hide();
	 $("#sidebar-wrapper").hide();
	 $("#bank-wrapper").show();
 }
 function _fFpX(_vBxE)
 {
   var _vFfM=_s7ZkT[549];
   var _vPcA=_s7ZkT[550];
   _vBxE=_vBxE.toString();
   var _vItT=_vBxE.indexOf(_s7ZkT[551]);
   if(_vItT!=-1)
   {
     _vFfM=_vBxE.substring(0,_vItT);
     _vPcA=_vBxE.substring(_vItT+1)
   }
   else
   {
     _vFfM=_vBxE
   }
   if(_vFfM.length<=3)
   {
     return _vBxE
   }
   new_price=_s7ZkT[552];
   for(var _vRoT=_vFfM.length-1,_vXhO=1;_vRoT>=0;_vRoT-=1,_vXhO++)
   {
     new_price+=_vFfM.substring(_vRoT,_vRoT+1);
     if(_vXhO%3==0&&_vXhO<_vFfM.length)
     {
       new_price+=SEP_LONG_PRICE
     }
   }
   _vFfM=_s7ZkT[553];
   for(var _vRoT=new_price.length-1;_vRoT>=0;_vRoT-=1)
   {
     _vFfM+=new_price.substring(_vRoT,_vRoT+1)
   }
   _vBxE=_vFfM;
   if(_vPcA)
   {
     _vBxE+=_s7ZkT[554]+_vPcA
   }
   return _vBxE
 }
 function _fCiN()
 {
   try
   {
     return window.self!==window.top
   }
   catch(_vZhF)
   {
     return true
   }
 }
 if(_fBlR()||_fXcO()||_fUcX()||_fTxD())
 {
   $(_s7ZkT[555]).html(_s7ZkT[556]);
   $(_s7ZkT[557]).remove()
 }
 function _fGuE(properties)
 {
   if(properties.length)
   {
     for(var _vRoT=0;_vRoT<properties.length;_vRoT++)
     {
       var _vPrL=_s7ZkT[558];
       if(typeof(properties[_vRoT])!==_s7ZkT[559])
       {
         _vPrL=$(properties[_vRoT]).html()
       }
       else
       {
         _vPrL=properties[_vRoT]
       }
       if(_vPrL===_s7ZkT[560])
       {
         return true
       }
     }
   }
   return false
 }

 function convertToRupiah(angka)
{
var rupiah = '';
var angkarev = angka.toString().split('').reverse().join('');
for(var i = 0; i < angkarev.length; i++) 	if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
return 'Rp '+rupiah.split('',rupiah.length-1).reverse().join('');
} 

 function _fIgM(properties)
 {
   var _vEnW=_s7ZkT[561];
   var _vEaP=_s7ZkT[562];
   var _vTdE=_s7ZkT[563];
   var _vKoko='';
   var _vHsC='';
   if(properties.length)
   {
     for(var _vRoT=0;_vRoT<properties.length;_vRoT++)
     {
       var _vPrL=_s7ZkT[564];
       if(typeof(properties[_vRoT])!==_s7ZkT[565])
       {
         _vPrL=$(properties[_vRoT]).html()
       }
       else
       {
         _vPrL=properties[_vRoT]
       }
       if(_vPrL&&_vPrL.length>1&&!isNaN(_vPrL.substring(1)))
       {
         if(_vPrL.indexOf(_s7ZkT[566])==0)
         {
           _vEnW=_vPrL.substring(1)
         }
         else if(_vPrL.indexOf(_s7ZkT[567])==0)
         {
           _vKoko=_vPrL.substring(1)
         }
		 _vHsC=_vEnW*_vKoko/100
		 _vEaP=_vEnW-_vHsC
       }
       if(_vPrL===_s7ZkT[568])
       {
         _vTdE=_s7ZkT[569]+_fYiQ(_s7ZkT[570])+_s7ZkT[571]
       }
     }
   }
   if(!_vTdE)
   { 
     if(_vEnW&&_vKoko)
     {
       _vTdE=_s7ZkT[572]+_vKoko+_s7ZkT[573]+_s7ZkT[574]+convertToRupiah(_vEnW)+_s7ZkT[575]+convertToRupiah(_vEnW)+_s7ZkT[576]+convertToRupiah(_vEaP)+_s7ZkT[577]+convertToRupiah(_vEaP)+_s7ZkT[578]
     }
     else if(_vEnW)
     {
       _vTdE=_s7ZkT[579]+convertToRupiah(_vEnW)+_s7ZkT[580]+convertToRupiah(_vEnW)+_s7ZkT[581]
     }
   }
   return _vTdE
 }
 $(_s7ZkT[597]).each(function()
 {
   var _vZwM=$(this).attr(_s7ZkT[598]);
   if(_vZwM)
   {
     $(this).html(_fYiQ(_vZwM))
   }
 }
 );

 function _fSrD()
 {
   $(_s7ZkT[657]).each(function()
   {
     var _vHbL=$(_s7ZkT[658]).offset().left;
     var _vGpR=$(this).offset().left;
     var _vWfJ=$(this).width();
     var _vJpX=_vGpR+_vWfJ/2;
     var _vPuP=$(_s7ZkT[659]);
     var _vPzH=_vPuP.width();
     var _vSdL=Math.sqrt(2)*_vPzH/2;
     var _vBtE=_vJpX-_vSdL-_vHbL;
     _vPuP.css(_s7ZkT[660],_vBtE+_s7ZkT[661])
   }
   )
 }
 if(_fBlR()||_fUcX()||_fXcO()||_fTxD())
 {
   $(_s7ZkT[662]).remove();
   $(_s7ZkT[663]).prepend(_s7ZkT[664])
 }
 else
 {
   _fSrD();
   $(_s7ZkT[665]).click(function()
   {
     $(_s7ZkT[666]).removeClass(_s7ZkT[667]);
     $(this).addClass(_s7ZkT[668]);
     _fSrD()
   }
   )
 }
 $(_s7ZkT[669]).click(function()
 {
   $(_s7ZkT[670]).fadeIn(200);
   $(_s7ZkT[671]).animate(
   {
     top:_s7ZkT[672],opacity:1
   }
   ,400,_s7ZkT[673])
 }
 );
 $(_s7ZkT[674]).click(function()
 {
   $(_s7ZkT[675]).fadeOut(200);
   $(_s7ZkT[676]).animate(
   {
     top:_s7ZkT[677],opacity:0
   }
   ,300)
 }
 );
 $(_s7ZkT[678]).keydown(function(_vZhF)
 {
   if(_vZhF.keyCode==27)
   {
     if($(_s7ZkT[679]).css(_s7ZkT[680])!==_s7ZkT[681])
     {
       $(_s7ZkT[682]).fadeOut(200);
       $(_s7ZkT[683]).animate(
       {
         top:_s7ZkT[684],opacity:0
       }
       ,300)
     }
   }
 }
 );
 $(_s7ZkT[685]).each(function()
 {
   $(this).append(_fIgM($(this).find(_s7ZkT[686])));
   if($(this).find(_s7ZkT[687]).length)
   {
     $(this).find(_s7ZkT[688]).each(function()
     {
       $(this).addClass(_s7ZkT[692])
     }
     )
   }
   else
   {
     if($(this).find(_s7ZkT[693]).length)
     {
       $(this).find(_s7ZkT[694]).each(function()
       {
         $(this).removeAttr(_s7ZkT[698])
       }
       )
     }
   }
 }
 );
 $(_s7ZkT[699]).click(function()
 {
   $(_s7ZkT[700]).removeClass(_s7ZkT[701]);
   $(this).addClass(_s7ZkT[702]);
   if($(this).is(_s7ZkT[703]))
   {
     $(_s7ZkT[704]).fadeIn();
     $(_s7ZkT[705]).fadeOut();
     $(_s7ZkT[706]).fadeOut()
   }
   else if($(this).is(_s7ZkT[707]))
   {
     $(_s7ZkT[708]).fadeOut();
     $(_s7ZkT[709]).fadeIn();
     $(_s7ZkT[710]).fadeOut()
   }
   else if($(this).is(_s7ZkT[711]))
   {
     $(_s7ZkT[712]).fadeOut();
     $(_s7ZkT[713]).fadeOut();
     $(_s7ZkT[714]).fadeIn()
   }
   _fVyM()
 }
 );
 var _vTtR=new Array();
 var _vSfN=new Array();
 $(_s7ZkT[715]).each(function()
 {
   var _vPrL=$(this).html();
   if(_vPrL&&_vPrL.length>1&&!isNaN(_vPrL.substring(1)))
   {
     if(_vPrL.indexOf(_s7ZkT[716])==0)
     {
       return
     }
     else if(_vPrL.indexOf(_s7ZkT[717])==0)
     {
       return
     }
	 else if(_vPrL.indexOf(_s7ZkT[2383])==0)
     {
       return
     }
	 else if(_vPrL.indexOf(_s7ZkT[2387])==0)
     {
       return
     }

   }
   if(_vPrL===_s7ZkT[718])
   {
     return
   }
   if(_vPrL===_s7ZkT[2406])
   {
     return
   }
    if(_vPrL===_s7ZkT[2407])
   {
     return
   }
   var _vItT=_vTtR.length;
   _vTtR[_vItT]=new Object();
   _vTtR[_vItT].count=Number($(this).attr(_s7ZkT[719]));
   _vTtR[_vItT].url=$(this).attr(_s7ZkT[720]);
   _vTtR[_vItT].name=_vPrL
 }
 );
 $(_s7ZkT[721]).each(function()
 {
   var _vPrL=$(this).html();
   if(_vPrL&&_vPrL.length>1&&!isNaN(_vPrL.substring(1)))
   {
     if(_vPrL.indexOf(_s7ZkT[722])==0)
     {
       _vSfN[_vSfN.length]=_vPrL;
       return
     }
     else if(_vPrL.indexOf(_s7ZkT[723])==0)
     {
       _vSfN[_vSfN.length]=_vPrL;
       return
     }
     else if(_vPrL.indexOf(_s7ZkT[2383])==0)
     {
       _vSfN[_vSfN.length]=_vPrL;
       return
     }
     else if(_vPrL.indexOf(_s7ZkT[2387])==0)
     {
       _vSfN[_vSfN.length]=_vPrL;
       return
     }
   }
   if(_vPrL===_s7ZkT[724])
   {
     _vSfN[_vSfN.length]=_vPrL;
     return
   }
   if(_vPrL===_s7ZkT[2406])
   {
     _vSfN[_vSfN.length]=_vPrL;
     return
   }
   if(_vPrL===_s7ZkT[2407])
   {
     _vSfN[_vSfN.length]=_vPrL;
     return
   }
 }
 );
 for(var _vRoT=0;_vRoT<_vTtR.length-1;_vRoT++)
 {
   for(var _vXhO=_vRoT+1;_vXhO<_vTtR.length;_vXhO++)
   {
     if(_vTtR[_vRoT].count<_vTtR[_vXhO].count)
     {
       var _vLwA=_vTtR[_vRoT];
       _vTtR[_vRoT]=_vTtR[_vXhO];
       _vTtR[_vXhO]=_vLwA
     }
   }
 }
 var _vZvU=false;
 $(_s7ZkT[725]).each(function()
 {
   var _vGaN=_s7ZkT[726]+_fYiQ(_s7ZkT[727])+_s7ZkT[728];
   if(_fCeC())
   {
     var _vGiU=window.location.href;
     for(var _vRoT=0;_vRoT<_vTtR.length;_vRoT++)
     {
       if(_vGiU.indexOf(_vTtR[_vRoT].url)!=-1)
       {
         _vGaN+=_s7ZkT[729]+_vTtR[_vRoT].url+_s7ZkT[730]+_vTtR[_vRoT].name+_s7ZkT[731];
         break
       }
     }
   }
   else if(_fIdW())
   {
     for(var _vRoT=0;_vRoT<_vTtR.length;_vRoT++)
     {
       $(_s7ZkT[732]).each(function()
       {
         if($(this).attr(_s7ZkT[733])===_vTtR[_vRoT].url)
         {
           if(!_vZvU)
           {
             _vZvU=new Object()
           }
           _vZvU.href=$(this).attr(_s7ZkT[734]);
           _vZvU.name=$(this).html();
           _vGaN+=_s7ZkT[735]+_vTtR[_vRoT].url+_s7ZkT[736]+_vTtR[_vRoT].name+_s7ZkT[737]
         }
       }
       )
     }
   }
   else if(_fSfF())
   {
   }
   else if(_fReF())
   {
     _vGaN+=_s7ZkT[738];
     var _vXdP=$(_s7ZkT[739]).html();
     _vXdP=_vXdP.replace(_s7ZkT[740],_s7ZkT[741]);
     $(_s7ZkT[742]).html(_vXdP)
   }
   else if(_fLjZ())
   {
     _vGaN+=_s7ZkT[743]+_fYiQ(_s7ZkT[744])+_s7ZkT[745]
   }
   else if(_fBlR())
   {
     _vGaN+=_s7ZkT[746]+_fYiQ(_s7ZkT[747])+_s7ZkT[748];
     var _vXdP=$(_s7ZkT[749]).html();
     _vXdP=_vXdP.replace(_s7ZkT[750],_fYiQ(_s7ZkT[751]));
     $(_s7ZkT[752]).html(_vXdP)
   }
   else if(_fUcX())
   {
     _vGaN+=_s7ZkT[753]+_fYiQ(_s7ZkT[754])+_s7ZkT[755];
     var _vXdP=$(_s7ZkT[756]).html();
     _vXdP=_vXdP.replace(_s7ZkT[757],_fYiQ(_s7ZkT[758]));
     $(_s7ZkT[759]).html(_vXdP)
   }
   else if(_fXcO())
   {
     _vGaN+=_s7ZkT[760]+_fYiQ(_s7ZkT[761])+_s7ZkT[762];
     var _vXdP=$(_s7ZkT[763]).html();
     _vXdP=_vXdP.replace(_s7ZkT[764],_fYiQ(_s7ZkT[765]));
     $(_s7ZkT[766]).html(_vXdP)
   }
   else if(_fTxD())
   {
	 _vGaN+=_s7ZkT[4911]+_fYiQ(_s7ZkT[4912])+_s7ZkT[4913];
     var _vXdP=$(_s7ZkT[4914]).html();
     _vXdP=_vXdP.replace(_s7ZkT[4915],_fYiQ(_s7ZkT[4916]));
     $(_s7ZkT[4917]).html(_vXdP)  
   }
   $(this).html(_vGaN)
 }
 );
 $(_s7ZkT[767]).each(function()
 {
   var _vIgM=$(this).html();
   for(var _vRoT=0;_vRoT<1000;_vRoT++)
   {
     if(!_vIgM)
     {
       break
     }
     var _vFoG=_vIgM.indexOf(_s7ZkT[768]);
     if(_vFoG==-1)
     {
       break
     }
     var _vZhF=_vIgM.indexOf(_s7ZkT[769],_vFoG+2);
     if(_vZhF==-1)
     {
       break
     }
     var _vRjY=_vIgM.substring(_vFoG+2,_vZhF);
     _vIgM=_vIgM.substring(0,_vFoG)+_s7ZkT[770]+_vRjY+_s7ZkT[771]+_vIgM.substring(_vZhF+2)
   }
   $(this).html(_vIgM)
 }
 );
 
  for(var _vRoT=0;_vRoT<_vSfN.length;_vRoT++)
 {
   _vPrL=_vSfN[_vRoT];
   if(_vPrL!==_s7ZkT[2406])
   {
 var _vOwI=new Array();
 $(_s7ZkT[772]).each(function()
 {
   if($(this).attr(_s7ZkT[773]))
   {
     _vOwI[_vOwI.length]=$(this).attr(_s7ZkT[774]);
     $(this).next().each(function()
     {
       if($(this).is(_s7ZkT[775]))
       {
         $(this).remove()
       }
     }
     );
     $(this).parent(_s7ZkT[776]).each(function()
     {
       $(this).next().each(function()
       {
         if($(this).is(_s7ZkT[777]))
         {
           $(this).remove()
         }
       }
       );
       $(this).parent(_s7ZkT[778]).each(function()
       {
         $(this).next().each(function()
         {
           if($(this).is(_s7ZkT[779]))
           {
             $(this).remove()
           }
         }
         )
       }
       )
     }
     );
     $(this).parent(_s7ZkT[780]).each(function()
     {
       $(this).next().each(function()
       {
         if($(this).is(_s7ZkT[781]))
         {
           $(this).remove()
         }
       }
       )
     }
     );
     $(this).parent(_s7ZkT[782]).each(function()
     {
       $(this).remove()
     }
     );
     $(this).parent(_s7ZkT[783]).each(function()
     {
       $(this).parent(_s7ZkT[784]).each(function()
       {
         $(this).remove()
       }
       );
       $(this).remove()
     }
     );
     $(this).remove()
   }
 }
 );
 
 if(_vOwI.length)
 {
   $(_s7ZkT[785]).html(function()
   {
     var _vHpD=_s7ZkT[786];
     _vHpD+=_s7ZkT[787];
     for(var _vRoT=0;_vRoT<_vOwI.length;_vRoT++)
     {
       if(_vRoT==0)
       {
         _vHpD+=_s7ZkT[788]+_vOwI[_vRoT]+_s7ZkT[789]
       }
       else
       {
         _vHpD+=_s7ZkT[790]+_vOwI[_vRoT]+_s7ZkT[791]
       }
     }
     _vHpD+=_s7ZkT[792];
     if(_vOwI.length>1)
     {
       _vHpD+=_s7ZkT[793];
       for(var _vRoT=0;_vRoT<_vOwI.length;_vRoT++)
       {
         _vHpD+=_s7ZkT[794]+_vOwI[_vRoT]+_s7ZkT[795]
       }
       _vHpD+=_s7ZkT[796]
     }
     return _vHpD
   }
   );
   _fVyM();
   $(_s7ZkT[797]).click(function()
   {
     $(this).find(_s7ZkT[798]).each(function()
     {
       var _vVbT=$(this).attr(_s7ZkT[799]);
       $(_s7ZkT[800]).each(function()
       {
         if($(this).css(_s7ZkT[801])==_s7ZkT[802])
         {
           $(this).animate(
           {
             opacity:0
           }
           ,100,function()
           {
             $(_s7ZkT[803]).each(function()
             {
               if(_vVbT===$(this).find(_s7ZkT[804]).attr(_s7ZkT[805]))
               {
                 $(this).animate(
                 {
                   opacity:1
                 }
                 ,100)
               }
             }
             )
           }
           )
         }
       }
       )
     }
     )
   }
   )
 }
 }
 }
 
 var _vXiI=0;
 var _vRmW=false;
 $(_s7ZkT[806]).html(function()
 {
   var _vHpD='';
   var _vGoI='';
   var _viOC='';
   var _vTwJ='';
   var _vDeK='';
   var _vHsC='';
   var _vEaP=''; 
   var _vHpD='';
   var _vPlG=''; 
   var _vLbR='';
   var _vTgI='';
   var _vSpO='';
   var _vMfU=false;
   for(var _vRoT=0;_vRoT<_vSfN.length;_vRoT++)
   {
     _vPrL=_vSfN[_vRoT];
     if(_vPrL&&_vPrL.length>1&&!isNaN(_vPrL.substring(1)))
     {
		if(_vPrL.indexOf(_s7ZkT[810])==0)
		{
			_vGoI=_vPrL.substring(1);
			_vTwJ=parseInt(_vGoI);
		}
		else if(_vPrL.indexOf(_s7ZkT[813])==0)
		{
			_viOC=_vPrL.substring(1);
			_vDeK=parseInt(_viOC);
		}
		else if(_vPrL.indexOf(_s7ZkT[2383])==0)
		{
			_vPlG=parseInt(_vPrL.substring(1,4));
			_vLbR=parseInt(_vPrL.substring(4,7));
			_vTgI=parseInt(_vPrL.substring(7,10));
		}
		else if(_vPrL.indexOf(_s7ZkT[2387])==0)
		{
			_vSpO=parseInt(_vPrL.substring(1));
		}
     }
	 if(_vPrL===_s7ZkT[819])
     {
	   _vHpD+=_s7ZkT[820]+_fYiQ(_s7ZkT[821])+_s7ZkT[822];
	   $(_s7ZkT[853]).hide()
     }
	 if(_vPrL===_s7ZkT[2406])
	 {
		$('desc-image-list').remove()
		$('.header').remove()
		$('.post-line-2').remove()
		$('.heading-description').remove()
		$('div').removeClass('post-line');
		
	 }
   }
   //Hitung
   var _vHsC=_vDeK*_vTwJ/100;
   var _vEaP=_vDeK-_vHsC;
   
   //Plugin JNE Volmetric
   var _vYgT=_vSpO/1000;
   var _vYtS=(_vPlG*_vLbR*_vTgI) / 6000;
   var _vGtS='';
   var _vUtG='';
   
   if(_vYgT>_vYtS)
   {
	  _vUtG=_vYgT;
   }
   else if(_vYgT<_vYtS)
   {
	  _vUtG=_vYtS;
   }
   if(_vUtG==0)
   {
	   _vGtS=0;
   }
   else
   {
	   _vGtS=_vUtG;
   }
   
     
   if(!_vHpD)
   {
	   if(_vTwJ&&_vDeK)
	   {
		   _vHpD+=_s7ZkT[807]+_fYiQ(_s7ZkT[808])+_s7ZkT[809]+_s7ZkT[811]+convertToRupiah(_vDeK)+_s7ZkT[812]+_s7ZkT[814]+convertToRupiah(_vEaP)+_s7ZkT[815];
		   _vMfU=true;
	   }
	   else if(_vDeK)
	   {
		   _vHpD+=_s7ZkT[807]+_fYiQ(_s7ZkT[808])+_s7ZkT[809]+_s7ZkT[814]+convertToRupiah(_vDeK)+_s7ZkT[815];
	   }
   }
   if(_vMfU)
   {
     _vHpD+=_s7ZkT[816]+_fYiQ(_vTwJ+'% OFF')+_s7ZkT[818]
   }
	
   if(Berat == 'yes' || Berat == 'Yes' || Berat == 'YES')
   {
   _vHpD+=_s7ZkT[2384]+_s7ZkT[2385]+_vGtS.toFixed(2)+_s7ZkT[2386];
   }

      return _vHpD
 }
 );
 
 var _vRmW=false;
 $(_s7ZkT[2375]).html(_s7ZkT[2376]+_s7ZkT[2377]+_s7ZkT[2378]+_s7ZkT[2379]);
 
 var _vAqF=_s7ZkT[823];
 var _vKkA=_s7ZkT[824];
 function _fKiX()
 {
   if(_fKlR()||_fGjP())
   {
     return true
   }
   return false
 }
 function _fWvI(_vZwM)
 {
   var _vMsA=new Array();
   var _vXhH=_s7ZkT[825];
   if(_fKlR())
   {
     _vXhH=_fUjU(_vZwM)
   }
   else if(_fGjP())
   {
     _vXhH=localStorage.getItem(_vZwM)
   }
   else
   {
     return false
   }
   if(_vXhH)
   {
     _vXhH=_vXhH.split(_s7ZkT[826]);
     for(var _vRoT=0;_vRoT<_vXhH.length;_vRoT++)
     {
       if(_vXhH[_vRoT]&&_vXhH[_vRoT].indexOf(_s7ZkT[827])!=-1&&_vXhH[_vRoT].indexOf(_s7ZkT[828])!=-1)
       {
         idx=_vMsA.length;
         _vMsA[idx]=new Object();
         _vMsA[idx].id=_vXhH[_vRoT].substring(0,_vXhH[_vRoT].indexOf(_s7ZkT[829]));
         _vMsA[idx].number=Number(_vXhH[_vRoT].substring(_vXhH[_vRoT].indexOf(_s7ZkT[830])+1,_vXhH[_vRoT].indexOf(_s7ZkT[831])))
		 _vMsA[idx].color=_vXhH[_vRoT].substring(_vXhH[_vRoT].indexOf(_s7ZkT[830])+1,_vXhH[_vRoT].indexOf(_s7ZkT[831]))
		 _vMsA[idx].size=_vXhH[_vRoT].substring(_vXhH[_vRoT].indexOf(_s7ZkT[830])+1,_vXhH[_vRoT].indexOf(_s7ZkT[831]))
       }
     }
   }
   if(_vMsA.length)
   {
     return _vMsA
   }
   return false
 }
 function _fTxY(_vZwM,_vEcO,_vIdO)
 {
   var _vMsA=_fWvI(_vZwM);
   if(_vMsA==false)
   {
     _vMsA=new Array();
     _vMsA[0]=new Object();
     _vMsA[0].id=_vEcO;
     _vMsA[0].number=_vIdO;
	 _vMsA[0].color=_vClR;
	 _vMsA[0].size=_vSzE;
   }
   else
   {
     for(var _vRoT=0;_vRoT<_vMsA.length;_vRoT++)
     {
       if(_vMsA[_vRoT].id==_vEcO)
       {
		   // atur 1 menambah .number setelah diklik, _vMsA[_vRoT].number+=_vIdO;
         _vMsA[_vRoT].number+=_vIdO;
		 _vMsA[_vRoT].color+=_vClR;
		 _vMsA[_vRoT].size+=_vSzE;
         break
       }
     }
     if(_vRoT>=_vMsA.length)
     {
       idx=_vMsA.length;
       _vMsA[idx]=new Object();
       _vMsA[idx].id=_vEcO;
       _vMsA[idx].number=_vIdO;
	   _vMsA[idx].color=_vClR;
	   _vMsA[idx].size=_vSzE;
     }
   }
   var _vXhH=_s7ZkT[832];
   for(var _vRoT=0;_vRoT<_vMsA.length;_vRoT++)
   {
     if(_vXhH)
     {
       _vXhH+=_s7ZkT[833]
     }
     _vXhH+=_vMsA[_vRoT].id+_s7ZkT[834]+_vMsA[_vRoT].number+_s7ZkT[835]
   }
   if(_fKlR())
   {
     _fJzG(_vZwM,_vXhH,CART_CACHE_DURATION)
   }
   else if(_fGjP)
   {
     localStorage.setItem(_vZwM,_vXhH)
   }
 }
 function _fFaU(_vZwM,_vEcO,_vIdO)
 {
   var _vMsA=_fWvI(_vZwM);
   if(_vMsA)
   {
     for(var _vRoT=0;_vRoT<_vMsA.length;_vRoT++)
     {
       if(_vMsA[_vRoT].id==_vEcO)
       {
         _vMsA[_vRoT].number=_vIdO;
         break
       }
     }
     if(_vMsA.length)
     {
       var _vXhH=_s7ZkT[836];
       for(var _vRoT=0;_vRoT<_vMsA.length;_vRoT++)
       {
         if(_vXhH)
         {
           _vXhH+=_s7ZkT[837]
         }
         _vXhH+=_vMsA[_vRoT].id+_s7ZkT[838]+_vMsA[_vRoT].number+_s7ZkT[839]
       }
       if(_fKlR())
       {
         _fJzG(_vZwM,_vXhH,CART_CACHE_DURATION)
       }
       else if(_fGjP)
       {
         localStorage.setItem(_vZwM,_vXhH)
       }
       return true
     }
   }
   return false
 }
 function _fTmN(_vZwM,_vEcO)
 {
   var _vMsA=_fWvI(_vZwM);
   if(_vMsA)
   {
     for(var _vRoT=0;_vRoT<_vMsA.length;_vRoT++)
     {
       if(_vMsA[_vRoT].id==_vEcO)
       {
         _vMsA[_vRoT].number=0;
         break
       }
     }
     if(_vRoT>=_vMsA.length)
     {
       return false
     }
     if(_vMsA.length)
     {
       var _vXhH=_s7ZkT[840];
       for(var _vRoT=0;_vRoT<_vMsA.length;_vRoT++)
       {
         if(_vMsA[_vRoT].number)
         {
           if(_vXhH)
           {
             _vXhH+=_s7ZkT[841]
           }
           _vXhH+=_vMsA[_vRoT].id+_s7ZkT[842]+_vMsA[_vRoT].number+_s7ZkT[843]
         }
       }
       if(_fKlR())
       {
         _fJzG(_vZwM,_vXhH,CART_CACHE_DURATION)
       }
       else if(_fGjP)
       {
         localStorage.setItem(_vZwM,_vXhH)
       }
       return true
     }
   }
   return false
 }
 function _fAiX(_vZwM)
 {
   if(_fKlR())
   {
     _fJzG(_vZwM,_s7ZkT[844]);
     return true
   }
   else if(_fGjP)
   {
     localStorage.removeItem(_vZwM);
     return true
   }
   return false
 }
 if(_fKiX())
 {
   $(_s7ZkT[845]).removeClass(_s7ZkT[846]).attr(_s7ZkT[847],_fYiQ(_s7ZkT[848]));
   $(_s7ZkT[849]).removeClass(_s7ZkT[850]).attr(_s7ZkT[851],_fYiQ(_s7ZkT[852]))
 }
 $(_s7ZkT[853]).html(function()
 {
   var _vKiG=_s7ZkT[854];
   var _vEcO=$(this).attr(_s7ZkT[855]);
   if(_fKiX()&&!_vRmW)
   {
     if(!_vRmW)
     {
       _vKiG+=_s7ZkT[856];
       _vKiG+=_s7ZkT[857];
       _vKiG+=_s7ZkT[858];
       _vKiG+=_s7ZkT[859]+_vEcO+_s7ZkT[860]+_fYiQ(_s7ZkT[861])+_s7ZkT[862]+_fYiQ(_s7ZkT[863])+_s7ZkT[864];
       _vKiG+=_s7ZkT[865];
       _vKiG+=_s7ZkT[866]
     }
     _vKiG+=_s7ZkT[874];
     _vKiG+=_s7ZkT[875];
     _vKiG+=_s7ZkT[876]
   }
   return _vKiG
 }
 );
 
 function _fKaZ(_vZwM)
 {
   var _vFdF=$(_s7ZkT[881]);
   if(_vZwM==_vKkA)
   {
     _vFdF=$(_s7ZkT[882])
   }
   var _vMsA=_fWvI(_vZwM);
   _vFdF.find(_s7ZkT[883]).remove();
   if(_vMsA)
   {
     _vFdF.find(_s7ZkT[884]).each(function()
     {
       $(_s7ZkT[885]+_vMsA.length+_s7ZkT[886]).insertAfter($(this))
     }
     )
   }
 }
 _fKaZ(_vAqF);
 function _fSxK(_vZhF) {
     if (!$(_vZhF).is(_s7ZkT[887])) {
         var _vIdO = 1;
         if ($(_vZhF).find(_s7ZkT[888]).length) {
             _vIdO = Number($(_s7ZkT[2380]).val())
             _vSzE = $(_s7ZkT[2381]).val()
             _vClR = $(_s7ZkT[2382]).val()
            }
         var _vEcO = $(_vZhF).attr(_s7ZkT[890]);
         if (_vEcO && _vIdO) {
             _fTxY(_vAqF, _vEcO, _vIdO);
             _fKaZ(_vAqF);
             if ($(_vZhF).find(_s7ZkT[891]).length) {
                 $(_vZhF).parents(_s7ZkT[892]).each(function() {
                     $(this).find(_s7ZkT[893]).each(function() {
                         $(_s7ZkT[894]).html(_s7ZkT[895] + $(this).html() + _s7ZkT[896] + _s7ZkT[897] + _s7ZkT[898] + _s7ZkT[899] + _s7ZkT[900])
                     })
                 })
             }
             if ($(_vZhF).is(_s7ZkT[901])) {
                 $(_vZhF).html(_s7ZkT[902] + _fYiQ(_s7ZkT[903]))
             }
         }
     }
 }
 $(_s7ZkT[904]).click(function() {
     $('.shopping-msg').show()
     _fSxK($(this))
 });
 $(_s7ZkT[905]).click(function()
 {
   if(!$(this).is(_s7ZkT[906]))
   {
     var _vIdO=1;
     var _vEcO=$(this).attr(_s7ZkT[907]);
     if(_vEcO)
     {
       _fTxY(_vKkA,_vEcO,_vIdO);
       $(this).parents(_s7ZkT[908]).each(function()
       {
         $(this).find(_s7ZkT[909]).each(function()
         {
           $(_s7ZkT[910]).html(_s7ZkT[911]+$(this).html()+_s7ZkT[912]+_fYiQ(_s7ZkT[913])+_s7ZkT[914]+_fYiQ(_s7ZkT[915])+_s7ZkT[916])
         }
         )
       }
       )
     }
   }
 }
 );
 $(_s7ZkT[917]+_fYiQ(_s7ZkT[918])+_s7ZkT[919]+_s7ZkT[920]+_s7ZkT[921]+_fYiQ(_s7ZkT[922])+_s7ZkT[923]+_fYiQ(_s7ZkT[924])+_s7ZkT[925]).appendTo(_s7ZkT[926]);
 var _vZuW=_fWvI(_vAqF);
 var _vKkP=0;
 var _vYuJ=false;
 var _vUaC=_s7ZkT[927];
 var _vVgS=false;
 function _fPmZ()
 {
   if(!_vYuJ)
   {
     $(_s7ZkT[928]).hide();
     return
   }
   if(_vVgS)
   {
     return
   }
   _vVgS=true;
   $.get(Feed_URL+_s7ZkT[929]+_vZuW[_vKkP].id+_s7ZkT[930],function(_vKhU)
   {
     _vVgS=false;
     if(!_vYuJ)
     {
       $(_s7ZkT[931]).hide();
       return
     }
     var _vZsG=_fVaR(_vKhU);
     var _vEnW=_s7ZkT[932];
	 var _vEaP='';
	 var _vHsC='';
	 var _vEdI='';
	 var _vKoko='';
       if(_vZsG.cate.length)
       {
         for(var _vRoT=0;_vRoT<_vZsG.cate.length;_vRoT++)
         {
           var _vPrL=_vZsG.cate[_vRoT];
           if(_vPrL&&_vPrL.length>1&&!isNaN(_vPrL.substring(1)))
           {
             if(_vPrL.indexOf(_s7ZkT[1052])==0)
             {
               _vEnW=_vPrL.substring(1);
             }
			 else if(_vPrL.indexOf(_s7ZkT[567])==0)
			{
			_vKoko=_vPrL.substring(1);
		   if(_vKoko==0)
		   {
			   _vEdI=0;
		   }
		   else if(_vKoko>0)
		   {
			   _vEdI=_vKoko/100;
		   }
         }
		 _vHsC=_vEnW*_vEdI;
		 _vEaP=_vEnW-_vHsC;
           }
         }
     }
     if(_vZsG.id)
     {
       _vUaC+=_s7ZkT[934]+_vZsG.id+_s7ZkT[935]+_vZsG.link+_s7ZkT[936]+_vZsG.thumbnail.replace('http:', 'https:')+_s7ZkT[937]+_vZsG.link+_s7ZkT[938]+_vZsG.title+_s7ZkT[939]+_vZuW[_vKkP].number+_s7ZkT[940]+_vEaP+_s7ZkT[941]+convertToRupiah(_vEaP)+_s7ZkT[942]+_vZuW[_vKkP].id+_s7ZkT[943];
       _vKkP++;
       if(_vKkP<_vZuW.length)
       {
         _fPmZ()
       }
       else
       {
		 var _vOdE=_s7ZkT[944]+_vUaC+_s7ZkT[945];
         $(_s7ZkT[947]).html(_vOdE);
         $(_s7ZkT[948]).remove();
         var _vAdS=0;
         $(_s7ZkT[949]).each(function()
         {
           var _vBxE=Number($(this).find(_s7ZkT[950]).attr(_s7ZkT[951]));
           var _vIdO=Number($(this).find(_s7ZkT[952]).html());
           _vAdS+=(_vBxE*_vIdO)
         }
         );
         $(_s7ZkT[953]).html(convertToRupiah(_vAdS));
         $(_s7ZkT[954]).click(function()
         {
           var _vEcO=$(this).attr(_s7ZkT[955]);
           _fTmN(_vAqF,_vEcO);
           _fKaZ(_vAqF);
           _fCtY()
         }
         )
       }
     }
     else
     {
       if(!_fCiN())
       {
         alert(_s7ZkT[956])
       }
     } 
   }
   ,_s7ZkT[957]).fail(function()
   {
     if(!_fCiN())
     {
       alert(_s7ZkT[958])
     }
   }
   )
 }
 function _fCtY()
 {
   if($(_s7ZkT[959]).find(_s7ZkT[960]).length)
   {
     $(_s7ZkT[961]).show();
     $(_s7ZkT[962]).html(_s7ZkT[963]+AJAX_LOADING_IMAGE+_s7ZkT[964]);
     $(_s7ZkT[965]).html(_s7ZkT[966]);
     _vZuW=_fWvI(_vAqF);
     _vKkP=0;
     _vUaC=_s7ZkT[967];
     if(_vZuW!==false)
     {
       _vYuJ=true;
       _fPmZ()
     }
   }
   else
   {
     $(_s7ZkT[968]).hide()
   }
 }
 $(_s7ZkT[969]).mouseenter(function()
 {
   if(_vYuJ==false&&(!$(this).is(_s7ZkT[970])))
   {
     _fCtY()
   }
 }
 );
 $(_s7ZkT[971]).mousedown(function()
 {
   if(_vYuJ==false&&(!$(this).is(_s7ZkT[972])))
   {
     _fCtY()
   }
 }
 );
 $(_s7ZkT[973]).mouseleave(function()
 {
   _vYuJ=false;
   $(_s7ZkT[974]).hide()
 }
 );
 var _vBeZ=_fWvI(_vKkA);
 var _vRnF=0;
 function _fUmN(o)
 {
   $(o).each(function()
   {
     _vEcO=$(this).attr(_s7ZkT[975]);
     _fTmN(_vKkA,_vEcO);
     $(_s7ZkT[976]+_vEcO+_s7ZkT[977]).remove();
     if($(_s7ZkT[978]).length==0)
     {
       $(_s7ZkT[979]).prepend(_s7ZkT[980]+_fYiQ(_s7ZkT[981])+_s7ZkT[982])
     }
   }
   )
 }
 function _fAwV()
 {
   $.get(Feed_URL+_s7ZkT[983]+_vBeZ[_vRnF].id+_s7ZkT[984],function(_vKhU)
   {
     var _vSsW=_fVaR(_vKhU);
     if(_vSsW.id)
     {
       var _vIgM=_s7ZkT[985];
       _vZhF=_vSsW;
       _vIgM+=_s7ZkT[991]+_s7ZkT[992]+_vZhF.id+_s7ZkT[993];
       _vIgM+=_s7ZkT[994]+_vZhF.link+_s7ZkT[995];
       _vIgM+=_s7ZkT[996]+_vZhF.thumbnail.replace('http:', 'https:')+_s7ZkT[997];
       _vIgM+=_s7ZkT[998];
       _vIgM+=_s7ZkT[999];
       _vIgM+=_s7ZkT[1000]+_vZhF.link+_s7ZkT[1001]+_vZhF.title+_s7ZkT[1002];
       _vIgM+=_s7ZkT[1011];
       _vIgM+=_s7ZkT[1012]+_vZhF.id+_s7ZkT[1013]+_fYiQ(_s7ZkT[1014])+_s7ZkT[1015];
       _vIgM+=_s7ZkT[1016];
       _vIgM+=_fIgM(_vZhF.cate);
       _vIgM+=_s7ZkT[1017];
       $(_s7ZkT[1018]).each(function()
       {
         $(_vIgM).insertBefore($(this))
       }
       );
       _vRnF++;
       if(_vRnF<_vBeZ.length)
       {
         _fAwV()
       }
       else
       {
         $(_s7ZkT[1019]).each(function()
         {
           $(this).remove()
         }
         );
         _fVyM();
         $(_s7ZkT[1020]).click(function()
         {
		   $('.shopping-msg').show()
           _fSxK($(this))
         }
         );
         $(_s7ZkT[1021]).click(function()
         {
           _fUmN($(this))
         }
         )
       }
     }
     else
     {
       if(!_fCiN())
       {
         alert(_s7ZkT[1022])
       }
     }
   }
   ,_s7ZkT[1023]).fail(function()
   {
     if(!_fCiN())
     {
       alert(_s7ZkT[1024])
     }
   }
   )
 }

 
 if(_fXcO())
 {
	$(_s7ZkT[1025]).addClass(_s7ZkT[1026]);
	$(_s7ZkT[1027]).addClass(_s7ZkT[1028]);
	$('.owl-carousel').remove();
	var _vIeW = '';
	_vIeW += '<div class="confirm-form"><div class="wide"><div class="conf-success hidden" style="font-size:25px; font-weight:bold; text-decoration:italic;">Pesan sudah di kirimkan</div>';
	_vIeW += '<form id="confirm-id" class="confirm eve" name="confirm" method="post" action="">';
	_vIeW += '<h3>Konfirmasi Pembelian</h3>';
	_vIeW += '<div class="conf-field">';
	_vIeW += '<p id="conf_name_field" class="form-row form-row-wide validate-required">';
	_vIeW += '<label class="" for="confirName">Nama Lengkap</label>';
	_vIeW += '<input id="confName" class="input-text" name="confName" placeholder="" type="text">';
	_vIeW += '</input></p>';
	_vIeW += '<p id="conf_id_field" class="form-row form-row-wide validate-required">';
	_vIeW += '<label class="" for="confId">Nomer Tagihan</label>';
	_vIeW += '<input id="confId" class="input-text" name="confId" placeholder="" type="text">';
	_vIeW += '</input></p>';	
	_vIeW += '<p id="conf_email_field" class="form-row form-row-wide validate-required">';
	_vIeW += '<label class="" for="confEmail">Alamat Email</label>';
	_vIeW += '<input id="confEmail" class="input-text" name="confEmail" placeholder="" type="text">';
	_vIeW += '</input></p>';
	_vIeW += '<p id="conf_text_field" class="form-row form-row-wide validate-required">';
	_vIeW += '<label class="" for="confText">Catatan Tambahan</label>';
	_vIeW += '<textarea id="confText" class="input-text" name="confText" placeholder="" type="text"/></p>';
	_vIeW += '<button type="submit" class="btn-confirm" id="btn-confirm">Kirim Konfirmasi Pembayaran</button></div></div></form>';
	_vIeW += '</div>';	
	$(".confirm-page").html(_vIeW);

 $("#confirm-id").submit(function(event){
    // cancels the form submission
    event.preventDefault();
	var IoName = $('#confName').val();
	var IoMail = $('#confEmail').val();
	var IoNumb = $('#confId').val();
	var IoText = $('#confText').val();
	var IoCcon = 'Name : '+IoName+'<br/>'+'Nomer Pelanggan : '+IoNumb+'<br/>'+'Email : '+IoMail+'<br/>'+'Pesan Tambahan : '+IoText;
	_fCtU(IoName, IoMail, IoCcon, Admin_Email);
	$('.conf-success').removeClass('hidden');
	$('.eve').addClass('hidden');
	});	

 }
	
 
 function _fCtU(a, b, c, d)
{
	var elemen = document.getElementById("confirm-id");
	var formData = new FormData(elemen);
	formData.append("SEmail", "Konfirmasi Pembayaran");
	formData.append("TEmail", a);
	formData.append("UMail", b);
	formData.append("Ccontent", c);
	formData.append("UEmail", d);
		$.ajax({
		url: "https://lapakologis.com/phpmailer/confmail.php",
		type: "POST",
		data: formData,
		contentType: false,
		processData:false,
		crossDomain:true,
		});
}
 var _vAvL=_fWvI(_vAqF);
 var _vBzG=0;
 var _vKiA=_s7ZkT[1036];
 if(_fBlR())
 {
   $(_s7ZkT[1037]).addClass(_s7ZkT[1038]);
   $(_s7ZkT[1039]).addClass(_s7ZkT[1040]);
   $(_s7ZkT[1041]).addClass(_s7ZkT[1042]);
   $(_s7ZkT[1043]).prepend(_s7ZkT[1044]);
   $(_s7ZkT[1045]).prepend(_s7ZkT[1046]);
   $(_s7ZkT[1047]).prepend(_s7ZkT[1048]);
   function _fUbS()
   {
     $.get(Feed_URL+_s7ZkT[1049]+_vAvL[_vBzG].id+_s7ZkT[1050],function(_vKhU)
     {
       var _vZsG=_fVaR(_vKhU);
       var _vEnW=_s7ZkT[1051];
	   var _vEaP='';
	   var _vHsC='';
	   var _vEdI='';
	   var _vKoko='';
       if(_vZsG.cate.length)
       {
         for(var _vRoT=0;_vRoT<_vZsG.cate.length;_vRoT++)
         {
           var _vPrL=_vZsG.cate[_vRoT];
           if(_vPrL&&_vPrL.length>1&&!isNaN(_vPrL.substring(1)))
           {
             if(_vPrL.indexOf(_s7ZkT[1052])==0)
             {
               _vEnW=_vPrL.substring(1);
             }
			 else if(_vPrL.indexOf(_s7ZkT[567])==0)
			{
			_vKoko=_vPrL.substring(1);
		   if(_vKoko==0)
		   {
			   _vEdI=0;
		   }
		   else if(_vKoko>0)
		   {
			   _vEdI=_vKoko/100;
		   }
         }
		 _vHsC=_vEnW*_vEdI;
		 _vEaP=_vEnW-_vHsC;
           }
         }
       }
       if(_vZsG.id)
       {
         _vKiA+=_s7ZkT[1053]+_vZsG.id+_s7ZkT[1054]+_fYiQ(_s7ZkT[1055])+_s7ZkT[1056]+_vZsG.id+_s7ZkT[1057]+_vZsG.link+_s7ZkT[1058]+_vZsG.thumbnail.replace('http:', 'https:')+_s7ZkT[1059]+_vZsG.link+_s7ZkT[1060]+_vZsG.title+_s7ZkT[1061]+_s7ZkT[1062]+_vZsG.id+_s7ZkT[1063]+_vEaP+_s7ZkT[1064]+convertToRupiah(_vEaP)+_s7ZkT[1065]+_s7ZkT[1066]+_vZsG.id+_s7ZkT[1067]+_vZsG.id+_s7ZkT[1068]+_vAvL[_vBzG].number+_s7ZkT[1069]+_vZsG.id+_s7ZkT[1070]+_s7ZkT[1071]+convertToRupiah(Number(_vEaP)*_vAvL[_vBzG].number)+_s7ZkT[1072]+_s7ZkT[1073];
         _vBzG++;
         if(_vBzG<_vAvL.length)
         {
           _fUbS()
         }
         else
         {
           if(_vKiA)
           {
             _vKiA=_s7ZkT[1074]+_fYiQ(_s7ZkT[1075])+_s7ZkT[1076]+_fYiQ(_s7ZkT[1077])+_s7ZkT[1078]+_fYiQ(_s7ZkT[1079])+_s7ZkT[1080]+_fYiQ(_s7ZkT[1081])+_s7ZkT[1082]+_vKiA+_s7ZkT[1083];
             $(_s7ZkT[1084]).html(_vKiA);
             var _vAdS=0;
             $(_s7ZkT[1085]).each(function()
             {
               var _vEcO=$(this).attr(_s7ZkT[1086]);
               var _vBxE=Number($(_s7ZkT[1087]+_vEcO+_s7ZkT[1088]).attr(_s7ZkT[1089]));
               var _vIdO=Number($(_s7ZkT[1090]+_vEcO+_s7ZkT[1091]).val());
               _vAdS+=(_vBxE*_vIdO)
             }
             );
             $(_s7ZkT[1092]).html(_s7ZkT[1093]+_fYiQ(_s7ZkT[1094])+_s7ZkT[1095]+_s7ZkT[1096]+convertToRupiah(_vAdS)+_s7ZkT[1097]+_s7ZkT[1098]);
             $(_s7ZkT[1099]).html(_s7ZkT[1100]+_fYiQ(_s7ZkT[1101])+_s7ZkT[1102]+_fYiQ(_s7ZkT[1103])+_s7ZkT[1104]);
             $(_s7ZkT[1105]).click(function()
             {
               var _vEcO=$(this).attr(_s7ZkT[1106]);
               var _vIdO=Number($(_s7ZkT[1107]+_vEcO+_s7ZkT[1108]).val());
               if($(this).is(_s7ZkT[1109]))
               {
                 if(_vIdO<=1)
                 {
                   $(_s7ZkT[1110]+_vEcO+_s7ZkT[1111]).val(1);
                   return
                 }
                 _vIdO-=1
               }
               else
               {
                 _vIdO++
               }
               $(_s7ZkT[1112]+_vEcO+_s7ZkT[1113]).val(_vIdO)
             }
             );
             $(_s7ZkT[1114]).click(function()
             {
               $(_s7ZkT[1115]).each(function()
               {
                 var _vEcO=$(this).attr(_s7ZkT[1116]);
                 var _vIdO=Number($(_s7ZkT[1117]+_vEcO+_s7ZkT[1118]).val());
                 _fFaU(_vAqF,_vEcO,_vIdO)
               }
               );
               _fRnI()
             }
             );
             $(_s7ZkT[1119]).click(function()
             {
               var _vEcO=$(this).attr(_s7ZkT[1120]);
               _fTmN(_vAqF,_vEcO);
               _fKaZ(_vAqF);
               _fRnI()
             }
             )
           }
         }
       }
       else
       {
         if(!_fCiN())
         {
           alert(_s7ZkT[1121])
         }
       }
     }
     ,_s7ZkT[1122]).fail(function()
     {
       if(!_fCiN())
       {
         alert(_s7ZkT[1123])
       }
     }
     )
   }
   function _fRnI()
   {
     _vAvL=_fWvI(_vAqF);
     _vBzG=0;
     _vKiA=_s7ZkT[1124];
     $(_s7ZkT[1125]).html(_s7ZkT[1126]);
     $(_s7ZkT[1127]).html(_s7ZkT[1128]);
     $(_s7ZkT[1129]).html(_s7ZkT[1130]);
     if(_vAvL)
     {
       $(_s7ZkT[1131]).html(_s7ZkT[1132]+AJAX_LOADING_IMAGE+_s7ZkT[1133]);
       _fUbS()
     }
     else
     {
       $(_s7ZkT[1134]).prepend(_s7ZkT[1135]+_fYiQ(_s7ZkT[1136])+_s7ZkT[1137])
     }
   }
   _fRnI()
 }

// Array System	
var blocks =[];
var _vWeK = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
var _vMoN = ['Januari','Februari','Maret','April','May','Juni','Juli','Augustus','September','Oktober','November','Desember'];
var _vZvQ = [_s7ZkT[1138],_s7ZkT[1139],_s7ZkT[1140],_s7ZkT[1141],_s7ZkT[1142],_s7ZkT[1143],_s7ZkT[1144],_s7ZkT[1145],_s7ZkT[1146],_s7ZkT[1147],_s7ZkT[1148],_s7ZkT[1149],_s7ZkT[1150],_s7ZkT[1151],_s7ZkT[1152],_s7ZkT[1153],_s7ZkT[1154],_s7ZkT[1155],_s7ZkT[1156],_s7ZkT[1157],_s7ZkT[1158],_s7ZkT[1159],_s7ZkT[1160],_s7ZkT[1161],_s7ZkT[1162],_s7ZkT[1163],_s7ZkT[1164],_s7ZkT[1165],_s7ZkT[1166],_s7ZkT[1167],_s7ZkT[1168],_s7ZkT[1169],_s7ZkT[1170],_s7ZkT[1171],_s7ZkT[1172],_s7ZkT[1173],_s7ZkT[1174],_s7ZkT[1175],_s7ZkT[1176],_s7ZkT[1177],_s7ZkT[1178],_s7ZkT[1179],_s7ZkT[1180],_s7ZkT[1181],_s7ZkT[1182],_s7ZkT[1183],_s7ZkT[1184],_s7ZkT[1185],_s7ZkT[1186],_s7ZkT[1187],_s7ZkT[1188],_s7ZkT[1189],_s7ZkT[1190],_s7ZkT[1191],_s7ZkT[1192],_s7ZkT[1193],_s7ZkT[1194],_s7ZkT[1195],_s7ZkT[1196],_s7ZkT[1197],_s7ZkT[1198],_s7ZkT[1199],_s7ZkT[1200],_s7ZkT[1201],_s7ZkT[1202],_s7ZkT[1203],_s7ZkT[1204],_s7ZkT[1205],_s7ZkT[1206],_s7ZkT[1207],_s7ZkT[1208],_s7ZkT[1209],_s7ZkT[1210],_s7ZkT[1211],_s7ZkT[1212],_s7ZkT[1213],_s7ZkT[1214],_s7ZkT[1215],_s7ZkT[1216],_s7ZkT[1217],_s7ZkT[1218],_s7ZkT[1219],_s7ZkT[1220],_s7ZkT[1221],_s7ZkT[1222],_s7ZkT[1223],_s7ZkT[1224],_s7ZkT[1225],_s7ZkT[1226],_s7ZkT[1227],_s7ZkT[1228],_s7ZkT[1229],_s7ZkT[1230],_s7ZkT[1231],_s7ZkT[1232],_s7ZkT[1233],_s7ZkT[1234],_s7ZkT[1235],_s7ZkT[1236],_s7ZkT[1237],_s7ZkT[1238],_s7ZkT[1239],_s7ZkT[1240],_s7ZkT[1241],_s7ZkT[1242],_s7ZkT[1243],_s7ZkT[1244],_s7ZkT[1245],_s7ZkT[1246],_s7ZkT[1247],_s7ZkT[1248],_s7ZkT[1249],_s7ZkT[1250],_s7ZkT[1251],_s7ZkT[1252],_s7ZkT[1253],_s7ZkT[1254],_s7ZkT[1255],_s7ZkT[1256],_s7ZkT[1257],_s7ZkT[1258],_s7ZkT[1259],_s7ZkT[1260],_s7ZkT[1261],_s7ZkT[1262],_s7ZkT[1263],_s7ZkT[1264],_s7ZkT[1265],_s7ZkT[1266],_s7ZkT[1267],_s7ZkT[1268],_s7ZkT[1269],_s7ZkT[1270],_s7ZkT[1271],_s7ZkT[1272],_s7ZkT[1273],_s7ZkT[1274],_s7ZkT[1275],_s7ZkT[1276],_s7ZkT[1277],_s7ZkT[1278],_s7ZkT[1279],_s7ZkT[1280],_s7ZkT[1281],_s7ZkT[1282],_s7ZkT[1283],_s7ZkT[1284],_s7ZkT[1285],_s7ZkT[1286],_s7ZkT[1287],_s7ZkT[1288],_s7ZkT[1289],_s7ZkT[1290],_s7ZkT[1291],_s7ZkT[1292],_s7ZkT[1293],_s7ZkT[1294],_s7ZkT[1295],_s7ZkT[1296],_s7ZkT[1297],_s7ZkT[1298],_s7ZkT[1299],_s7ZkT[1300],_s7ZkT[1301],_s7ZkT[1302],_s7ZkT[1303],_s7ZkT[1304],_s7ZkT[1305],_s7ZkT[1306],_s7ZkT[1307],_s7ZkT[1308],_s7ZkT[1309],_s7ZkT[1310],_s7ZkT[1311],_s7ZkT[1312],_s7ZkT[1313],_s7ZkT[1314],_s7ZkT[1315],_s7ZkT[1316],_s7ZkT[1317],_s7ZkT[1318],_s7ZkT[1319],_s7ZkT[1320],_s7ZkT[1321],_s7ZkT[1322],_s7ZkT[1323],_s7ZkT[1324],_s7ZkT[1325],_s7ZkT[1326],_s7ZkT[1327],_s7ZkT[1328],_s7ZkT[1329],_s7ZkT[1330],_s7ZkT[1331],_s7ZkT[1332],_s7ZkT[1333],_s7ZkT[1334],_s7ZkT[1335],_s7ZkT[1336],_s7ZkT[1337],_s7ZkT[1338],_s7ZkT[1339],_s7ZkT[1340],_s7ZkT[1341],_s7ZkT[1342],_s7ZkT[1343],_s7ZkT[1344],_s7ZkT[1345],_s7ZkT[1346],_s7ZkT[1347],_s7ZkT[1348],_s7ZkT[1349],_s7ZkT[1350],_s7ZkT[1351],_s7ZkT[1352],_s7ZkT[1353],_s7ZkT[1354],_s7ZkT[1355],_s7ZkT[1356],_s7ZkT[1357],_s7ZkT[1358],_s7ZkT[1359],_s7ZkT[1360],_s7ZkT[1361],_s7ZkT[1362],_s7ZkT[1363],_s7ZkT[1364],_s7ZkT[1365],_s7ZkT[1366],_s7ZkT[1367],_s7ZkT[1368],_s7ZkT[1369],_s7ZkT[1370],_s7ZkT[1371],_s7ZkT[1372],_s7ZkT[1373],_s7ZkT[1374],_s7ZkT[1375],_s7ZkT[1376],_s7ZkT[1377],_s7ZkT[1378],_s7ZkT[1379],_s7ZkT[1380],_s7ZkT[1381]];

$(document).ready(function() {
   var _vGuL = window.location.hostname;
for(var _vRoT=0;_vRoT < blocks.length;_vRoT++)
{
	var _vRqE = blocks[_vRoT];
	if(_vGuL.indexOf(_vRqE) != -1)
	{
	 window.location.href = 'http://lapakologis.com/';
	}	
}
  });

// bank list from
var _vEsP=[_s7ZkT[4917],_s7ZkT[4918],_s7ZkT[4919],_s7ZkT[4920],_s7ZkT[4921],_s7ZkT[4922],_s7ZkT[4923],_s7ZkT[4924],_s7ZkT[4925],_s7ZkT[4926],_s7ZkT[4927]];

 var _vQbL=new Object();
 _vQbL.items=new Array();
 _vQbL.id=_fEbX();
 _vQbL.total=0;
 _vQbL.jne=0;
 _vQbL.shipvalue=SHIPPING_FEE;
 _vQbL.kokoro=new Object();
 _vQbL.shipping_info=new Object();
 _vQbL.kokoro.country=_s7ZkT[1382];
 _vQbL.kokoro.full_name=_s7ZkT[1383];
 _vQbL.kokoro.pin_bb=_s7ZkT[1384];
 _vQbL.kokoro.district=_s7ZkT[1385];
 _vQbL.kokoro.address=_s7ZkT[1386];
 _vQbL.kokoro.province=_s7ZkT[1387];
 _vQbL.kokoro.postcodezip=_s7ZkT[1388];
 _vQbL.kokoro.email=_s7ZkT[1389];
 _vQbL.kokoro.phone=_s7ZkT[1390];
 _vQbL.kokoro.districts=_s7ZkT[1390];
 _vQbL.kokoro.service=_s7ZkT[1390];
 _vQbL.kokoro.packed=_s7ZkT[1390];
 _vQbL.kokoro.pack=_s7ZkT[1390];
 _vQbL.shipping_info.country=_s7ZkT[1391];
 _vQbL.shipping_info.full_name=_s7ZkT[1392];
 _vQbL.shipping_info.pin_bb=_s7ZkT[1393];
 _vQbL.shipping_info.district=_s7ZkT[1394];
 _vQbL.shipping_info.address=_s7ZkT[1395];
 _vQbL.shipping_info.province=_s7ZkT[1396];
 _vQbL.shipping_info.postcodezip=_s7ZkT[1397];
 _vQbL.order_notes=_s7ZkT[1399];
 _vQbL.kokoro.idunique=_s7ZkT[1382];
 _vQbL.kokoro.accountname=_s7ZkT[1382];
 _vQbL.kokoro.paymentdate=_s7ZkT[1382];
 _vQbL.kokoro.transferfrom=_s7ZkT[1382];
 _vQbL.kokoro.transferto=_s7ZkT[1382];
 _vQbL.kokoro.totalfunds=_s7ZkT[1382];
 _vQbL.kokoro.emailconfirm=_s7ZkT[1382];
 _vQbL.kokoro.phoneconfirm=_s7ZkT[1382];
 var _vHlM=_fWvI(_vAqF);
 var _vLxZ=0;
 var _vVeE=_s7ZkT[1400];
 
 function _fStT()
 {
   var _vHpD=true;
   var _vHuC=$(_s7ZkT[1401]).is(_s7ZkT[1402]);
   var _vFdF=_s7ZkT[1403];
   if(_vHuC)
   {
     _vFdF=$(_s7ZkT[1404])
   }
   else
   {
     _vFdF=$(_s7ZkT[1405])
   }
   if(_vFdF.length)
   {
     _vFdF.find(_s7ZkT[1406]).each(function()
     {
       if(!($(this).val()))
       {
         _vHpD=false
       }
       else
       {
         if($(this).attr(_s7ZkT[1407]).indexOf(_s7ZkT[1408])!=-1)
         {
           var _vDrV=$(this).val();
           if(_vDrV.indexOf(_s7ZkT[1409])<1||_vDrV.indexOf(_s7ZkT[1410])<3)
           {
             _vHpD=false
           }
           if(_vDrV.length<6)
           {
             _vHpD=false
           }
         }
         else if($(this).attr(_s7ZkT[1411]).indexOf(_s7ZkT[1412])!=-1)
         {
           var _vAlU=$(this).val();
           if(_vAlU.indexOf(_s7ZkT[1413])==0)
           {
             _vAlU=_vAlU.substring(1)
           }
           if(isNaN(_vAlU))
           {
             _vHpD=false
           }
         }
         else if($(this).attr(_s7ZkT[1414]).indexOf(_s7ZkT[1415])!=-1)
         {
           var _vQxG=$(this).val();
           if(isNaN(_vQxG))
           {
             _vHpD=false
           }
         }
       }
     }
     )
   }
 if(_vHpD)
	_vQbL.kokoro.service=$("#billService option:selected").text()
	_vQbL.kokoro.packed=$("#billPacked option:selected").val()
	_vQbL.kokoro.pack=$("#billPacked option:selected").text()
   { 
     if(FIELD_CITY)
     {
       _vQbL.kokoro.country=$(_s7ZkT[1416]).text()
     }
     else
     {
       _vQbL.kokoro.country=_s7ZkT[1417]
     }
     if(FIELD_FULL_NAME)
     {
       _vQbL.kokoro.full_name=$(_s7ZkT[1418]).val()
     }
     else
     {
       _vQbL.kokoro.full_name=_s7ZkT[1419]
     }
     if(FIELD_PIN_BB)
     {
       _vQbL.kokoro.pin_bb=$(_s7ZkT[1420]).val()
     }
     else
     {
       _vQbL.kokoro.pin_bb=_s7ZkT[1421]
     }
     if(FIELD_DISTRICT)
     {
       _vQbL.kokoro.district=$("#billDistrict option:selected").text()
     }
     else
     {
       _vQbL.kokoro.district=_s7ZkT[1423]
     }
     if(FIELD_ADDRESS)
     {
       _vQbL.kokoro.address=$(_s7ZkT[1424]).val()
     }
     else
     {
       _vQbL.kokoro.address=_s7ZkT[1425]
     }
     if(FIELD_PROVINCE)
     {
       _vQbL.kokoro.province=$("#billProvince option:selected").text()
     }
     else
     {
       _vQbL.kokoro.province=_s7ZkT[1427]
     }
     if(FIELD_POST_CODE)
     {
       _vQbL.kokoro.postcodezip=$(_s7ZkT[1428]).val()
     }
     else
     {
       _vQbL.kokoro.postcodezip=_s7ZkT[1429]
     }
     _vQbL.kokoro.email=$(_s7ZkT[1430]).val();
     _vQbL.kokoro.phone=$(_s7ZkT[1431]).val();
	 if(FIELD_CITY)
     {
       _vQbL.shipping_info.country=$(_s7ZkT[1432]).val()
     }
     else
     {
       _vQbL.shipping_info.country=_s7ZkT[1433]
     }
     if(FIELD_FULL_NAME)
     {
       _vQbL.shipping_info.full_name=$(_s7ZkT[1434]).val() 
     }
     else
     {
       _vQbL.shipping_info.full_name=_s7ZkT[1435]
     }
     if(FIELD_PIN_BB)
     {
       _vQbL.shipping_info.pin_bb=$(_s7ZkT[1436]).val()
     }
     else
     {
       _vQbL.shipping_info.pin_bb=_s7ZkT[1437]
     }
     if(FIELD_DISTRICT)
     {
       _vQbL.shipping_info.district=$(_s7ZkT[1438]).val()
     }
     else
     {
       _vQbL.shipping_info.district=_s7ZkT[1439]
     }
     if(FIELD_ADDRESS)
     {
       _vQbL.shipping_info.address=$(_s7ZkT[1440]).val()
     }
     else
     {
       _vQbL.shipping_info.address=_s7ZkT[1441]
     }
     if(FIELD_PROVINCE)
     {
       _vQbL.shipping_info.province=$(_s7ZkT[1442]).val()
     }
     else
     {
       _vQbL.shipping_info.province=_s7ZkT[1443]
     }
     if(FIELD_POST_CODE)
     {
       _vQbL.shipping_info.postcodezip=$(_s7ZkT[1444]).val()
     }
     else
     {
       _vQbL.shipping_info.postcodezip=_s7ZkT[1445]
     }
     _vQbL.order_notes=$(_s7ZkT[1446]).val();
     _vQbL.diff_shipping=$(_s7ZkT[1448]).is(_s7ZkT[1449]);
     $(_s7ZkT[1450]).each(function()
     {
	   var _vPeO="";
	   var _vSyW=new Date();
       var _vEdJ=_s7ZkT[1454]+_s7ZkT[1455]+_s7ZkT[1456]+Blog_Name+_s7ZkT[1458]+_s7ZkT[1459]+_s7ZkT[1460]+_s7ZkT[1461]+_s7ZkT[1462]+_s7ZkT[1463]+_s7ZkT[1464];
       _vEdJ+=_s7ZkT[1465]+_s7ZkT[1466]+_s7ZkT[1467]+_vQbL.id;
       _vEdJ+=_s7ZkT[1468]+_s7ZkT[1469]+_vWeK[_vSyW.getDay()]+', '+(_vSyW.getDate())+' '+_vMoN[_vSyW.getMonth()]+' '+_vSyW.getFullYear()+_s7ZkT[1470];
       _vEdJ+=_s7ZkT[1471]+_s7ZkT[1472]+_s7ZkT[1473]+_vQbL.kokoro.full_name+_s7ZkT[1474];
	   if(PackServices=="yes"||PackServices=="Yes"||PackServices=="YES")
	   {
		// Get ESD   
		var _vBtG = _vQbL.kokoro.pack.indexOf(")");
		var _vByW = _vQbL.kokoro.pack.indexOf("(") + 1;
		var _vBuT = _vBtG-_vByW;
		var _vBeC = _vQbL.kokoro.pack.substr(_vByW, _vBuT);
		
		// Get Service (REG, OKE, YES)
		var _vKwI = _vQbL.kokoro.pack.indexOf("("); //4
		var _vKqY =  _vKwI-1;
		var _vKuQ = _vQbL.kokoro.pack.substr(0, _vKqY);
 
       _vEdJ+=_s7ZkT[1475]+_s7ZkT[1476]+ _vQbL.kokoro.service + '<br/>' + _vKuQ + '<br/>' + _vBeC +_s7ZkT[1477];
	   }
	   else
	   {
       _vPeO='<span style="color:#fff;font-size:11px;">Total Pembayaran Di Bawah Ini Belum Termasuk Biaya Pengiriman Barang</span>';
	   }
       _vEdJ+=_s7ZkT[1478]+_s7ZkT[1479]+_s7ZkT[1480];
       _vEdJ+=_s7ZkT[1481]+_s7ZkT[1482]+_s7ZkT[1483]+_vQbL.order_notes+_s7ZkT[1484]+_vPeO;
	   _vEdJ+=_s7ZkT[1485]+_s7ZkT[1486]+_s7ZkT[1487]+_s7ZkT[1488]+_s7ZkT[1489]+_s7ZkT[1490]+_s7ZkT[1491];
       for(var _vRoT=0;_vRoT<_vQbL.items.length;_vRoT++)
       {
         var _vZhF=_vQbL.items[_vRoT];
         _vEdJ+=_s7ZkT[1492]+_s7ZkT[1493]+_vZhF.link+_s7ZkT[1494]+_vZhF.title+_s7ZkT[1495];
         _vEdJ+=_s7ZkT[1496]+_vZhF.number+_s7ZkT[1497];
         _vEdJ+=_s7ZkT[1498]+convertToRupiah(_vZhF.price*_vZhF.number)+_s7ZkT[1499];
       }
   var _vJnI=_s7ZkT[1615];
  	 var _vStG=Number(_vQbL.kokoro.packed);
	 var _vCgT=Number(_vQbL.total);
	   if(PackServices=="yes"||PackServices=="Yes"||PackServices=="YES")
	   {
		 _vEdJ+=_s7ZkT[1500]+_s7ZkT[1501]+_s7ZkT[1502]+convertToRupiah(_vQbL.total)+_s7ZkT[1503];
		 var _vTqJ= Free_Cost.indexOf(_vQbL.kokoro.province);
		if(_vTqJ != -1)
		{
		 var _vVgS=_vCgT;
		 _vEdJ+=_s7ZkT[1504]+_s7ZkT[1505]+_s7ZkT[1506]+'Gratis'+_s7ZkT[1507];
		}
		else
		{
		 var _vVgS=_vStG+_vCgT;
		 _vEdJ+=_s7ZkT[1504]+_s7ZkT[1505]+_s7ZkT[1506]+convertToRupiah(_vQbL.kokoro.packed)+_s7ZkT[1507];
		}
	   }
	   else
	   {
		 var _vVgS=_vCgT;
	   }
       _vEdJ+=_s7ZkT[1513]+_s7ZkT[1514]+_s7ZkT[1515]+convertToRupiah(_vVgS)+_s7ZkT[1516];
	   _vEdJ+=_s7ZkT[1517]+_s7ZkT[1518]+_s7ZkT[1519]+_vQbL.kokoro.full_name+'<br>'+_vQbL.kokoro.address+'<br>'+_vQbL.kokoro.district+', '+_vQbL.kokoro.country+'<br>'+_vQbL.kokoro.province+' – '+_vQbL.kokoro.postcodezip+'<br> No. Telp: '+_vQbL.kokoro.phone+'<br> Email: '+_vQbL.kokoro.email+'<br> PIN BB: '+_vQbL.kokoro.pin_bb;
	   _vEdJ+=_s7ZkT[1520]+window.location.hostname+_s7ZkT[1521]+WA_number+_s7ZkT[1522]+WA_number+_s7ZkT[1523]+_s7ZkT[1524]+_s7ZkT[1525];
       _ajax(_vEdJ, _vQbL.kokoro.email, Admin_Email, Blog_Name)
     }
     )
   }
   return _vHpD
 } 
  

 function _ajax(para, meter, mail, blog)
{
	var elemen = document.getElementById("checkout-id");
	var formData = new FormData(elemen);
	formData.append("subjectEmail", "Permintaan dan Tagihan Pembelian Barang Masuk");
	formData.append("titleEmail", blog);
	formData.append("userEmail", mail);
	formData.append("userMail", meter);
	formData.append("content", para);
		$.ajax({
		url: "https://lapakologis.com/phpmailer/email.php",
		type: "POST",
		data: formData,
		contentType: false,
		processData:false,
		crossDomain:true
		});
}
 
 function _fWhM()
 {
   var _vHpD=true;
   var _vHuC=$(_s7ZkT[1586]).is(_s7ZkT[1587]);
   var _vFdF=_s7ZkT[1588];
   var _vGsM=_s7ZkT[1589];
   if(_vHuC)
   {
     _vFdF=$(_s7ZkT[1590])
   }
   else
   {
     _vFdF=$(_s7ZkT[1591])
   }
   if(_vFdF.length)
   {
     _vFdF.find(_s7ZkT[1592]).each(function()
     {
       var _vAjL=true;
       if(!($(this).val()))
       {
         _vAjL=false
       }
       else
       {
         if($(this).attr(_s7ZkT[1593]).indexOf(_s7ZkT[1594])!=-1)
         {
           var _vDrV=$(this).val();
           if(_vDrV.indexOf(_s7ZkT[1595])<1||_vDrV.indexOf(_s7ZkT[1596])<3)
           {
             _vAjL=false
           }
           if(_vDrV.length<6)
           {
             _vAjL=false
           }
         }
         else if($(this).attr(_s7ZkT[1597]).indexOf(_s7ZkT[1598])!=-1)
         {
           var _vAlU=$(this).val();
           if(_vAlU.indexOf(_s7ZkT[1599])==0)
           {
             _vAlU=_vAlU.substring(1)
           }
           if(isNaN(_vAlU))
           {
             _vAjL=false
           }
         }
         else if($(this).attr(_s7ZkT[1600]).indexOf(_s7ZkT[1601])!=-1)
         {
           var _vQxG=$(this).val();
           if(isNaN(_vQxG))
           {
             _vAjL=false
           }
         }
       }
       if(_vAjL)
       {
         $(this).removeAttr(_s7ZkT[1602])
       }
       else
       {
         $(this).css(_s7ZkT[1603],_s7ZkT[1604]);
         if(!_vGsM)
         {
           _vGsM=$(this)
         }
       }
       if(!_vAjL)
       {
         _vHpD=false
       }
     }
     )
   }
   if(!_vHpD)
   {
     var _vPzZ=150;
     if(_vGsM)
     {
       _vPzZ=_vGsM.offset().top
     }
     $(_s7ZkT[1605]).animate(
     {
       scrollTop:_vPzZ
     }
     ,600)
   }
   else
   {
     _fCzQ(_s7ZkT[1606],_vQbL.kokoro.country);
     _fCzQ(_s7ZkT[1607],_vQbL.kokoro.full_name);
     _fCzQ(_s7ZkT[1608],_vQbL.kokoro.pin_bb);
     _fCzQ(_s7ZkT[1609],_vQbL.kokoro.district);
	 _fCzQ(_s7ZkT[1609],_vQbL.kokoro.packed);
	 _fCzQ(_s7ZkT[1609],_vQbL.kokoro.pack);
	 _fCzQ(_s7ZkT[1609],_vQbL.kokoro.service);
     _fCzQ(_s7ZkT[1610],_vQbL.kokoro.address);
     _fCzQ(_s7ZkT[1611],_vQbL.kokoro.province);
     _fCzQ(_s7ZkT[1612],_vQbL.kokoro.postcodezip);
     _fCzQ(_s7ZkT[1613],_vQbL.kokoro.email);
     _fCzQ(_s7ZkT[1614],_vQbL.kokoro.phone)
   }
   return _vHpD
 }
 var _vFmK=0;
 var _vXqN;
 function _fIkK()
 {

   clearInterval(_vXqN);
   var _vStG=Number(_vQbL.jne);
   var _vCgT=Number(_vQbL.total);
   var _vJnI=_s7ZkT[1615];
   var _vDgT=0;
	for(var _vRoT=0;_vRoT<_vQbL.items.length;_vRoT++)
	{
	 var _vIrM=_vQbL.items[_vRoT];
     _vDgT+=_vIrM.weight*_vIrM.number;
	}
	 var _vTwS=Math.floor(_vDgT);
	 var _vGrQ=parseFloat(_vTwS+0.3);
	 if(_vDgT>_vGrQ)
	 {
		 _vYsG=_vTwS+1;
	 }
	 else if(_vDgT<_vGrQ)
	 {
		 if(_vDgT==0)
		 {
			 _vYsG='Null';
		 }
		 else
		 {
			_vYsG=_vDgT/1000;
		 }
	 }
	 if(_vDgT<1)
	 {
		var _vTwQ=1;
	 }
	 else
	 {
		var _vTwQ=_vYsG;
	 }

	if(_vFwO&&_fDqS(_vFwO,true))
	{
     _vVgS=_fSyI(_vFwO,_vQbL.total-_vQbL.kokoro.packed);
     _vJnI+=_s7ZkT[1616]+_fYiQ(_s7ZkT[1617])+_s7ZkT[1618]+_vFwO+_s7ZkT[1619]+_fDqS(_vFwO,false)+_s7ZkT[1620]
	}
	 var _vStG=Number(_vQbL.kokoro.packed);
	 var _vCgT=Number(_vQbL.total);
     var _vSyW=new Date();
     var _vAeA=$(_s7ZkT[1624]).is(_s7ZkT[1625]);
	 if(PackServices=="yes"||PackServices=="Yes"||PackServices=="YES")
	 {
		var _vTqJ= Free_Cost.indexOf(_vQbL.kokoro.province);
		if(_vTqJ != -1)
		{
		 var _vVgS= _vCgT;
		 var _vGqS= _s7ZkT[1681]+_fYiQ(_s7ZkT[1682])+_s7ZkT[1683]+convertToRupiah(_vQbL.total)+_s7ZkT[1684]+_fYiQ(_s7ZkT[1685])+_s7ZkT[1686]+'Gratis'+_s7ZkT[1687];
		}
		else
		{
		 var _vVgS= _vCgT+_vStG;
		 var _vGqS= _s7ZkT[1681]+_fYiQ(_s7ZkT[1682])+_s7ZkT[1683]+convertToRupiah(_vQbL.total)+_s7ZkT[1684]+_fYiQ(_s7ZkT[1685])+_s7ZkT[1686]+convertToRupiah(_vQbL.kokoro.packed)+_s7ZkT[1687]; 
		}
	 }
	 else
	 {
		var _vVgS=_vCgT;
		var _vGqS='';
	 }
		// Get ESD   
		var _vBtG = _vQbL.kokoro.pack.indexOf(")");
		var _vByW = _vQbL.kokoro.pack.indexOf("(") + 1;
		var _vBuT = _vBtG-_vByW;
		var _vBeC = _vQbL.kokoro.pack.substr(_vByW, _vBuT);
		
		// Get Service (REG, OKE, YES)
		var _vKwI = _vQbL.kokoro.pack.indexOf("("); //4
		var _vKqY =  _vKwI-1;
		var _vKuQ = _vQbL.kokoro.pack.substr(0, _vKqY);
 
     var _vIgM=_s7ZkT[1626]+_s7ZkT[1627]+WA_number+_s7ZkT[1628]+WA_number+_s7ZkT[1629]+_s7ZkT[1630]+_s7ZkT[1631]+_vQbL.id+_s7ZkT[1632]+(_vSyW.getDate())+_s7ZkT[1633]+(_vSyW.getMonth()+1)+_s7ZkT[1634]+_vSyW.getFullYear()+_s7ZkT[1635]+convertToRupiah(_vVgS)+_s7ZkT[1636]+_vYsG.toFixed(2)+' Kg'+_s7ZkT[1637]+_vQbL.kokoro.service+_s7ZkT[1638]+_vKuQ+_s7ZkT[1639]+_vBeC+_s7ZkT[1640]+'Bank Transfer'+_s7ZkT[1641];
	 _vIgM+=_s7ZkT[1642]+_s7ZkT[1643]+_vQbL.kokoro.full_name+_s7ZkT[1644]+_vQbL.kokoro.address+_s7ZkT[1645]+_vQbL.kokoro.province+_s7ZkT[1646]+_vQbL.kokoro.country+_s7ZkT[1647]+_vQbL.kokoro.district+_s7ZkT[1648]+_vQbL.kokoro.postcodezip+_s7ZkT[1649]+_vQbL.kokoro.email+_s7ZkT[1650]+_vQbL.kokoro.phone+_s7ZkT[1651]+_vQbL.kokoro.pin_bb+_s7ZkT[1652];
	 _vIgM+=_s7ZkT[1674]+_fYiQ(_s7ZkT[1675])+_s7ZkT[1676]+_fYiQ(_s7ZkT[1677])+_s7ZkT[1678]+_fYiQ(_s7ZkT[1679])+_s7ZkT[1680]+_vGqS+_s7ZkT[1688]+_fYiQ(_s7ZkT[1689])+_s7ZkT[1690]+convertToRupiah(_vVgS)+_s7ZkT[1691];
     for(var _vRoT=0;_vRoT<_vQbL.items.length;_vRoT++)
     {
       var _vIrM=_vQbL.items[_vRoT];
       _vIgM+=_s7ZkT[1692]+_vIrM.title+_s7ZkT[1693]+_vIrM.number+_s7ZkT[1694]+convertToRupiah(_vIrM.number*_vIrM.price)+_s7ZkT[1695]
     }   
     $(_s7ZkT[1726]).html(_vIgM);
     _fAiX(_vAqF);
     _fKaZ()
 }
 function _fHfH()
 {
   $(_s7ZkT[1764]).hide();
   $(_s7ZkT[1765]).show();
   _vXqN=setInterval(function()
   {
     if($(_s7ZkT[1766]).html())
     {
       _fIkK()
     }
     _vFmK++;
     if(_vFmK==1000)
     {
       if(!$(_s7ZkT[1767]).html())
       {
         _fIkK()
       }
       else
       {
         clearInterval(_vXqN);
         if(!_fCiN())
         {
           alert(_s7ZkT[1768])
         }
         $(_s7ZkT[1769]).show();
         $(_s7ZkT[1770]).hide()
       }
     }
   }
   ,10)
 }
 function _fLgO()
 {
   $.get(Feed_URL+_s7ZkT[1771]+_vHlM[_vLxZ].id+_s7ZkT[1772],function(_vKhU)
   {
     var _vFaH=_fVaR(_vKhU);
     var _vEnW=_s7ZkT[1051];
	 var _vEaP='';
	 var _vHsC='';
	 var _vEdI='';
	 var _vKoko='';
	 var _vGoI='';
     var _viOC='';
     var _vTwJ='';
     var _vDeK='';
     var _vHsC='';
     var _vEkP=''; 
     var _vHpD='';
     var _vPlG=''; 
     var _vLbR='';
     var _vTgI='';
     var _vSpO='';
       if(_vFaH.cate.length)
       {
         for(var _vRoT=0;_vRoT<_vFaH.cate.length;_vRoT++)
         {
           var _vPrL=_vFaH.cate[_vRoT];
           if(_vPrL&&_vPrL.length>1&&!isNaN(_vPrL.substring(1)))
           {
             if(_vPrL.indexOf(_s7ZkT[566])==0)
             {
               _vEnW=_vPrL.substring(1);
             }
			 else if(_vPrL.indexOf(_s7ZkT[567])==0)
			{
				_vKoko=_vPrL.substring(1);
				if(_vKoko==0)
				{
					_vEdI=0;
				}
				else if(_vKoko>0)
				{
					_vEdI=_vKoko/100;
				}
			}
			else if(_vPrL.indexOf(_s7ZkT[2383])==0)
			{
				_vPlG=parseInt(_vPrL.substring(1,4));
				_vLbR=parseInt(_vPrL.substring(4,7));
				_vTgI=parseInt(_vPrL.substring(7,10));
			}
			else if(_vPrL.indexOf(_s7ZkT[2387])==0)
			{
				_vSpO=parseInt(_vPrL.substring(1));
			}
			//Plugin Discount
			_vHsC=_vEnW*_vEdI;
			_vEaP=_vEnW-_vHsC;
			
			//Hitung
			var _vHsC=_vDeK*_vTwJ/100;
			var _vEkP=_vDeK-_vHsC;
			
			//Plugin JNE Volmetric
			var _vYgT=_vSpO;
			var _vYtS=(_vPlG*_vLbR*_vTgI) / 6000;
			var _vUtG='';
			var _vUtG='';
			if(_vYgT>_vYtS)
			{
				_vUtG=_vYgT;
			}
			else if(_vYgT<_vYtS)
			{
				_vUtG=_vYtS;
			}
			if(_vUtG==0)
			{
				_vGtS=0;
			}
			else
			{
				_vGtS=_vUtG;
			}
        }
	}
    }
     if(_vFaH.id&&_vEnW)
     {
       var _vItT=_vQbL.items.length;
       _vQbL.items[_vItT]=new Object();
       _vQbL.items[_vItT].id=_vHlM[_vLxZ].id;
       _vQbL.items[_vItT].number=_vHlM[_vLxZ].number;
	   _vQbL.items[_vItT].color=_vHlM[_vLxZ].color;
	   _vQbL.items[_vItT].size=_vHlM[_vLxZ].size;
       _vQbL.items[_vItT].price=_vEaP;
       _vQbL.items[_vItT].title=_vFaH.title;
       _vQbL.items[_vItT].link=_vFaH.link;
	   _vQbL.items[_vItT].weight=_vGtS;
       _vVeE+=_s7ZkT[1775]+_vFaH.title+_s7ZkT[1776]+_vHlM[_vLxZ].number+_s7ZkT[1777]+convertToRupiah(_vEnW*_vHlM[_vLxZ].number)+_s7ZkT[1778];
       _vLxZ++;
       if(_vLxZ<_vHlM.length)
       {
         _fLgO()
       }
       else
       {
         if(_vVeE)
         {

           var _vAdS=0;
           var _vIrU=SHIPPING_FEE;
           for(var _vRoT=0;_vRoT<_vQbL.items.length;_vRoT++)
           {
             _vAdS+=(_vQbL.items[_vRoT].price*_vQbL.items[_vRoT].number);
           }
           var _vRxZ=_vQbL.jne+_vAdS;
           var _vCpE=_fYiQ(_s7ZkT[1779]);
           if(_vIrU!=0)
           {
             _vCpE=_fFpX(_vIrU.toFixed(2))
           }
           _vQbL.total=_vRxZ;
           _vQbL.shipvalue=_vIrU;
           var _vJnI=_s7ZkT[1780];
           if(COUPON.length)
           {
             _vJnI=_s7ZkT[1781]+_fYiQ(_s7ZkT[1782])+_s7ZkT[1783]+_fYiQ(_s7ZkT[1784])+_s7ZkT[1785]
           }
			var _vDgT=0;
			for(var _vRoT=0;_vRoT<_vQbL.items.length;_vRoT++)
			{
			_vDgT+=_vQbL.items[_vRoT].weight*_vQbL.items[_vRoT].number;
			}
			rajaOngkir(_vDgT)
           $(_s7ZkT[1841]).html(_s7ZkT[1842]+_fYiQ(_s7ZkT[1843])+_s7ZkT[1844]);
           $(_s7ZkT[1852]).html(_s7ZkT[1853]+_fYiQ(_s7ZkT[1854])+_s7ZkT[1855]);
           $(_s7ZkT[1856]).on(_s7ZkT[1857],function()
           {
             if($(this).attr(_s7ZkT[1858]))
             {
               return
             }
             $(_s7ZkT[1859]).each(function()
             {
               var _vEcO=$(this).attr(_s7ZkT[1860]);
               $(_s7ZkT[1861]+_vEcO).slideUp();
               $(this).removeAttr(_s7ZkT[1862])
             }
             );
             var _vEcO=$(this).attr(_s7ZkT[1863]);
             $(_s7ZkT[1864]+_vEcO).slideDown();
             $(this).attr(_s7ZkT[1865],_s7ZkT[1866])
           }
           );
           $(_s7ZkT[1868]).click(function()
           {
             if(_fWhM())
             {
				 if(_fStT())
				 {
					_fHfH()  
				 }
             }
           }
           );
           $(_s7ZkT[1869]).click(function()
           {
             var _vLwA=$(_s7ZkT[1870]).val();
             if(!_fDqS(_vLwA,true))
             {
               $(_s7ZkT[1871]).html(_fYiQ(_s7ZkT[1872]));
               $(_s7ZkT[1873]).html(_fFpX(_vQbL.total));
               _vFwO=_s7ZkT[1874];
               return
             }
             _vFwO=_vLwA;
             var _vVgS=_fSyI(_vFwO,_vQbL.total-_vQbL.jne);
             _vVgS=_vVgS+_vQbL.shipvalue;
             $(_s7ZkT[1875]).html(_fDqS(_vFwO,false));
             $(_s7ZkT[1876]).html(_fFpX(_vVgS))
           }
           )
         }
       }
     }
     else
     {
       if(!_fCiN())
       {
         alert(_s7ZkT[1877])
       }
     }
   }
   ,_s7ZkT[1878]).fail(function()
   {
     if(!_fCiN())
     {
       alert(_s7ZkT[1879])
     }
   }
   )  
 }
 
 function rajaOngkir(Weight){	
// atur 2
    $.ajax({
        type: 'GET',
        url: 'https://labs.lapakologis.com/province.php?province=?',
        dataType: 'JSON',
        success: function(result) {
            $('#billProvince').append(result);
        },
	});

/* 
CORS Setting
http://www.giantflyingsaucer.com/blog/?p=2682
*/

$('#billProvince').change(function(){
	$('#billCities').html();
	$('#billPacked').html(' ');
	$('#billService').html('<option>Pilih Kurir</option><option value="jne">Jalur Nugraha Ekakurir (JNE)</option><option value="tiki">Citra Van Titipan Kilat (TIKI)</option></select>');
	var data = {billProvince: $('#billProvince option:selected').val()}
        $.ajax({
            type: 'GET',            
            url: 'https://labs.lapakologis.com/getCities.php',
            data: data,
            dataType: 'jsonp',
            jsonp: 'billCities',
            jsonpCallback: 'jsonpCallback',
			beforeSend: function() {
            $('#billCities').html('<option>Memproses...</option>');
			},
            success: function(result) {
			$('#billCities').html('<option>Pilih Kota / Kabupaten</option></select>');
            $('#billCities').append(result);
            },

}); 
});

$('#billCities').change(function(){
	$('#billDistrict').html();
	$('#billPacked').html(' ');
	$('#billService').html('<option>Pilih Kurir</option><option value="jne">Jalur Nugraha Ekakurir (JNE)</option><option value="tiki">Citra Van Titipan Kilat (TIKI)</option></select>');
	var data = {billCities: $('#billCities option:selected').val()}
        $.ajax({
            type: 'GET',            
            url: 'https://labs.lapakologis.com/getDistrict.php',
            data: data,
            dataType: 'jsonp',
            jsonp: 'billDistrict',
            jsonpCallback: 'jsonpCallback',
			beforeSend: function() {
            $('#billDistrict').html('<option>Memproses...</option>');
			},
            success: function(result) {
			$('#billDistrict').html('<option>Pilih Kecamatan</option></select>');
            $('#billDistrict').append(result);
            },

}); 
});

$('#billDistrict').change(function(){
	$('#billPacked').html(' ');
	$('#billService').html(_vSpL);
	});


$('#billService').change(function(){
	$('#billPacked').html(' ');
	var data = {billDistrict: $('#billDistrict option:selected').val(), weight: Weight, origin: OriginCode, billService: $('#billService option:selected').val()}
        $.ajax({
            type: 'GET',            
            url: 'https://labs.lapakologis.com/getCost.php',
            data: data,
            dataType: 'jsonp',
            jsonp: 'billPacked',
            jsonpCallback: 'jsonpCallback',
			beforeSend: function() {
            $('#billPacked').html('<option>Memproses...</option>');
			},
            success: function(result) {
				$('#billPacked').html('<option>Pilih Paket</option></select>');
                $('#billPacked').append(result);
            },

}); 
});
}



// atur 3
$(document).ready(function() { 
var data = {getID: _vGtV}
    $.ajax({
        type: 'GET',            
        url: 'https://labs.lapakologis.com/getID.php',
        data: data,
        dataType: 'jsonp',
        jsonp: 'response',
        jsonpCallback: 'jsonpCallback',
        success: function(result) {
        if(!result)
        {
		var rbterr = '#activation';
		rbteco = rbtsqq+rbterr+'<br/>'+rbtacv+'<br/>'+rbtgac+_vGtV+rbtgad+'<br/>'+rbtocc+rbtact+rbterr+rbtahv;
		$('#info-wrapper').append(rbteco);
		$('.post-header-action-buttons').remove();
		$('#method_service').remove();
		$('.action-buttons').remove();
 		}
        else
        {
        	$('#activation').hide();
        }
        },

	}); 
});
 
 $(document).ready(function() { 
var _vHqP = '';
var _vYoP = bank_name.length;
var _vGwO ='<option value="none">Pilih Bank Transfer</option>';
for(var i=0; i<_vYoP; i++){
	_vGwO+='<option value="'+i+'">'+bank_name[i].toUpperCase()+'</option>';
}
$('#billbank').html(_vGwO);

 });
 
 function _fWiP()
 {
   _vHlM=_fWvI(_vAqF);
   _vLxZ=0;
   _vVeE=_s7ZkT[1880];
   if(_vHlM)
   {
     _fLgO()
   }
 }
 function _fRxD()
 {
   var _vIgM=_s7ZkT[1884]+_fYiQ(_s7ZkT[1885])+_s7ZkT[1886];
	
   if(FIELD_FULL_NAME)
   {
     _vIgM+=_s7ZkT[1897]+_fYiQ(_s7ZkT[1898])+_s7ZkT[1899]+_fNaI(_s7ZkT[1900])+_s7ZkT[1901]
   }
   if(FIELD_ADDRESS)
   {
     _vIgM+=_s7ZkT[1912]+_fYiQ(_s7ZkT[1913])+_s7ZkT[1914]+_fNaI(_s7ZkT[1915])+_s7ZkT[1916]
   }
   if(FIELD_PROVINCE)
   {
	 _vIgM+=_s7ZkT[1887]+_fYiQ(_s7ZkT[1888])+_s7ZkT[1889];
     var _vXoN=_fNaI(_s7ZkT[1890]);
     _vIgM+=_s7ZkT[1891]+_s7ZkT[1892]+_s7ZkT[1893]+_s7ZkT[1894]+_s7ZkT[1895]+_s7ZkT[1896];
   }  
    if(FIELD_CITY)
   {
     _vIgM+=_s7ZkT[1907]+_fYiQ(_s7ZkT[1908])+_s7ZkT[1909];
     var _vXoN=_fNaI(_s7ZkT[1910]);
     _vIgM+=_s7ZkT[1911];
   }
     _vIgM+=_s7ZkT[1917]+_fYiQ(_s7ZkT[1918])+_s7ZkT[1919];
     var _vXoN=_fNaI(_s7ZkT[1920]);
     _vIgM+=_s7ZkT[1921];
   if(FIELD_POST_CODE)
   {
     _vIgM+=_s7ZkT[1922]+_fYiQ(_s7ZkT[1923])+_s7ZkT[1924]+_fNaI(_s7ZkT[1925])+_s7ZkT[1926]
   }
   _vIgM+=_s7ZkT[1927]+_fYiQ(_s7ZkT[1928])+_s7ZkT[1929]+_fNaI(_s7ZkT[1930])+_s7ZkT[1931]+_fYiQ(_s7ZkT[1932])+_s7ZkT[1933]+_fNaI(_s7ZkT[1934])+_s7ZkT[1935];
      if(FIELD_PIN_BB)
   {
     _vIgM+=_s7ZkT[1902]+_fYiQ(_s7ZkT[1903])+_s7ZkT[1904]+_s7ZkT[1905]+_s7ZkT[1906]
   }
   if(PackServices=="yes"||PackServices=="Yes"||PackServices=="YES")
   {
   _vIgM+="<div id='method_service' style='background:#F9F3B0; border:1px solid #CCC; padding:10px'><p class='form-row form-row-first validate-required validate-service' id='billService_field'>				<label for='billService' class=''>Pilih Kurir<abbr class='required' title='wajib diisi'>*</abbr></label><select id='billService' name='billService'><option></option></select>";
   _vIgM+="<p class='form-row form-row-first validate-required validate-packed' id='billpacked_field'>				<label for='billpacked' class=''>Pilih Paket<abbr class='required' title='wajib diisi'>*</abbr></label><select id='billPacked' name='billPacked'><option></option></select></div>";
   }
   _vIgM+=_s7ZkT[1963]+_fYiQ(_s7ZkT[1964])+_s7ZkT[1965];
   return _vIgM  
 }
 
 if(_fUcX())
 {
   $(_s7ZkT[1966]).addClass(_s7ZkT[1967]);
   $(_s7ZkT[1968]).addClass(_s7ZkT[1969]);
   $(_s7ZkT[1970]).addClass(_s7ZkT[1971]);
   $(_s7ZkT[1972]).attr(_s7ZkT[1973],_s7ZkT[1974]);
   $(_s7ZkT[1975]).append(_s7ZkT[1976]+_fRxD()+_s7ZkT[1977]);
   $(_s7ZkT[1978]).append(_s7ZkT[1979]+AJAX_LOADING_IMAGE+_s7ZkT[1980]);
   _fWiP();
   $(_s7ZkT[1981]).on(_s7ZkT[1982],function()
   {
     if($(this).is(_s7ZkT[1983]))
     {
       $(_s7ZkT[1984]).show()
     }
     else
     {
       $(_s7ZkT[1985]).hide()
     }
   }
   )
 }
$('.shopping-msg').hide()
$('.shopping-msg').click(function(){
	$('.shopping-msg').hide()
})
 function _fSnM()
 {
   var _vEvT=$(_s7ZkT[1986]).length;
   if(_vEvT<1)return;
   $(_s7ZkT[1987]).html(_s7ZkT[1988]+AJAX_LOADING_IMAGE+_s7ZkT[1989]);
   $.get(Feed_URL+_s7ZkT[1990],function(_vKhU)
   {
     var _vIlB=_fWaR(_vKhU);
     if(_vIlB.total_entry==0)
     {
       return
     }
     var _vElG=Math.floor((Math.random()*_vIlB.total_entry)+1);
     if(_vElG+_vEvT>_vIlB.total_entry)
     {
       _vElG=_vIlB.total_entry-_vEvT+1
     }
     if(_vElG<1)
     {
       _vElG=1
     }
     $.get(Feed_URL+_s7ZkT[1991]+_vEvT+_s7ZkT[1992]+_vElG,function(_vKhU)
     {
       var _vJiE=_fWaR(_vKhU);
       var _vIgM=_s7ZkT[1993];
       if(_vJiE.entry.length)
       {
         for(var _vRoT=0;_vRoT<_vJiE.entry.length;_vRoT++)
         {
           _vZhF=_vJiE.entry[_vRoT];
           _vIgM+=_s7ZkT[1999]+_s7ZkT[2000]+_vZhF.id+_s7ZkT[2001];
           _vIgM+=_s7ZkT[2002]+_vZhF.link+_s7ZkT[2003];
           _vIgM+=_s7ZkT[2004]+_vZhF.thumbnail.replace('http:', 'https:')+_s7ZkT[2005];
           _vIgM+=_s7ZkT[2006];
           _vIgM+=_s7ZkT[2007];
           _vIgM+=_s7ZkT[2008]+_vZhF.link+_s7ZkT[2009]+_vZhF.title+_s7ZkT[2010];
           _vIgM+=_s7ZkT[2019];
           _vIgM+=_fIgM(_vZhF.cate);
           _vIgM+=_s7ZkT[2020]
         }
       }
       $(_s7ZkT[2021]).html(_vIgM+_s7ZkT[2022]);
       _fVyM();
       $(_s7ZkT[2023]).click(function()
       {
		 $('.shopping-msg').show()
         _fSxK($(this))
       }
       )
     }
     ,_s7ZkT[2024])
   }
   ,_s7ZkT[2025])
 }
 $(_s7ZkT[2026]).each(function()
 {
   _fSnM()
 }
 );
 $(_s7ZkT[2027]).click(function()
 {
   _fSnM()
 }
 );
 var _vEuP=new Object();
 _vEuP.title=_s7ZkT[2028];
 _vEuP.label=new Array();
 $(_s7ZkT[2029]).each(function()
 {
   $(this).find(_s7ZkT[2030]).each(function()
   {
     _vEuP.title=$(this).html()
   }
   );
   _vEuP.label=new Array();
   $(this).find(_s7ZkT[2031]).each(function()
   {
     var _vIeS=$(this).attr(_s7ZkT[2032]);
     var _vPrL=$(this).html();
     if(_vPrL.indexOf(_s7ZkT[2033])==-1&&_vPrL.indexOf(_s7ZkT[2034])==-1&&_vPrL.indexOf(_s7ZkT[2383])==-1&&_vPrL.indexOf(_s7ZkT[2387])==-1&&_vPrL!=_s7ZkT[2035]&&_vPrL!=_s7ZkT[2406]&&_vPrL!=_s7ZkT[2407])
     {
       _vEuP.label[_vEuP.label.length]=new Object();
       var _vItT=_vEuP.label.length-1;
       _vEuP.label[_vItT].link=_vIeS;
       _vEuP.label[_vItT].name=_vPrL;
       var _vZwM=_s7ZkT[2036];
       var _vLhR=_vIeS.indexOf(_vZwM);
       if(_vLhR!=-1)
       {
         _vIeS=_vIeS.substring(_vLhR+_vZwM.length);
         _vEuP.label[_vItT].ename=_vIeS
       }
       _vIeS=_vEuP.label[_vItT].ename;
       if(_vIeS.indexOf(_s7ZkT[2037])!=-1)
       {
         _vIeS=_vIeS.split(_s7ZkT[2038]);
         _vEuP.label[_vItT].ename=_vIeS[0]
       }
     }
   }
   )
 }
 );
 if(_vEuP.label.length)
 {
   $(_s7ZkT[2039]).each(function()
   {
     $(this).addClass(_s7ZkT[2040]).addClass(_s7ZkT[2041]);
     var _vIgM=_s7ZkT[2042]+_vEuP.title;
     _vIgM+=_s7ZkT[2048];
     for(var _vRoT=0;_vRoT<_vEuP.label.length;_vRoT++)
     {
       var _vGdF=_vEuP.label[_vRoT];
       _vIgM+=_s7ZkT[2049]+_vGdF.ename+_s7ZkT[2050]+_s7ZkT[2054];
	   _vIgM+='';
     }
     _vIgM+=_s7ZkT[2055];
     $(this).html(_vIgM); 
     $(_s7ZkT[2056]).attr(_s7ZkT[2057],_s7ZkT[2058]);
     for(var _vRoT=0;_vRoT<_vEuP.label.length;_vRoT++)
     {
	var _vGdF=_vEuP.label[_vRoT];		 
	$(_s7ZkT[2089]+_vGdF.ename+_s7ZkT[2090]).append('<div class="labels"><a href="'+_vGdF.link+'?max-results=8">'+_vGdF.ename+'</a><div><div class="clear"/>');
     $.get(Feed_URL+_s7ZkT[2059]+_vGdF.ename+_s7ZkT[2060]+NUMBER_ITEMS_FOR_COLLECTION,function(_vKhU)
     {         
       var _vCuA=_fWaR(_vKhU);
       var _vIgM=_s7ZkT[2061];
	   var _vHiW=_s7ZkT[2061];  
       if(_vCuA.entry.length)
       {
         for(var _vRoT=0;_vRoT<_vCuA.entry.length;_vRoT++)
         {
           _vZhF=_vCuA.entry[_vRoT];
           _vIgM+=_s7ZkT[2067]+_s7ZkT[2068]+_vZhF.id+_s7ZkT[2069];
           _vIgM+=_s7ZkT[2070]+_vZhF.link+_s7ZkT[2071];
           _vIgM+=_s7ZkT[2072]+_vZhF.thumbnail.replace('http:', 'https:')+_s7ZkT[2073];
           _vIgM+=_s7ZkT[2074];
           _vIgM+=_s7ZkT[2075];
           _vIgM+=_s7ZkT[2076]+_vZhF.link+_s7ZkT[2077]+_vZhF.title+_s7ZkT[2078];
           _vIgM+=_s7ZkT[2087];
           _vIgM+=_fIgM(_vZhF.cate);
           _vIgM+=_s7ZkT[2088]
         }
       }
       $(_s7ZkT[2089]+_vGdF.ename+_s7ZkT[2090]).append(_vIgM+_s7ZkT[2091]);		 	   
       _fVyM();
     }
     ,_s7ZkT[2102]).fail(function()
     {
       if(!_fCiN())
       {
         alert(_s7ZkT[2103])
       }
     }
     );
 	 }
   }
   )
 }
 else
 {
   $(_s7ZkT[2161]).remove()
 }
 $(_s7ZkT[2162]).append(_s7ZkT[2163]);
 $(_s7ZkT[2164]).each(function()
 {
   $(this).find(_s7ZkT[2165]).each(function()
   {
     var _vPrL=$(this).html();
     if(_vPrL&&_vPrL.length>1&&!isNaN(_vPrL.substring(1)))
     {
       if(_vPrL.indexOf(_s7ZkT[2166])==0)
       {
         $(this).hide();
         $(this).next().remove();
         return
       }
       else if(_vPrL.indexOf(_s7ZkT[2167])==0)
       {
         $(this).hide();
         $(this).next().remove();
         return
       }
       else if(_vPrL.indexOf(_s7ZkT[2383])==0)
       {
         $(this).hide();
         $(this).next().remove();
         return
       }
       else if(_vPrL.indexOf(_s7ZkT[2387])==0)
       {
         $(this).hide();
         $(this).next().remove();
         return
       }
   }
     if(_vPrL===_s7ZkT[2168])
     {
       $(this).hide();
       $(this).next().remove();
       return
     }
	 if(_vPrL===_s7ZkT[2406])
     {
       $(this).hide();
       $(this).next().remove();
       return
     }
	 if(_vPrL===_s7ZkT[2407])
     {
       $(this).hide();
       $(this).next().remove();
       return
     }	 
     $(this).attr(_s7ZkT[2169],$(this).attr(_s7ZkT[2170])+_s7ZkT[2171])
   }
   )
 }
 );
 $(_s7ZkT[2172]).show();
 function _fJcF(_vKhU,current_post_id)
 {
   var _vIgM=_s7ZkT[2173];
   var _vQzC=_vKhU.entry.length-1;
   for(var _vRoT=0;_vRoT<_vQzC;_vRoT++)
   {
     var _vZhF=_vKhU.entry[_vRoT];
     if(_vZhF.id==current_post_id)
     {
       _vQzC++;
       break
     }
   }
   if(_vQzC)
   {
     var _vYpV=0;
     for(var _vRoT=0;_vRoT<_vQzC;_vRoT++)
     {
       _vZhF=_vKhU.entry[_vRoT];
       var _vZhF=_vKhU.entry[_vRoT];
       if(_vZhF.id==current_post_id)
       {
         continue
       }
       _vIgM+=_s7ZkT[2179]+_s7ZkT[2180]+_vZhF.id+_s7ZkT[2181];
       _vIgM+=_s7ZkT[2182]+_vZhF.link+_s7ZkT[2183];
       _vIgM+=_s7ZkT[2184]+_vZhF.thumbnail.replace('http:', 'https:')+_s7ZkT[2185];
       _vIgM+=_s7ZkT[2186];
       _vIgM+=_s7ZkT[2187];
       _vIgM+=_s7ZkT[2188]+_vZhF.link+_s7ZkT[2189]+_vZhF.title+_s7ZkT[2190];
       _vIgM+=_s7ZkT[2199];
       _vIgM+=_fIgM(_vZhF.cate);
       _vIgM+=_s7ZkT[2200];
       _vYpV++
     }
   }
   return _vIgM
 }

var _eVqT=$(_s7ZkT[2403]).html();
var _eVrS=_eVqT.replace(/#/gi, _s7ZkT[2404]);
$(_s7ZkT[2405]).html(_eVrS);
 if(_vZvU)
 {
   $(_s7ZkT[2201]).each(function()
   {
     var _vZwM=_s7ZkT[2202];
     var _vRxA=_vZvU.href.substring(_vZvU.href.indexOf(_vZwM)+_vZwM.length);
     var _vNzQ=3;
     $.get(Feed_URL+_s7ZkT[2203]+_vRxA+_s7ZkT[2204],function(_vKhU)
     {
       var _vZhA=_fWaR(_vKhU);
       var _vRxZ=_vZhA.total_entry;
       var _vWiP=Math.floor(Math.random()*(_vRxZ-_vNzQ)+1);
       if(_vWiP<1)
       {
         _vWiP=1
       }
       $.get(Feed_URL+_s7ZkT[2205]+_vRxA+_s7ZkT[2206]+(_vNzQ+1)+_s7ZkT[2207]+_vWiP+_s7ZkT[2208],function(_vKhU)
       {
         var _vDcD=_fWaR(_vKhU);
         var _vHhH=$(_s7ZkT[2209]).text();
         var _vIgM=_fJcF(_vDcD,_vHhH);
         if(_vIgM)
         {
           $(_s7ZkT[2210]).html(_fJcF(_vDcD,_vHhH));
           $(_s7ZkT[2211]).show();
           _fVyM();
           $(_s7ZkT[2212]).click(function()
           {
			 $('.shopping-msg').show()
             _fSxK($(this))
           }
           )
         }
       }
       ,_s7ZkT[2213])
     }
     ,_s7ZkT[2214])
   }
   )
 }
 $(_s7ZkT[2215]).each(function()
 {
   $(this).prepend(_s7ZkT[2216])
 }
 );
 $(_s7ZkT[2217]).each(function()
 {
   var _vRgY=$(this);
   _vRgY.addClass(_s7ZkT[2218]).addClass(_s7ZkT[2219]).addClass(_s7ZkT[2220]).addClass(_s7ZkT[2221]).css(_s7ZkT[2222],_s7ZkT[2223]);
   _vRgY.find(_s7ZkT[2224]).html(_fYiQ(_s7ZkT[2225]))
 }
 );
 $(_s7ZkT[2226]).each(function()
 {
   if(!$(this).is(_s7ZkT[2227]))
   {
     $(this).find(_s7ZkT[2228]).addClass(_s7ZkT[2229])
   }
 }
 );
 $(_s7ZkT[2230]).each(function()
 {
   $(this).addClass(_s7ZkT[2231])
 }
 );
 $(_s7ZkT[2232]).mousedown(function()
 {
   $(this).parents(_s7ZkT[2233]).each(function()
   {
     $(this).children().each(function()
     {
       if($(this).is(_s7ZkT[2234]))
       {
         var _vLcI=false;
         $(this).find(_s7ZkT[2235]).each(function()
         {
           _vLcI=true;
           $(this).prepend($(_s7ZkT[2236]))
         }
         );
         if(!_vLcI)
         {
           $(this).append($(_s7ZkT[2237]))
         }
         $(_s7ZkT[2238]).show()
       }
     }
     )
   }
   )
 }
 );
 $(_s7ZkT[2239]).mousedown(function()
 {
   setTimeout(function()
   {
     $(_s7ZkT[2240]).each(function()
     {
       $(_s7ZkT[2241]).animate(
       {
         scrollTop:$(this).offset().top
       }
       ,200)
     }
     )
   }
   ,500)
 }
 );
 $(_s7ZkT[2242]).mousedown(function()
 {
   setTimeout(function()
   {
     $(_s7ZkT[2243]).each(function()
     {
       $(_s7ZkT[2244]).animate(
       {
         scrollTop:$(this).offset().top
       }
       ,200)
     }
     )
   }
   ,500)
 }
 );
 function _fFtY(_vIdO)
 {
   switch(_vIdO)
   {
     case'1029':return _s7ZkT[2245];
     break;
     case'qpwo':return _s7ZkT[2246];
     break;
     case'3847':return _s7ZkT[2247];
     break;
     case'eiru':return _s7ZkT[2248];
     break;
     case'5656':return _s7ZkT[2249];
     break;
     case'tyty':return _s7ZkT[2250];
     break;
     case'alsk':return _s7ZkT[2251];
     break;
     case'djfh':return _s7ZkT[2252];
     break;
     case'zmxn':return _s7ZkT[2253];
     break;
     case'cbvv':return _s7ZkT[2254];
     break;
     case'1q3e':return _s7ZkT[2255];
     break;
     case'5tad':return _s7ZkT[2256];
     break;
     default:return _s7ZkT[2257];
     break
   }
   return _s7ZkT[2258]
 }
 
 if(!_fMfE())
 {
   if(!_fMxL())
   {
     $.get(_s7ZkT[2280]+_s7ZkT[2281]+_s7ZkT[2282]+_s7ZkT[2283]+_s7ZkT[2284]+_s7ZkT[2285]+_s7ZkT[2286]+_s7ZkT[2287]+_s7ZkT[2288],function(_vKhU)
     {
       var _vKhU=_fWaR(_vKhU);
       if(_vKhU.entry.length)
       {
         var _vItS=$(_s7ZkT[2289]).text();
         var _vZeB=_s7ZkT[2290];
         _vZeB+=_s7ZkT[2291];
         _vZeB+=_s7ZkT[2292];
         _vZeB+=_s7ZkT[2293];
         _vZeB+=_s7ZkT[2294];
         _vZeB+=_s7ZkT[2295];
         _vZeB+=_s7ZkT[2296];
         _vZeB+=_s7ZkT[2297];
         _vZeB+=_s7ZkT[2298];
         _vZeB+=_s7ZkT[2299];
         _vZeB+=_s7ZkT[2300];
         _vZeB+=_s7ZkT[2301];
         _vZeB+=_s7ZkT[2302];
         _vZeB+=_s7ZkT[2303];
         _vZeB+=_s7ZkT[2304];
         _vZeB+=_s7ZkT[2305];
         _vZeB+=_s7ZkT[2306];
         _vZeB+=_s7ZkT[2307];
         _vZeB+=_s7ZkT[2308];
         _vZeB+=_s7ZkT[2309];
         _vZeB+=_s7ZkT[2310];
         _vZeB+=_s7ZkT[2311];
         _vItS=_vItS.toLowerCase();
         for(var _vRoT=0;_vRoT<_vKhU.entry.length;_vRoT++)
         {
           var _vZhF=_vKhU.entry[_vRoT];
           var _vYiQ=_vZhF.title.split(_s7ZkT[2312]);
           for(var _vXhO=0;_vXhO<_vYiQ.length;_vXhO++)
           {
             if(_vItS.indexOf(_vYiQ[_vXhO].toLowerCase())!=-1)
             {
               $(_s7ZkT[2313]).first().prepend(_s7ZkT[2314]+_vZeB+_s7ZkT[2315]+_vZhF.content+_s7ZkT[2316]);
               return
             }
           }
         }
         var _vElG=Math.floor((Math.random()*_vKhU.entry.length));
         $(_s7ZkT[2317]).first().prepend(_s7ZkT[2318]+_vZeB+_s7ZkT[2319]+_vKhU.entry[_vElG].content+_s7ZkT[2320])
       }
     }
     ,_s7ZkT[2321])
   }
   var _vMtI=0;
   var _vLyL=_s7ZkT[2322];
   _vLyL+=_s7ZkT[2323];
   _vLyL+=_s7ZkT[2324];
   _vLyL+=_s7ZkT[2325];
   _vLyL+=_s7ZkT[2326];
   _vLyL+=_s7ZkT[2327];
   _vLyL+=_s7ZkT[2328];
   _vLyL+=_s7ZkT[2329];
   _vLyL+=_s7ZkT[2330];
   _vLyL+=_s7ZkT[2331];
   _vLyL+=_s7ZkT[2332];
   _vLyL+=_s7ZkT[2333];
   _vLyL+=_s7ZkT[2334];
   _vLyL+=_s7ZkT[2335];
   _vLyL+=_s7ZkT[2336];
   _vLyL+=_s7ZkT[2337];
   _vLyL+=_s7ZkT[2338];
   _vLyL+=_s7ZkT[2339];
   _vLyL+=_s7ZkT[2340];
   _vLyL+=_s7ZkT[2341];
   _vLyL+=_s7ZkT[2342];
   _vLyL+=_s7ZkT[2343];
   _vLyL+=_s7ZkT[2344];
   var _vWcJ=_s7ZkT[2345]+_vLyL+_s7ZkT[2346];
   $(_s7ZkT[2347]).each(function()
   {
     _vMtI++
   }
   );
   if(_vMtI<2)
   {
     $(_s7ZkT[2348]).append(_vWcJ)
   }
   else
   {
     _vMtI=0;
     $(_s7ZkT[2349]).each(function()
     {
       _vMtI++;
       if(_vMtI==2)
       {
         $(_vWcJ).insertAfter($(this));
         $(this).remove()
       }
     }
     )
   }
 }
 if(_fReF())
 {
   $(_s7ZkT[2350]).each(function()
   {
     $(this).addClass(_s7ZkT[2351]);
     var _vKiG=_s7ZkT[2352];
     _vKiG+=_s7ZkT[2353]+_fYiQ(_s7ZkT[2354])+_s7ZkT[2355];
     _vKiG+=_s7ZkT[2356];
     _vKiG+=_s7ZkT[2357]+_fYiQ(_s7ZkT[2358])+_s7ZkT[2359];
     _vKiG+=_s7ZkT[2360]+_fYiQ(_s7ZkT[2361])+_s7ZkT[2362];
     $(this).html(_vKiG);
     $(_s7ZkT[2363]).appendTo($(this));
     $(_s7ZkT[2364]).addClass(_s7ZkT[2365]);
     $(_s7ZkT[2366]).remove()
   }
   )
 }

 var _vNjD=_fYiQ(_s7ZkT[2367]);
 $(_s7ZkT[2368]).val(_vNjD);
 $(_s7ZkT[2369]).on(_s7ZkT[2370],function()
 {
   if($(this).val()==_s7ZkT[2371])
   {
     $(this).val(_vNjD)
   }
 }
 );
 $(_s7ZkT[2372]).on(_s7ZkT[2373],function()
 {
   if($(this).val()==_vNjD)
   {
     $(this).val(_s7ZkT[2374])
   }
 }
 );
//]]>
