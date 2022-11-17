var IntMetric = 'in';
var UserCurrency = {"code": "USD", "sign": "$", "rate": 1, "geo_country_id": 1};
var BASE_URL = 'https://propercloth.com/';
var user_is_authorize = false;
function currency(amount, vat_included) {
    if (typeof amount === 'string' || amount instanceof String) {
        amount = amount.replace(',', '');
        amount = parseFloat(amount);
    }
    if (typeof vat_included === "undefined") {
        vat_included = true;
    }
                return UserCurrency.sign + (amount * UserCurrency.rate).toFixed(2);
            }
function currencyRound(amount, vat_included) {
    if (typeof amount === 'string' || amount instanceof String) {
        amount = amount.replace(',', '');
        amount = parseFloat(amount);
    }
    if (typeof vat_included === "undefined") {
        vat_included = true;
    }
                return UserCurrency.sign + Math.round(amount * UserCurrency.rate);
            }


/**
* STANDARD
* MEASURE A SHIRT
* MEASURE A SHIRT
* SMART SIZES v21.3
* - Smart Size Tucked (#1)
* - Smart Size Untucked (#2)
* - Smart Size Short Sleeve (#3)
*/

var BODY_STYLE_CLASSIC = 1;
var BODY_STYLE_SLIM = 0;
var BODY_STYLE_SUPER_SLIM = 2;

/* STANDART SIZES
sizes: 
small		s
medium		m
large		l
x-large		xl
xx-large	xxl
fit type:
super slim fit	ssf
slim fit		sf
classic fit		cf
*/
// 0 Collar (adjCollar) | 1 Chest Width (adjChest) | 2 Midsection Width (adjMiddle) | 3 Bottom Width (adjBottomWidth) | 4 Yoke Width (adjShoulder) | 
// 5 Shirt Length (adjBackLen) | 6 SS Sleeve Width (adjSleeveWSS) | 7 SS Sleeve Length (adjSleeveLSS) | 8 SS Sleeve Opening Width (adjSleeveOpeningWSS) | 
// 9 Left Cuff Circumference (adjCuffShirt) | 10 Right Cuff Circumference (adjCuffShirt) | 11 Sleeve Length (adjSleeveL) | 12 Sleeve Width ()
standart_size_ss_s_ssf 	= new Array(14, 20.5, 17, 18.5, 15.75, 27.5, 6.75, 8.25, 6, 0, 0, 0, 0);
standart_size_ss_s_sf 	= new Array(14, 21, 18, 19, 16, 27.5, 7, 8.5, 6.25, 0, 0, 0, 0);
standart_size_ss_s_cf 	= new Array(14, 22, 20, 20.25, 17, 28, 7.5, 8.5, 6.75, 0, 0, 0, 0);

standart_size_ss_m_ssf 	= new Array(15, 21.5, 18, 19.5, 16.75, 28.5, 7.5, 8.5, 6.75, 0, 0, 0, 0);
standart_size_ss_m_sf 	= new Array(15, 22, 19, 20, 17, 28.5, 7.75, 8.75, 7, 0, 0, 0, 0);
standart_size_ss_m_cf 	= new Array(15, 23, 21, 21.25, 18, 29, 8.25, 8.75, 7.5, 0, 0, 0, 0);

standart_size_ss_l_ssf 	= new Array(16, 22.5, 19, 20.5, 17.75, 29.5, 8.25, 8.75, 7.5, 0, 0, 0, 0);
standart_size_ss_l_sf 	= new Array(16, 23, 20, 21, 18, 29.5, 8.5, 9, 7.75, 0, 0, 0, 0);
standart_size_ss_l_cf 	= new Array(16, 24, 22, 22.25, 19, 30, 9, 9, 8.25, 0, 0, 0, 0);

standart_size_ss_xl_ssf = new Array(17, 23.5, 20, 21.5, 18.75, 30.5, 9, 9.25, 8.25, 0, 0, 0, 0);
standart_size_ss_xl_sf 	= new Array(17, 24, 21, 22, 19, 30.5, 9.25, 10, 8.5, 0, 0, 0, 0);
standart_size_ss_xl_cf 	= new Array(17, 25, 23, 23.25, 20, 31, 9.5, 10, 9, 0, 0, 0, 0);

// collar | sleeve | chest | shoulder | back len | middle | sleeve width | cuff
standart_size_s_ssf 	= new Array(14.5, 33, 20.25, 17, 31.5, 16.5, 	7.5, 		8.5);
standart_size_s_sf 		= new Array(14.5, 33, 21.25, 17, 31.5, 18, 		8.375, 	8.5);
standart_size_s_cf 		= new Array(14.5, 33, 21.25, 17, 31.5, 19.5, 	8.875, 	8.5);

standart_size_m_ssf 	= new Array(15.5, 34, 21.25, 18, 32.5, 18.5, 	6.875, 	9);
standart_size_m_sf 		= new Array(15.5, 34, 22.25, 18, 32.5, 20, 		8.75, 	9);
standart_size_m_cf 		= new Array(15.5, 34, 23.25, 18, 32.5, 21.5, 	9.625, 	9);

standart_size_l_ssf 	= new Array(16.5, 35, 23.25, 19, 33.5, 20.5,	8.625, 	9.25);
standart_size_l_sf 		= new Array(16.5, 35, 24.25, 19, 33.5, 22, 		9.5, 		9.25);
standart_size_l_cf 		= new Array(16.5, 35, 25.25, 19, 33.5, 23.5, 	10.375, 9.25);

standart_size_xl_ssf 	= new Array(17.5, 36, 25.25, 20, 34.5, 22.5, 	9.375, 	9.5);
standart_size_xl_sf 	= new Array(17.5, 36, 26.25, 20, 34.5, 24, 		10.25, 	9.5);
standart_size_xl_cf 	= new Array(17.5, 36, 27.25, 20, 34.5, 25.5, 	11.125, 9.5);

standart_size_xxl_ssf = new Array(18.5, 37, 27.25, 21, 35.5, 24.5, 	10.125, 10);
standart_size_xxl_sf 	= new Array(18.5, 37, 28.25, 21, 35.5, 26, 		11, 		10);
standart_size_xxl_cf 	= new Array(18.5, 37, 29.25, 21, 35.5, 27.5, 	11.875, 10);

var shrinkage_length_adj = 2;
var shrinkage_width_adj = 2;

// special functions
function excelCeil(value)
{
if (value > 0)
return Math.ceil(value);
else
return Math.floor(value);
}

function excelFloor(value)
{
if (value > 0)
return Math.floor(value);
else
return Math.ceil(value);
}

function excelRound(value)
{
if (value % 1 == -0.5) return Math.floor(value);
return Math.round(value);
}

function roundToBase(value, base) {
return Math.floor((value + base / 2) / base) * base;
}
// -- - -- - - -- - -- - -- - -- - -- - -- - -- -- - --  - -- - - -- - -- -  -- - -- - - -- - -- - -- - -- - -- - -- - -- -- - --  - -- - - -- - -- - -- - -- - - -- - -- - --
//-- - -- - - -- - -- - -- - -- - -	       TABLE CONTAINING SPECIAL VALUES (CLASS) 	      -- -- - --  - -- - - -- - -- - -- -- 
// -- - -- - - -- - -- - -- - -- - -- - -- - -- -- - --  - -- - - -- - -- -  -- - -- - - -- - -- - -- - -- - -- - -- - -- -- - --  - -- - - -- - -- - -- - -- - - -- - -- - --
function ChestWidthTable()
{
this.table;
this.init = function()
{
this.table = new Array();
// 						   id	chest	2chest pleats fit mid-eqn 4chest body size
this.table[0]  = new Array(1,  37.25,	74.5,	1,	0,	71,		149,	22.5);
this.table[1]  = new Array(2,  36.75,	73.5,	0,	1,	71,		147,	22);
this.table[2]  = new Array(3,  36.5,	73,		0,	0,	70,		146,	22.5);
this.table[3]  = new Array(4,  36.25,	72.5,	1,	0,	69,		145,	22);
this.table[4]  = new Array(5,  35.75,	71.5,	0,	1,	69,		143,	21.5);
this.table[5]  = new Array(6,  35.5,	71,		0,	0,	68,		142,	22);
this.table[6]  = new Array(7,  35.25,	70.5,	1,	0,	67,		141,	21.5);
this.table[7]  = new Array(8,  34.75,	69.5,	0,	1,	67,		139,	21);
this.table[8]  = new Array(9,  34.5,	69,		0,	0,	66,		138,	21.5);
this.table[9]  = new Array(10, 34.25,	68.5,	1,	0,	65,		137,	21);
this.table[10] = new Array(11, 33.75,	67.5,	0,	1,	65,		135,	20.5);
this.table[11] = new Array(12, 33.5,	67,		0,	0,	64,		134,	21);
this.table[12] = new Array(13, 33.25,	66.5,	1,	0,	63,		133,	20.5);
this.table[13] = new Array(14, 32.75,	65.5,	0,	1,	63,		131,	20);
this.table[14] = new Array(15, 32.5,	65,		0,	0,	62,		130,	20.5);
this.table[15] = new Array(16, 32.25,	64.5,	1,	0,	61,		129, 	20);
this.table[16] = new Array(17, 31.75,	63.5,	0,	1,	61,		127,	19.5);
this.table[17] = new Array(18, 31.5,	63,		0,	0,	60,		126,	20);
this.table[18] = new Array(19, 31.25,	62.5,	1,	0,	59,		125,	19.5);
this.table[19] = new Array(20, 30.75,	61.5,	0,	1,	59,		123,	19);
this.table[20] = new Array(21, 30.5,	61,		0,	0,	58,		122,	19.5);
this.table[21] = new Array(22, 30.25,	60.5,	1,	0,	57,		121,	19);
this.table[22] = new Array(23, 29.75,	59.5,	0,	1,	57,		119,	18.5);
this.table[23] = new Array(24, 29.5,	59,		0,	0,	56,		118,	19);
this.table[24] = new Array(25, 29.25,	58.5,	1,	0,	55,		117,	18.5);
this.table[25] = new Array(26, 28.75,	57.5,	0,	1,	55,		115,	18);
this.table[26] = new Array(27, 28.5,	57,		0,	0,	54,		114,	18.5);
this.table[27] = new Array(28, 28.25,	56.5,	1,	0,	53,		113,	18);
this.table[28] = new Array(29, 27.75,	55.5,	0,	1,	53,		111,	17.5);
this.table[29] = new Array(30, 27.5,	55,		0,	0,	52,		110,	18);
this.table[30] = new Array(31, 27.25,	54.5,	1,	0,	51,		109,	17.5);
this.table[31] = new Array(32, 26.75,	53.5,	0,	1,	51,		107,	17);
this.table[32] = new Array(33, 26.5,	53,		0,	0,	50,		106,	17.5);
this.table[33] = new Array(34, 26.25,	52.5,	1,	0,	49,		105,	17);
this.table[34] = new Array(35, 25.75,	51.5,	0,	1,	49,		103,	16.5);
this.table[35] = new Array(36, 25.5,	51,		0,	0,	48,		102,	17);
this.table[36] = new Array(37, 25.25,	50.5,	1,	0,	47,		101,	16.5);
this.table[37] = new Array(38, 24.75,	49.5,	0,	1,	47,		99,		16);
this.table[38] = new Array(39, 24.5,	49,		0,	0,	46,		98,		16.5);
this.table[39] = new Array(40, 24.25,	48.5,	1,	0,	45,		97,		16);
this.table[40] = new Array(41, 23.75,	47.5,	0,	1,	45,		95,		15.5);
this.table[41] = new Array(42, 23.5,	47,		0,	0,	44,		94,		16);
this.table[42] = new Array(43, 23.25,	46.5,	1,	0,	43,		93,		15.5);
this.table[43] = new Array(44, 22.75,	45.5,	0,	1,	43,		91,		15);
this.table[44] = new Array(45, 22.5,	45,		0,	0,	42,		90,		15.5);
this.table[45] = new Array(46, 22.25,	44.5,	1,	0,	41,		89,		15);
this.table[46] = new Array(47, 21.75,	43.5,	0,	1,	41,		87,		14.5);
this.table[47] = new Array(48, 21.5,	43,		0,	0,	40,		86,		15);
this.table[48] = new Array(49, 21.25,	42.5,	1,	0,	39,		85,		14.5);
this.table[49] = new Array(50, 20.75,	41.5,	0,	1,	39,		83,		14);
this.table[50] = new Array(51, 20.5,	41,		0,	0,	38,		82,		14.5);
this.table[51] = new Array(52, 20.25,	40.5,	1,	0,	37,		81,		14);
this.table[52] = new Array(53, 19.5,	39,		0,	0,	36,		78,		14);
}                           
this.findNearIdByValue = function(field, value)
{
var min_distance = false;
var target_element = 0;
for (i = 0; i < this.table.length; i++)
{
    if (min_distance === false || Math.abs(this.table[i][field] - value) < min_distance)
    {
        target_element = i;
        min_distance = Math.abs(this.table[i][field] - value);
    }
}
return target_element;
}
this.getElementById = function(id)
{
return this.table[id];
}
this.getNextElement = function(id)
{
if (this.table[++id] == undefined)
    return false;
else
    return this.table[id];
}
this.getPrevElement = function(id)
{
if (this.table[--id] == undefined)
    return false;
else
    return this.table[id];
}
this.getFirstElement = function()
{
return this.table[0];
}
this.getLastElement = function()
{
return this.table[this.table.length - 1];
}
this.init();
}

// -- - -- - - -- - -- - -- - -- - -- - -- - -- -- - --  - -- - - -- - -- -  -- - -- - - -- - -- - -- - -- - -- - -- - -- -- -
// -- - -- - - -- - -- - -- - -- - -           MEASUREMENTS CHEST LIMITS TABLE 		     -- -- - --  - -- - - -- - -- - -- - -
// -- - -- - - -- - -- - -- - -- - -- - -- - -- -- - --  - -- - - -- - -- -  -- - -- - - -- - -- - -- - -- - -- - -- - -- -- -
function ChestLimitsTable()
{
this.table;
this.init = function()
{
this.table = new Array();
//								Sleeve width | min | max
this.table.push( { "sleeveWidth": 6.25,  "min": 16.50, "max": 16.50 } );
this.table.push( { "sleeveWidth": 6.50,  "min": 16.50, "max": 17.50 } );
this.table.push( { "sleeveWidth": 6.75,  "min": 16.50, "max": 18.00 } );
this.table.push( { "sleeveWidth": 7.00,  "min": 16.50, "max": 19.00 } );
this.table.push( { "sleeveWidth": 7.25,  "min": 16.50, "max": 19.50 } );
this.table.push( { "sleeveWidth": 7.50,  "min": 16.50, "max": 20.00 } );
this.table.push( { "sleeveWidth": 7.75,  "min": 16.50, "max": 21.00 } );
this.table.push( { "sleeveWidth": 8.00,  "min": 16.50, "max": 21.50 } );
this.table.push( { "sleeveWidth": 8.25,  "min": 17.50, "max": 22.00 } );
this.table.push( { "sleeveWidth": 8.50,  "min": 18.00, "max": 23.00 } );
this.table.push( { "sleeveWidth": 8.75,  "min": 19.00, "max": 23.50 } );
this.table.push( { "sleeveWidth": 9.00,  "min": 19.50, "max": 24.00 } );
this.table.push( { "sleeveWidth": 9.25,  "min": 20.00, "max": 25.00 } );
this.table.push( { "sleeveWidth": 9.50,  "min": 21.00, "max": 25.50 } );
this.table.push( { "sleeveWidth": 9.75,  "min": 21.50, "max": 26.00 } );
this.table.push( { "sleeveWidth": 10.00, "min": 22.00, "max": 27.00 } );
this.table.push( { "sleeveWidth": 10.25, "min": 23.00, "max": 27.50 } );
this.table.push( { "sleeveWidth": 10.50, "min": 23.50, "max": 28.00 } );
this.table.push( { "sleeveWidth": 10.75, "min": 24.00, "max": 29.00 } );
this.table.push( { "sleeveWidth": 11.00, "min": 25.00, "max": 29.50 } );
this.table.push( { "sleeveWidth": 11.25, "min": 25.50, "max": 30.00 } );
this.table.push( { "sleeveWidth": 11.50, "min": 26.00, "max": 31.00 } );
this.table.push( { "sleeveWidth": 11.75, "min": 27.00, "max": 31.50 } );
this.table.push( { "sleeveWidth": 12.00, "min": 27.50, "max": 32.00 } );
this.table.push( { "sleeveWidth": 12.25, "min": 28.00, "max": 32.50 } );
this.table.push( { "sleeveWidth": 12.50, "min": 29.00, "max": 32.50 } );
this.table.push( { "sleeveWidth": 12.75, "min": 29.50, "max": 32.50 } );
this.table.push( { "sleeveWidth": 13.00, "min": 30.00, "max": 32.50 } );
this.table.push( { "sleeveWidth": 13.25, "min": 31.00, "max": 32.50 } );
this.table.push( { "sleeveWidth": 13.50, "min": 31.50, "max": 32.50 } );
this.table.push( { "sleeveWidth": 13.75, "min": 32.00, "max": 32.50 } );
this.table.push( { "sleeveWidth": 14.00, "min": 32.50, "max": 32.50 } );
}

this.getNearestObject = function( sleeveWidth ){
var nearestObject;
var nearestValue;
for ( var index in this.table ){
    if ( undefined == nearestValue || nearestValue > Math.abs( this.table[index]["sleeveWidth"] - sleeveWidth ) ){
        nearestObject = this.table[index];
        nearestValue = Math.abs( this.table[index]["sleeveWidth"] - sleeveWidth );
    }
}
return nearestObject;
}

this.getMinChestByNearestSleeveWidth = function( sleeveWidth ){
var obj = this.getNearestObject( sleeveWidth );
return obj.min;
}

this.getMaxChestByNearestSleeveWidth = function( sleeveWidth ){
var obj = this.getNearestObject( sleeveWidth );
return obj.max;
}
this.init();
}

// -- - -- - - -- - -- - -- - -- - -- - -- - -- -- - --  - -- - - -- - -- -  -- - -- - - -- - -- - -- - -- - -- - -- - -- -- -
// -- - -- - - -- - -- - -- - -- - -         MEASUREMENTS SLEEVE WIDTH LIMITS TABLE	     -- -- - --  - -- - - -- - -- - -- - -
// -- - -- - - -- - -- - -- - -- - -- - -- - -- -- - --  - -- - - -- - -- -  -- - -- - - -- - -- - -- - -- - -- - -- - -- -- -
function SleeveWidthLimitsTable()
{
this.table;
this.init = function()
{
this.table = new Array();
//								Sleeve width | min | max
this.table.push( { "chestWidth": 16.5,	"min": 6.25,	"max": 8.00}  );
this.table.push( { "chestWidth": 17,	"min": 6.25,	"max": 8.00}  );
this.table.push( { "chestWidth": 17.5,	"min": 6.50,	"max": 8.25}  );
this.table.push( { "chestWidth": 18,	"min": 6.75,	"max": 8.50}  );
this.table.push( { "chestWidth": 18.5,	"min": 7.00,	"max": 8.75}  );
this.table.push( { "chestWidth": 19,	"min": 7.00,	"max": 8.75}  );
this.table.push( { "chestWidth": 19.5,	"min": 7.25,	"max": 9.00}  );
this.table.push( { "chestWidth": 20,	"min": 7.50,	"max": 9.25}  );
this.table.push( { "chestWidth": 20.5,	"min": 7.75,	"max": 9.50}  );
this.table.push( { "chestWidth": 21,	"min": 7.75,	"max": 9.50}  );
this.table.push( { "chestWidth": 21.5,	"min": 8.00,	"max": 9.75}  );
this.table.push( { "chestWidth": 22,	"min": 8.25,	"max": 10.00} );
this.table.push( { "chestWidth": 22.5,	"min": 8.50,	"max": 10.25} );
this.table.push( { "chestWidth": 23,	"min": 8.50,	"max": 10.25} );
this.table.push( { "chestWidth": 23.5,	"min": 8.75,	"max": 10.50} );
this.table.push( { "chestWidth": 24,	"min": 9.00,	"max": 10.75} );
this.table.push( { "chestWidth": 24.5,	"min": 9.25,	"max": 11.00} );
this.table.push( { "chestWidth": 25,	"min": 9.25,	"max": 11.00} );
this.table.push( { "chestWidth": 25.5,	"min": 9.50,	"max": 11.25} );
this.table.push( { "chestWidth": 26,	"min": 9.75,	"max": 11.50} );
this.table.push( { "chestWidth": 26.5,	"min": 10.00,	"max": 11.75} );
this.table.push( { "chestWidth": 27,	"min": 10.00,	"max": 11.75} );
this.table.push( { "chestWidth": 27.5,	"min": 10.25,	"max": 12.00} );
this.table.push( { "chestWidth": 28,	"min": 10.50,	"max": 12.25} );
this.table.push( { "chestWidth": 28.5,	"min": 10.75,	"max": 12.50} );
this.table.push( { "chestWidth": 29,	"min": 10.75,	"max": 12.50} );
this.table.push( { "chestWidth": 29.5,	"min": 11.00,	"max": 12.75} );
this.table.push( { "chestWidth": 30,	"min": 11.25,	"max": 13.00} );
this.table.push( { "chestWidth": 30.5,	"min": 11.50,	"max": 13.25} );
this.table.push( { "chestWidth": 31,	"min": 11.50,	"max": 13.25} );
this.table.push( { "chestWidth": 31.5,	"min": 11.75,	"max": 13.50} );
this.table.push( { "chestWidth": 32,	"min": 12.00,	"max": 13.75} );
this.table.push( { "chestWidth": 32.5,	"min": 12.25,	"max": 14.00} );
}

this.getNearestObject = function( chestWidth ){
var nearestObject;
var nearestValue;
for ( var index in this.table ){
    if ( undefined == nearestValue || nearestValue > Math.abs( this.table[index]["chestWidth"] - chestWidth ) ){
        nearestObject = this.table[index];
        nearestValue = Math.abs( this.table[index]["chestWidth"] - chestWidth );
    }
}
return nearestObject;
}

this.getMinSleeveWidthByNearestChest = function( chestWidth ){
var obj = this.getNearestObject( chestWidth );
return obj.min;
}

this.getMaxSleeveWidthByNearestChest= function( chestWidth ){
var obj = this.getNearestObject( chestWidth );
return obj.max;
}
this.init();
}

// -- - -- - - -- - -- - -- - -- - -- - -- - -- -- - --  - -- - - -- - -- -  -- - -- - - -- - -- - -- - -- - -- - -- - -- -- -
// -- - -- - - -- - -- - -- - -- - -			    SHIRT MEASUREMENTS CLASS 		      -- -- - --  - -- - - -- - -- - -- --
// -- - -- - - -- - -- - -- - -- - -- - -- - -- -- - --  - -- - - -- - -- -  -- - -- - - -- - -- - -- - -- - -- - -- - -- -- -
function ShirtMeasurement()
{
// input values
this.collar_Shirt 	= 0;
this.sleeve_Shirt 	= 0;
this.shoulder_Shirt = 0;
this.chest_Shirt	= 0;
this.mid_Shirt 		= 0;
this.sleeveW_Shirt	= 0;
this.length_Shirt	= 0;
this.cuff_Shirt		= 0;
this.washes_Shirt  	= 0;
this.short_sleeve_length_Shirt = 0;
this.short_sleeve_opening_Shirt = 0;
this.short_sleeve_width_Shirt = 0;

//output values
this.fit			= 0;
this.model_Ord  	= 0;
this.size_Ord  		= 0;
this.neck_Ord  		= 0;
this.length_Ord  	= 0;
this.rSleeve_Ord  	= 0;
this.lSleeve_Ord  	= 0;
this.waist_Ord  	= 0;
this.rCuff_Ord	 	= 0;
this.lCuff_Ord		= 0;
this.bicep_adj_Ord  = 0;
this.yokeadj_Ord  	= 0;
this.backDetail_Ord	= 0;
this.rear_side_pleats = 1;

this.bicepStdDum;
this.yokeStandard;
this.waistStdDum;
this.waistDesDum;

this.sleeveWDesDum;
this.chestDesDum;
this.collarDesDum;
this.lengthStd;
this.lengthDesDum;

this.adjCollar;
this.adjChest;
this.adjMiddle;
this.adjShoulder;
this.adjBackLen;
this.adjSleeveWidth;
this.adjSleeveLen;
this.adjCuff;
this.adjShortSleeveLength;
this.adjShortSleeveWidth;
this.adjShortSleeveOpeningWidth;
this.adjBottomWidth;

// limits
this.min_collar		= 0;
this.min_sleeve		= 0;
this.min_shoulder	= 0;
this.min_chest		= 0;
this.min_mid		= 0;
this.min_sleeveW	= 0;
this.min_length		= 0;
this.min_cuff		= 0;

this.max_collar		= 0;
this.max_sleeve		= 0;
this.max_shoulder	= 0;
this.max_chest		= 0;
this.max_mid		= 0;
this.max_sleeveW	= 0;
this.max_length		= 0;
this.max_cuff		= 0;

//setter functions
this.setCollarShirt 	= function(value) {value = value.toString(); value = value.replace(',', '.'); this.collar_Shirt = parseFloat(value);};
this.setSleeveShirt 	= function(value) {value = value.toString(); value = value.replace(',', '.'); this.sleeve_Shirt = parseFloat(value);};
this.setShoulderShirt 	= function(value) {value = value.toString(); value = value.replace(',', '.'); this.shoulder_Shirt = parseFloat(value);};
this.setChestShirt		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.chest_Shirt = parseFloat(value);};
this.setMidShirt 		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.mid_Shirt = parseFloat(value);};
this.setSleeveWShirt	= function(value) {value = value.toString(); value = value.replace(',', '.'); this.sleeveW_Shirt = parseFloat(value);};
this.setLengthShirt		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.length_Shirt = parseFloat(value);};
this.setCuffShirt		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.cuff_Shirt = parseFloat(value);};
this.setWashesShirt  	= function(value) {value = value.toString(); value = value.replace(',', '.'); this.washes_Shirt = parseFloat(value);};
this.setRearSidePleats 	= function(value) {this.rear_side_pleats = (value == true);};

this.setAdjCollar		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjCollar = parseFloat(value);};
this.setAdjChest		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjChest = parseFloat(value);};
this.setAdjShoulder		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjShoulder = parseFloat(value);};
this.setAdjMiddle		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjMiddle = parseFloat(value);};
this.setAdjBackLen		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjBackLen = parseFloat(value);};
this.setAdjSleeveW		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjSleeveWidth = parseFloat(value);};
this.setAdjSleeveL		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjSleeveLen = parseFloat(value);};
this.setAdjCuff			= function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjCuff = parseFloat(value);};
this.setAdjShortSleeveLength = function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjShortSleeveLength = parseFloat(value);};
this.setAdjShortSleeveWidth = function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjShortSleeveWidth = parseFloat(value);};
this.setAdjShortSleeveOpeningWidth = function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjShortSleeveOpeningWidth = parseFloat(value);};
this.setAdjBottomWidth = function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjBottomWidth = parseFloat(value);};

this.setAdjParamsArr = function(arr)
{
this.setCollarShirt(arr[0]); 
this.setSleeveShirt(arr[1]);
this.setShoulderShirt(arr[3]);
  this.setChestShirt(arr[2]);
  this.setMidShirt(arr[5]);
  this.setSleeveWShirt(arr[6]);
  this.setLengthShirt(arr[4]);
  this.setCuffShirt(arr[7]);

 this.setAdjCollar(arr[0]); 
this.setAdjSleeveL(arr[1]);
this.setAdjChest(arr[2]);
this.setAdjShoulder(arr[3]);
this.setAdjBackLen(arr[4]);
this.setAdjMiddle(arr[5]);
this.setAdjSleeveW(arr[6]);
this.setAdjCuff(arr[7]);
}

this.setAdjParamsArrSS = function(arr)
{
this.setCollarShirt(arr[0]); 
this.setSleeveShirt(0);
this.setShoulderShirt(arr[4]);
  this.setChestShirt(arr[1]);
  this.setMidShirt(arr[2]);
  this.setLengthShirt(arr[5]);
  this.setCuffShirt(0);
  this.setSleeveWShirt(0);

 this.setAdjCollar(arr[0]);
this.setAdjChest(arr[1]);
this.setAdjMiddle(arr[2]);
this.setAdjBottomWidth(arr[3]);
this.setAdjShoulder(arr[4]);
this.setAdjBackLen(arr[5]);
this.setAdjShortSleeveLength(arr[7]);
this.setAdjShortSleeveWidth(arr[6]);
this.setAdjShortSleeveOpeningWidth(arr[8]);
this.setAdjCuff(arr[9]);
this.setAdjSleeveL(arr[11]);
this.setAdjSleeveW(arr[12]);
}

//getter functions
this.getFitOrd			= function() {return this.fit};
this.getModelOrd  		= function() {return this.model_Ord};
this.getSizeOrd  		= function() {return this.size_Ord};
this.getNeckOrd  		= function() {return this.neck_Ord};
this.getLengthOrd  		= function() {return this.length_Ord};
this.getRSleeveOrd  	= function() {return this.rSleeve_Ord};
this.getLSleeveOrd 	 	= function() {return this.lSleeve_Ord};
this.getWaistOrd  		= function() {return this.waist_Ord};
this.getRCuffOrd  		= function() {return this.rCuff_Ord};
this.getLCuffOrd  		= function() {return this.lCuff_Ord};
this.getBicepAdjOrd  	= function() {return this.bicep_adj_Ord};
this.getYokeAdjOrd  	= function() {return this.yokeadj_Ord};
this.getBackDetailOrd	= function() {return this.backDetail_Ord};

this.getMinCollar		= function() {return this.min_collar;};
this.getMinSleeve		= function() {return this.min_sleeve;};
this.getMinShoulder		= function() {return this.min_shoulder;};
this.getMinChest		= function() {return this.min_chest;};
this.getMinMid			= function() {return this.min_mid;};
this.getMinSleveW		= function() {return this.min_sleeveW;};
this.getMinLength		= function() {return this.min_length;};
this.getMinCuff			= function() {return this.min_cuff;};

this.getMaxCollar		= function() {return this.max_collar;};
this.getMaxSleeve		= function() {return this.max_sleeve;};
this.getMaxShoulder		= function() {return this.max_shoulder;};
this.getMaxChest		= function() {return this.max_chest;};
this.getMaxMid			= function() {return this.max_mid;};
this.getMaxSleveW		= function() {return this.max_sleeveW;};
this.getMaxLength		= function() {return this.max_length;};
this.getMaxCuff			= function() {return this.max_cuff;};

this.getAdjCollar		= function() {return Math.abs(this.adjCollar)};
this.getAdjChest		= function() {return Math.abs(this.adjChest)};
this.getAdjShoulder	= function() {return Math.abs(this.adjShoulder)};
this.getAdjMiddle		= function() {return Math.abs(this.adjMiddle)};
this.getAdjBackLen	= function() {return Math.abs(this.adjBackLen)};
this.getAdjSleeveW	= function() {return Math.abs(this.adjSleeveWidth)};
this.getAdjSleeveL	= function() {return Math.abs(this.adjSleeveLen)};
this.getAdjCuff			= function() {return Math.abs(this.adjCuff)};
this.getAdjShortSleeveLength = function() {return Math.abs(this.adjShortSleeveLength)};
this.getAdjShortSleeveWidth = function() {return Math.abs(this.adjShortSleeveWidth)};
this.getAdjShortSleeveOpeningWidth = function() {return Math.abs(this.adjShortSleeveOpeningWidth)};
this.getAdjBottomWidth = function() {return Math.abs(this.adjBottomWidth)};

this.table = new ChestWidthTable();

this.calculateStandardSizesLongSleeve = function(collar, sleeve_length, type_of_fit) {
var standard_sizes_table = {
    sf: {
        "14": {"yoke": 16, "chest": 19.5, "midsection": 17, "sleeve_width": 7.5, "cuff": 8},
        "14.25": {"yoke": 16.25, "chest": 20, "midsection": 17.5, "sleeve_width": 7.75, "cuff": 8.25},
        "14.5": {"yoke": 16.5, "chest": 20.5, "midsection": 18, "sleeve_width": 7.75, "cuff": 8.25},
        "14.75": {"yoke": 16.75, "chest": 21, "midsection": 18.5, "sleeve_width": 7.75, "cuff": 8.5},
        "15": {"yoke": 17, "chest": 21.5, "midsection": 19, "sleeve_width": 8, "cuff": 8.5},
        "15.25": {"yoke": 17.25, "chest": 22, "midsection": 19.5, "sleeve_width": 8, "cuff": 8.75},
        "15.5": {"yoke": 17.25, "chest": 22.5, "midsection": 20, "sleeve_width": 8.25, "cuff": 8.75},
        "15.75": {"yoke": 17.5, "chest": 23, "midsection": 20.75, "sleeve_width": 8.75, "cuff": 8.75},
        "16": {"yoke": 17.75, "chest": 23.5, "midsection": 21, "sleeve_width": 9, "cuff": 9},
        "16.25": {"yoke": 18, "chest": 24, "midsection": 21.5, "sleeve_width": 9, "cuff": 9},
        "16.5": {"yoke": 18, "chest": 24.5, "midsection": 22, "sleeve_width": 9.25, "cuff": 9},
        "16.75": {"yoke": 18.25, "chest": 25, "midsection": 22.5, "sleeve_width": 9.25, "cuff": 9.25},
        "17": {"yoke": 18.25, "chest": 25.5, "midsection": 23, "sleeve_width": 9.5, "cuff": 9.25},
        "17.25": {"yoke": 18.5, "chest": 26, "midsection": 23.5, "sleeve_width": 9.75, "cuff": 9.5},
        "17.5": {"yoke": 18.75, "chest": 26.5, "midsection": 24, "sleeve_width": 9.75, "cuff": 9.5},
        "17.75": {"yoke": 19, "chest": 27, "midsection": 24.5, "sleeve_width": 10, "cuff": 9.75},
        "18": {"yoke": 19.25, "chest": 27.5, "midsection": 25, "sleeve_width": 10, "cuff": 9.75},
        "18.25": {"yoke": 19.5, "chest": 28, "midsection": 25.5, "sleeve_width": 10.5, "cuff": 10},
        "18.5": {"yoke": 19.75, "chest": 28.5, "midsection": 26, "sleeve_width": 10.5, "cuff": 10},
        "18.75": {"yoke": 20, "chest": 29, "midsection": 26.5, "sleeve_width": 10.75, "cuff": 10.25},
        "19": {"yoke": 20.25, "chest": 29.5, "midsection": 27, "sleeve_width": 10.75, "cuff": 10.25},
        "19.25": {"yoke": 20.5, "chest": 30, "midsection": 27.5, "sleeve_width": 11, "cuff": 10.25},
        "19.5": {"yoke": 20.75, "chest": 30.5, "midsection": 28, "sleeve_width": 11.25, "cuff": 10.25},
        "19.75": {"yoke": 21, "chest": 31, "midsection": 28.5, "sleeve_width": 11.5, "cuff": 10.25},
        "20": {"yoke": 21.25, "chest": 31.5, "midsection": 29, "sleeve_width": 11.5, "cuff": 10.25},
        "20.25": {"yoke": 21.5, "chest": 32, "midsection": 29.5, "sleeve_width": 11.75, "cuff": 10.5},
        "20.5": {"yoke": 21.75, "chest": 32.5, "midsection": 30, "sleeve_width": 11.75, "cuff": 10.5},
        "20.75": {"yoke": 22, "chest": 33, "midsection": 30.5, "sleeve_width": 12, "cuff": 10.5},
        "21": {"yoke": 22.25, "chest": 33.5, "midsection": 31, "sleeve_width": 12, "cuff": 10.5},
        "21.25": {"yoke": 22.5, "chest": 34, "midsection": 31.5, "sleeve_width": 12.25, "cuff": 10.5},
        "21.5": {"yoke": 22.75, "chest": 34.5, "midsection": 32, "sleeve_width": 12.25, "cuff": 10.5},
        "21.75": {"yoke": 23, "chest": 35, "midsection": 32.5, "sleeve_width": 12.5, "cuff": 10.5},
        "22": {"yoke": 23.25, "chest": 35.5, "midsection": 33, "sleeve_width": 12.5, "cuff": 10.5},
        "22.25": {"yoke": 23.5, "chest": 35.75, "midsection": 33.25, "sleeve_width": 12.75, "cuff": 10.5},
        "22.5": {"yoke": 23.75, "chest": 36, "midsection": 33.5, "sleeve_width": 13, "cuff": 10.5},
        "22.75": {"yoke": 24, "chest": 36.25, "midsection": 33.75, "sleeve_width": 13, "cuff": 10.5},
        "23": {"yoke": 24.25, "chest": 36.5, "midsection": 34, "sleeve_width": 13.25, "cuff": 10.5},
        "23.25": {"yoke": 24.5, "chest": 36.75, "midsection": 34.25, "sleeve_width": 13.25, "cuff": 10.5},
        "23.5": {"yoke": 24.75, "chest": 37, "midsection": 34.5, "sleeve_width": 13.25, "cuff": 10.5},
        "23.75": {"yoke": 25, "chest": 37, "midsection": 34.75, "sleeve_width": 13.5, "cuff": 10.5},
        "24": {"yoke": 25.25, "chest": 37, "midsection": 35, "sleeve_width": 13.5, "cuff": 10.5}
    },

    ssf: {
        "14": {"yoke": 16, "chest": 19, "midsection": 15.75, "sleeve_width": 7, "cuff": 8},
        "14.25": {"yoke": 16.25, "chest": 19.5, "midsection": 16, "sleeve_width": 7.25, "cuff": 8.25},
        "14.5": {"yoke": 16.5, "chest": 20, "midsection": 16.5, "sleeve_width": 7.25, "cuff": 8.25},
        "14.75": {"yoke": 16.75, "chest": 20.5, "midsection": 17, "sleeve_width": 7.25, "cuff": 8.5},
        "15": {"yoke": 17, "chest": 21, "midsection": 17.5, "sleeve_width": 7.5, "cuff": 8.5},
        "15.25": {"yoke": 17.25, "chest": 21.5, "midsection": 18, "sleeve_width": 7.5, "cuff": 8.75},
        "15.5": {"yoke": 17.25, "chest": 22, "midsection": 18.5, "sleeve_width": 7.75, "cuff": 8.75},
        "15.75": {"yoke": 17.5, "chest": 22.5, "midsection": 19, "sleeve_width": 8.25, "cuff": 8.75},
        "16": {"yoke": 17.75, "chest": 23, "midsection": 19.5, "sleeve_width": 8.5, "cuff": 9},
        "16.25": {"yoke": 18, "chest": 23.5, "midsection": 20, "sleeve_width": 8.5, "cuff": 9},
        "16.5": {"yoke": 18, "chest": 24, "midsection": 20.5, "sleeve_width": 8.75, "cuff": 9},
        "16.75": {"yoke": 18.25, "chest": 24.5, "midsection": 21, "sleeve_width": 8.75, "cuff": 9.25},
        "17": {"yoke": 18.25, "chest": 25, "midsection": 21.5, "sleeve_width": 9, "cuff": 9.25},
        "17.25": {"yoke": 18.5, "chest": 25.5, "midsection": 22, "sleeve_width": 9.25, "cuff": 9.5},
        "17.5": {"yoke": 18.75, "chest": 26, "midsection": 22.5, "sleeve_width": 9.25, "cuff": 9.5},
        "17.75": {"yoke": 19, "chest": 26.5, "midsection": 23, "sleeve_width": 9.5, "cuff": 9.75},
        "18": {"yoke": 19.25, "chest": 27, "midsection": 23.5, "sleeve_width": 9.5, "cuff": 9.75},
        "18.25": {"yoke": 19.5, "chest": 27.5, "midsection": 24, "sleeve_width": 10, "cuff": 10},
        "18.5": {"yoke": 19.75, "chest": 28, "midsection": 24.5, "sleeve_width": 10, "cuff": 10},
        "18.75": {"yoke": 20, "chest": 28.5, "midsection": 25, "sleeve_width": 10.25, "cuff": 10.25},
        "19": {"yoke": 20.25, "chest": 29, "midsection": 25.5, "sleeve_width": 10.25, "cuff": 10.25},
        "19.25": {"yoke": 20.5, "chest": 29.5, "midsection": 26, "sleeve_width": 10.5, "cuff": 10.25},
        "19.5": {"yoke": 20.75, "chest": 30, "midsection": 26.5, "sleeve_width": 10.75, "cuff": 10.25},
        "19.75": {"yoke": 21, "chest": 30.5, "midsection": 27, "sleeve_width": 11, "cuff": 10.25},
        "20": {"yoke": 21.25, "chest": 31, "midsection": 27.5, "sleeve_width": 11, "cuff": 10.25},
        "20.25": {"yoke": 21.5, "chest": 31.5, "midsection": 28, "sleeve_width": 11.25, "cuff": 10.5},
        "20.5": {"yoke": 21.75, "chest": 32, "midsection": 28.5, "sleeve_width": 11.25, "cuff": 10.5},
        "20.75": {"yoke": 22, "chest": 32.5, "midsection": 29, "sleeve_width": 11.5, "cuff": 10.5},
        "21": {"yoke": 22.25, "chest": 33, "midsection": 29.5, "sleeve_width": 11.5, "cuff": 10.5},
        "21.25": {"yoke": 22.5, "chest": 33.5, "midsection": 30, "sleeve_width": 11.75, "cuff": 10.5},
        "21.5": {"yoke": 22.75, "chest": 34, "midsection": 30.5, "sleeve_width": 11.75, "cuff": 10.5},
        "21.75": {"yoke": 23, "chest": 34.5, "midsection": 31, "sleeve_width": 12, "cuff": 10.5},
        "22": {"yoke": 23.25, "chest": 35, "midsection": 31.5, "sleeve_width": 12, "cuff": 10.5},
        "22.25": {"yoke": 23.25, "chest": 35.25, "midsection": 31.75, "sleeve_width": 12.25, "cuff": 10.5},
        "22.5": {"yoke": 23.25, "chest": 35.5, "midsection": 32, "sleeve_width": 12.5, "cuff": 10.5},
        "22.75": {"yoke": 23.25, "chest": 35.75, "midsection": 32.25, "sleeve_width": 12.75, "cuff": 10.5},
        "23": {"yoke": 23.25, "chest": 36, "midsection": 32.5, "sleeve_width": 13, "cuff": 10.5},
        "23.25": {"yoke": 23.25, "chest": 36.25, "midsection": 32.75, "sleeve_width": 13.25, "cuff": 10.5},
        "23.5": {"yoke": 23.25, "chest": 36.5, "midsection": 33, "sleeve_width": 13.25, "cuff": 10.5},
        "23.75": {"yoke": 23.25, "chest": 36.75, "midsection": 33.25, "sleeve_width": 13.25, "cuff": 10.5},
        "24": {"yoke": 23.25, "chest": 37, "midsection": 33.5, "sleeve_width": 13.25, "cuff": 10.5}
    },

    cf: {
        "14": {"yoke": 17, "chest": 20.5, "midsection": 18.5, "sleeve_width": 8.75, "cuff": 8},
        "14.25": {"yoke": 17.25, "chest": 21, "midsection": 19, "sleeve_width": 9, "cuff": 8.25},
        "14.5": {"yoke": 17.5, "chest": 21.5, "midsection": 19.5, "sleeve_width": 9.25, "cuff": 8.25},
        "14.75": {"yoke": 17.75, "chest": 22, "midsection": 20, "sleeve_width": 9.25, "cuff": 8.5},
        "15": {"yoke": 18, "chest": 22.5, "midsection": 20.5, "sleeve_width": 9.5, "cuff": 8.5},
        "15.25": {"yoke": 18.25, "chest": 23, "midsection": 21, "sleeve_width": 9.75, "cuff": 8.75},
        "15.5": {"yoke": 18.5, "chest": 23.5, "midsection": 21.5, "sleeve_width": 9.75, "cuff": 8.75},
        "15.75": {"yoke": 18.75, "chest": 24, "midsection": 22, "sleeve_width": 10, "cuff": 8.75},
        "16": {"yoke": 19, "chest": 24.5, "midsection": 22.5, "sleeve_width": 10, "cuff": 9},
        "16.25": {"yoke": 19.25, "chest": 25, "midsection": 23, "sleeve_width": 10.25, "cuff": 9.25},
        "16.5": {"yoke": 19.5, "chest": 25.5, "midsection": 23.5, "sleeve_width": 10.5, "cuff": 9.5},
        "16.75": {"yoke": 19.75, "chest": 26, "midsection": 24, "sleeve_width": 10.5, "cuff": 9.5},
        "17": {"yoke": 20, "chest": 26.5, "midsection": 24.5, "sleeve_width": 10.75, "cuff": 9.5},
        "17.25": {"yoke": 20.25, "chest": 27, "midsection": 25, "sleeve_width": 11, "cuff": 9.75},
        "17.5": {"yoke": 20.5, "chest": 27.5, "midsection": 25.5, "sleeve_width": 11, "cuff": 9.75},
        "17.75": {"yoke": 20.75, "chest": 28, "midsection": 26, "sleeve_width": 11.25, "cuff": 10},
        "18": {"yoke": 21, "chest": 28.5, "midsection": 26.5, "sleeve_width": 11.25, "cuff": 10},
        "18.25": {"yoke": 21.25, "chest": 29, "midsection": 27, "sleeve_width": 11.5, "cuff": 10.25},
        "18.5": {"yoke": 21.5, "chest": 29.5, "midsection": 27.5, "sleeve_width": 11.75, "cuff": 10.25},
        "18.75": {"yoke": 21.75, "chest": 30, "midsection": 28, "sleeve_width": 11.75, "cuff": 10.25},
        "19": {"yoke": 22, "chest": 30.5, "midsection": 28.5, "sleeve_width": 12, "cuff": 10.25},
        "19.25": {"yoke": 22.25, "chest": 31, "midsection": 29, "sleeve_width": 12.25, "cuff": 10.25},
        "19.5": {"yoke": 22.5, "chest": 31.5, "midsection": 29.5, "sleeve_width": 12.25, "cuff": 10.25},
        "19.75": {"yoke": 22.75, "chest": 32, "midsection": 30, "sleeve_width": 12.5, "cuff": 10.5},
        "20": {"yoke": 23, "chest": 32.5, "midsection": 30.5, "sleeve_width": 12.5, "cuff": 10.5},
        "20.25": {"yoke": 23.25, "chest": 33, "midsection": 31, "sleeve_width": 12.75, "cuff": 10.5},
        "20.5": {"yoke": 23.5, "chest": 33.5, "midsection": 31.5, "sleeve_width": 12.75, "cuff": 10.5},
        "20.75": {"yoke": 23.75, "chest": 34, "midsection": 32, "sleeve_width": 13, "cuff": 10.5},
        "21": {"yoke": 24, "chest": 34.5, "midsection": 32.5, "sleeve_width": 13, "cuff": 10.75},
        "21.25": {"yoke": 24.25, "chest": 35, "midsection": 33, "sleeve_width": 13.12, "cuff": 10.75},
        "21.5": {"yoke": 24.5, "chest": 35.5, "midsection": 33.5, "sleeve_width": 13.22, "cuff": 10.75},
        "21.75": {"yoke": 24.75, "chest": 36, "midsection": 34, "sleeve_width": 13.32, "cuff": 10.75},
        "22": {"yoke": 25, "chest": 36.5, "midsection": 34.5, "sleeve_width": 13.42, "cuff": 10.75},
        "22.25": {"yoke": 25, "chest": 36.75, "midsection": 34.75, "sleeve_width": 13.5, "cuff": 10.75},
        "22.5": {"yoke": 25, "chest": 37, "midsection": 35, "sleeve_width": 13.5, "cuff": 10.75},
        "22.75": {"yoke": 25, "chest": 37, "midsection": 35.25, "sleeve_width": 13.5, "cuff": 10.75},
        "23": {"yoke": 25, "chest": 37, "midsection": 35.5, "sleeve_width": 13.75, "cuff": 10.75},
        "23.25": {"yoke": 25, "chest": 37, "midsection": 35.75, "sleeve_width": 13.75, "cuff": 10.75},
        "23.5": {"yoke": 25, "chest": 37, "midsection": 36, "sleeve_width": 13.75, "cuff": 10.75},
        "23.75": {"yoke": 25, "chest": 37, "midsection": 36.25, "sleeve_width": 14, "cuff": 10.75},
        "24": {"yoke": 25, "chest": 37, "midsection": 36.5, "sleeve_width": 14, "cuff": 10.75}
    }
}

var shirt_length_table = {
    "30": 28,
    "30.25": 28,
    "30.5": 28.5,
    "30.75": 28.5,
    "31": 29,
    "31.25": 29,
    "31.5": 29.5,
    "31.75": 29.5,
    "32": 30,
    "32.25": 30,
    "32.5": 30,
    "32.75": 30.5,
    "33": 30.5,
    "33.25": 30.5,
    "33.5": 31,
    "33.75": 31,
    "34": 31,
    "34.25": 31.5,
    "34.5": 31.5,
    "34.75": 31.5,
    "35": 31.5,
    "35.25": 32,
    "35.5": 32,
    "35.75": 32,
    "36": 32.5,
    "36.25": 32.5,
    "36.5": 32.5,
    "36.75": 33,
    "37": 33,
    "37.25": 33,
    "37.5": 33,
    "37.75": 33.5,
    "38": 33.5,
    "38.25": 33.5,
    "38.5": 34,
    "38.75": 34,
    "39": 34,
    "39.25": 34.5,
    "39.5": 34.5,
    "39.75": 34.5,
    "40": 34.5,
    "40.25": 35,
    "40.5": 35,
    "40.75": 35,
    "41": 35.5,
    "41.25": 35.5,
    "41.5": 35.5,
    "41.75": 36,
    "42": 36
}

return {
    'collar_field': collar,
    'chest_field': standard_sizes_table[type_of_fit][collar.toString()]['chest'],
    'yoke_field': standard_sizes_table[type_of_fit][collar.toString()]['yoke'],
    'midsection_field': standard_sizes_table[type_of_fit][collar.toString()]['midsection'],
    'length_field': shirt_length_table[sleeve_length.toString()],
    'sleeve_w_field': standard_sizes_table[type_of_fit][collar.toString()]['sleeve_width'],
    'sleeve_field': sleeve_length,
    'cuff_field': standard_sizes_table[type_of_fit][collar.toString()]['cuff']
}
}

// limits
this.correctByLimits		= function()
{
if (this.adjCollar > this.max_collar) this.adjCollar = this.max_collar;
if (this.adjCollar < this.min_collar) this.adjCollar = this.min_collar;

if (this.adjMiddle > this.max_mid) this.adjMiddle = this.max_mid;
if (this.adjMiddle < this.min_mid) this.adjMiddle = this.min_mid;

if (this.adjShoulder > this.max_shoulder) this.adjShoulder = this.max_shoulder;
if (this.adjShoulder < this.min_shoulder) this.adjShoulder = this.min_shoulder;

if (this.adjBackLen > this.max_length) this.adjBackLen = this.max_length;
if (this.adjBackLen < this.min_length) this.adjBackLen = this.min_length;

if (this.adjSleeveLen > this.max_sleeve) this.adjSleeveLen = this.max_sleeve;
if (this.adjSleeveLen < this.min_sleeve) this.adjSleeveLen = this.min_sleeve;

if (this.adjCuff > this.max_cuff) this.adjCuff = this.max_cuff;
if (this.adjCuff < this.min_cuff) this.adjCuff = this.min_cuff;
}
// limits
this.calculateLimits 		= function()
{
var chestLimitsTable = new ChestLimitsTable();
var sleeveWidthLimitsTable = new SleeveWidthLimitsTable();
this.min_collar		= 12;
this.min_chest		= 15;
this.min_mid			= 15;
this.min_shoulder	= 14;
this.min_length		= 25;
this.min_sleeveW 	= 5;
this.min_sleeve		= 22;
this.min_cuff			= 7;
this.min_bottom_width = this.adjMiddle;

this.max_collar		= 26;
this.max_chest		= 34;
this.max_mid			= 34;
this.max_shoulder	= 28;
this.max_length		= 45;
this.max_sleeveW	= 15;
this.max_sleeve		= 42;
this.max_cuff			= 13;
this.max_bottom_width = this.adjChest;
}

// general function
this.calculate			= function(calculateAdjValues) 
{
if (calculateAdjValues == undefined) calculateAdjValues = true;

if (calculateAdjValues && isShortSleeve()) {
    this.adjCollar = excelCeil(4 * this.adjCollar) / 4;
    // this.adjChest = excelRound(2 * this.chest_Shirt) / 2;
    this.adjChest = roundToBase(2 * this.chest_Shirt, 0.25) / 2;
    this.adjSleeveWidth = excelCeil( this.sleeveW_Shirt * 4 ) / 4;
    this.calculateLimits();
    this.correctByLimits();
    if (this.adjSleeveWidth > this.max_sleeveW) this.adjSleeveWidth = this.max_sleeveW;
    if (this.adjSleeveWidth < this.min_sleeveW) this.adjSleeveWidth = this.min_sleeveW;
    // this.adjChest = excelRound(2 * this.chest_Shirt) / 2;
    this.adjChest = roundToBase(2 * this.chest_Shirt, 0.25) / 2;
    this.calculateLimits();
    if (this.adjChest > this.max_chest) this.adjChest = this.max_chest;
    if (this.adjChest < this.min_chest) this.adjChest = this.min_chest;
    // this.adjMiddle = excelCeil(2 * this.mid_Shirt) / 2;
    this.adjMiddle = roundToBase(2 * this.mid_Shirt, 0.25) / 2;
    this.adjShoulder = excelCeil(4 * this.shoulder_Shirt) / 4;
    this.adjBackLen = excelCeil(2 * this.length_Shirt) / 2;
    this.adjSleeveLen = excelRound(4 * ( this.sleeve_Shirt ) ) / 4;
    this.adjCuff = excelCeil(4 * this.cuff_Shirt) / 4;
    this.adjShortSleeveLength = excelCeil(4 * this.adjShortSleeveLength) / 4;
    this.adjShortSleeveWidth = excelCeil(4 * this.adjShortSleeveWidth) / 4;
    this.adjShortSleeveOpeningWidth = excelCeil(4 * this.adjShortSleeveOpeningWidth) / 4;
    this.calculateLimits();
    this.correctByLimits();
    return;
}

if ( calculateAdjValues )
{
    this.adjCollar 		= excelCeil(4 * this.collar_Shirt) / 4;

//			this.adjChest = excelRound(2 * this.chest_Shirt) / 2; // Yura quick change 0.5 -> 0.25
                this.adjChest = roundToBase(2 * this.chest_Shirt, 0.25) / 2;
    this.adjSleeveWidth = excelCeil( this.sleeveW_Shirt * 4 ) / 4;
    this.calculateLimits();
    this.correctByLimits();
    if (this.adjSleeveWidth > this.max_sleeveW) this.adjSleeveWidth = this.max_sleeveW;
    if (this.adjSleeveWidth < this.min_sleeveW) this.adjSleeveWidth = this.min_sleeveW;

//			this.adjChest = excelRound(2 * this.chest_Shirt) / 2; // Yura quick change 0.5 -> 0.25
                this.adjChest = roundToBase(2 * this.chest_Shirt, 0.25) / 2;
    this.calculateLimits();
    if (this.adjChest > this.max_chest) this.adjChest = this.max_chest;
    if (this.adjChest < this.min_chest) this.adjChest = this.min_chest;

//			this.adjMiddle 		= excelCeil(2 * this.mid_Shirt) / 2; // Yura quick change 0.5 -> 0.25
                this.adjMiddle = roundToBase(2 * this.mid_Shirt, 0.25) / 2;
    this.adjShoulder = excelCeil(4 * this.shoulder_Shirt) / 4;
    this.adjBackLen = excelCeil(2 * this.length_Shirt) / 2;

    this.adjSleeveLen = excelRound(4 * ( this.sleeve_Shirt ) ) / 4;
    this.adjCuff = excelCeil(4 * this.cuff_Shirt) / 4;
    
    this.adjShortSleeveLength = excelCeil(4 * this.adjShortSleeveLength) / 4;
    this.adjShortSleeveWidth = excelCeil(4 * this.adjShortSleeveWidth) / 4;
    this.adjShortSleeveOpeningWidth = excelCeil(4 * this.adjShortSleeveOpeningWidth) / 4;

    this.calculateLimits();
    this.correctByLimits();
}

return;



// adj variables 
if (calculateAdjValues){
    if (this.chest_Shirt > 16.5)
                        this.adjChest = roundToBase(2 * this.chest_Shirt, 0.25) / 2;
//				this.adjChest = excelRound(2 * this.chest_Shirt) / 2; // Yura quick change 0.5 -> 0.25
    else
        this.adjChest = 16.5;
    if (this.adjChest > this.min_chest) this.adjChest = this.min_chest;
    if (this.adjChest < this.max_chest) this.adjChest = this.max_chest;
}
// ord variables 
switch (this.adjChest)
{
    case 20.75: case 21.75: case 22.75: case 23.75: case 24.75: case 25.75: case 26.75: case 27.75: case 28.75: case 29.75:
    case 30.75: case 31.75: case 32.75: case 33.75: case 34.75: case 35.75: case 37.25: 
        this.fit = 1;
    break;
    default: this.fit = 0;
}
this.model_Ord = this.fit;
if (this.adjChest > 19.5)
    this.size_Ord = this.table.getElementById(this.table.findNearIdByValue(6, 4 * this.adjChest))[7];
else
    this.size_Ord = 14
/*
switch (this.adjChest)
{
    case 20.25: case 21.25: case 22.25: case 23.25: case 24.25: case 25.25: case 26.25: case 27.25: case 28.25: case 29.25:
    case 30.25: case 31.25: case 32.25: case 33.25: case 34.25: case 35.25: case 36.25: 
        this.rear_side_pleats = 1;
    break;
    default: this.rear_side_pleats = 0;
}
*/

// tmp variables
this.bicepStdDum = ((this.size_Ord - 14) * 1.5 + 17) / 2;
this.yokeStandard = this.size_Ord + (this.fit == 0? 3 : 3.5);
this.waistStdDum = (this.fit == 0? 37 + 4 * (this.size_Ord - 14) : 40 + 4 * (this.size_Ord - 14));
if (this.model_Ord == 0 && this.rear_side_pleats == 1)
    this.waistStdDum = 37 + 4 * (this.size_Ord - 14);
else if(this.model_Ord == 1 && this.rear_side_pleats == 1)
    this.waistStdDum = 40 + 4 * (this.size_Ord - 14);
else if(this.model_Ord == 0 && this.rear_side_pleats == 0)
    this.waistStdDum = 36 + 4 * (this.size_Ord - 14);
else
    this.waistStdDum = 39 + 4 * (this.size_Ord - 14);
var tmp2;
var tmp1;

if (calculateAdjValues)
    this.sleeveWDesDum = this.sleeveW_Shirt;
else
    this.sleeveWDesDum = this.adjSleeveWidth;

// adj variables
if (calculateAdjValues)
{
    this.adjSleeveWidth = excelCeil( this.sleeveW_Shirt * 4 ) / 4;
    if (this.adjSleeveWidth > this.bicepStdDum + 1) this.adjSleeveWidth = this.bicepStdDum + 1;
    if (this.adjSleeveWidth < this.bicepStdDum - 1) this.adjSleeveWidth = this.bicepStdDum - 1;
    this.adjCollar 		= excelCeil(4 * this.collar_Shirt) / 4;
//			this.adjMiddle 		= excelCeil(2 * this.mid_Shirt) / 2;
                this.adjMiddle = roundToBase(2 * this.mid_Shirt, 0.25) / 2;
    this.adjShoulder 	= excelCeil(4 * this.shoulder_Shirt) / 4;
    this.adjBackLen 	= excelCeil(2 * this.length_Shirt) / 2;

    { // check for adj shoulder
        this.calculateLimits();
        this.correctByLimits();
    }
    
    this.adjSleeveLen = excelRound(4 * ( this.sleeve_Shirt + this.shoulder_Shirt / 2 ) ) / 4;
    this.adjCuff = excelCeil(4 * this.cuff_Shirt) / 4;
}
if (calculateAdjValues)
{
    this.calculateLimits();
    this.correctByLimits();
} 

// ord files
this.neck_Ord=this.length_Ord=this.rSleeve_Ord=this.lSleeve_Ord=this.bicepStdDum=this.yokeStandard=this.waist_Ord=this.rCuff_Ord=this.lCuff_Ord=
this.bicep_adj_Ord=this.yokeadj_Ord=this.backDetail_Ord = 0;
};
//	---------	--------	---------	---------	---------	----------	----------	----------
this.debug_limits 		= function()
{
var str = '';
str += 'collar: ' + this.min_collar + ' | ' + this.max_collar + '\n';
str += 'sleeve: ' + this.min_sleeve + ' | ' + this.max_sleeve + '\n';
str += 'shoulder: ' + this.min_shoulder + ' | ' + this.max_shoulder + '\n';
str += 'chest: ' + this.min_chest + ' | ' + this.max_chest + '\n';
str += 'midle: ' + this.min_mid + ' | ' + this.max_mid + '\n';
str += 'sleeve_width: ' + this.min_sleeveW + ' | ' + this.max_sleeveW + '\n';
str += 'shirt len: ' + this.min_length + ' | ' + this.max_length + '\n';
str += 'cuff: ' + this.min_cuff + ' | ' + this.max_cuff + '\n';
alert(str);
}

this.debug_adj			= function()
{
var str = 'Collar: ' + this.adjCollar + '\n';
str += 'Chest: ' + this.adjChest + '\n';
str += 'Shoulder: ' + this.adjShoulder	 + '\n';
str += 'Middle: ' + this.adjMiddle	 + '\n';
str += 'Length: ' + this.adjBackLen	 + '\n';
str += 'Sleeve width: ' + this.adjSleeveWidth	 + '\n';
str += 'Sleeve Len: ' + this.adjSleeveLen	 + '\n';
str += 'Cuff: ' + this.adjCuff		 + '\n';
alert(str);
}

this.debug_tmp			= function()
{
var str = 'bicep_std_dum: ' + this.bicepStdDum + '\n';
str += 'yoke_standart: ' + this.yokeStandard + '\n';
str += 'waist_std_dum: ' + this.waistStdDum + '\n';
str += 'waist_des_bum: ' + this.waistDesDum + '\n';

str += 'sleeve_w_des_dum: ' + this.sleeveWDesDum + '\n';
str += 'chest_des_dum: ' + this.chestDesDum + '\n';
str += 'collar_des_dum: ' + this.collarDesDum + '\n';
str += 'length_std: ' + this.lengthStd + '\n';
str += 'length_des_dum: ' + this.lengthDesDum + '\n';
alert(str);
}

this.debug_ord			= function()
{
var str = '';
str += 'getFitOrd: ' + this.getFitOrd() + '\n';
str += 'getModelOrd: ' + this.getModelOrd() + '\n';
str += 'getSizeOrd: ' + this.getSizeOrd() + '\n';
str += 'getNeckOrd: ' + this.getNeckOrd() + '\n';
str += 'getLengthOrd: ' + this.getLengthOrd() + '\n';
str += 'getRSleeveOrd: ' + this.getRSleeveOrd() + '\n';
str += 'getLSleeveOrd: ' + this.getLSleeveOrd() + '\n';
str += 'getWaistOrd: ' + this.getWaistOrd() + '\n';
str += 'getRCuffOrd: ' + this.getRCuffOrd() + '\n';
str += 'getLCuffOrd: ' + this.getLCuffOrd() + '\n';
str += 'getBicepAdjOrd: ' + this.getBicepAdjOrd() + '\n';
str += 'getYokeAdjOrd: ' + this.getYokeAdjOrd() + '\n';
str += 'getBackDetailOrd: ' + this.getBackDetailOrd() + '\n';
str += '\n';
str += 'explanations: \n';
str += 'getBackDetailOrd: 1 or true = pleats ; 0 or false - no pleats\n';
str += 'getFitOrd: 1 or true - regular ; 0 or false - slim\n';

alert(str);
}
}
// -- - -- - - -- - -- - -- - -- - -- - -- - -- -- - --  - -- - - -- - -- -  -- - -- - - -- - -- - -- - -- - -- - -- - -- -- - --  - -- - - -- - -- - -- - -- - - -- - -- - --
//-- - -- - - -- - -- - -- - -- - -			    BODY MEASUREMENTS CLASS 			      -- -- - --  - -- - - -- - -- - -- -- 
// -- - -- - - -- - -- - -- - -- - -- - -- - -- -- - --  - -- - - -- - -- -  -- - -- - - -- - -- - -- - -- - -- - -- - -- -- - --  - -- - - -- - -- - -- - -- - - -- - -- - --
function BodyMeasurement()
{
// input values
this.neck 			= 0;
this.arm_len 		= 0;
this.shoulder_W 	= 0;
this.chest			= 0;
this.waist_around 	= 0;
this.length			= 0;
this.wrist_around	= 0;
this.bicep_around  	= 0;
this.style_body		= 0;	
this.rear_side_pleats = true;
//output values
this.fit			= 0;
this.model_Ord  	= 0;
this.size_Ord  		= 0;
this.neck_Ord  		= 0;
this.length_Ord  	= 0;
this.rSleeve_Ord  	= 0;
this.lSleeve_Ord  	= 0;
this.waist_Ord  	= 0;
this.rCuff_Ord	 	= 0;
this.lCuff_Ord		= 0;
this.bicep_adj_Ord  = 0;
this.yokeadj_Ord  	= 0;
this.backDetail_Ord = false;
// adj values
this.adjCollar;
this.adjChest;
this.adjShoulder;
this.adjMiddle;
this.adjBackLen;
this.adjSleeveWidth;
this.adjSleeveLen;
this.adjCuff;
//tmp variables
this.bicepStdDum;
this.yokeStandard;
this.waistStdDum;
this.waistDesDum;
this.bicepDesDum;
this.chestDesDum;

this.chest_tmp;
//limits
this.min_collar		= 0;
this.min_sleeve		= 0;
this.min_shoulder	= 0;
this.min_chest		= 0;
this.min_mid		= 0;
this.min_sleeveW	= 0;
this.min_length		= 0;
this.min_cuff		= 0;

this.max_collar		= 0;
this.max_sleeve		= 0;
this.max_shoulder	= 0;
this.max_chest		= 0;
this.max_mid		= 0;
this.max_sleeveW	= 0;
this.max_length		= 0;
this.max_cuff		= 0;

//setter functions
// set input
this.setNeck 		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.neck = parseFloat(value);};
this.setArmLen 		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.arm_len = parseFloat(value);};
this.setShoulderW 	= function(value) {value = value.toString(); value = value.replace(',', '.'); this.shoulder_W = parseFloat(value);};
this.setChest		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.chest = parseFloat(value);};
this.setWaist 		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.waist_around = parseFloat(value);};
this.setLength		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.length = parseFloat(value);};
this.setWrist		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.wrist_around = parseFloat(value);};
this.setBicep  		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.bicep_around = parseFloat(value);};
this.setStyleBody	= function(value) {value = value.toString(); value = value.replace(',', '.'); this.style_body = parseFloat(value);};
// set adj values
this.setAdjCollar		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjCollar = parseFloat(value);};
this.setAdjChest		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjChest = parseFloat(value);};
this.setAdjShoulder		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjShoulder = parseFloat(value);};
this.setAdjMiddle		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjMiddle = parseFloat(value);};
this.setAdjBackLen		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjBackLen = parseFloat(value);};
this.setAdjSleeveW		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjSleeveWidth = parseFloat(value);};
this.setAdjSleeveL		= function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjSleeveLen = parseFloat(value);};
this.setAdjCuff			= function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjCuff = parseFloat(value);};
this.setRearSidePleats 	= function(value) {this.rear_side_pleats = value == true;};
this.setAdjShortSleeveLength = function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjCuff = parseFloat(value);};
this.setAdjShortSleeveWidth = function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjCuff = parseFloat(value);};
this.setAdjShortSleeveOpening = function(value) {value = value.toString(); value = value.replace(',', '.'); this.adjCuff = parseFloat(value);};
//getter functions
// get ord variables
this.getFitOrd			= function() {return this.fit};
this.getModelOrd  		= function() {return this.model_Ord};
this.getSizeOrd  		= function() {return this.size_Ord};
this.getNeckOrd  		= function() {return this.neck_Ord};
this.getLengthOrd  		= function() {return this.length_Ord};
this.getRSleeveOrd  	= function() {return this.rSleeve_Ord};
this.getLSleeveOrd 	 	= function() {return this.lSleeve_Ord};
this.getWaistOrd  		= function() {return this.waist_Ord};
this.getRCuffOrd  		= function() {return this.rCuff_Ord};
this.getLCuffOrd  		= function() {return this.lCuff_Ord};
this.getBicepAdjOrd		= function() {return this.bicep_adj_Ord};
this.getYokeAdjOrd 		= function() {return this.yokeadj_Ord};
this.getBackDetailOrd	= function() {return this.backDetail_Ord};
// get adj variables
this.getAdjCollar		= function() {return Math.abs(this.adjCollar)};
this.getAdjChest		= function() {return Math.abs(this.adjChest)};
this.getAdjShoulder		= function() {return Math.abs(this.adjShoulder)};
this.getAdjMiddle		= function() {return Math.abs(this.adjMiddle)};
this.getAdjBackLen		= function() {return Math.abs(this.adjBackLen)};
this.getAdjSleeveW		= function() {return Math.abs(this.adjSleeveWidth)};
this.getAdjSleeveL		= function() {return Math.abs(this.adjSleeveLen)};
this.getAdjCuff			= function() {return Math.abs(this.adjCuff)};  

this.table = new ChestWidthTable();

// limits
this.correctByLimits		= function()
{
if (this.adjCollar > this.max_collar) this.adjCollar = this.max_collar;
if (this.adjCollar < this.min_collar) this.adjCollar = this.min_collar;

if (this.adjMiddle > this.max_mid) this.adjMiddle = this.max_mid;
if (this.adjMiddle < this.min_mid) this.adjMiddle = this.min_mid;

if (this.adjShoulder > this.max_shoulder) this.adjShoulder = this.max_shoulder;
if (this.adjShoulder < this.min_shoulder) this.adjShoulder = this.min_shoulder;

if (this.adjBackLen > this.max_length) this.adjBackLen = this.max_length;
if (this.adjBackLen < this.min_length) this.adjBackLen = this.min_length;

if (this.adjSleeveLen > this.max_sleeve) this.sleeve_Shirt = this.max_sleeve;
if (this.adjSleeveLen < this.min_sleeve) this.sleeve_Shirt = this.min_sleeve;

if (this.adjCuff > this.max_cuff) this.adjCuff = this.max_cuff;
if (this.adjCuff < this.min_cuff) this.adjCuff = this.min_cuff;
}

this.calculateLimits 		= function()
{
var chestLimitsTable = new ChestLimitsTable();
var sleeveWidthLimitsTable = new SleeveWidthLimitsTable();
this.min_collar		= 12;
this.min_chest		= chestLimitsTable.getMinChestByNearestSleeveWidth( this.adjSleeveWidth );
this.min_mid		= 10;
this.min_shoulder	= 10;
this.min_length		= 25;
this.min_sleeveW	= sleeveWidthLimitsTable.getMinSleeveWidthByNearestChest( this.adjChest );
this.min_sleeve		= 28;
this.min_cuff		= 8;
this.min_bottom_width = this.adjMiddle;

this.max_collar		= 26;
this.max_chest		= chestLimitsTable.getMaxChestByNearestSleeveWidth( this.adjSleeveWidth );
this.max_mid		= 80;
this.max_shoulder	= 30;
this.max_length		= 45;
this.max_sleeveW	= sleeveWidthLimitsTable.getMaxSleeveWidthByNearestChest( this.adjChest );
this.max_sleeve		= 40;
this.max_cuff		= 11;
this.max_bottom_width = this.adjChest;
}
// general function
this.calculate			= function(calculateAdjValues) 
{
if (calculateAdjValues == undefined) calculateAdjValues = true;

if ( calculateAdjValues )
{
    this.adjCollar 		= excelRound( this.neck * 4 ) / 4;

    /*
    this.neck 			= 0;
    this.arm_len 		= 0;
    this.shoulder_W 	= 0;
    this.chest			= 0;
    this.waist_around 	= 0;
    this.length			= 0;
    this.wrist_around	= 0;
    this.bicep_around  	= 0;
    this.style_body		= 0;	
    this.rear_side_pleats = true;
    */	
//=ROUNDUP(IF(Style_Body="Classic";1.145*MAX(Chest_Body;Waist_Body);IF(Style_Body="Slim";1.11*MAX(Chest_Body;Waist_Body);IF(Style_Body="Super Slim";1.085*MAX(Chest_Body;Waist_Body);"ERROR")));0)/2
//=ROUNDUP(IF(Style_Body="Classic";1,136*MAX(Chest_Body; Waist_Body);IF(Style_Body="Slim";1,11*MAX(Chest_Body; Waist_Body);IF(Style_Body="Super Slim";1,085*MAX(Chest_Body; Waist_Body);"ERROR"))); 0)/2
    this.adjChest = excelCeil(2 * (Math.max(this.chest, this.waist_around) * (BODY_STYLE_CLASSIC == this.style_body ? 1.136 : ( BODY_STYLE_SLIM == this.style_body ? 1.11 : 1.085 ))) ) / 4;

// =(ROUNDUP(2*IF(Style_Body="Classic";Bicep_Body+5;IF(Style_Body="Slim";Bicep_Body+4.5;IF(Style_Body="Super Slim";Bicep_Body+4;"ERROR")));0)/4)
    this.adjSleeveWidth	= excelCeil( 2 * ( this.bicep_around + ( BODY_STYLE_CLASSIC == this.style_body ? 4.5 : ( BODY_STYLE_SLIM == this.style_body ? 4 : 3.5 ) ) ) ) / 4;
//			this.calculateLimits();
//			if (this.adjSleeveWidth > this.max_sleeveW) this.adjSleeveWidth = this.max_sleeveW;
//			if (this.adjSleeveWidth < this.min_sleeveW) this.adjSleeveWidth = this.min_sleeveW;

//			this.adjChest		= excelCeil( this.chest * ( BODY_STYLE_CLASSIC == this.style_body ? 1.15 : ( BODY_STYLE_SLIM == this.style_body ? 1.13 : 1.1 ) ) ) / 2;
//			this.adjChest		= excelCeil( this.chest * ( BODY_STYLE_CLASSIC == this.style_body ? 1.14 : ( BODY_STYLE_SLIM == this.style_body ? 1.125 : 1.09 ) ) ) / 2;

//			this.calculateLimits();
//			if (this.adjChest > this.max_chest) this.adjChest = this.max_chest;
//			if (this.adjChest < this.min_chest) this.adjChest = this.min_chest;

    this.adjShoulder	= excelRound( this.shoulder_W  * 4 ) / 4;

//			this.adjMiddle		= excelCeil( this.waist_around + ( BODY_STYLE_CLASSIC == this.style_body ? 7 : ( BODY_STYLE_SLIM == this.style_body ? 6 : 4 ) ) ) / 2;
    
//=ROUNDUP(IF(Style_Body="Classic";MAX(0.145*MAX(Chest_Body;Waist_Body)+Waist_Body;Chest_Body*1.145-2);IF(Style_Body="Slim";MAX(0.11*MAX(Chest_Body;Waist_Body)+Waist_Body;Chest_Body*1.11-6);IF(Style_Body="Super Slim";MAX(0.09*MAX(Chest_Body;Waist_Body)+Waist_Body;Chest_Body*1.09-9);"ERROR")));0)/2
//=ROUNDUP(IF(Style_Body="Classic";MAX(0,136*MAX(Chest_Body; Waist_Body)+Waist_Body; Chest_Body*1,136-3);IF(Style_Body="Slim";MAX(0,11*MAX(Chest_Body; Waist_Body)+Waist_Body; Chest_Body*1,11-6);IF(Style_Body="Super Slim";MAX(0,09*MAX(Chest_Body; Waist_Body)+Waist_Body; Chest_Body*1,09-9);"ERROR"))); 0)/2
    this.adjMiddle = excelCeil(2 * (BODY_STYLE_CLASSIC == this.style_body ? Math.max(0.136*Math.max(this.chest, this.waist_around)+this.waist_around, this.chest * 1.136-3) : BODY_STYLE_SLIM == this.style_body ? Math.max(0.11*Math.max(this.chest, this.waist_around)+this.waist_around, this.chest * 1.11-6) : Math.max(0.09*Math.max(this.chest, this.waist_around)+this.waist_around, this.chest * 1.09-9)) ) / 4;
//			this.adjMiddle		= excelCeil( this.waist_around * ( BODY_STYLE_CLASSIC == this.style_body ? 1.14 : ( BODY_STYLE_SLIM == this.style_body ? 1.125 : 1.09 ) ) ) / 2;


    this.adjBackLen		= excelRound( this.length * 2 ) / 2;

    this.adjSleeveLen	= excelCeil( 4 * this.arm_len ) / 4;
    this.adjCuff		= excelCeil( ( this.wrist_around + 2 <= 7? 7 : (this.wrist_around + 2 > 11? 11 : this.wrist_around + 2) ) * 4 ) / 4;
    
    this.adjShortSleeveLength = excelRound( this.neck * 4 ) / 4;
    this.adjShortSleeveWidth = excelRound( this.neck * 4 ) / 4;
    this.adjShortSleeveOpeningWidth = excelRound( this.neck * 4 ) / 4;
}

this.calculateLimits();
this.correctByLimits();

return;

// adj valriable
if (calculateAdjValues)
{
    this.adjSleeveLen = excelCeil(4 * this.arm_len) / 4;
    this.adjCuff = (this.wrist_around + 1.5 <= 8? 8 : (this.wrist_around + 1.5 > 11? 11 : this.wrist_around + 1.5));
}

// tmp variables
this.waistDesDum = this.waist_around + (this.style_body == 0? 5 : 7);
//		this.bicepDesDum = (this.style_body == 0? this.bicep_around + 3.5 : this.bicep_around + 5) / 2;
this.bicepDesDum = (this.style_body == 0? this.bicep_around + 2.5 : this.bicep_around + 5) / 2;
this.chestDesDum = (this.waist_around > this.chest + 5? (this.waist_around + (this.style_body == 0? 2 : 4)) / 2 : (this.chest + (this.style_body == 0? 6 : 8)) / 2);

// adj variables (with out limits)
if (this.chestDesDum > 19.5)
    this.chest_tmp = (this.table.getElementById(this.table.findNearIdByValue(6, 4 * this.chestDesDum))[6]) /4;
else
    this.chest_tmp = 19.5;
if (calculateAdjValues)
{
    this.adjChest = this.chest_tmp;
}
switch (this.adjChest)
{
    case 20.25: case 21.25: case 22.25: case 23.25: case 24.25: case 25.25: case 26.25: case 27.25: case 28.25: case 29.25:
    case 30.25: case 31.25: case 32.25: case 33.25: case 34.25: case 35.25: case 36.25: 
        this.rear_side_pleats = 1;
    break;
    default: this.rear_side_pleats = 0;
}

// ord variables
switch (this.adjChest)
{
    case 20.75: case 21.75: case 22.75: case 23.75: case 24.75: case 25.75: case 26.75: case 27.75: case 28.75: case 29.75:
    case 30.75: case 31.75: case 32.75: case 33.75: case 34.75: case 35.75: case 36.75: this.model_Ord = 1; break;
    default: this.model_Ord = 0;
}
if (this.adjChest > 19.5)
    this.size_Ord = this.table.getElementById(this.table.findNearIdByValue(6, 4 * this.adjChest))[7];
else
    this.size_Ord = 14
this.rSleeve_Ord  	= this.adjSleeveLen;
this.lSleeve_Ord  	= this.adjSleeveLen;
this.rCuff_Ord	 	= this.adjCuff + 1;
this.lCuff_Ord		= this.adjCuff + 1;

// tmp variables
this.bicepStdDum = ((this.size_Ord - 14) * 1.5 + 17)/2;
this.yokeStandard = (this.model_Ord == 0? this.size_Ord + 3 : this.size_Ord + 3.5);

if (this.model_Ord == 0 && this.rear_side_pleats == 1)
    this.waistStdDum = 37 + 4 * (this.size_Ord - 14);
else if(this.model_Ord == 1 && this.rear_side_pleats == 1)
    this.waistStdDum = 40 + 4 * (this.size_Ord - 14);
else if(this.model_Ord == 0 && this.rear_side_pleats == 0)
    this.waistStdDum = 36 + 4 * (this.size_Ord - 14);
else
    this.waistStdDum = 39 + 4 * (this.size_Ord - 14);

// adj variables
if (calculateAdjValues)
{
    this.adjShoulder = excelCeil( this.yokeStandard * 2 ) / 2;
    this.adjMiddle = ((this.waistDesDum < this.waistStdDum - 4? this.waistStdDum - 4 : (this.waistDesDum > this.waistStdDum + 4? this.waistStdDum + 4 : this.waistDesDum))) / 2;
//			this.adjSleeveWidth = (this.bicepDesDum < this.bicepStdDum - 2? this.bicepStdDum - 2 : (this.bicepDesDum > this.bicepStdDum + 1? this.bicepStdDum + 1 : this.bicepStdDum - (excelFloor((this.bicepStdDum - this.bicepDesDum) * 2) / 2))) / 2;
    this.adjSleeveWidth = this.bicepDesDum;
    if (this.adjSleeveWidth > this.bicepStdDum + 1) this.adjSleeveWidth = this.bicepStdDum + 1;
    if (this.adjSleeveWidth < this.bicepStdDum - 1) this.adjSleeveWidth = this.bicepStdDum - 1;
}

// ord variables
this.waist_Ord  	= this.adjMiddle * 2 - this.waistStdDum;
this.bicep_adj_Ord  = (this.adjSleeveWidth - this.bicepStdDum > 0? excelCeil((this.adjSleeveWidth - this.bicepStdDum) * 2) : excelFloor((this.adjSleeveWidth - this.bicepStdDum) * 2));
this.yokeadj_Ord  	= this.adjShoulder - this.yokeStandard;
//alert(' adjMiddle: ' + this.adjMiddle + ' adjSleeveWidth: ' + this.adjSleeveWidth);

// adj variables
if (calculateAdjValues)
{
    this.adjCollar = (this.neck);
    this.adjBackLen = this.length;
}

// check limits
this.min_collar		= this.size_Ord - 2;
this.max_collar		= this.size_Ord + 2;
this.min_length		= 29;
this.max_length		= 44;
if (this.adjCollar > this.max_collar) this.adjCollar = this.max_collar;
if (this.adjCollar < this.min_collar) this.adjCollar = this.min_collar;
if (this.adjBackLen > this.max_length) this.adjBackLen = this.max_length;
if (this.adjBackLen < this.min_length) this.adjBackLen = this.min_length;

// ord variables
this.neck_Ord  		= this.adjCollar;
this.length_Ord  	= excelRound(this.adjBackLen - (31.625 + 0.75 * (this.size_Ord - 14)));

this.calculateLimits();
this.correctByLimits();

return;
};

//	---------	--------	---------	---------	---------	----------	----------	----------
this.debug_limits 		= function()
{
var str = '';
str += 'collar: ' + this.min_collar + ' | ' + this.max_collar + '\n';
str += 'sleeve: ' + this.min_sleeve + ' | ' + this.max_sleeve + '\n';
str += 'shoulder: ' + this.min_shoulder + ' | ' + this.max_shoulder + '\n';
str += 'chest: ' + this.min_chest + ' | ' + this.max_chest + '\n';
str += 'midle: ' + this.min_mid + ' | ' + this.max_mid + '\n';
str += 'sleeve_width: ' + this.min_sleeveW + ' | ' + this.max_sleeveW + '\n';
str += 'shirt len: ' + this.min_length + ' | ' + this.max_length + '\n';
str += 'cuff: ' + this.min_cuff + ' | ' + this.max_cuff + '\n';
alert(str);
}

this.debug_adj			= function()
{
var str = 'Collar: ' + this.adjCollar + '\n';
str += 'Chest: ' + this.adjChest + '\n';
str += 'Shoulder: ' + this.adjShoulder	 + '\n';
str += 'Middle: ' + this.adjMiddle	 + '\n';
str += 'Length: ' + this.adjBackLen	 + '\n';
str += 'Sleeve width: ' + this.adjSleeveWidth	 + '\n';
str += 'Sleeve Len: ' + this.adjSleeveLen	 + '\n';
str += 'Cuff: ' + this.adjCuff		 + '\n';
alert(str);
}

this.debug_tmp			= function()
{
var str = 'bicepStdDum: ' + this.bicepStdDum + '\n';
str += 'yokeStandard: ' + this.yokeStandard + '\n';
str += 'waistStdDum: ' + this.waistStdDum + '\n';
str += 'waistDesDum: ' + this.waistDesDum + '\n';

str += 'bicepDesDum: ' + this.bicepDesDum + '\n';
str += 'chestDesDum: ' + this.chestDesDum + '\n';

alert(str);
}

this.debug_ord			= function()
{
var str = '';
str += 'getFitOrd: ' + this.getFitOrd() + '\n';
str += 'getModelOrd: ' + this.getModelOrd() + '\n';
str += 'getSizeOrd: ' + this.getSizeOrd() + '\n';
str += 'getNeckOrd: ' + this.getNeckOrd() + '\n';
str += 'getLengthOrd: ' + this.getLengthOrd() + '\n';
str += 'getRSleeveOrd: ' + this.getRSleeveOrd() + '\n';
str += 'getLSleeveOrd: ' + this.getLSleeveOrd() + '\n';
str += 'getWaistOrd: ' + this.getWaistOrd() + '\n';
str += 'getRCuffOrd: ' + this.getRCuffOrd() + '\n';
str += 'getLCuffOrd: ' + this.getLCuffOrd() + '\n';
str += 'getBicepAdjOrd: ' + this.getBicepAdjOrd() + '\n';
str += 'getYokeAdjOrd: ' + this.getYokeAdjOrd() + '\n';
str += 'getBackDetailOrd: ' + this.getBackDetailOrd() + '\n';
str += '\n';
str += 'explanations: \n';
str += 'getBackDetailOrd: 1 or true = pleats ; 0 or false - no pleats\n';
str += 'getFitOrd: 1 or true - regular ; 0 or false - slim\n';

alert(str);
}
}

function AdjSizes(data) {

this.data = data;

this.adddim_top_button_placement = typeof data.adddim_top_button_placement === "undefined" ? 'standard' : data.adddim_top_button_placement;

// check all for numbers
for (var i in data) {
if ( i != 'adddim_forearm' )
{
    if (isNaN(parseFloat(data[i])) && "adddim" != i.substr(0,6)) {
        throw new Error("`" + i + "` param in AdjSizes is not a number");
    } else {
        this.data[i] = parseFloat(data[i]);
    }
}
}

// rounding
this.rdata = {};
this.rdata.collar = Math.ceil(this.data.collar * 4) / 4;
this.rdata.sleeve = Math.ceil(this.data.sleeve * 4) / 4;
this.rdata.yoke = Math.ceil(this.data.yoke * 4) / 4;
this.rdata.chest = Math.ceil(this.data.chest * 4) / 4;
this.rdata.midsection = Math.ceil(this.data.midsection * 4) / 4;
this.rdata.shirt_length = Math.ceil(this.data.shirt_length * 4) / 4;
this.rdata.sleeve_w = Math.ceil(this.data.sleeve_w * 4) / 4;
this.rdata.cuff = Math.ceil(this.data.cuff * 4) / 4;
this.rdata.adddim_bottom_width = Math.ceil(this.data.adddim_bottom_width * 4) / 4;
this.rdata.short_sleeve_length = Math.ceil(this.data.short_sleeve_length * 4) / 4;
this.rdata.short_sleeve_opening_width = Math.ceil(this.data.short_sleeve_opening_width * 4) / 4;
this.rdata.short_sleeve_width = Math.ceil(this.data.short_sleeve_width * 4) / 4;
for (var i in this.rdata) {
this.rdata[i] = this.rdata[i].toFixed(2);
}

// XML Variables
this.xml_vars = {};

this.xml_vars.body_size = this.get_body_size_chest_width();

this.xml_vars.default_collar = this.xml_vars.body_size;

this.xml_vars.adj_collar = this.restrict_limit(
this.rdata.collar-this.xml_vars.default_collar,
this.get_adj_limit('collar', 'min'),
this.get_adj_limit('collar', 'max')
) + this.xml_vars.default_collar;

this.xml_vars.default_chest = (this.xml_vars.body_size - 14.5) * 2 + 19 - 0.5;
this.xml_vars.adj_chest = this.restrict_limit(
(this.rdata.chest-this.xml_vars.default_chest) * 2,
this.get_adj_limit('chest', 'min'),
this.get_adj_limit('chest', 'max')
);

this.xml_vars.default_midsection = (this.xml_vars.body_size - 14.5) * 2 + 17.5 - 0.5;
this.xml_vars.adj_midsection = this.restrict_limit(
(this.rdata.midsection-this.xml_vars.default_midsection) * 2,
this.get_adj_limit('midsection', 'min'),
this.get_adj_limit('midsection', 'max')
);

this.xml_vars.default_bottom = (this.xml_vars.body_size - 14.5) * 2 + 18.5 - 0.5;
this.xml_vars.adj_bottom = this.restrict_limit(
(this.rdata.adddim_bottom_width-this.xml_vars.default_bottom) * 2,
this.get_adj_limit('adddim_bottom_width', 'min'),
this.get_adj_limit('adddim_bottom_width', 'max')
);

this.xml_vars.default_yoke = this.xml_vars.body_size + 2 - 0.25;
this.xml_vars.adj_yoke = this.restrict_limit(
this.rdata.yoke-this.xml_vars.default_yoke,
this.get_adj_limit('yoke', 'min'),
this.get_adj_limit('yoke', 'max')
);

this.xml_vars.default_length = 32;
this.xml_vars.adj_length = this.restrict_limit(
this.rdata.shirt_length-this.xml_vars.default_length,
this.get_adj_limit('shirt_length', 'min'),
this.get_adj_limit('shirt_length', 'max')
);

this.xml_vars.default_sleeve_w = ((this.xml_vars.body_size - 14.5) * 2 * 0.75 + 16) / 2 - 0.5;
this.xml_vars.adj_sleeve_w = this.restrict_limit(
(this.rdata.sleeve_w-this.xml_vars.default_sleeve_w) * 2,
this.get_adj_limit('sleeve_w', 'min'),
this.get_adj_limit('sleeve_w', 'max')
);

this.xml_vars.default_cuff = 0;
this.xml_vars.adj_cuff = this.rdata.cuff - this.xml_vars.default_cuff + 1;

this.xml_vars.default_sleeve = 0;
this.xml_vars.adj_sleeve = this.data.sleeve - this.xml_vars.default_sleeve;

// Default SS Sleeve Length
// XML Measure SleeveLength (if SS)
// Default SS Sleeve Opening
// XML Measure SS Sleeve Opening
// Default SS Sleeve Width
// XML Measure Bicep (SS)
this.xml_vars.default_short_sleeve_length = this.xml_vars.body_size * 0.25 + 6.125;
this.xml_vars.adj_short_sleeve_length = this.restrict_limit(
this.rdata.short_sleeve_length-this.xml_vars.default_short_sleeve_length,
this.get_adj_limit('short_sleeve_length', 'min'),
this.get_adj_limit('short_sleeve_length', 'max')
);

this.xml_vars.default_short_sleeve_opening_width = this.xml_vars.body_size * 1.5 - 9.25;
this.xml_vars.adj_short_sleeve_opening_width = this.xml_vars.body_size * 1.5 - 9.25;

this.xml_vars.default_short_sleeve_width = (this.xml_vars.body_size * 1.5 - 8) / 2;
this.xml_vars.adj_short_sleeve_width = (this.xml_vars.body_size * 1.5 - 8) / 2;

// Actual Shirt Dimensions
this.actual_dimensions = {};
this.actual_dimensions.collar				= this.xml_vars.adj_collar;
this.actual_dimensions.sleeve				= this.xml_vars.default_sleeve + this.xml_vars.adj_sleeve;
this.actual_dimensions.yoke					= this.xml_vars.default_yoke + this.xml_vars.adj_yoke;
this.actual_dimensions.chest				= this.xml_vars.default_chest + this.xml_vars.adj_chest / 2;
this.actual_dimensions.midsection		= this.xml_vars.default_midsection + this.xml_vars.adj_midsection / 2;
this.actual_dimensions.shirt_length	= this.xml_vars.default_length + this.xml_vars.adj_length;
this.actual_dimensions.sleeve_w			= this.xml_vars.default_sleeve_w + this.xml_vars.adj_sleeve_w / 2;
this.actual_dimensions.cuff					= this.xml_vars.default_cuff + this.xml_vars.adj_cuff - 1;
this.actual_dimensions.adddim_bottom_width	= this.xml_vars.default_bottom + this.xml_vars.adj_bottom / 2;
this.actual_dimensions.short_sleeve_length	= this.xml_vars.adj_short_sleeve_length;
this.actual_dimensions.short_sleeve_opening_width	= (this.xml_vars.default_short_sleeve_opening_width + this.xml_vars.adj_short_sleeve_opening_width) / 2;
this.actual_dimensions.short_sleeve_width	= this.xml_vars.default_short_sleeve_width + this.xml_vars.adj_short_sleeve_width / 2;
for (var i in this.actual_dimensions) {
this.actual_dimensions[i] = this.actual_dimensions[i].toFixed(2);
}

this.min_collar = this.get_limit('collar', 'min');
this.max_collar = this.get_limit('collar', 'max');
 
this.min_sleeve = this.get_limit('sleeve', 'min');
this.max_sleeve = this.get_limit('sleeve', 'max');

this.min_shoulder = this.min_yoke = this.get_limit('yoke', 'min');
this.max_shoulder = this.max_yoke = this.get_limit('yoke', 'max');

this.min_chest = this.get_limit('chest', 'min');
// this.max_chest = this.get_limit('chest', 'max');
// this.max_chest = 37.5; // YKOLT: HERE HARDCODE
this.max_chest = 37; // 37.5 YKOLT QUICK CHANGE OCT 2016

this.min_mid = this.min_midsection = this.get_limit('midsection', 'min'); 
this.max_mid = this.max_midsection = this.get_limit('midsection', 'max');

this.min_length = this.get_limit('length', 'min'); 
this.max_length = this.get_limit('length', 'max'); 

this.min_sleeve_w = this.get_limit('sleeve_w', 'min'); 
this.max_sleeve_w = this.get_limit('sleeve_w', 'max'); 

this.min_cuff = this.get_limit('cuff', 'min');
this.max_cuff = this.get_limit('cuff', 'max');

this.min_bottom_width = this.get_limit('adddim_bottom_width', 'min');
this.max_bottom_width = this.get_limit('adddim_bottom_width', 'max');

this.min_short_sleeve_length = this.get_limit('short_sleeve_length', 'min');
this.max_short_sleeve_length = this.get_limit('short_sleeve_length', 'max');

this.min_short_sleeve_opening_width = this.get_limit('short_sleeve_opening_width', 'min');
this.max_short_sleeve_opening_width = this.get_limit('short_sleeve_opening_width', 'max');

this.min_short_sleeve_width = this.get_limit('short_sleeve_width', 'min');
this.max_short_sleeve_width = this.get_limit('short_sleeve_width', 'max');

// Buttons on Shirt Front at User Interface
// Added: 9 January, 2015
switch (this.adddim_top_button_placement) {
   case 'lowered_1_2':
       if (parseFloat(this.actual_dimensions.shirt_length) <= 27.5) {
           this.adddim_buttons_on_shirt_front = 6;
       }
       else if (parseFloat(this.actual_dimensions.shirt_length) >= 27.75 && parseFloat(this.actual_dimensions.shirt_length) <= 30.5) {
           this.adddim_buttons_on_shirt_front = 7;
       }
       else if (parseFloat(this.actual_dimensions.shirt_length) >= 30.75 && parseFloat(this.actual_dimensions.shirt_length) <= 34) {
           this.adddim_buttons_on_shirt_front = 8;
       }
       else if (parseFloat(this.actual_dimensions.shirt_length) >= 34.25 && parseFloat(this.actual_dimensions.shirt_length) <= 37.5) {
           this.adddim_buttons_on_shirt_front = 9;
       }
       else if (parseFloat(this.actual_dimensions.shirt_length) >= 37.75) {
           this.adddim_buttons_on_shirt_front = 10;
       }
       break;
   case 'standard': default:
       if (parseFloat(this.actual_dimensions.shirt_length) <= 27) {
           this.adddim_buttons_on_shirt_front = 6;
       }
       else if (parseFloat(this.actual_dimensions.shirt_length) >= 27.25 && parseFloat(this.actual_dimensions.shirt_length) <= 30) {
           this.adddim_buttons_on_shirt_front = 7;
       }
       else if (parseFloat(this.actual_dimensions.shirt_length) >= 30.25 && parseFloat(this.actual_dimensions.shirt_length) <= 33.5) {
           this.adddim_buttons_on_shirt_front = 8;
       }
       else if (parseFloat(this.actual_dimensions.shirt_length) >= 33.75 && parseFloat(this.actual_dimensions.shirt_length) <= 37) {
           this.adddim_buttons_on_shirt_front = 9;
       }
       else if (parseFloat(this.actual_dimensions.shirt_length) >= 37.25) {
           this.adddim_buttons_on_shirt_front = 10;
       }
       break;
   case 'raised_1_2':
       if (parseFloat(this.actual_dimensions.shirt_length) <= 26.5) {
           this.adddim_buttons_on_shirt_front = 6;
       }
       else if (parseFloat(this.actual_dimensions.shirt_length) >= 26.75 && parseFloat(this.actual_dimensions.shirt_length) <= 29.5) {
           this.adddim_buttons_on_shirt_front = 7;
       }
       else if (parseFloat(this.actual_dimensions.shirt_length) >= 29.75 && parseFloat(this.actual_dimensions.shirt_length) <= 33) {
           this.adddim_buttons_on_shirt_front = 8;
       }
       else if (parseFloat(this.actual_dimensions.shirt_length) >= 33.25 && parseFloat(this.actual_dimensions.shirt_length) <= 36.5) {
           this.adddim_buttons_on_shirt_front = 9;
       }
       else if (parseFloat(this.actual_dimensions.shirt_length) >= 36.75) {
           this.adddim_buttons_on_shirt_front = 10;
       }
       break;
   case 'raised_1':
       if (parseFloat(this.actual_dimensions.shirt_length) <= 26) {
           this.adddim_buttons_on_shirt_front = 6;
       }
       else if (parseFloat(this.actual_dimensions.shirt_length) >= 26.25 && parseFloat(this.actual_dimensions.shirt_length) <= 29) {
           this.adddim_buttons_on_shirt_front = 7;
       }
       else if (parseFloat(this.actual_dimensions.shirt_length) >= 29.25 && parseFloat(this.actual_dimensions.shirt_length) <= 32.5) {
           this.adddim_buttons_on_shirt_front = 8;
       }
       else if (parseFloat(this.actual_dimensions.shirt_length) >= 32.75 && parseFloat(this.actual_dimensions.shirt_length) <= 36) {
           this.adddim_buttons_on_shirt_front = 9;
       }
       else if (parseFloat(this.actual_dimensions.shirt_length) >= 36.25) {
           this.adddim_buttons_on_shirt_front = 10;
       }
       break;
}
$('#adddim_buttons_on_shirt_front_field').val(this.adddim_buttons_on_shirt_front);
$('#adddim_buttons_on_shirt_front_field_das3').val(this.adddim_buttons_on_shirt_front);
}
AdjSizes.prototype.restrict_limit = function(value, minimum, maximum) {
if (value < minimum) {
return minimum;
} else if(value > maximum) {
return maximum;
} else {
return value;
}
}
AdjSizes.prototype.get_limit = function(size, type) {
switch (size.toLowerCase()) {
case "collar":
    if ("min" == type) {
        return this.xml_vars.body_size - 2;
    } else if("max" == type) {
        return this.xml_vars.body_size + 2;
    }
    break;
case "chest":
    if ("min" == type) {
        if (isShortSleeve()) {
            return parseFloat(this.actual_dimensions.chest) + 
                Math.max(
                    (this.xml_vars.adj_collar - this.xml_vars.body_size - this.get_adj_limit('collar', 'max')) * 2,
                    this.xml_vars.adj_yoke - this.get_adj_limit('yoke', 'max'),
                    this.xml_vars.adj_midsection - this.get_adj_limit('midsection', 'max')
                );
        }
        else {
            return parseFloat(this.actual_dimensions.chest) + 
                Math.max(
                    (this.xml_vars.adj_collar - this.xml_vars.body_size - this.get_adj_limit('collar', 'max')) * 2,
                    this.xml_vars.adj_yoke - this.get_adj_limit('yoke', 'max'),
                    (this.xml_vars.adj_sleeve_w - this.get_adj_limit('sleeve_w', 'max')) * 2 / 1.5,
                    this.xml_vars.adj_midsection - this.get_adj_limit('midsection', 'max')
                );
        }
    } else if("max" == type) {
        if (isShortSleeve()) {
            return parseFloat(this.actual_dimensions.chest) + 
                Math.min(
                    (this.xml_vars.adj_collar - this.xml_vars.body_size - this.get_adj_limit('collar', 'min')) * 2,
                    this.xml_vars.adj_yoke - this.get_adj_limit('yoke', 'min'),
                    this.xml_vars.adj_midsection - this.get_adj_limit('midsection', 'min')
                );
        }
        else {
            return parseFloat(this.actual_dimensions.chest) + 
                Math.min(
                    (this.xml_vars.adj_collar - this.xml_vars.body_size - this.get_adj_limit('collar', 'min')) * 2,
                    this.xml_vars.adj_yoke - this.get_adj_limit('yoke', 'min'),
                    (this.xml_vars.adj_sleeve_w - this.get_adj_limit('sleeve_w', 'min')) * 2 / 1.5,
                    this.xml_vars.adj_midsection - this.get_adj_limit('midsection', 'min')
                );
        }
    }
    break;
case "midsection":
    if ("min" == type) {
        return parseFloat(this.actual_dimensions.midsection) + (this.get_adj_limit('midsection', 'min') - this.xml_vars.adj_midsection) / 2;
    } else if("max" == type) {
        return parseFloat(this.actual_dimensions.midsection) + (this.get_adj_limit('midsection', 'max') - this.xml_vars.adj_midsection) / 2;
        // return Math.min(
            // parseFloat(this.actual_dimensions.midsection) + (this.get_adj_limit('midsection', 'max') - this.xml_vars.adj_midsection) / 2,
            // parseFloat(this.actual_dimensions.chest)
        // );
    }
    break;
case "adddim_bottom_width":
    var value;
    if ("min" == type) {
        value = Math.max(
            parseFloat(this.actual_dimensions.adddim_bottom_width) + (
                this.get_adj_limit('adddim_bottom_width', 'min') - this.xml_vars.adj_bottom
            ) / 2,
            this.actual_dimensions.midsection
        );
        value = Math.floor(value * 4) / 4;
    } else if("max" == type) {
        value = Math.min(
            parseFloat(this.actual_dimensions.adddim_bottom_width) + (
                this.get_adj_limit('adddim_bottom_width', 'max') - this.xml_vars.adj_bottom
            ) / 2,
            parseFloat(this.actual_dimensions.chest) + 2
        );
        value = Math.ceil(value * 4) / 4;
    }
    return value;
    break;
case "yoke":
    if ("min" == type) {
        return parseFloat(this.actual_dimensions.yoke) + this.get_adj_limit('yoke', 'min') - this.xml_vars.adj_yoke;
    } else if("max" == type) {
        return parseFloat(this.actual_dimensions.yoke) + this.get_adj_limit('yoke', 'max') - this.xml_vars.adj_yoke;
    }
    break;
case "length":
    if ("min" == type) {
        return parseFloat(this.actual_dimensions.shirt_length) + this.get_adj_limit('shirt_length', 'min') - this.xml_vars.adj_length;
    } else if("max" == type) {
        return parseFloat(this.actual_dimensions.shirt_length) + this.get_adj_limit('shirt_length', 'max') - this.xml_vars.adj_length;
    }
    break;
case "sleeve_w":
    if ("min" == type) {
        var t = parseFloat(this.actual_dimensions.sleeve_w) + (this.get_adj_limit('sleeve_w', 'min') - this.xml_vars.adj_sleeve_w) / 2;
        t = t.toFixed(2);
        return parseFloat(t);
    } else if("max" == type) {
        var t = parseFloat(this.actual_dimensions.sleeve_w) + (this.get_adj_limit('sleeve_w', 'max') - this.xml_vars.adj_sleeve_w) / 2;
        t = t.toFixed(2);
        return parseFloat(t);
    }
    break;
case "cuff":
    if ("min" == type) {
        // return 8;
        return parseFloat(this.actual_dimensions.cuff) + (this.get_adj_limit('cuff', 'min') - this.xml_vars.adj_cuff);
    } else if("max" == type) {
        // return 13;
        return parseFloat(this.actual_dimensions.cuff) + (this.get_adj_limit('cuff', 'max') - this.xml_vars.adj_cuff);
    }
    break;
case "sleeve":
    if ("min" == type) {
        return parseFloat(this.actual_dimensions.sleeve) + (this.get_adj_limit('sleeve', 'min') - this.xml_vars.adj_sleeve);
    } else if("max" == type) {
        return parseFloat(this.actual_dimensions.sleeve) + (this.get_adj_limit('sleeve', 'max') - this.xml_vars.adj_sleeve);
    }
    break;
case "short_sleeve_length":
        if ("min" == type) {
            return parseFloat(this.xml_vars.default_short_sleeve_length) + this.get_adj_limit('short_sleeve_length', 'min');
            // return parseFloat(this.actual_dimensions.short_sleeve_length) + (this.get_adj_limit('short_sleeve_length', 'min') - this.xml_vars.adj_short_sleeve_length);
        } else if("max" == type) {
            return parseFloat(this.xml_vars.default_short_sleeve_length) + this.get_adj_limit('short_sleeve_length', 'max');
            // return parseFloat(this.actual_dimensions.short_sleeve_length) + (this.get_adj_limit('short_sleeve_length', 'max') - this.xml_vars.adj_short_sleeve_length);
        }
        break;
// YURA CHANGES
case "short_sleeve_opening_width":
        if ("min" == type) {
            // return parseFloat(this.actual_dimensions.short_sleeve_opening_width) + (this.get_adj_limit('short_sleeve_opening_width', 'min') - this.xml_vars.adj_short_sleeve_opening_width) / 2;
            l = parseFloat(this.actual_dimensions.short_sleeve_opening_width) + (this.get_adj_limit('short_sleeve_opening_width', 'min') - this.xml_vars.adj_short_sleeve_opening_width) / 2;
            r = parseFloat(this.rdata.short_sleeve_width - 2);
            return l > r ? r : l;
        } else if("max" == type) {
            // return parseFloat(this.actual_dimensions.short_sleeve_opening_width) + (this.get_adj_limit('short_sleeve_opening_width', 'max') - this.xml_vars.adj_short_sleeve_opening_width) / 2;
            l = parseFloat(this.actual_dimensions.short_sleeve_opening_width) + (this.get_adj_limit('short_sleeve_opening_width', 'max') - this.xml_vars.adj_short_sleeve_opening_width) / 2;
            r = parseFloat(this.rdata.short_sleeve_width - 0.25);
            return l < r ? r : l;
        }
        break;
case "short_sleeve_width":
        if ("min" == type) {
            // return parseFloat(this.actual_dimensions.short_sleeve_width) + (this.get_adj_limit('short_sleeve_width', 'min') - this.xml_vars.adj_short_sleeve_width) / 2;
            l = parseFloat(this.actual_dimensions.short_sleeve_width) + (this.get_adj_limit('short_sleeve_width', 'min') - this.xml_vars.adj_short_sleeve_width) / 2;
            r = parseFloat(this.rdata.short_sleeve_opening_width + 0.25);
            return l > r ? r : l;
        } else if("max" == type) {
            // return parseFloat(this.actual_dimensions.short_sleeve_width) + (this.get_adj_limit('short_sleeve_width', 'max') - this.xml_vars.adj_short_sleeve_width) / 2;
            l = parseFloat(this.actual_dimensions.short_sleeve_width) + (this.get_adj_limit('short_sleeve_width', 'max') - this.xml_vars.adj_short_sleeve_width) / 2;
            r = parseFloat(this.rdata.short_sleeve_opening_width + 2);
            return l < r ? r : l;
        }
        break;
}
throw new Error("`"+size+"` param in get_limit() doesn't exists");
}
AdjSizes.prototype.get_adj_limit = function(size, type) {
var limits = {
"collar":				{"min": -2, "max": 2},
"sleeve":				{"min": 22, "max": 42},
"yoke":					{"min": -2, "max": 2},
"chest":				{"min": -2, "max": 2},
"midsection":			{"min": -8, "max": 6},
"shirt_length":			{"min": -6, "max": 6},
"sleeve_w":				{"min": -2, "max": 2},
"cuff":					{"min": 8, "max": 14},
"adddim_bottom_width": {"min": -8	, "max": 6},
"short_sleeve_length": {"min": -1.5, "max": 1.5},
"short_sleeve_opening_width": {"min": -2, "max": 2},
"short_sleeve_width": {"min": -2, "max": 2}
}
if ("min" != type && "max" != type) {
throw new Error("type `"+type+"` doesn't exist");
}
if (undefined != limits[size]) {
return limits[size][type];
} else {
throw new Error("size `"+size+"` doesn't exist");
}
}
AdjSizes.prototype.get_body_size_chest_width = function() {
var body_size_chest_widths = {
odd: {
    "13.5": {"2": 11.5, "3": 12.0},
    "14.5": {"2": 12.0, "3": 12.5},
    "15.5": {"2": 12.5, "3": 13.0},
    "16.5": {"2": 13.0, "3": 13.5},
    "17.5": {"2": 13.5, "3": 14.0},
    "18.5": {"2": 14.0, "3": 14.5},
    "19.5": {"2": 14.5, "3": 15.0},
    "20.5": {"2": 15.0, "3": 15.5},
    "21.5": {"2": 15.5, "3": 16.0},
    "22.5": {"2": 16.0, "3": 16.5},
    "23.5": {"2": 16.5, "3": 17.0},
    "24.5": {"2": 17.0, "3": 17.5},
    "25.5": {"2": 17.5, "3": 18.0},
    "26.5": {"2": 18.0, "3": 18.5},
    "27.5": {"2": 18.5, "3": 19.0},
    "28.5": {"2": 19.0, "3": 19.5},
    "29.5": {"2": 19.5, "3": 20.0},
    "30.5": {"2": 20.0, "3": 20.5},
    "31.5": {"2": 20.5, "3": 21.0},
    "32.5": {"2": 21.0, "3": 21.5},
    "33.5": {"2": 21.5, "3": 22.0},
    "34.5": {"2": 22.0, "3": 22.5},
    "35.5": {"2": 22.5, "3": 23.0},
    "36.5": {"2": 23.0, "3": 23.5},
    "37": {"2": 23.5, "3": 24.0}
},
even: {
    "13": {"2": 11.0, "3": 11.5, "4": 12.0},
    "14": {"2": 11.5, "3": 12.0, "4": 12.5},
    "15": {"2": 12.0, "3": 12.5, "4": 13.0},
    "16": {"2": 12.5, "3": 13.0, "4": 13.5},
    "17": {"2": 13.0, "3": 13.5, "4": 14.0},
    "18": {"2": 13.5, "3": 14.0, "4": 14.5},
    "19": {"2": 14.0, "3": 14.5, "4": 15.0},
    "20": {"2": 14.5, "3": 15.0, "4": 15.5},
    "21": {"2": 15.0, "3": 15.5, "4": 16.0},
    "22": {"2": 15.5, "3": 16.0, "4": 16.5},
    "23": {"2": 16.0, "3": 16.5, "4": 17.0},
    "24": {"2": 16.5, "3": 17.0, "4": 17.5},
    "25": {"2": 17.0, "3": 17.5, "4": 18.0},
    "26": {"2": 17.5, "3": 18.0, "4": 18.5},
    "27": {"2": 18.0, "3": 18.5, "4": 19.0},
    "28": {"2": 18.5, "3": 19.0, "4": 19.5},
    "29": {"2": 19.0, "3": 19.5, "4": 20.0},
    "30": {"2": 19.5, "3": 20.0, "4": 20.5},
    "31": {"2": 20.0, "3": 20.5, "4": 21.0},
    "32": {"2": 20.5, "3": 21.0, "4": 21.5},
    "33": {"2": 21.0, "3": 21.5, "4": 22.0},
    "34": {"2": 21.5, "3": 22.0, "4": 22.5},
    "35": {"2": 22.0, "3": 22.5, "4": 23.0},
    "36": {"2": 22.5, "3": 23.0, "4": 23.5},
    "37": {"2": 23.0, "3": 23.5, "4": 24.0},
    "38": {"2": 23.5, "3": 24.0, "4": 24.5}
}
};
var chest_size_1_4 = {
    "13.25": {"2": 11.5, "3": 12.0},
    "14.25": {"2": 12.0, "3": 12.5},
    "15.25": {"2": 12.5, "3": 13.0},
    "16.25": {"2": 13.0, "3": 13.5},
    "17.25": {"2": 13.5, "3": 14.0},
    "18.25": {"2": 14.0, "3": 14.5},
    "19.25": {"2": 14.5, "3": 15.0},
    "20.25": {"2": 15.0, "3": 15.5},
    "21.25": {"2": 15.5, "3": 16.0},
    "22.25": {"2": 16.0, "3": 16.5},
    "23.25": {"2": 16.5, "3": 17.0},
    "24.25": {"2": 17.0, "3": 17.5},
    "25.25": {"2": 17.5, "3": 18.0},
    "26.25": {"2": 18.0, "3": 18.5},
    "27.25": {"2": 18.5, "3": 19.0},
    "28.25": {"2": 19.0, "3": 19.5},
    "29.25": {"2": 19.5, "3": 20.0},
    "30.25": {"2": 20.0, "3": 20.5},
    "31.25": {"2": 20.5, "3": 21.0},
    "32.25": {"2": 21.0, "3": 21.5},
    "33.25": {"2": 21.5, "3": 22.0},
    "34.25": {"2": 22.0, "3": 22.5},
    "35.25": {"2": 22.5, "3": 23.0},
    "36.25": {"2": 23.0, "3": 23.5},
    "37.25": {"2": 23.5, "3": 24.0}
    };
var chest_size_3_4 = {
    "13.75": {"2": 11.5, "3": 12.0},
    "14.75": {"2": 12.0, "3": 12.5},
    "15.75": {"2": 12.5, "3": 13.0},
    "16.75": {"2": 13.0, "3": 13.5},
    "17.75": {"2": 13.5, "3": 14.0},
    "18.75": {"2": 14.0, "3": 14.5},
    "19.75": {"2": 14.5, "3": 15.0},
    "20.75": {"2": 15.0, "3": 15.5},
    "21.75": {"2": 15.5, "3": 16.0},
    "22.75": {"2": 16.0, "3": 16.5},
    "23.75": {"2": 16.5, "3": 17.0},
    "24.75": {"2": 17.0, "3": 17.5},
    "25.75": {"2": 17.5, "3": 18.0},
    "26.75": {"2": 18.0, "3": 18.5},
    "27.75": {"2": 18.5, "3": 19.0},
    "28.75": {"2": 19.0, "3": 19.5},
    "29.75": {"2": 19.5, "3": 20.0},
    "30.75": {"2": 20.0, "3": 20.5},
    "31.75": {"2": 20.5, "3": 21.0},
    "32.75": {"2": 21.0, "3": 21.5},
    "33.75": {"2": 21.5, "3": 22.0},
    "34.75": {"2": 22.0, "3": 22.5},
    "35.75": {"2": 22.5, "3": 23.0},
    "36.75": {"2": 23.0, "3": 23.5},
    "37.75": {"2": 23.5, "3": 24.0}
    };
var optimal_body = (this.data.chest - 19 + 0.5) / 2 + 14.5;
var target_column_even	= this.data.collar >= optimal_body + 1.5 ? 4 : (this.data.collar <= optimal_body - 1 ? 2 : 3);
var target_column_odd	= this.data.collar >= optimal_body + 1 ? 3 : 2;
    
    var val2 = parseFloat(this.rdata.chest) + 0.5;
    if (typeof chest_size_1_4[val2.toString()] == "undefined")
        var body_chest_1_4 = false;
    else
        var body_chest_1_4 = chest_size_1_4[val2.toString()][target_column_odd];
    if (typeof chest_size_3_4[val2.toString()] == "undefined")
        var body_chest_3_4 = false;
    else
        var body_chest_3_4 = chest_size_3_4[val2.toString()][target_column_odd];
    target_colum_1_4 = (this.data.collar >= optimal_body) ? 3 : 2;
    target_colum_3_4 = (this.data.collar >= optimal_body) ? 3 : 2;

var t = Math.ceil((parseFloat(this.rdata.chest) + 0.5) * 2) / 2 * 2
if (t % 2) { // odd
var val = Math.ceil((parseFloat(this.rdata.chest) + 0.5) * 2) / 2;
// val = Math.min(val, 37.5);
val = Math.min(val, 37); // 37.5 YKOLT QUICK CHANGE OCT 2016
val = Math.max(val, 13.5);
var body_chest_odd = body_size_chest_widths.odd[val.toString()][target_column_odd];
} else { // even
var val = Math.ceil((parseFloat(this.rdata.chest) + 0.5) * 2) / 2;
val = Math.min(val, 38);
val = Math.max(val, 13);
var body_chest_even = body_size_chest_widths.even[val.toString()][target_column_even];
}

    ////////// NEW ///////
    if ((parseFloat(this.rdata.chest) * 4) % 2 == 0) { // chetnye even
        if (((parseFloat(this.rdata.chest) + 0.5) * 2) % 2 == 0) {
            return body_chest_even;
        }
        else {
            return body_chest_odd;
        }
    }
    else {
        if (((parseFloat(this.rdata.chest) + 0.5) * 2 - 0.5) % 2 == 0) {
            return body_chest_1_4;
        }
        else {
            return body_chest_3_4;
        }
    }
    ////////// NEW - END //////
    

var double_chest = (parseFloat(this.rdata.chest) + 0.5) * 2;

if (parseInt(double_chest / 2) == parseFloat(double_chest / 2)) { // even
var val = parseInt(this.rdata.chest+0.5);
val = Math.min(val, 38);
val = Math.max(val, 13);
return body_size_chest_widths.even[val.toString()][target_column_even];
} else { // odd
var val = parseFloat(this.rdata.chest+0.5);
// val = Math.min(val, 37.5);
val = Math.min(val, 37); // 37.5 YKOLT QUICK CHANGE OCT 2016
val = Math.max(val, 13.5);
return body_size_chest_widths.odd[val.toString()][target_column_odd];
}

//            =IF(ISEVEN(ROUNDUP((tchest+G38)*2;0)/2*2);I7;I8)
//            =IF(ISEVEN(rtchest*4);IF(ISEVEN((rtchest+G38)*2);I5;I6); IF(ISEVEN((rtchest+G38)*2-0,5); I7; I8))
}
AdjSizes.prototype.get_default_bottom_width = function() {
var default_bottom_widths = {
        "0": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 1,  "6": 1.25,  "7": 1.5,  "8": 1.75,  "9": 2,  "10": 2.25,  "11": 2.5,  "12": 2.75,  "13": 2.75,  "14": 3,  "15": 3.25,  "16": 3.25,  "17": 3.25,  "18": 3.5,  "19": 3.5,  "20": 3.75,  "21": 4,  "22": 4.25,  "23": 4.25,  "24": 4.5,  "25": 4.5,  "26": 4.5,  "27": 4.5,  "28": 4.5,  "29": 4.5 },
        "0.25": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 1,  "6": 1.25,  "7": 1.5,  "8": 1.75,  "9": 2,  "10": 2.25,  "11": 2.5,  "12": 2.75,  "13": 2.75,  "14": 3,  "15": 3,  "16": 3.25,  "17": 3.25,  "18": 3.25,  "19": 3.5,  "20": 3.5,  "21": 3.75,  "22": 4,  "23": 4.25,  "24": 4.5,  "25": 4.5,  "26": 4.5,  "27": 4.5,  "28": 4.5,  "29": 4.5 },
        "0.5": { "1": 0  ,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 1,  "6": 1.25,  "7": 1.5,  "8": 1.75,  "9": 2,  "10": 2.25,  "11": 2.5,  "12": 2.75,  "13": 2.75,  "14": 2.75,  "15": 3,  "16": 3,  "17": 3,  "18": 3.25,  "19": 3.25,  "20": 3.5,  "21": 3.5,  "22": 3.75,  "23": 3.75,  "24": 4.25,  "25": 4.25,  "26": 4.25,  "27": 4.25,  "28": 4.25,  "29": 4.25 },
        "0.75": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 1,  "6": 1.25,  "7": 1.5,  "8": 1.75,  "9": 2,  "10": 2.25,  "11": 2.25,  "12": 2.5,  "13": 2.5,  "14": 2.75,  "15": 3,  "16": 3,  "17": 3,  "18": 3.25,  "19": 3.25,  "20": 3.5,  "21": 3.5,  "22": 3.75,  "23": 3.75,  "24": 4,  "25": 4,  "26": 4,  "27": 4,  "28": 4,  "29": 4 },
        "1": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 1,  "6": 1.25,  "7": 1.5,  "8": 1.75,  "9": 2,  "10": 2,  "11": 2.25,  "12": 2.25,  "13": 2.25,  "14": 2.5,  "15": 2.75,  "16": 3,  "17": 3,  "18": 3,  "19": 3.25,  "20": 3.25,  "21": 3.25,  "22": 3.5,  "23": 3.5,  "24": 3.75,  "25": 3.75,  "26": 3.75,  "27": 3.75,  "28": 3.75,  "29": 3.75 },
        "1.25": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 1,  "6": 1.25,  "7": 1.5,  "8": 1.75,  "9": 2,  "10": 2,  "11": 2,  "12": 2.25,  "13": 2.25,  "14": 2.5,  "15": 2.5,  "16": 2.75,  "17": 3,  "18": 3,  "19": 3,  "20": 3.25,  "21": 3.25,  "22": 3.5,  "23": 3.5,  "24": 3.75,  "25": 3.75,  "26": 3.75,  "27": 3.75,  "28": 3.75,  "29": 3.75 },
        "1.5": { "1": 0  ,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 1,  "6": 1.25,  "7": 1.5,  "8": 1.75,  "9": 1.75,  "10": 2,  "11": 2,  "12": 2.25,  "13": 2.25,  "14": 2.25,  "15": 2.5,  "16": 2.75,  "17": 2.75,  "18": 3,  "19": 3,  "20": 3,  "21": 3,  "22": 3.25,  "23": 3.25,  "24": 3.5,  "25": 3.5,  "26": 3.5,  "27": 3.5,  "28": 3.5,  "29": 3.5 },
        "1.75": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 1,  "6": 1.25,  "7": 1.5,  "8": 1.5,  "9": 1.75,  "10": 2,  "11": 2,  "12": 2,  "13": 2.25,  "14": 2.25,  "15": 2.25,  "16": 2.5,  "17": 2.75,  "18": 2.75,  "19": 3,  "20": 3,  "21": 3,  "22": 3.25,  "23": 3.25,  "24": 3.5,  "25": 3.5,  "26": 3.5,  "27": 3.5,  "28": 3.5,  "29": 3.5 },
        "2": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 1,  "6": 1.25,  "7": 1.5,  "8": 1.5,  "9": 1.75,  "10": 2,  "11": 2,  "12": 2,  "13": 2.25,  "14": 2.25,  "15": 2.25,  "16": 2.25,  "17": 2.5,  "18": 2.5,  "19": 2.75,  "20": 2.75,  "21": 2.75,  "22": 3,  "23": 3,  "24": 3.25,  "25": 3.25,  "26": 3.25,  "27": 3.25,  "28": 3.25,  "29": 3.25 },
        "2.25": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 1,  "6": 1.25,  "7": 1.25,  "8": 1.5,  "9": 1.75,  "10": 1.75,  "11": 2,  "12": 2,  "13": 2,  "14": 2.25,  "15": 2.25,  "16": 2.25,  "17": 2.5,  "18": 2.5,  "19": 2.5,  "20": 2.75,  "21": 2.75,  "22": 3,  "23": 3,  "24": 3.25,  "25": 3.25,  "26": 3.25,  "27": 3.25,  "28": 3.25,  "29": 3.25 },
        "2.5": { "1": 0  ,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 1,  "6": 1.25,  "7": 1.25,  "8": 1.5,  "9": 1.75,  "10": 1.75,  "11": 2,  "12": 2,  "13": 2,  "14": 2,  "15": 2.25,  "16": 2.25,  "17": 2.25,  "18": 2.25,  "19": 2.25,  "20": 2.5,  "21": 2.5,  "22": 2.5,  "23": 2.5,  "24": 3,  "25": 3,  "26": 3,  "27": 3,  "28": 3,  "29": 3 },
        "2.75": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 1,  "6": 1.25,  "7": 1.25,  "8": 1.5,  "9": 1.5,  "10": 1.75,  "11": 1.75,  "12": 2,  "13": 2,  "14": 2,  "15": 2,  "16": 2.25,  "17": 2.25,  "18": 2.25,  "19": 2.25,  "20": 2.5,  "21": 2.5,  "22": 2.5,  "23": 2.5,  "24": 3,  "25": 3,  "26": 3,  "27": 3,  "28": 3,  "29": 3 },
        "3": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 1,  "7": 1.25,  "8": 1.5,  "9": 1.5,  "10": 1.75,  "11": 1.75,  "12": 1.75,  "13": 1.75,  "14": 2,  "15": 2,  "16": 2,  "17": 2,  "18": 2.25,  "19": 2.25,  "20": 2.25,  "21": 2.25,  "22": 2.5,  "23": 2.5,  "24": 2.75,  "25": 2.75,  "26": 2.75,  "27": 2.75,  "28": 2.75,  "29": 2.75 },
        "3.25": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 1,  "7": 1.25,  "8": 1.5,  "9": 1.5,  "10": 1.75,  "11": 1.75,  "12": 1.75,  "13": 1.75,  "14": 2,  "15": 2,  "16": 2,  "17": 2,  "18": 2,  "19": 2,  "20": 2.25,  "21": 2.25,  "22": 2.5,  "23": 2.5,  "24": 2.75,  "25": 2.75,  "26": 2.75,  "27": 2.75,  "28": 2.75,  "29": 2.75 },
        "3.5": { "1": 0  ,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 1,  "7": 1.25,  "8": 1.25,  "9": 1.5,  "10": 1.5,  "11": 1.5,  "12": 1.5,  "13": 1.75,  "14": 1.75,  "15": 2,  "16": 2,  "17": 2,  "18": 2,  "19": 2,  "20": 2,  "21": 2.25,  "22": 2.25,  "23": 2.25,  "24": 2.5,  "25": 2.5,  "26": 2.5,  "27": 2.5,  "28": 2.5,  "29": 2.5 },
        "3.75": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 1,  "7": 1.25,  "8": 1.25,  "9": 1.5,  "10": 1.5,  "11": 1.5,  "12": 1.5,  "13": 1.75,  "14": 1.75,  "15": 1.75,  "16": 1.75,  "17": 1.75,  "18": 2,  "19": 2,  "20": 2,  "21": 2,  "22": 2,  "23": 2.25,  "24": 2.5,  "25": 2.5,  "26": 2.5,  "27": 2.5,  "28": 2.5,  "29": 2.5 },
        "4": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 1,  "7": 1,  "8": 1.25,  "9": 1.25,  "10": 1.5,  "11": 1.5,  "12": 1.5,  "13": 1.5,  "14": 1.5,  "15": 1.75,  "16": 1.75,  "17": 1.75,  "18": 1.75,  "19": 1.75,  "20": 2,  "21": 2,  "22": 2,  "23": 2,  "24": 2.25,  "25": 2.25,  "26": 2.25,  "27": 2.25,  "28": 2.25,  "29": 2.25 },
        "4.25": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 1,  "7": 1,  "8": 1.25,  "9": 1.25,  "10": 1.5,  "11": 1.5,  "12": 1.5,  "13": 1.5,  "14": 1.5,  "15": 1.5,  "16": 1.75,  "17": 1.75,  "18": 1.75,  "19": 1.75,  "20": 1.75,  "21": 2,  "22": 2,  "23": 2,  "24": 2,  "25": 2.25,  "26": 2.25,  "27": 2.25,  "28": 2.25,  "29": 2.25 },
        "4.5": { "1": 0  ,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 1,  "7": 1,  "8": 1,  "9": 1.25,  "10": 1.25,  "11": 1.25,  "12": 1.5,  "13": 1.5,  "14": 1.5,  "15": 1.5,  "16": 1.5,  "17": 1.5,  "18": 1.5,  "19": 1.75,  "20": 1.75,  "21": 1.75,  "22": 2,  "23": 2,  "24": 2,  "25": 2,  "26": 2,  "27": 2,  "28": 2.25,  "29": 2.25 },
        "4.75": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 1,  "7": 1,  "8": 1,  "9": 1.25,  "10": 1.25,  "11": 1.25,  "12": 1.25,  "13": 1.5,  "14": 1.5,  "15": 1.5,  "16": 1.5,  "17": 1.5,  "18": 1.5,  "19": 1.5,  "20": 1.75,  "21": 1.75,  "22": 1.75,  "23": 2,  "24": 2,  "25": 2,  "26": 2,  "27": 2,  "28": 2,  "29": 2 },
        "5": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 0.75,  "7": 1,  "8": 1,  "9": 1,  "10": 1.25,  "11": 1.25,  "12": 1.25,  "13": 1.25,  "14": 1.5,  "15": 1.5,  "16": 1.5,  "17": 1.5,  "18": 1.5,  "19": 1.5,  "20": 1.5,  "21": 1.75,  "22": 1.75,  "23": 1.75,  "24": 1.75,  "25": 1.75,  "26": 1.75,  "27": 2,  "28": 2,  "29": 2 },
        "5.25": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 0.75,  "7": 1,  "8": 1,  "9": 1,  "10": 1.25,  "11": 1.25,  "12": 1.25,  "13": 1.25,  "14": 1.25,  "15": 1.5,  "16": 1.5,  "17": 1.5,  "18": 1.5,  "19": 1.5,  "20": 1.5,  "21": 1.5,  "22": 1.75,  "23": 1.75,  "24": 1.75,  "25": 1.75,  "26": 1.75,  "27": 1.75,  "28": 1.75,  "29": 2 },
        "5.5": { "1": 0  ,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 0.75,  "7": 0.75,  "8": 1,  "9": 1,  "10": 1,  "11": 1,  "12": 1,  "13": 1.25,  "14": 1.25,  "15": 1.25,  "16": 1.25,  "17": 1.25,  "18": 1.5,  "19": 1.5,  "20": 1.5,  "21": 1.5,  "22": 1.5,  "23": 1.5,  "24": 1.75,  "25": 1.75,  "26": 1.75,  "27": 1.75,  "28": 1.75,  "29": 1.75 },
        "5.75": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 0.75,  "7": 0.75,  "8": 1,  "9": 1,  "10": 1,  "11": 1,  "12": 1,  "13": 1,  "14": 1.25,  "15": 1.25,  "16": 1.25,  "17": 1.25,  "18": 1.25,  "19": 1.25,  "20": 1.5,  "21": 1.5,  "22": 1.5,  "23": 1.5,  "24": 1.5,  "25": 1.5,  "26": 1.5,  "27": 1.5,  "28": 1.5,  "29": 1.5 },
        "6": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 0.75,  "7": 0.75,  "8": 0.75,  "9": 1,  "10": 1,  "11": 1,  "12": 1,  "13": 1,  "14": 1,  "15": 1,  "16": 1,  "17": 1,  "18": 1,  "19": 1.25,  "20": 1.25,  "21": 1.5,  "22": 1.5,  "23": 1.5,  "24": 1.5,  "25": 1.5,  "26": 1.5,  "27": 1.5,  "28": 1.5,  "29": 1.5 },
        "6.25": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 0.75,  "7": 0.75,  "8": 0.75,  "9": 0.75,  "10": 1,  "11": 1,  "12": 1,  "13": 1,  "14": 1,  "15": 1,  "16": 1,  "17": 1,  "18": 1,  "19": 1.25,  "20": 1.25,  "21": 1.25,  "22": 1.25,  "23": 1.5,  "24": 1.5,  "25": 1.5,  "26": 1.5,  "27": 1.5,  "28": 1.5,  "29": 1.5 },
        "6.5": { "1": 0  ,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 0.75,  "7": 0.75,  "8": 0.75,  "9": 0.75,  "10": 0.75,  "11": 0.75,  "12": 1,  "13": 1,  "14": 1,  "15": 1,  "16": 1,  "17": 1,  "18": 1,  "19": 1,  "20": 1,  "21": 1.25,  "22": 1.25,  "23": 1.25,  "24": 1.5,  "25": 1.5,  "26": 1.5,  "27": 1.5,  "28": 1.5,  "29": 1.5 },
        "6.75": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 0.75,  "7": 0.75,  "8": 0.75,  "9": 0.75,  "10": 0.75,  "11": 0.75,  "12": 0.75,  "13": 0.75,  "14": 1,  "15": 1,  "16": 1,  "17": 1,  "18": 1,  "19": 1,  "20": 1,  "21": 1.25,  "22": 1.25,  "23": 1.25,  "24": 1.25,  "25": 1.5,  "26": 1.5,  "27": 1.5,  "28": 1.5,  "29": 1.5 },
        "7": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 0.75,  "7": 0.75,  "8": 0.75,  "9": 0.75,  "10": 0.75,  "11": 0.75,  "12": 0.75,  "13": 0.75,  "14": 0.75,  "15": 0.75,  "16": 1,  "17": 1,  "18": 1,  "19": 1,  "20": 1,  "21": 1,  "22": 1.25,  "23": 1.25,  "24": 1.25,  "25": 1.25,  "26": 1.25,  "27": 1.25,  "28": 1.5,  "29": 1.5 },
        "7.25": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 0.75,  "7": 0.75,  "8": 0.75,  "9": 0.75,  "10": 0.75,  "11": 0.75,  "12": 0.75,  "13": 0.75,  "14": 0.75,  "15": 0.75,  "16": 0.75,  "17": 0.75,  "18": 0.75,  "19": 1,  "20": 1,  "21": 1,  "22": 1.25,  "23": 1.25,  "24": 1.25,  "25": 1.25,  "26": 1.25,  "27": 1.25,  "28": 1.25,  "29": 1.25 },
        "7.5": { "1": 0  ,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 0.75,  "7": 0.75,  "8": 0.75,  "9": 0.75,  "10": 0.75,  "11": 0.75,  "12": 0.75,  "13": 0.75,  "14": 0.75,  "15": 0.75,  "16": 0.75,  "17": 0.75,  "18": 0.75,  "19": 0.75,  "20": 1,  "21": 1,  "22": 1,  "23": 1,  "24": 1,  "25": 1.25,  "26": 1.25,  "27": 1.25,  "28": 1.25,  "29": 1.25 },
        "7.75": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 0.75,  "7": 0.75,  "8": 0.75,  "9": 0.75,  "10": 0.75,  "11": 0.75,  "12": 0.75,  "13": 0.75,  "14": 0.75,  "15": 0.75,  "16": 0.75,  "17": 0.75,  "18": 0.75,  "19": 0.75,  "20": 0.75,  "21": 1,  "22": 1,  "23": 1,  "24": 1,  "25": 1,  "26": 1,  "27": 1,  "28": 1.25,  "29": 1.25 },
        "8": { "1": 0,  "2": 0.25,  "3": 0.5,  "4": 0.75,  "5": 0.75,  "6": 0.75,  "7": 0.75,  "8": 0.75,  "9": 0.75,  "10": 0.75,  "11": 0.75,  "12": 0.75,  "13": 0.75,  "14": 0.75,  "15": 0.75,  "16": 0.75,  "17": 0.75,  "18": 0.75,  "19": 0.75,  "20": 0.75,  "21": 0.75,  "22": 0.75,  "23": 1,  "24": 1,  "25": 1,  "26": 1,  "27": 1,  "28": 1,  "29": 1 }
};

var C43 = this.rdata.chest * 1;
var C44 = this.rdata.midsection * 1;
if (isShortSleeve()) {
var C50 = excelCeil(4 * (2 * C43*1 + C44*1) / 3) / 4;
return C50;
}
else {
var C45 = C43 - C44;
var C46 = this.rdata.sleeve * 1;
var C47 = this.rdata.shirt_length * 1;
var C48 = C46 - C47;
if (C48 > 8) {
    C48 = 8;
}

var C49 = 0;
if (C45 >= 0) {
    if (C48 > 0) {
        var tmp_bw = C45*4+2 - 1;
        C49 = parseFloat(default_bottom_widths[C48][tmp_bw]);
    }
    else {
        var tmp_bw = C45*4+2 - 1;
        C49 = parseFloat(default_bottom_widths[0][tmp_bw]);
    }
}

var C50 = C49 + parseFloat(C44);
return C50;
}
}

function isShortSleeve() {
return parseInt($('#shortSleeve').val()) > 0 ? true : false;
}


var SmartSize = function(data){
this.data = data;
if (!isNaN(parseFloat(this.data.tall_feets)) && !isNaN(parseFloat(this.data.tall_inches))) {
this.data.tall = parseInt(this.data.tall_feets) * 12 + parseInt(this.data.tall_inches);
} else {
this.data.tall = '';
this.data.tall_feets = '';
this.data.tall_inches = '';
}
if (this.data.suit === undefined) {
this.data.suit = parseFloat(this.data.jacket_size);
}
if (!isNaN(parseInt(this.data.ethnicity))) {
this.data.ethnicity = parseInt(this.data.ethnicity);
if (this.data.ethnicity < 1) {
    this.data.ethnicity = 1
}
else {
    if (this.data.ethnicity > 4) {
        this.data.ethnicity = 4;
    }
}
}
switch (this.data.size.toLowerCase()) {
case 'xxs':
    this.data.size_num = 0;
    break;
case 'xs':
    this.data.size_num = 1;
    break;
case 's':
    this.data.size_num = 2;
    break;
case 'm':
    this.data.size_num = 3;
    break;
case 'l':
    this.data.size_num = 4;
    break;
case 'xl':
    this.data.size_num = 5;
    break;
case 'xxl':
    this.data.size_num = 6;
    break;
case '3xl':
    this.data.size_num = 7;
    break;
case '4xl':
    this.data.size_num = 8;
    break;
case '5xl':
    this.data.size_num = 9;
    break;
case '6xl':
    this.data.size_num = 10;
    break;
}

// COLLAR
if (this.isInputYes('collar')) {
this.collar = this.data.collar;
}
else {
this.collar = this.getParam(this.data.size, 'collar');
this.collar += this.getCommonB115('collar');
this.collar += this.getCommonB124('collar');
this.collar += this.getCommonB198('collar');
if (this.isInputYes('midsection_style')) {
    this.collar += this.getB502J505(this.data.midsection_style, this.data.size_num);
}
if (this.isInputYes('pants_waist')) {
    tmp = this.data.pants_waist;
    if (this.data.pants_waist < this.getRangeLimits('pants_waist', 'min')) {
        tmp = this.getRangeLimits('pants_waist', 'min');
    }
    if (this.data.pants_waist > this.getRangeLimits('pants_waist', 'max')) {
        tmp = this.getRangeLimits('pants_waist', 'max');
    }
    tmp = Math.floor(tmp);
    this.collar += this.getB510J542(tmp, this.data.size_num);
}
if (this.isInputYes('weight') && this.isInputYes('tall')) {
    tmp = this.data.weight;
    if (this.data.weight < this.getRangeLimits('weight', 'min')) {
        tmp = this.getRangeLimits('weight', 'min');
    }
    if (this.data.weight > this.getRangeLimits('weight', 'max')) {
        tmp = this.getRangeLimits('weight', 'max');
    }
    tmp = Math.floor(tmp / 10) * 10;

    tmp2 = this.data.tall;
    if (this.data.tall < this.getRangeLimits('height', 'min')) {
        tmp2 = this.getRangeLimits('height', 'min');
    }
    if (this.data.tall > this.getRangeLimits('height', 'max')) {
        tmp2 = this.getRangeLimits('height', 'max');
    }
    tmp2 = Math.floor(tmp2);

    this.collar += this.getB615AA649(tmp, tmp2);
}
if (this.isInputYes('weight') && !this.isInputYes('tall')) {
    tmp = this.data.weight;
    if (this.data.weight < this.getRangeLimits('weight', 'min')) {
        tmp = this.getRangeLimits('weight', 'min');
    }
    if (this.data.weight > this.getRangeLimits('weight', 'max')) {
        tmp = this.getRangeLimits('weight', 'max');
    }
    tmp = Math.floor(tmp / 10) * 10;
    this.collar += this.getB576J610(tmp, this.data.size_num);
}
if (this.isInputYes('tall') && !this.isInputYes('weight')) {
    tmp = this.data.tall;
    if (this.data.tall < this.getRangeLimits('height', 'min')) {
        tmp = this.getRangeLimits('height', 'min');
    }
    if (this.data.tall > this.getRangeLimits('height', 'max')) {
        tmp = this.getRangeLimits('height', 'max');
    }
    tmp = Math.floor(tmp);
    this.collar += this.getB547J571(tmp, this.data.size_num);
}
}
{
this.collar = parseFloat(this.collar);
this.collar_1 = this.collar_2 = this.collar_3 = this.collar;

this.collar_1 += this.getCommonB191v2('collar', 1);
this.collar_1 = this.getRound4(this.collar_1);

this.collar_2 += this.getCommonB191v2('collar', '0');
this.collar_2 = this.getRound4(this.collar_2);

this.collar_3 += this.getCommonB191v2('collar', 0);
this.collar_3 = this.getRound4(this.collar_3);

this.collar += this.getCommonB191('collar');
this.collar = this.getRound4(this.collar);
}

// SLEEVE
if (this.isInputYes('sleeve')) {
this.sleeve = this.data.sleeve;
}
else {
this.sleeve = this.getParam(this.data.size, 'sleeve');
this.sleeve += this.getCommonB75('sleeve');
this.sleeve += this.getCommonB124('sleeve');
this.sleeve += this.getCommonB144('sleeve');
this.sleeve += this.getCommonB182('sleeve');
// this.sleeve += this.getCommonB191('sleeve');
this.sleeve += this.getCommonB198('sleeve');
if (this.isInputYes('tall') && !this.isInputYes('ethnicity')) {
    tmp = this.data.tall;
    if (this.data.tall < this.getRangeLimits('height', 'min')) {
        tmp = this.getRangeLimits('height', 'min');
    }
    if (this.data.tall > this.getRangeLimits('height', 'max')) {
        tmp = this.getRangeLimits('height', 'max');
    }
    tmp = Math.floor(tmp);
    this.sleeve += this.getB473J497(tmp, this.data.size_num);
}
if (this.isInputYes('ethnicity') && !this.isInputYes('tall')) {
    this.sleeve += this.getB465J468(this.data.ethnicity, this.data.size_num);
}
if (this.isInputYes('tall') && this.isInputYes('ethnicity')) {
    tmp = this.data.tall;
    if (this.data.tall < this.getRangeLimits('height', 'min')) {
        tmp = this.getRangeLimits('height', 'min');
    }
    if (this.data.tall > this.getRangeLimits('height', 'max')) {
        tmp = this.getRangeLimits('height', 'max');
    }
    tmp = Math.floor(tmp);

    if (this.data.size_num == 0) {
        this.sleeve += this.getB769F793(tmp, this.data.ethnicity);
    }
    if (this.data.size_num == 1) {
        this.sleeve += this.getB798F822(tmp, this.data.ethnicity);
    }
    if (this.data.size_num == 2) {
        this.sleeve += this.getB827F851(tmp, this.data.ethnicity);
    }
    if (this.data.size_num == 3) {
        this.sleeve += this.getB856F880(tmp, this.data.ethnicity);
    }
    if (this.data.size_num == 4) {
        this.sleeve += this.getB885F909(tmp, this.data.ethnicity);
    }
    if (this.data.size_num == 5) {
        this.sleeve += this.getB914F938(tmp, this.data.ethnicity);
    }
    if (this.data.size_num == 6) {
        this.sleeve += this.getB943F967(tmp, this.data.ethnicity);
    }
    if (this.data.size_num == 7) {
        this.sleeve += this.getB972F996(tmp, this.data.ethnicity);
    }
}
}
{
this.sleeve = parseFloat(this.sleeve);
this.sleeve_1 = this.sleeve_2 = this.sleeve_3 = this.sleeve;

this.sleeve_1 += this.getCommonB191v2('sleeve', 1);
this.sleeve_1 = this.getRound4(this.sleeve_1);

this.sleeve_2 += this.getCommonB191v2('sleeve', 0);
this.sleeve_2 = this.getRound4(this.sleeve_2);

this.sleeve_3 = 0;

this.sleeve += this.getCommonB191('sleeve');
this.sleeve = this.getRound4(this.sleeve);
}

// YOKE
this.yoke = this.getParam(this.data.size, 'yoke');
this.yoke += this.getCommonB45('yoke');
this.yoke += this.getCommonB75('yoke');
this.yoke += this.getCommonB115('yoke');
this.yoke += this.getCommonB124('yoke');
this.yoke += this.getCommonB144('yoke');
this.yoke += this.getCommonB182('yoke');
this.yoke += this.getCommonB198('yoke');
{
this.yoke = parseFloat(this.yoke);
this.yoke_1 = this.yoke_2 = this.yoke_3 = this.yoke;

this.yoke_1 += this.getCommonB191v2('yoke', 1);
this.yoke_1 = this.getRound4(this.yoke_1);

this.yoke_2 += this.getCommonB191v2('yoke', 0);
this.yoke_2 = this.getRound4(this.yoke_2);

this.yoke_3 += this.getCommonB191v2('yoke', 0);
this.yoke_3 = this.getRound4(this.yoke_3);

this.yoke += this.getCommonB191('yoke');
this.yoke = this.getRound4(this.yoke);
}

// CHEST WIDTH
this.chest = this.getParam(this.data.size, 'chest');
this.chest += this.getCommonB45('chest');
if (this.isInputYes('weight')) {
tmp = this.data.weight;
if (this.data.weight < this.getRangeLimits('weight', 'min')) {
    tmp = this.getRangeLimits('weight', 'min');
}
if (this.data.weight > this.getRangeLimits('weight', 'max')) {
    tmp = this.getRangeLimits('weight', 'max');
}
tmp = Math.floor(tmp / 10) * 10;
this.chest += this.getB318J354(tmp, this.data.size_num);
}
else {
this.chest += this.getB318J354('skipped', this.data.size_num);
}
this.chest += this.getCommonB115('chest');
this.chest += this.getCommonB124('chest');
this.chest += this.getCommonB144('chest');
this.chest += this.getCommonB182('chest');
// this.chest += this.getCommonB191('chest');
this.chest += this.getCommonB198('chest');
{
this.chest = parseFloat(this.chest);
this.chest_1 = this.chest_2 = this.chest_3 = this.chest;

this.chest_1 += this.getCommonB191v2('chest', 1);
this.chest_1 = this.getRound4(this.chest_1);

this.chest_2 += this.getCommonB191v2('chest', 0);
this.chest_2 = this.getRound4(this.chest_2);

this.chest_3 += this.getCommonB191v2('chest', 0);
this.chest_3 = this.getRound4(this.chest_3);

this.chest += this.getCommonB191('chest');
this.chest = this.getRound4(this.chest);
}

// MIDSECTION WIDTH
this.midsection = this.getParam(this.data.size, 'midsection');
if (this.isInputYes('tall') && !this.isInputYes('pants_waist') && !this.isInputYes('weight')) {
tmp = this.data.tall;
if (this.data.tall < this.getRangeLimits('height', 'min')) {
    tmp = this.getRangeLimits('height', 'min');
}
if (this.data.tall > this.getRangeLimits('height', 'max')) {
    tmp = this.getRangeLimits('height', 'max');
}
tmp = Math.floor(tmp);
this.midsection += this.getB45J70(tmp, 'midsection');
}
if (this.isInputYes('weight')) {
tmp = this.data.weight;
if (this.data.weight < this.getRangeLimits('weight', 'min')) {
    tmp = this.getRangeLimits('weight', 'min');
}
if (this.data.weight > this.getRangeLimits('weight', 'max')) {
    tmp = this.getRangeLimits('weight', 'max');
}
tmp = Math.floor(tmp / 10) * 10;
this.midsection += this.getB278J313(tmp, this.data.size_num);
}
else {
this.midsection += this.getB278J313('skipped', this.data.size_num);
}
this.midsection += this.getCommonB115('midsection');
this.midsection += this.getCommonB124('midsection');
if (!this.isInputYes('tall') && !this.isInputYes('weight') && this.isInputYes('pants_waist')) {
this.midsection += this.getCommonB144('midsection');
}
this.midsection += this.getB359J363(this.isInputYes('midsection_style') ? this.data.midsection_style : 'skipped', this.data.size_num);
// this.midsection += this.getB191J194(this.isInputYes('tucked') ? this.data.tucked : 'skipped', 'midsection');
this.midsection += this.getB368J371(this.isInputYes('shirt_type') ? this.data.shirt_type : 'skipped', this.data.size_num);
if (this.isInputYes('pants_waist') && this.isInputYes('midsection_style')) {
tmp = this.data.pants_waist;
if (this.data.pants_waist < this.getRangeLimits('pants_waist', 'min')) {
    tmp = this.getRangeLimits('pants_waist', 'min');
}
if (this.data.pants_waist > this.getRangeLimits('pants_waist', 'max')) {
    tmp = this.getRangeLimits('pants_waist', 'max');
}
tmp = Math.floor(tmp);
this.midsection += this.getB209F241(tmp, this.data.midsection_style);
}
if (this.isInputYes('tall') && this.isInputYes('pants_waist')) {
tmp = this.data.pants_waist;
if (this.data.pants_waist < this.getRangeLimits('pants_waist', 'min')) {
    tmp = this.getRangeLimits('pants_waist', 'min');
}
if (this.data.pants_waist > this.getRangeLimits('pants_waist', 'max')) {
    tmp = this.getRangeLimits('pants_waist', 'max');
}
tmp = Math.floor(tmp);

tmp2 = this.data.tall;
if (this.data.tall < this.getRangeLimits('height', 'min')) {
    tmp2 = this.getRangeLimits('height', 'min');
}
if (this.data.tall > this.getRangeLimits('height', 'max')) {
    tmp2 = this.getRangeLimits('height', 'max');
}
tmp2 = Math.floor(tmp2);

this.midsection += this.getB654AA686(tmp, tmp2);
}
if (this.isInputYes('weight') && this.isInputYes('tall')) {
tmp = this.data.weight;
if (this.data.weight < this.getRangeLimits('weight', 'min')) {
    tmp = this.getRangeLimits('weight', 'min');
}
if (this.data.weight > this.getRangeLimits('weight', 'max')) {
    tmp = this.getRangeLimits('weight', 'max');
}
tmp = Math.floor(tmp / 10) * 10;

tmp2 = this.data.tall;
if (this.data.tall < this.getRangeLimits('height', 'min')) {
    tmp2 = this.getRangeLimits('height', 'min');
}
if (this.data.tall > this.getRangeLimits('height', 'max')) {
    tmp2 = this.getRangeLimits('height', 'max');
}
tmp2 = Math.floor(tmp2);

this.midsection += this.getB691AA725(tmp, tmp2);
}
if (this.isInputYes('weight') && this.isInputYes('pants_waist')) {
tmp = this.data.weight;
if (this.data.weight < this.getRangeLimits('weight', 'min')) {
    tmp = this.getRangeLimits('weight', 'min');
}
if (this.data.weight > this.getRangeLimits('weight', 'max')) {
    tmp = this.getRangeLimits('weight', 'max');
}
tmp = Math.floor(tmp / 10) * 10;

tmp2 = this.data.pants_waist;
if (this.data.pants_waist < this.getRangeLimits('pants_waist', 'min')) {
    tmp2 = this.getRangeLimits('pants_waist', 'min');
}
if (this.data.pants_waist > this.getRangeLimits('pants_waist', 'max')) {
    tmp2 = this.getRangeLimits('pants_waist', 'max');
}
tmp2 = Math.floor(tmp2);

this.midsection += this.getB730AI764(tmp, tmp2);
}
{
this.midsection = parseFloat(this.midsection);
this.midsection_1 = this.midsection_2 = this.midsection_3 = this.midsection;

this.midsection_1 += this.getCommonB191v2('midsection', 1);
if (this.isInputYes('tall')) {
    tmp = this.data.tall;
    if (this.data.tall < this.getRangeLimits('height', 'min')) {
        tmp = this.getRangeLimits('height', 'min');
    }
    if (this.data.tall > this.getRangeLimits('height', 'max')) {
        tmp = this.getRangeLimits('height', 'max');
    }
    tmp = Math.floor(tmp);
    this.midsection_1 += this.getB376J401(tmp, 1);
}
this.midsection_1 = this.getRound4(this.midsection_1);

this.midsection_2 += this.getCommonB191v2('midsection', 0);
if (this.isInputYes('tall')) {
    tmp = this.data.tall;
    if (this.data.tall < this.getRangeLimits('height', 'min')) {
        tmp = this.getRangeLimits('height', 'min');
    }
    if (this.data.tall > this.getRangeLimits('height', 'max')) {
        tmp = this.getRangeLimits('height', 'max');
    }
    tmp = Math.floor(tmp);
    this.midsection_2 += this.getB376J401(tmp, 0);
}
this.midsection_2 = this.getRound4(this.midsection_2);

this.midsection_3 += this.getCommonB191v2('midsection', 0);
if (this.isInputYes('tall')) {
    tmp = this.data.tall;
    if (this.data.tall < this.getRangeLimits('height', 'min')) {
        tmp = this.getRangeLimits('height', 'min');
    }
    if (this.data.tall > this.getRangeLimits('height', 'max')) {
        tmp = this.getRangeLimits('height', 'max');
    }
    tmp = Math.floor(tmp);
    this.midsection_3 += this.getB376J401(tmp, 0);
}
this.midsection_3 = this.getRound4(this.midsection_3);

this.midsection += this.getB191J194(this.isInputYes('tucked') ? this.data.tucked : 'skipped', 'midsection');
if (this.isInputYes('tall') && this.isInputYes('tucked')) {
    tmp = this.data.tall;
    if (this.data.tall < this.getRangeLimits('height', 'min')) {
        tmp = this.getRangeLimits('height', 'min');
    }
    if (this.data.tall > this.getRangeLimits('height', 'max')) {
        tmp = this.getRangeLimits('height', 'max');
    }
    tmp = Math.floor(tmp);
    this.midsection += this.getB376J401(tmp, this.data.tucked);
}
this.midsection = this.getRound4(this.midsection);
}

// SHIRT LENGTH
this.length = this.getParam(this.data.size, 'length');
// if (!this.isInputYes('tall')) {
// this.length += this.getCommonB191('length');
// }
if (this.isInputYes('tall')) {
tmp = this.data.tall;
if (this.data.tall < this.getRangeLimits('height', 'min')) {
    tmp = this.getRangeLimits('height', 'min');
}
if (this.data.tall > this.getRangeLimits('height', 'max')) {
    tmp = this.getRangeLimits('height', 'max');
}
tmp = Math.floor(tmp);
this.length += this.getB406J431(tmp, this.data.size_num);
}
else {
this.length += this.getB406J431('skipped', this.data.size_num);
}
this.length += this.getCommonB75('length');
this.length += this.getCommonB115('length');
this.length += this.getCommonB124('length');
this.length += this.getCommonB144('length');
this.length += this.getCommonB182('length');
this.length += this.getCommonB198('length');
{
this.length = parseFloat(this.length);
this.length_1 = this.length_2 = this.length_3 = this.length;

if (!this.isInputYes('tall')) {
    this.length_1 += this.getCommonB191v2('length', 1);
}
if (this.isInputYes('tall')) {
    tmp = this.data.tall;
    if (this.data.tall < this.getRangeLimits('height', 'min')) {
        tmp = this.getRangeLimits('height', 'min');
    }
    if (this.data.tall > this.getRangeLimits('height', 'max')) {
        tmp = this.getRangeLimits('height', 'max');
    }
    tmp = Math.floor(tmp);
    this.length_1 += this.getB436E460(tmp, 1);
}
this.length_1 = this.getRound4(this.length_1) + 0.25;

if (!this.isInputYes('tall')) {
    this.length_2 += this.getCommonB191v2('length', 0);
}
if (this.isInputYes('tall')) {
    tmp = this.data.tall;
    if (this.data.tall < this.getRangeLimits('height', 'min')) {
        tmp = this.getRangeLimits('height', 'min');
    }
    if (this.data.tall > this.getRangeLimits('height', 'max')) {
        tmp = this.getRangeLimits('height', 'max');
    }
    tmp = Math.floor(tmp);
    this.length_2 += this.getB436E460(tmp, 0);
}
this.length_2 = this.getRound4(this.length_2) - 0.25;

if (!this.isInputYes('tall')) {
    this.length_3 += this.getCommonB191v2('length', 0);
}
if (this.isInputYes('tall')) {
    tmp = this.data.tall;
    if (this.data.tall < this.getRangeLimits('height', 'min')) {
        tmp = this.getRangeLimits('height', 'min');
    }
    if (this.data.tall > this.getRangeLimits('height', 'max')) {
        tmp = this.getRangeLimits('height', 'max');
    }
    tmp = Math.floor(tmp);
    this.length_3 += this.getB436E460(tmp, 0);
}
this.length_3 = this.getRound4(this.length_3) - 0.5;

if (!this.isInputYes('tall')) {
    this.length += this.getCommonB191('length');
}
this.length = this.getRound4(this.length);
}

// SLEEVE WIDTH
this.sleeve_width = this.getParam(this.data.size, 'sleeve_width');
this.sleeve_width += this.getCommonB45('sleeve_width');
this.sleeve_width += this.getCommonB75('sleeve_width');
this.sleeve_width += this.getCommonB115('sleeve_width');
this.sleeve_width += this.getCommonB124('sleeve_width');
this.sleeve_width += this.getCommonB144('sleeve_width');
this.sleeve_width += this.getCommonB182('sleeve_width');
// this.sleeve_width += this.getCommonB191('sleeve_width');
this.sleeve_width += this.getCommonB198('sleeve_width');
{
this.sleeve_width = parseFloat(this.sleeve_width);
this.sleeve_width_1 = this.sleeve_width_2 = this.sleeve_width_3 = this.sleeve_width;

this.sleeve_width_1 += this.getCommonB191v2('sleeve_width', 1);
this.sleeve_width_1 = this.getRound4(this.sleeve_width_1);

this.sleeve_width_2 += this.getCommonB191v2('sleeve_width', 0);
this.sleeve_width_2 = this.getRound4(this.sleeve_width_2);

this.sleeve_width_3 = 0;

this.sleeve_width += this.getCommonB191('sleeve_width');
this.sleeve_width = this.getRound4(this.sleeve_width);
}

// SHORT SLEEVE LENGTH
this.short_sleeve_length = this.getRound4(this.getParam(this.data.size, 'chest') / 8 + 5.9375 + 0.1); // NEW 06-25-2019
this.short_sleeve_length = parseFloat(this.short_sleeve_length);
{
this.short_sleeve_length_1 = 0;
this.short_sleeve_length_2 = 0;
this.short_sleeve_length_3 = this.short_sleeve_length;
}

// SHORT SLEEVE WIDTH
this.short_sleeve_width = this.getParam(this.data.size, 'sleeve_width');
this.short_sleeve_width += this.getCommonB45('sleeve_width');
this.short_sleeve_width += this.getCommonB75('sleeve_width');
this.short_sleeve_width += this.getCommonB115('sleeve_width');
this.short_sleeve_width += this.getCommonB124('sleeve_width');
this.short_sleeve_width += this.getCommonB144('sleeve_width');
this.short_sleeve_width += this.getCommonB182('sleeve_width');
this.short_sleeve_width += this.getCommonB191v2('sleeve_width', 0);
this.short_sleeve_width += this.getCommonB198('sleeve_width');
this.short_sleeve_width = this.getRound4(this.short_sleeve_width) - 0.25;
this.short_sleeve_width_1 = 0;
this.short_sleeve_width_2 = 0;
this.short_sleeve_width_3 = this.short_sleeve_width;

// SHORT SLEEVE OPENING
this.short_sleeve_opening_width = this.getParam(this.data.size, 'sleeve_width');
this.short_sleeve_opening_width += this.getCommonB45('sleeve_width');
this.short_sleeve_opening_width += this.getCommonB75('sleeve_width');
this.short_sleeve_opening_width += this.getCommonB115('sleeve_width');
this.short_sleeve_opening_width += this.getCommonB124('sleeve_width');
this.short_sleeve_opening_width += this.getCommonB144('sleeve_width');
this.short_sleeve_opening_width += this.getCommonB182('sleeve_width');
this.short_sleeve_opening_width += this.getCommonB191v2('sleeve_width', 0);
this.short_sleeve_opening_width += this.getCommonB198('sleeve_width');
this.short_sleeve_opening_width = this.getRound4(this.short_sleeve_opening_width) - 1;
this.short_sleeve_opening_width_1 = 0;
this.short_sleeve_opening_width_2 = 0;
this.short_sleeve_opening_width_3 = this.short_sleeve_opening_width;

// CUFF
this.cuff = this.getParam(this.data.size, 'cuff');
this.cuff += this.getCommonB45('cuff');
this.cuff += this.getCommonB75('cuff');
this.cuff += this.getCommonB115('cuff');
this.cuff += this.getCommonB124('cuff');
this.cuff += this.getCommonB144('cuff');
this.cuff += this.getCommonB182('cuff');
// this.cuff += this.getCommonB191('cuff');
this.cuff += this.getCommonB198('cuff');
{
this.cuff = parseFloat(this.cuff);
this.cuff_1 = this.cuff_2 = this.cuff_3 = this.cuff;

this.cuff_1 += this.getCommonB191v2('cuff', 1);
this.cuff_1 = this.getRound4(this.cuff_1);

this.cuff_2 += this.getCommonB191v2('cuff', 0);
this.cuff_2 = this.getRound4(this.cuff_2);

this.cuff_3 = 0;

this.cuff += this.getCommonB191('cuff');
this.cuff = this.getRound4(this.cuff);
}

// SHOULDER/ARMPIT FIT (ARMPIT)
if (this.isInputYes('shirt_type')) {
this.armpit = this.data.shirt_type == 0 ? 'full' : 'tailored';
}
else {
this.armpit = this.getParam(this.data.size, 'armpit_fit');
}

this.armpit_1 = this.armpit;
this.armpit_2 = this.armpit;
this.armpit_3 = this.armpit;

// FOREARM (PLEATS)
this.forearm = this.getParam(this.data.size, 'forearm');
if (this.isInputYes('shirt_type')) {
if (this.data.shirt_type == 0) {
    this.forearm = 'traditional';
}
}

this.forearm_1 = this.forearm;
this.forearm_2 = this.forearm;
this.forearm_3 = this.forearm;
}

SmartSize.prototype.getRound4 = function(param) {
return parseFloat(excelRound(4 * param) / 4);
}
SmartSize.prototype.getParam = function(size, param) {
var info = {
'xxs':{'collar':0,'sleeve':0,'yoke':0,'chest':0,'midsection':0,'length':0,'sleeve_width':0,'cuff':0,'armpit_fit':'tailored','forearm':'slim'},
'xs':{'collar':15.42528801,'sleeve':31.75819672,'yoke':17.12973971,'chest':19.52663934,'midsection':16.88142855,'length':28.6754555,'sleeve_width':8.007026667,'cuff':8.558483772,'armpit_fit':'tailored','forearm':'slim'},
's':{'collar':15.69194747,'sleeve':32.55262735,'yoke':17.67301097,'chest':20.73214286,'midsection':17.99822868,'length':29.50232429,'sleeve_width':8.285276088,'cuff':8.752810286,'armpit_fit':'tailored','forearm':'traditional'},
'm':{'collar':16.07494349,'sleeve':33.51683146,'yoke':18.23684192,'chest':22.15000501,'midsection':19.41749811,'length':30.44459762,'sleeve_width':8.654927441,'cuff':8.939187648,'armpit_fit':'tailored','forearm':'traditional'},
'l':{'collar':16.52895087,'sleeve':34.43198588,'yoke':18.97840975,'chest':23.82680723,'midsection':21.27883896,'length':31.50072033,'sleeve_width':9.095299369,'cuff':9.154238408,'armpit_fit':'tailored','forearm':'traditional'},
'xl':{'collar':17.16527442,'sleeve':35.05218918,'yoke':19.80658207,'chest':26.19108637,'midsection':24.13180827,'length':32.61391413,'sleeve_width':9.731680575,'cuff':9.519890337,'armpit_fit':'full','forearm':'traditional'},
'xxl':{'collar':18.06752648,'sleeve':35.53870968,'yoke':20.73831946,'chest':28.7516129,'midsection':27.16326505,'length':33.82293865,'sleeve_width':10.3547932,'cuff':9.874907225,'armpit_fit':'full','forearm':'traditional'},
'3xl':{'collar':18.37329694,'sleeve':35.90064103,'yoke':20.84460023,'chest':30.33012821,'midsection':29.70393201,'length':34.49937434,'sleeve_width':10.41180583,'cuff':9.87650238,'armpit_fit':'full','forearm':'traditional'},
'4xl':{'collar':19.6745526,'sleeve':36.89,'yoke':21.23747793,'chest':32.54,'midsection':32.54675752,'length':35.50886179,'sleeve_width':10.59154326,'cuff':9.9493788,'armpit_fit':'full','forearm':'traditional'},
'5xl':{'collar':21.81336142,'sleeve':36.28571429,'yoke':22.8904389,'chest':35.57142857,'midsection':35.43600844,'length':36.12578583,'sleeve_width':12.17800536,'cuff':10.23207243,'armpit_fit':'full','forearm':'traditional'},
'6xl':{'collar':21.8139007,'sleeve':37.1,'yoke':22.76139684,'chest':36.2,'midsection':36.88958818,'length':36.04573741,'sleeve_width':11.51645237,'cuff':10.10714132,'armpit_fit':'full','forearm':'traditional'}
}
return info[size][param];
}
SmartSize.prototype.getRangeLimits = function(param, lim) {
var info = {
height: {min: 60, max: 84},
weight: {min: 100, max: 440},
suit: {min: 32, max: 60},
pants_waist: {min: 26, max: 58}
}
return info[param][lim];
}

SmartSize.prototype.getCommonB45 = function(param) {
if (this.isInputYes('tall')) {
tmp = this.data.tall;
if (this.data.tall < this.getRangeLimits('height', 'min')) {
    tmp = this.getRangeLimits('height', 'min');
}
if (this.data.tall > this.getRangeLimits('height', 'max')) {
    tmp = this.getRangeLimits('height', 'max');
}
tmp = Math.floor(tmp);
return this.getB45J70(tmp, param);
}
else {
return this.getB45J70('skipped', param);
}
}
SmartSize.prototype.getCommonB75 = function(param) {
if (this.isInputYes('weight')) {
tmp = this.data.weight;
if (this.data.weight < this.getRangeLimits('weight', 'min')) {
    tmp = this.getRangeLimits('weight', 'min');
}
if (this.data.weight > this.getRangeLimits('weight', 'max')) {
    tmp = this.getRangeLimits('weight', 'max');
}
tmp = Math.floor(tmp / 10) * 10;
return this.getB75J110(tmp, param);
}
else {
return this.getB75J110('skipped', param);
}
}
SmartSize.prototype.getCommonB115 = function(param) {
return this.getB115J119(this.isInputYes('ethnicity') ? this.data.ethnicity : 'skipped', param);
}
SmartSize.prototype.getCommonB124 = function(param) {
if (this.isInputYes('suit')) {
tmp = this.data.suit;
if (this.data.suit < this.getRangeLimits('suit', 'min')) {
    tmp = this.getRangeLimits('suit', 'min');
}
if (this.data.suit > this.getRangeLimits('suit', 'max')) {
    tmp = this.getRangeLimits('suit', 'max');
}
tmp = Math.floor(tmp % 2 ? tmp - 1 : tmp);
return this.getB124J139(tmp, param);
}
else {
return this.getB124J139('skipped', param);
}
}
SmartSize.prototype.getCommonB144 = function(param) {
if (this.isInputYes('pants_waist')) {
tmp = this.data.pants_waist;
if (this.data.pants_waist < this.getRangeLimits('pants_waist', 'min')) {
    tmp = this.getRangeLimits('pants_waist', 'min');
}
if (this.data.pants_waist > this.getRangeLimits('pants_waist', 'max')) {
    tmp = this.getRangeLimits('pants_waist', 'max');
}
tmp = Math.floor(tmp);
return this.getB144J177(tmp, param);
}
else {
return this.getB144J177('skipped', param);
}
}
SmartSize.prototype.getCommonB182 = function(param) {
return this.getB182J186(this.isInputYes('midsection_style') ? this.data.midsection_style : 'skipped', param);
}
SmartSize.prototype.getCommonB191 = function(param) {
return this.getB191J194(this.isInputYes('tucked') ? this.data.tucked : 'skipped', param);
}
SmartSize.prototype.getCommonB191v2 = function(param, param2) {
return this.getB191J194(param2, param);
}
SmartSize.prototype.getCommonB198 = function(param) {
return this.getB198J202(this.isInputYes('shirt_type') ? this.data.shirt_type : 'skipped', param);
}

SmartSize.prototype.getB45J70 = function(val, param) { // Height
var info = {"skipped":{'collar':0,'sleeve':0,'yoke':-0.022504841,'chest':0.072993539,'midsection':0.820867899,'length':0,'sleeve_width':0.002002481,'cuff':-0.021044607},"60":{'collar':0,'sleeve':0,'yoke':0.155247463,'chest':0.440886553,'midsection':-0.778904167,'length':0,'sleeve_width':0.189889026,'cuff':-0.019560052},"61":{'collar':0,'sleeve':0,'yoke':0.049979915,'chest':0.131042224,'midsection':-0.778904167,'length':0,'sleeve_width':0.118658573,'cuff':0.040264396},"62":{'collar':0,'sleeve':0,'yoke':0.079911303,'chest':0.149562977,'midsection':-0.778904167,'length':0,'sleeve_width':0.019827079,'cuff':-0.028971293},"63":{'collar':0,'sleeve':0,'yoke':0.128916753,'chest':0.430180798,'midsection':-0.778904167,'length':0,'sleeve_width':0.205717919,'cuff':0.029774497},"64":{'collar':0,'sleeve':0,'yoke':0.021540318,'chest':0.367483469,'midsection':-0.778904167,'length':0,'sleeve_width':0.099481705,'cuff':0.019896639},"65":{'collar':0,'sleeve':0,'yoke':0.018324113,'chest':0.273244144,'midsection':-0.778904167,'length':0,'sleeve_width':0.10545829,'cuff':0.018673894},"66":{'collar':0,'sleeve':0,'yoke':0.041690336,'chest':0.22685625,'midsection':-0.778904167,'length':0,'sleeve_width':0.074688516,'cuff':0.042417984},"67":{'collar':0,'sleeve':0,'yoke':0.056853117,'chest':0.19714639,'midsection':-1.47396937,'length':0,'sleeve_width':0.075616848,'cuff':0.026016731},"68":{'collar':0,'sleeve':0,'yoke':0.031622191,'chest':0.162827515,'midsection':-0.857096633,'length':0,'sleeve_width':0.053497167,'cuff':0.020653829},"69":{'collar':0,'sleeve':0,'yoke':0.031848336,'chest':0.114777072,'midsection':-0.489726523,'length':0,'sleeve_width':0.043960197,'cuff':0.015321004},"70":{'collar':0,'sleeve':0,'yoke':0.012853889,'chest':0.065634009,'midsection':0.670244094,'length':0,'sleeve_width':0.013900864,'cuff':0.013023924},"71":{'collar':0,'sleeve':0,'yoke':-0.020775048,'chest':-0.0138071,'midsection':1.055665078,'length':0,'sleeve_width':-0.001168337,'cuff':-0.001327804},"72":{'collar':0,'sleeve':0,'yoke':-0.006379127,'chest':-0.065833414,'midsection':1.220964075,'length':0,'sleeve_width':-0.014890977,'cuff':-5.75543E-05},"73":{'collar':0,'sleeve':0,'yoke':-0.039401211,'chest':-0.135380934,'midsection':1.417409541,'length':0,'sleeve_width':-0.049716956,'cuff':-0.019629297},"74":{'collar':0,'sleeve':0,'yoke':-0.036949618,'chest':-0.161469936,'midsection':1.499490279,'length':0,'sleeve_width':-0.066412308,'cuff':-0.025598288},"75":{'collar':0,'sleeve':0,'yoke':-0.036595837,'chest':-0.26929075,'midsection':2.29310461,'length':0,'sleeve_width':-0.103187184,'cuff':-0.045454203},"76":{'collar':0,'sleeve':0,'yoke':-0.050843842,'chest':-0.341560301,'midsection':2.29310461,'length':0,'sleeve_width':-0.044222002,'cuff':-0.028045036},"77":{'collar':0,'sleeve':0,'yoke':-0.070155758,'chest':-0.426187772,'midsection':2.29310461,'length':0,'sleeve_width':-0.204624067,'cuff':-0.086068601},"78":{'collar':0,'sleeve':0,'yoke':-0.132061292,'chest':-0.492911778,'midsection':2.29310461,'length':0,'sleeve_width':-0.221413476,'cuff':-0.107535655},"79":{'collar':0,'sleeve':0,'yoke':0.035518455,'chest':-0.441798716,'midsection':2.29310461,'length':0,'sleeve_width':-0.194954069,'cuff':-0.048188867},"80":{'collar':0,'sleeve':0,'yoke':0.087476933,'chest':-0.359833278,'midsection':2.29310461,'length':0,'sleeve_width':-0.155270542,'cuff':-0.016947588},"81":{'collar':0,'sleeve':0,'yoke':0.227488232,'chest':-0.506024363,'midsection':2.29310461,'length':0,'sleeve_width':-0.35599022,'cuff':-0.019223891},"82":{'collar':0,'sleeve':0,'yoke':0.147414735,'chest':-0.587697631,'midsection':2.29310461,'length':0,'sleeve_width':-0.353936575,'cuff':-0.082249585},"83":{'collar':0,'sleeve':0,'yoke':-0.003024363,'chest':-0.645145115,'midsection':2.29310461,'length':0,'sleeve_width':-0.356313931,'cuff':-0.141578579},"84":{'collar':0,'sleeve':0,'yoke':-0.305604342,'chest':-1.407109232,'midsection':2.29310461,'length':0,'sleeve_width':-1.004918538,'cuff':-0.302800458}}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB75J110 = function(val, param) { // Weight
var info = {"skipped":{'collar':0,'sleeve':0.010939206,'yoke':-0.00585304,'chest':0,'midsection':0,'length':-0.051421366,'sleeve_width':-0.040187089,'cuff':-0.01402954},"100":{'collar':0,'sleeve':-0.796338315,'yoke':-0.976303934,'chest':0,'midsection':0,'length':-0.082490122,'sleeve_width':-0.63949721,'cuff':-0.465007053},"110":{'collar':0,'sleeve':-0.474462353,'yoke':-0.698396391,'chest':0,'midsection':0,'length':-0.074982498,'sleeve_width':-0.542645172,'cuff':-0.547414369},"120":{'collar':0,'sleeve':-0.64862729,'yoke':-0.627220806,'chest':0,'midsection':0,'length':-0.285992492,'sleeve_width':-0.440910612,'cuff':-0.457155303},"130":{'collar':0,'sleeve':-0.444967004,'yoke':-0.420360456,'chest':0,'midsection':0,'length':-0.277460729,'sleeve_width':-0.300271035,'cuff':-0.284365399},"140":{'collar':0,'sleeve':-0.375404165,'yoke':-0.355270193,'chest':0,'midsection':0,'length':-0.274935689,'sleeve_width':-0.241468134,'cuff':-0.250902935},"150":{'collar':0,'sleeve':-0.306056574,'yoke':-0.241669788,'chest':0,'midsection':0,'length':-0.182864941,'sleeve_width':-0.161356135,'cuff':-0.192805212},"160":{'collar':0,'sleeve':-0.262178961,'yoke':-0.181994592,'chest':0,'midsection':0,'length':-0.135373897,'sleeve_width':-0.120730956,'cuff':-0.11269117},"170":{'collar':0,'sleeve':-0.140384165,'yoke':-0.069277724,'chest':0,'midsection':0,'length':-0.108359296,'sleeve_width':-0.093003595,'cuff':-0.031526213},"180":{'collar':0,'sleeve':-0.019965121,'yoke':-0.006173463,'chest':0,'midsection':0,'length':-0.033887941,'sleeve_width':-0.063033091,'cuff':0.005162329},"190":{'collar':0,'sleeve':0.043713388,'yoke':0.046433427,'chest':0,'midsection':0,'length':0.023565053,'sleeve_width':0.077168917,'cuff':0.042070879},"200":{'collar':0,'sleeve':0.136712235,'yoke':0.123949094,'chest':0,'midsection':0,'length':0.092491928,'sleeve_width':0.101223963,'cuff':0.063286434},"210":{'collar':0,'sleeve':0.212606788,'yoke':0.189138614,'chest':0,'midsection':0,'length':0.120303589,'sleeve_width':0.164082923,'cuff':0.116559851},"220":{'collar':0,'sleeve':0.337621088,'yoke':0.212152396,'chest':0,'midsection':0,'length':0.183657244,'sleeve_width':0.182369067,'cuff':0.150382011},"230":{'collar':0,'sleeve':0.35762767,'yoke':0.251868565,'chest':0,'midsection':0,'length':0.29840685,'sleeve_width':0.184595598,'cuff':0.165511022},"240":{'collar':0,'sleeve':0.503560692,'yoke':0.261450771,'chest':0,'midsection':0,'length':0.336405085,'sleeve_width':0.196003029,'cuff':0.176527111},"250":{'collar':0,'sleeve':0.603038625,'yoke':0.334294312,'chest':0,'midsection':0,'length':0.358555594,'sleeve_width':0.243669534,'cuff':0.195194607},"260":{'collar':0,'sleeve':0.770867929,'yoke':0.340458927,'chest':0,'midsection':0,'length':0.544531753,'sleeve_width':0.281252152,'cuff':0.244145034},"270":{'collar':0,'sleeve':0.775529284,'yoke':0.31054696,'chest':0,'midsection':0,'length':0.544752823,'sleeve_width':0.347169226,'cuff':0.263510144},"280":{'collar':0,'sleeve':0.560105357,'yoke':0.536871122,'chest':0,'midsection':0,'length':0.746964915,'sleeve_width':0.421489293,'cuff':0.325032392},"290":{'collar':0,'sleeve':0.831839596,'yoke':0.523273544,'chest':0,'midsection':0,'length':0.600436161,'sleeve_width':0.428137766,'cuff':0.305545675},"300":{'collar':0,'sleeve':0.764482993,'yoke':0.781751975,'chest':0,'midsection':0,'length':0.936947874,'sleeve_width':0.537966581,'cuff':0.324285262},"310":{'collar':0,'sleeve':0.621581028,'yoke':0.236625928,'chest':0,'midsection':0,'length':1.112419218,'sleeve_width':0.235585715,'cuff':0.257289633},"320":{'collar':0,'sleeve':1.229551901,'yoke':0.573025985,'chest':0,'midsection':0,'length':1.244643521,'sleeve_width':0.641665559,'cuff':0.472770507},"330":{'collar':0,'sleeve':0.438752055,'yoke':0.518307748,'chest':0,'midsection':0,'length':0.885783958,'sleeve_width':0.566222072,'cuff':0.550260206},"340":{'collar':0,'sleeve':0.266490598,'yoke':0.898296022,'chest':0,'midsection':0,'length':1.880551362,'sleeve_width':0.967882137,'cuff':0.826972104},"350":{'collar':0,'sleeve':0.976674173,'yoke':1.009044736,'chest':0,'midsection':0,'length':1.47475812,'sleeve_width':0.960776755,'cuff':0.61333456},"360":{'collar':0,'sleeve':1.274867108,'yoke':1.067151766,'chest':0,'midsection':0,'length':1.579135369,'sleeve_width':0.892263455,'cuff':0.585290091},"370":{'collar':0,'sleeve':1.607498477,'yoke':1.196640187,'chest':0,'midsection':0,'length':1.563883952,'sleeve_width':1.018531567,'cuff':0.618317217},"380":{'collar':0,'sleeve':1.210829617,'yoke':1.08027544,'chest':0,'midsection':0,'length':1.062195649,'sleeve_width':1.057518595,'cuff':0.673503347},"390":{'collar':0,'sleeve':2.380817489,'yoke':2.065714169,'chest':0,'midsection':0,'length':0.603641344,'sleeve_width':1.375931491,'cuff':0.944420559},"400":{'collar':0,'sleeve':1.863337516,'yoke':2.365478833,'chest':0,'midsection':0,'length':-0.341224824,'sleeve_width':1.014084345,'cuff':0.993978879},"410":{'collar':0,'sleeve':1.516439546,'yoke':2.383856677,'chest':0,'midsection':0,'length':0.514037622,'sleeve_width':1.072342811,'cuff':1.028115966},"420":{'collar':0,'sleeve':-0.697210903,'yoke':0.841407814,'chest':0,'midsection':0,'length':0.941663861,'sleeve_width':0.281455908,'cuff':0.855544373},"430":{'collar':0,'sleeve':-1.047908177,'yoke':1.764062019,'chest':0,'midsection':0,'length':0.720625994,'sleeve_width':1.295682099,'cuff':1.31703371},"440":{'collar':0,'sleeve':-1.192857143,'yoke':2.7548537,'chest':0,'midsection':0,'length':0.027926134,'sleeve_width':2.252806728,'cuff':1.656625034}}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB115J119 = function(ethnicity, param) { // Ethnicity
if (ethnicity == 1)
ethnicity = 'asian';
else if (ethnicity == 2)
ethnicity = 'black';
else if (ethnicity == 3)
ethnicity = 'white';
else if (ethnicity == 4)
ethnicity = 'hispanic';
var info = {"skipped":{'collar':-0.009987495,'sleeve':0,'yoke':-0.087278611,'chest':-0.066757491,'midsection':-0.067914461,'length':-0.042360913,'sleeve_width':-0.079298162,'cuff':-0.017402559},"asian":{'collar':0.026251172,'sleeve':0,'yoke':-0.030979509,'chest':-0.27793399,'midsection':-0.389344004,'length':-0.062249563,'sleeve_width':-0.083210074,'cuff':-0.056520227},"black":{'collar':-0.063436547,'sleeve':0,'yoke':0.045527281,'chest':-0.23982525,'midsection':-0.297299993,'length':0.157838589,'sleeve_width':0.028417517,'cuff':-0.024897176},"white":{'collar':-0.00345102,'sleeve':0,'yoke':0.001579304,'chest':0.02734617,'midsection':0.036777362,'length':0.005324433,'sleeve_width':0.008212822,'cuff':0.00672347},"hispanic":{'collar':0.093181645,'sleeve':0,'yoke':0.05588339,'chest':0.074684708,'midsection':0.099578937,'length':-0.092922267,'sleeve_width':-0.010500431,'cuff':-0.035401407}}
return parseFloat(info[ethnicity][param]);
}
SmartSize.prototype.getB124J139 = function(val, param) { // Suit Size
var info = {"skipped":{'collar':0.031637349,'sleeve':0.044691396,'yoke':-0.015778722,'chest':-0.04399465,'midsection':-0.003602795,'length':-0.036649009,'sleeve_width':-0.020312124,'cuff':-0.000575903},"32":{'collar':-0.387032035,'sleeve':-0.065114019,'yoke':-0.481997092,'chest':-0.619027977,'midsection':-0.486294926,'length':-0.113186025,'sleeve_width':-0.271246493,'cuff':-0.075064618},"34":{'collar':-0.295514303,'sleeve':-0.071367317,'yoke':-0.285048506,'chest':-0.478201505,'midsection':-0.395730646,'length':0.140146327,'sleeve_width':-0.137095186,'cuff':-0.074317395},"36":{'collar':-0.241389636,'sleeve':-0.190744174,'yoke':-0.196228576,'chest':-0.302473704,'midsection':-0.276055986,'length':0.008369098,'sleeve_width':-0.136578077,'cuff':-0.080209259},"38":{'collar':-0.18992873,'sleeve':-0.161060436,'yoke':-0.107826031,'chest':-0.20273624,'midsection':-0.186889134,'length':0.00466477,'sleeve_width':-0.086879092,'cuff':-0.052672112},"40":{'collar':-0.104398289,'sleeve':-0.07938199,'yoke':-0.031563893,'chest':-0.054054813,'midsection':-0.062805557,'length':-0.002117752,'sleeve_width':-0.024043591,'cuff':-0.014943136},"42":{'collar':-0.012634109,'sleeve':0.007303425,'yoke':0.021996908,'chest':0.046375811,'midsection':0.020594617,'length':-0.000586748,'sleeve_width':0.019532169,'cuff':0.010166904},"44":{'collar':0.09358775,'sleeve':0.079493508,'yoke':0.065258474,'chest':0.106703336,'midsection':0.088344544,'length':-0.001560227,'sleeve_width':0.048631671,'cuff':0.030593652},"46":{'collar':0.215724252,'sleeve':0.169900666,'yoke':0.120206026,'chest':0.19068829,'midsection':0.173508913,'length':0.022958093,'sleeve_width':0.087987733,'cuff':0.051275708},"48":{'collar':0.386686184,'sleeve':0.203248164,'yoke':0.146825778,'chest':0.275568171,'midsection':0.285261214,'length':0.022900726,'sleeve_width':0.109427397,'cuff':0.055024021},"50":{'collar':0.6687519,'sleeve':0.34664983,'yoke':0.171997627,'chest':0.39117094,'midsection':0.538343671,'length':0.007653302,'sleeve_width':0.146914695,'cuff':0.051470831},"52":{'collar':0.593166959,'sleeve':0.177679218,'yoke':0.187710371,'chest':0.367516031,'midsection':0.453538836,'length':-0.091418883,'sleeve_width':0.167832067,'cuff':0.054651268},"54":{'collar':0.515729765,'sleeve':0.386249998,'yoke':0.207602065,'chest':0.421227395,'midsection':0.545748627,'length':0.051062987,'sleeve_width':0.192620141,'cuff':0.106755253},"56":{'collar':0.407778305,'sleeve':0.366547394,'yoke':0.148823623,'chest':0.420908992,'midsection':0.517678463,'length':0.785944774,'sleeve_width':0.206560385,'cuff':0.128163735},"58":{'collar':1.017335953,'sleeve':-0.025125124,'yoke':0.262603485,'chest':0.52090747,'midsection':0.430311672,'length':0.020267037,'sleeve_width':-0.045060677,'cuff':-0.1201324},"60":{'collar':0.655268602,'sleeve':0.143612469,'yoke':0.71452423,'chest':1.544785731,'midsection':2.064234356,'length':0.017165153,'sleeve_width':0.684927404,'cuff':0.096412373}}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB144J177 = function(val, param) { // Pant's Waist
var info = {"skipped":{'collar':0,'sleeve':-0.026201476,'yoke':-0.070662082,'chest':0.090132946,'midsection':-0.150551851,'length':0.037798878,'sleeve_width':-0.030476749,'cuff':0.015252898},"26":{'collar':0,'sleeve':-0.205001975,'yoke':0.191106607,'chest':-0.306619198,'midsection':-0.315051989,'length':0.072064238,'sleeve_width':-0.107118339,'cuff':0.028432736},"27":{'collar':0,'sleeve':-0.279418669,'yoke':-0.080158168,'chest':-0.446379963,'midsection':-0.315051989,'length':-0.434158679,'sleeve_width':-0.181117182,'cuff':-0.113907704},"28":{'collar':0,'sleeve':0.119558979,'yoke':0.032711092,'chest':-0.190332811,'midsection':-0.315051989,'length':-0.190477034,'sleeve_width':-0.130751416,'cuff':-0.07582245},"29":{'collar':0,'sleeve':0.107771001,'yoke':0.042562709,'chest':-0.12392894,'midsection':-0.315051989,'length':-0.187116893,'sleeve_width':-0.102335641,'cuff':-0.03208785},"30":{'collar':0,'sleeve':0.053334872,'yoke':0.039455508,'chest':-0.099003498,'midsection':-0.315051989,'length':-0.137112602,'sleeve_width':-0.064160776,'cuff':-0.039115169},"31":{'collar':0,'sleeve':0.067055355,'yoke':-0.014270795,'chest':-0.082402714,'midsection':-0.249091393,'length':-0.124839721,'sleeve_width':-0.078239248,'cuff':-0.041568498},"32":{'collar':0,'sleeve':0.063496491,'yoke':-0.006875861,'chest':-0.074066937,'midsection':-0.249091393,'length':-0.055285491,'sleeve_width':-0.0572926,'cuff':-0.018176378},"33":{'collar':0,'sleeve':0.039655555,'yoke':-0.02628963,'chest':-0.039020805,'midsection':-0.216111096,'length':-0.054402169,'sleeve_width':-0.027697408,'cuff':0.001815349},"34":{'collar':0,'sleeve':0.034231904,'yoke':0.010999301,'chest':-0.020945711,'midsection':-0.107146291,'length':0.008149726,'sleeve_width':0.005588286,'cuff':0.013650546},"35":{'collar':0,'sleeve':0.009544509,'yoke':-0.003597414,'chest':0.050923194,'midsection':-0.107146291,'length':0.096711087,'sleeve_width':0.045921085,'cuff':0.015215895},"36":{'collar':0,'sleeve':-0.022453155,'yoke':0.01682374,'chest':0.063999837,'midsection':-0.107146291,'length':0.08967305,'sleeve_width':0.057028717,'cuff':0.015088178},"37":{'collar':0,'sleeve':-0.083815473,'yoke':0.018728565,'chest':0.089866596,'midsection':-0.107146291,'length':0.109766261,'sleeve_width':0.069430987,'cuff':0.014121409},"38":{'collar':0,'sleeve':-0.10959095,'yoke':-0.016500606,'chest':0.096277835,'midsection':-0.107146291,'length':0.121597326,'sleeve_width':0.075608893,'cuff':0.019470875},"39":{'collar':0,'sleeve':-0.16856602,'yoke':0.042682388,'chest':0.137623531,'midsection':-0.107146291,'length':0.231018359,'sleeve_width':0.105186324,'cuff':0.039380242},"40":{'collar':0,'sleeve':-0.21265949,'yoke':-0.009622451,'chest':0.103234466,'midsection':-0.107146291,'length':0.064135609,'sleeve_width':0.083543495,'cuff':0.032830738},"41":{'collar':0,'sleeve':-0.237266306,'yoke':0.110019046,'chest':0.13550693,'midsection':-0.107146291,'length':0.286539245,'sleeve_width':0.115424946,'cuff':0.061519763},"42":{'collar':0,'sleeve':-0.305518515,'yoke':0.025220187,'chest':0.150426167,'midsection':-0.107146291,'length':0.124862194,'sleeve_width':0.113843678,'cuff':0.036250126},"43":{'collar':0,'sleeve':-0.243918589,'yoke':0.082967368,'chest':0.254545432,'midsection':-0.107146291,'length':0.01970072,'sleeve_width':0.095514653,'cuff':0.15896467},"44":{'collar':0,'sleeve':-0.499961592,'yoke':-0.015383,'chest':0.298587599,'midsection':-0.107146291,'length':0.002716031,'sleeve_width':0.113000048,'cuff':0.027078784},"45":{'collar':0,'sleeve':-0.367654629,'yoke':0.044471813,'chest':0.576096495,'midsection':-0.107146291,'length':0.189473797,'sleeve_width':0.161769734,'cuff':-0.015143549},"46":{'collar':0,'sleeve':-0.270504221,'yoke':-0.022356127,'chest':0.556601214,'midsection':-0.107146291,'length':-0.053933076,'sleeve_width':0.132500565,'cuff':-0.00539486},"47":{'collar':0,'sleeve':-0.868623221,'yoke':-0.079773006,'chest':1.026279829,'midsection':-0.107146291,'length':-0.552835781,'sleeve_width':0.005609771,'cuff':-0.209341913},"48":{'collar':0,'sleeve':-0.254790342,'yoke':-0.159517253,'chest':0.785506877,'midsection':-0.107146291,'length':0.055617456,'sleeve_width':0.050070703,'cuff':-0.014158382},"49":{'collar':0,'sleeve':-0.523804879,'yoke':-0.22240063,'chest':1.132939778,'midsection':-0.107146291,'length':-0.267923938,'sleeve_width':0.111093537,'cuff':0.022290873},"50":{'collar':0,'sleeve':-0.792819415,'yoke':-0.285284008,'chest':1.48037268,'midsection':-0.107146291,'length':-0.591465332,'sleeve_width':0.172116372,'cuff':0.058740127},"51":{'collar':0,'sleeve':-0.617167402,'yoke':-0.273086837,'chest':1.840226816,'midsection':-0.107146291,'length':-0.722861063,'sleeve_width':0.233705202,'cuff':-0.050347415},"52":{'collar':0,'sleeve':-0.44151539,'yoke':-0.260889667,'chest':2.200080952,'midsection':-0.107146291,'length':-0.854256794,'sleeve_width':0.295294032,'cuff':-0.159434957},"53":{'collar':0,'sleeve':-0.507310961,'yoke':-0.053787865,'chest':2.259305947,'midsection':-0.107146291,'length':-0.716055487,'sleeve_width':0.263769273,'cuff':-0.138792264},"54":{'collar':0,'sleeve':-0.573106532,'yoke':0.153313937,'chest':2.318530941,'midsection':-0.107146291,'length':-0.577854181,'sleeve_width':0.232244515,'cuff':-0.118149571},"55":{'collar':0,'sleeve':-1.118535992,'yoke':-0.286104788,'chest':1.905383588,'midsection':-0.107146291,'length':-0.631008448,'sleeve_width':0.076929718,'cuff':-0.317374284},"56":{'collar':0,'sleeve':-1.663965452,'yoke':-0.725523513,'chest':1.492236236,'midsection':-0.107146291,'length':-0.684162716,'sleeve_width':-0.07838508,'cuff':-0.516598996},"57":{'collar':0,'sleeve':-1.360340805,'yoke':-0.630240275,'chest':1.349252389,'midsection':-0.107146291,'length':-1.292683608,'sleeve_width':-0.135293309,'cuff':-0.474332333},"58":{'collar':0,'sleeve':-1.056716159,'yoke':-0.534957036,'chest':1.206268541,'midsection':-0.107146291,'length':-1.9012045,'sleeve_width':-0.192201538,'cuff':-0.432065671}}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB182J186 = function(val, param) { // Midsection Shape
var info = {"skipped":{'collar':0,'sleeve':-0.088252937,'yoke':0.004336117,'chest':0.025569658,'midsection':0,'length':-0.113895629,'sleeve_width':0.049553516,'cuff':-0.021394411},"0":{'collar':0,'sleeve':0.136751782,'yoke':0.058579519,'chest':-0.13565634,'midsection':0,'length':-0.058030661,'sleeve_width':-0.039556635,'cuff':-0.016687356},"1":{'collar':0,'sleeve':0.044191331,'yoke':0.009024137,'chest':-0.043477166,'midsection':0,'length':-0.033631324,'sleeve_width':0.004024351,'cuff':0.002586741},"2":{'collar':0,'sleeve':-0.098443708,'yoke':-0.025582059,'chest':0.093917631,'midsection':0,'length':0.053089301,'sleeve_width':0.016641785,'cuff':0.005599895},"3":{'collar':0,'sleeve':-0.2437863,'yoke':-0.117755674,'chest':0.272165033,'midsection':0,'length':0.20859915,'sleeve_width':-0.042214272,'cuff':-0.01362896}}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB191J194 = function(val, param) { // Shirt's Tucked In?
var info = {"skipped":{'collar':-0.050966409,'sleeve':0.032543446,'yoke':-0.027820376,'chest':0.039993692,'midsection':-0.007788218,'length':-0.475210092,'sleeve_width':-0.032142488,'cuff':-0.027179381},"0":{'collar':-0.0454598,'sleeve':0.03434832,'yoke':-0.025568138,'chest':-0.022592816,'midsection':0.037014771,'length':-0.955826941,'sleeve_width':-0.030367534,'cuff':0.016286853},"1":{'collar':0.019908577,'sleeve':0.00452694,'yoke':0.011600305,'chest':0.013859043,'midsection':0.036931755,'length':0.270864578,'sleeve_width':0.007998703,'cuff':-0.006133137},"2":{'collar':-0.017334733,'sleeve':-0.012542606,'yoke':-0.010288293,'chest':-0.014536616,'midsection':-0.055084908,'length':-0.740667914,'sleeve_width':-0.004638175,'cuff':0.005393958}}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB198J202 = function(val, param) { // Preferred Fit
var info = {"skipped":{'collar':-0.03959804,'sleeve':-0.040419117,'yoke':-0.00491669,'chest':-0.010855217,'midsection':0,'length':-0.051420513,'sleeve_width':-0.026886829,'cuff':-0.009868284},"0":{'collar':-0.213239028,'sleeve':-0.200173612,'yoke':0.106820738,'chest':0.784589916,'midsection':0,'length':0.0518695,'sleeve_width':0.462161934,'cuff':0.022355712},"1":{'collar':-0.000661784,'sleeve':0.004338999,'yoke':-0.00424697,'chest':-0.027086766,'midsection':0,'length':0.005648626,'sleeve_width':-0.01006545,'cuff':0.005834361},"2":{'collar':0.113315029,'sleeve':0.088466377,'yoke':-0.038593471,'chest':-0.299946181,'midsection':0,'length':-0.040002858,'sleeve_width':-0.196959774,'cuff':-0.032083797}}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB209F241 = function(val, param) { // Waist + Belly for Midsections
var info = {"26":["-0.063578627","-1.464824104","0.199611496","1.184555636"],"27":["-0.675949612","-0.35358452","0.199611496","1.184555636"],"28":["-0.70214506","-0.277300865","0.199611496","1.184555636"],"29":["-0.634089909","-0.443684728","-0.077004328","1.184555636"],"30":["-0.570379277","-0.345618671","-0.228349456","0.692783923"],"31":["-0.666950072","-0.405695883","-0.238031804","0.023130131"],"32":["-0.617567732","-0.35562711","-0.204669305","0.000894871"],"33":["-0.590441092","-0.215609574","-0.012563339","-0.014175157"],"34":["-0.593743641","-0.24887339","-0.095386628","0.04389147"],"35":["-0.430668013","0.0382048","0.136988437","0.430506685"],"36":["-0.37232501","0.074246346","0.167689586","0.424363236"],"37":["-0.124926321","0.375975805","0.438798696","0.497247047"],"38":["-0.232564382","0.349725313","0.514244804","0.781807455"],"39":["-0.290057658","0.192175263","0.682560272","0.95552917"],"40":["0.162540136","0.97446051","1.235182148","1.306658896"],"41":["0.694245105","1.388184219","1.698021181","2.028027309"],"42":["0.704783636","1.801907927","1.739106839","1.924281722"],"43":["0.704783636","1.232067951","1.738448524","1.82904056"],"44":["0.704783636","-1.237238613","1.738916078","2.138164932"],"45":["0.704783636","4.928298867","2.970918617","3.55892025"],"46":["0.704783636","4.928298867","2.551586111","2.485460387"],"47":["0.704783636","4.928298867","2.57365275","2.341773432"],"48":["0.704783636","4.928298867","2.368732307","2.198086477"],"49":["0.704783636","4.928298867","1.791503933","1.819682397"],"50":["0.704783636","4.928298867","0.565191163","1.441278317"],"51":["0.704783636","4.928298867","0.930234186","2.373662689"],"52":["0.704783636","4.928298867","0.930234186","3.306047062"],"53":["0.704783636","4.928298867","0.930234186","2.589151363"],"54":["0.704783636","4.928298867","0.930234186","1.872255665"],"55":["0.704783636","4.928298867","0.930234186","1.358013348"],"56":["0.704783636","4.928298867","0.930234186","0.843771031"],"57":["0.704783636","4.928298867","0.930234186","0.181443589"],"58":["0.704783636","4.928298867","0.930234186","-0.480883852"]}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB278J313 = function(val, param) { // T-Shirt + Weight for Midsections
var info = {"skipped":["0","0.561555006","0.827214286","0.536821039","0.377090675","-0.797133252","-1.114120224","-1.605680916","-5.70795288","-3.151933121","-0.969547777"],"100":["0","-0.691587485","0.801443748","-0.7253328","-2.503890382","-4.402167973","-3.317254778","-4.629005989","-9.462609989","-3.671606283","-0.693537314"],"110":["0","0.731230638","-0.447823863","-0.972625075","-2.055307846","-4.402167973","-3.317254778","-4.629005989","-9.462609989","-3.671606283","-0.693537314"],"120":["0","0.457506081","-0.232231105","-1.21991735","-1.606725311","-4.402167973","-3.317254778","-4.629005989","-9.462609989","-3.671606283","-0.693537314"],"130":["0","0.943873875","0.358972998","-0.450169732","-1.573699564","-4.402167973","-3.317254778","-4.629005989","-9.462609989","-3.671606283","-0.693537314"],"140":["0","0.966500663","0.429642856","-0.414267596","-1.046681472","-4.402167973","-3.317254778","-4.629005989","-9.462609989","-3.671606283","-0.693537314"],"150":["0","1.36298377","0.720156311","-0.102422433","-1.019237453","-2.767121692","-3.317254778","-4.629005989","-9.462609989","-3.671606283","-0.693537314"],"160":["0","1.405512412","1.07828788","0.260324336","-0.83834265","-2.562740906","-3.317254778","-4.629005989","-9.462609989","-3.671606283","-0.693537314"],"170":["0","1.892516262","1.431157062","0.518706729","-0.601343866","-2.230833523","-3.317254778","-4.629005989","-9.462609989","-3.671606283","-0.693537314"],"180":["0","2.41374662","2.034502485","0.838992758","-0.249145325","-1.857118011","-3.940611566","-4.629005989","-9.462609989","-3.671606283","-0.693537314"],"190":["0","2.41374662","2.065823979","1.112647654","0.037929443","-1.629669531","-3.799108934","-4.629005989","-9.462609989","-3.671606283","-0.693537314"],"200":["0","2.41374662","2.363378174","1.41717635","0.382980023","-1.251579007","-3.127308123","-4.629005989","-9.462609989","-3.671606283","-0.693537314"],"210":["0","2.41374662","2.363378174","2.088013698","0.758270778","-0.906487574","-2.966264578","-4.629005989","-9.462609989","-3.671606283","-0.693537314"],"220":["0","2.41374662","2.363378174","2.239705807","1.097699427","-0.588455598","-2.718889448","-5.460390076","-9.462609989","-3.671606283","-0.693537314"],"230":["0","2.41374662","2.363378174","2.522866458","1.294613584","-0.345142629","-2.547617548","-4.601163694","-9.462609989","-3.671606283","-0.693537314"],"240":["0","2.41374662","2.363378174","2.806027108","1.863078651","0.015830369","-2.056933789","-3.823036663","-9.462609989","-3.671606283","-0.693537314"],"250":["0","2.41374662","2.363378174","2.806027108","1.917342766","0.302700965","-1.883256858","-3.957368911","-7.355307308","-3.671606283","-0.693537314"],"260":["0","2.41374662","2.363378174","2.806027108","2.030683017","0.292596182","-1.86327338","-3.652837524","-5.248004627","-3.671606283","-0.693537314"],"270":["0","2.41374662","2.363378174","2.806027108","1.925011924","0.786677823","-1.380539256","-3.348306137","-5.248004627","-3.671606283","-0.693537314"],"280":["0","2.41374662","2.363378174","2.806027108","0.799278567","1.004349021","-0.830855613","-2.35902343","-5.248004627","-3.671606283","-0.693537314"],"290":["0","2.41374662","2.363378174","2.806027108","0.799278567","0.751474297","-0.768947782","-2.317276336","-5.248004627","-3.671606283","-0.693537314"],"300":["0","2.41374662","2.363378174","2.806027108","0.799278567","0.929022466","-0.415848255","-2.275529243","-4.92849367","-3.671606283","-0.693537314"],"310":["0","2.41374662","2.363378174","2.806027108","0.799278567","1.594828097","-0.667583386","-1.679157763","-4.999921583","-3.671606283","-0.693537314"],"320":["0","2.41374662","2.363378174","2.806027108","0.799278567","1.594828097","-1.758435622","-1.082786284","-4.059870456","-3.671606283","-0.693537314"],"330":["0","2.41374662","2.363378174","2.806027108","0.799278567","1.594828097","0.639318687","-1.272237511","-2.28894737","-3.671606283","-0.693537314"],"340":["0","2.41374662","2.363378174","2.806027108","0.799278567","1.594828097","3.037072997","-0.847567488","-1.887893584","-3.671606283","-0.693537314"],"350":["0","2.41374662","2.363378174","2.806027108","0.799278567","1.594828097","3.037072997","-1.494973215","-1.240391332","-3.671606283","-1.802716632"],"360":["0","2.41374662","2.363378174","2.806027108","0.799278567","1.594828097","3.037072997","-1.494973215","-1.571860715","-3.671606283","-1.802716632"],"370":["0","2.41374662","2.363378174","2.806027108","0.799278567","1.594828097","3.037072997","-0.671128513","-0.604508876","-3.671606283","-0.674682216"],"380":["0","2.41374662","2.363378174","2.806027108","0.799278567","1.594828097","3.037072997","-0.671128513","0.440829584","-1.783982931","-0.674682216"],"390":["0","2.41374662","2.363378174","2.806027108","0.799278567","1.594828097","3.037072997","-0.671128513","-0.270094249","0.103640422","-1.189298984"],"400":["0","2.41374662","2.363378174","2.806027108","0.799278567","1.594828097","3.037072997","-0.671128513","-1.616144581","-0.244713821","-2.831950167"],"410":["0","2.41374662","2.363378174","2.806027108","0.799278567","1.594828097","3.037072997","-0.671128513","-1.616144581","-1.300468599","-2.831950167"],"420":["0","2.41374662","2.363378174","2.806027108","0.799278567","1.594828097","3.037072997","-0.671128513","-1.616144581","-1.804366341","-2.090328535"],"430":["0","2.41374662","2.363378174","2.806027108","0.799278567","1.594828097","3.037072997","-0.671128513","-1.616144581","-1.825705746","-1.348706903"],"440":["0","2.41374662","2.363378174","2.806027108","0.799278567","1.594828097","3.037072997","-0.671128513","-1.616144581","-0.657086278","-1.348706903"]}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB318J354 = function(val, param) { // T-Shirt + Weight for Chest
var info = {"skipped":["0","0.273722529","0.647006293","0.3635376","0.20905188","-0.570681611","-0.478964121","0.047372336","-3.853963735","-2.532060972","-2.031247354"],"100":["0","-0.437339484","-0.680180024","-1.449184927","-3.958589209","-2.029956793","-1.971421287","-2.677576652","-5.860794049","-2.401986863","-1.467785625"],"110":["0","0.09702596","-0.711924163","-1.052218677","-2.284006172","-2.029956793","-1.971421287","-2.677576652","-5.860794049","-2.401986863","-1.467785625"],"120":["0","0.24790858","-0.380244579","-0.655252428","-0.609423135","-2.029956793","-1.971421287","-2.677576652","-5.860794049","-2.401986863","-1.467785625"],"130":["0","0.725074272","-0.020930602","-0.748266571","-1.054172809","-2.029956793","-1.971421287","-2.677576652","-5.860794049","-2.401986863","-1.467785625"],"140":["0","0.796708362","0.218555344","-0.437814892","-0.896511337","-2.029956793","-1.971421287","-2.677576652","-5.860794049","-2.401986863","-1.467785625"],"150":["0","1.133052904","0.444814553","-0.221428193","-0.863044051","-2.018701773","-1.971421287","-2.677576652","-5.860794049","-2.401986863","-1.467785625"],"160":["0","1.177385821","0.797895792","0.118527885","-0.526824846","-2.017294896","-1.971421287","-2.677576652","-5.860794049","-2.401986863","-1.467785625"],"170":["0","1.459790676","1.0577302","0.305167239","-0.397786063","-1.438169492","-1.971421287","-2.677576652","-5.860794049","-2.401986863","-1.467785625"],"180":["0","0.87683368","1.264002255","0.515011907","-0.266613403","-1.293538108","-2.158154604","-2.677576652","-5.860794049","-2.401986863","-1.467785625"],"190":["0","0.87683368","1.344120316","0.783475997","0.013989205","-0.848622613","-2.207584454","-2.677576652","-5.860794049","-2.401986863","-1.467785625"],"200":["0","0.87683368","2.105241899","0.925171346","0.226578937","-0.751520107","-1.819201564","-2.677576652","-5.860794049","-2.401986863","-1.467785625"],"210":["0","0.87683368","2.105241899","1.203011419","0.379842665","-0.572369488","-1.667771778","-2.677576652","-5.860794049","-2.401986863","-1.467785625"],"220":["0","0.87683368","2.105241899","1.543095747","0.829276533","-0.284372582","-1.292756174","-1.861370562","-5.860794049","-2.401986863","-1.467785625"],"230":["0","0.87683368","2.105241899","1.980169892","0.894157479","-0.184499955","-1.25477948","-2.158716646","-5.860794049","-2.401986863","-1.467785625"],"240":["0","0.87683368","2.105241899","2.417244037","1.362736911","-0.080669504","-1.288957332","-2.552848907","-5.860794049","-2.401986863","-1.467785625"],"250":["0","0.87683368","2.105241899","2.417244037","1.765867677","0.181552935","-0.933955837","-2.524197491","-4.107412859","-2.401986863","-1.467785625"],"260":["0","0.87683368","2.105241899","2.417244037","1.819344138","0.413701072","-0.837028377","-2.333599479","-2.35403167","-2.401986863","-1.467785625"],"270":["0","0.87683368","2.105241899","2.417244037","1.902759487","0.439137475","-0.62450947","-2.143001466","-2.35403167","-2.401986863","-1.467785625"],"280":["0","0.87683368","2.105241899","2.417244037","1.504886683","0.894437832","-0.469329969","-1.849702862","-2.35403167","-2.401986863","-1.467785625"],"290":["0","0.87683368","2.105241899","2.417244037","1.504886683","0.44766582","-0.246001915","-1.752968882","-2.35403167","-2.401986863","-1.467785625"],"300":["0","0.87683368","2.105241899","2.417244037","1.504886683","0.566104548","-0.038755634","-1.656234901","-3.150911397","-2.401986863","-1.467785625"],"310":["0","0.87683368","2.105241899","2.417244037","1.504886683","1.010249776","-0.049462063","-1.475150629","-3.233917071","-2.401986863","-1.467785625"],"320":["0","0.87683368","2.105241899","2.417244037","1.504886683","1.010249776","-0.095856589","-1.294066357","-3.213111176","-2.401986863","-1.467785625"],"330":["0","0.87683368","2.105241899","2.417244037","1.504886683","1.010249776","0.329260975","-1.230333291","-2.650324519","-2.401986863","-1.467785625"],"340":["0","0.87683368","2.105241899","2.417244037","1.504886683","1.010249776","0.75437854","-0.61985526","-2.556649674","-2.401986863","-1.467785625"],"350":["0","0.87683368","2.105241899","2.417244037","1.504886683","1.010249776","0.75437854","-0.585855021","-2.319319375","-2.401986863","-3.279444048"],"360":["0","0.87683368","2.105241899","2.417244037","1.504886683","1.010249776","0.75437854","-0.585855021","-2.346564663","-2.401986863","-3.279444048"],"370":["0","0.87683368","2.105241899","2.417244037","1.504886683","1.010249776","0.75437854","0.763683478","-1.526746387","-2.401986863","-3.277657366"],"380":["0","0.87683368","2.105241899","2.417244037","1.504886683","1.010249776","0.75437854","0.763683478","-0.878048023","-2.567048568","-3.277657366"],"390":["0","0.87683368","2.105241899","2.417244037","1.504886683","1.010249776","0.75437854","0.763683478","-1.170946654","-2.732110272","-3.461089683"],"400":["0","0.87683368","2.105241899","2.417244037","1.504886683","1.010249776","0.75437854","0.763683478","-2.081348304","-2.819373089","-3.646308681"],"410":["0","0.87683368","2.105241899","2.417244037","1.504886683","1.010249776","0.75437854","0.763683478","-2.081348304","-2.792200315","-3.646308681"],"420":["0","0.87683368","2.105241899","2.417244037","1.504886683","1.010249776","0.75437854","0.763683478","-2.081348304","-3.158503225","-3.564744851"],"430":["0","0.87683368","2.105241899","2.417244037","1.504886683","1.010249776","0.75437854","0.763683478","-2.081348304","-3.466535034","-3.48318102"],"440":["0","0.87683368","2.105241899","2.417244037","1.504886683","1.010249776","0.75437854","0.763683478","-2.081348304","-3.830731331","-3.48318102"]}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB359J363 = function(val, param) { // T-Shirt + Belly Situation for Midsections
var info = {"skipped":["0","-0.029224408","-0.186330784","-0.173022155","0.076189457","0.868268957","1.111538968","0","0","0","0"],"0":["0","-0.022452787","-0.104912122","-0.207368934","-0.39779538","-0.781761709","-1.020759948","0","0","0","0"],"1":["0","-0.001386496","0.013551471","-0.031397126","-0.157408176","-0.44255366","-0.763683087","-0.395129926","3.55271E-15","0","0"],"2":["0","0.212473208","0.265208939","0.358904993","0.321586452","0.072458847","-0.367557613","-0.350929616","-0.261149094","0","0"],"3":["0","0","1.657041258","0.886620707","0.904175842","0.75126143","0.429531226","0.114509548","0.011354308","2.03012E-15","0"]}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB368J371 = function(val, param) { // T-Shirt + Fit Preference for Midsections
var info = {"skipped":["0","0.029917622","0.18732992","0.181518515","0.106519816","-0.098184266","-0.000253689","-0.784709303","0","0","0"],"0":["0","-1.736686402","0.9938672","1.059995471","1.055335747","0.756389295","0.448812099","0.460706885","0.188340223","0.39796767","0"],"1":["0","0.23634443","0.138196591","0.084166875","-0.023423983","-0.208346776","-0.342976535","-0.745304081","-1.381161633","-2.38780602","0"],"2":["0","-0.139932476","-0.207374069","-0.317688563","-0.45911848","-0.894432667","-0.048043006","-5.32907E-15","0","0","0"]}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB376J401 = function(val, param) { // Tuck + Height for Midsection
var info = {"60":["0.840095775","1.334763501","0.529351097"],"61":["0.840095775","0.381464417","1.178700742"],"62":["0.840095775","0.357061532","0.246280516"],"63":["0.19616944","0.250753913","0.337124615"],"64":["0.43469788","0.466013611","0.503754575"],"65":["0.41614893","0.32990399","0.451373556"],"66":["0.251570156","0.350175463","0.289382136"],"67":["0.274385088","0.23764866","0.31529688"],"68":["0.11219227","0.169468547","0.202491932"],"69":["0.019127763","0.074611985","0.131601559"],"70":["-0.067363202","0.033757419","0.08340435"],"71":["-0.103805217","-0.014121157","0.067285694"],"72":["0.023657022","-0.103427569","-0.034926042"],"73":["-0.174756348","-0.147970219","-0.162415961"],"74":["-0.136838686","-0.235168726","-0.140319082"],"75":["-0.184320605","-0.329001645","-0.272217237"],"76":["-0.193390936","-0.438443","-0.283926951"],"77":["-0.15773193","-0.599170392","-0.368402649"],"78":["-0.66899216","-0.552752231","-0.42993719"],"79":["-0.932087395","-0.588365009","-0.59590786"],"80":["-0.904904966","-1.169691705","-0.673546601"],"81":["-0.90584177","-0.895861715","-1.089779485"],"82":["-0.961143431","-1.066197562","-0.562902986"],"83":["-1.267645408","-0.883507494","-0.224179218"],"84":["0.157376663","-0.883506959","-0.969057322"],"85":["0.157376663","-0.883506959","-0.969057322"]}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB406J431 = function(val, param) { // T-Shirt + Height for Shirt Length
var info = {"skipped":["0","0.439166243","1.492635507","0.304552232","-0.01335525","-0.548616659","-0.390588917","-1.305420839","-1.696225684","0.139046633","0.671484012"],"60":["0","-2.022097519","-3.438492962","-2.959403956","-1.29546949","-2.002039125","-2.575070681","-2.322585217","-3.552811422","0.62511272","0.762058456"],"61":["0","-0.819904374","-1.032291075","-1.631860126","-1.270452225","-2.541939742","-3.688313945","-2.322585217","-3.552811422","0.62511272","0.762058456"],"62":["0","-0.680597935","-1.21387732","-1.768008165","-1.915908275","-2.36363077","-3.498446332","-2.322585217","-3.552811422","0.62511272","0.762058456"],"63":["0","-0.464131229","-0.464543038","-1.494521149","-1.95268111","-2.023263022","-3.300103703","-2.322585217","-3.552811422","0.62511272","0.762058456"],"64":["0","0.1553927","-0.613862557","-1.200412322","-1.651961256","-2.041727571","-2.020649394","-2.322585217","-3.552811422","0.62511272","0.762058456"],"65":["0","0.506773286","-0.303724426","-0.828998499","-1.423036741","-1.60290937","-1.772125001","-2.254449588","-3.552811422","0.62511272","0.762058456"],"66":["0","0.048412962","0.007552297","-0.613194494","-1.20810021","-1.502977065","-1.824105324","-2.804987634","-3.552811422","0.62511272","0.762058456"],"67":["0","0.589791725","0.194001421","-0.354383593","-0.936556795","-1.435449463","-2.200347046","-2.292080202","-3.552811422","0.62511272","0.762058456"],"68":["0","0.662954874","0.367719018","-0.164148873","-0.790713348","-1.321613266","-1.624714343","-2.081707923","-3.552811422","0.62511272","-1.601788144"],"69":["0","1.287347133","0.678400599","0.037540449","-0.583272577","-1.058408754","-1.391902199","-1.70094344","-3.185007846","0.62511272","-1.601788144"],"70":["0","1.194043441","0.817415145","0.279081665","-0.291133874","-0.794337922","-1.385918455","-1.660262163","-2.740049161","1.121679492","-1.601788144"],"71":["0","1.613443697","0.97731533","0.400460239","-0.173473595","-0.62696714","-0.955095251","-1.354714912","-2.884721297","1.362133892","1.694145673"],"72":["0","2.432452535","1.309309181","0.656684466","0.087231233","-0.395846051","-0.770951312","-1.049167661","-1.832394215","1.607807616","1.694145673"],"73":["0","2.425065144","1.386111347","0.938542842","0.265917574","-0.209039712","-0.621759684","-0.907647986","-1.351945022","0.207392682","-0.129751689"],"74":["0","2.744311331","1.691669411","1.155074009","0.507104236","0.015776352","-0.481216499","-0.176198548","-1.40492693","-1.187802928","-1.953649051"],"75":["0","3.107881867","1.65981821","1.352196013","0.737497523","0.345931219","-0.018720468","-0.956973823","-1.08482148","-1.187802928","-1.953649051"],"76":["0","3.107881867","1.71022952","1.627222682","1.084028603","0.615957271","0.222071811","-0.362957492","-0.335311647","-0.522041021","1.793861726"],"77":["0","3.107881867","2.292033419","1.95445953","1.297527234","0.657919501","0.615033101","-0.565327451","-0.523487125","-0.522041021","1.793861726"],"78":["0","3.107881867","2.847961263","3.046793531","1.658784081","1.089027444","0.54458086","-1.011957429","-0.512874996","-0.522041021","1.793861726"],"79":["0","3.107881867","2.847961263","2.782832762","2.198051016","1.148566602","0.474128619","-0.551895538","-0.377403097","-0.522041021","1.793861726"],"80":["0","3.107881867","2.973319138","2.406440942","2.380617749","1.668775541","1.034980772","-0.551895538","-0.138816647","-0.522041021","1.793861726"],"81":["0","3.107881867","2.973319138","2.708527387","2.499451744","1.591867328","1.595832925","-0.184856892","-0.646922215","-0.522041021","1.793861726"],"82":["0","3.107881867","2.973319138","2.708527387","2.049312459","1.445764265","1.595832925","-0.184856892","2.196114124","-0.522041021","1.793861726"],"83":["0","3.107881867","2.973319138","2.708527387","-0.222687348","1.414347034","1.595832925","-0.184856892","2.196114124","-0.522041021","1.793861726"],"84":["0","3.107881867","2.973319138","2.708527387","0.206148559","2.513508405","1.595832925","-0.184856892","2.196114124","-0.522041021","1.793861726"]}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB436E460 = function(val, param) { // Height + Tucked for Shirt Length
var info = {"60":["-1.055668344","-0.078109097","0.117163645"],"61":["-1.055668344","-0.019525986","0.02510484"],"62":["-1.055668344","0.354815124","0.067891065"],"63":["-0.514006007","0.242755008","-0.16390794"],"64":["-0.730809943","0.522380652","-0.402846243"],"65":["-0.8189942","0.509062306","-0.312465737"],"66":["-0.861017035","0.425384449","-0.385151138"],"67":["-0.876712594","0.411670378","-0.343318709"],"68":["-0.926753337","0.43984536","-0.330711899"],"69":["-0.851113022","0.374169384","-0.29091728"],"70":["-0.729638628","0.380411626","-0.353873003"],"71":["-0.824558094","0.377209061","-0.316400441"],"72":["-0.85946449","0.350705451","-0.359300615"],"73":["-0.620927419","0.36473233","-0.388558173"],"74":["-0.809005282","0.429062811","-0.39930318"],"75":["-0.757714581","0.393685269","-0.374498838"],"76":["-0.657724951","0.420479235","-0.378026001"],"77":["-0.998000762","0.600629235","-0.40010356"],"78":["-0.419034779","0.447787247","-0.395428319"],"79":["-0.650367914","0.309213538","-0.294733019"],"80":["-0.543181905","0.432729157","-0.294267512"],"81":["-0.444565512","1.173791657","-1.027687918"],"82":["-0.560321138","0.251799062","-0.756433441"],"83":["0.512857493","0.215827767","-0.059433057"],"84":["0.924377969","-1.060238977","1.196099985"]}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB465J468 = function(val, param) { // Ethnicity + Shirt Size for Sleeve
var info = {"1":["0","0.847689298","0.462698586","0.950423514","0.975348371","0.826574378","0","0","0","0","0"],"2":["0","0","0","1.754421741","0.479344326","0","0","0","0","0","0"],"3":["0","0","1.600407972","0.19580717","0.132127205","-0.513346285","-1.102638596","0","0","0","0"],"4":["0","0","0","-0.50818369","0","-0.169699862","0","0","0","0","0"]}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB473J497 = function(val, param) { // Height + Shirt Size for Sleeve
var info = {"60":["0","-0.418488288","-2.829936335","-2.630300866","-2.120288076","-2.983150919","0.894876337","0.314005407","0","1.369606209","0"],"61":["0","-0.418488288","-2.829936335","-2.630300866","-2.120288076","-2.983150919","0.894876337","0.314005407","0","1.369606209","0"],"62":["0","-0.418488288","-2.049042182","-2.630300866","-2.120288076","-2.983150919","0.894876337","0.314005407","0","1.369606209","0"],"63":["0","-0.418488288","-1.35208112","-1.475698255","-2.400932964","-2.957366215","0.894876337","0.314005407","0","1.369606209","0"],"64":["0","0.243766987","-0.904544243","-1.370734381","-2.252261749","-3.211367811","0.894876337","0.314005407","0","1.369606209","0"],"65":["0","0.177711917","-0.225561379","-1.422090929","-1.730832161","-2.487916409","0.894876337","0.314005407","0","1.369606209","0"],"66":["0","0.884649467","-0.107049587","-0.582788185","-1.680914978","-2.433615641","0.894876337","0.314005407","0","1.369606209","0"],"67":["0","0.747923853","-0.022986848","-0.740989705","-1.132113391","-1.823203203","0.894876337","0.314005407","0","1.369606209","0"],"68":["0","1.449587237","0.196797828","-0.664776248","-0.635640274","-0.845539562","0.017594359","0.314005407","0","1.369606209","0"],"69":["0","1.705054259","0.859913985","-0.23942217","-0.863494163","-0.728196466","-0.85968762","0.314005407","0","1.369606209","0"],"70":["0","1.705054259","1.332442165","0.110161132","-0.497819765","-0.890406626","-0.85968762","0.314005407","0","1.369606209","0"],"71":["0","1.510717924","1.363174167","0.22396952","0.003475736","-0.643980247","-0.035027408","0.314005407","0","1.369606209","0"],"72":["0","1.510717924","1.442960117","1.402859244","0.020195505","-0.322187885","0.023396719","0.314005407","0","1.369606209","0"],"73":["0","1.510717924","1.439711031","1.259279757","0.243580976","0.362657886","0.906481059","0.933678863","0","1.369606209","0"],"74":["0","1.510717924","1.991225911","2.034808","0.850248936","0.940973653","0.315517355","0.933678863","0","1.369606209","0"],"75":["0","1.510717924","1.72244499","2.16703894","1.358586909","0.951725456","0.994596964","1.354155466","0","1.369606209","0"],"76":["0","1.510717924","1.72244499","2.762078169","1.655469246","1.162816188","1.120117945","1.154958611","0","1.369606209","0"],"77":["0","1.510717924","1.72244499","3.418245926","1.587538314","1.457684525","1.120117945","1.154958611","0","1.369606209","0"],"78":["0","1.510717924","1.72244499","4.074413683","1.57853446","1.487369853","1.371159908","1.154958611","0","1.369606209","0"],"79":["0","1.510717924","1.72244499","4.074413683","2.045047133","1.329390918","1.371159908","1.154958611","0","1.369606209","0"],"80":["0","1.510717924","1.72244499","4.074413683","1.973068219","2.160686294","1.371159908","1.154958611","0","1.369606209","0"],"81":["0","1.510717924","1.72244499","4.074413683","1.973068219","2.991981671","1.371159908","1.154958611","0","1.369606209","0"],"82":["0","1.510717924","1.72244499","4.074413683","1.973068219","2.991981671","1.371159908","1.154958611","0","1.369606209","0"],"83":["0","1.510717924","1.72244499","4.074413683","1.973068219","2.991981671","1.371159908","1.154958611","0","1.369606209","0"],"84":["0","1.510717924","1.72244499","4.074413683","1.973068219","2.991981671","1.371159908","1.154958611","0","1.369606209","0"]}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB502J505 = function(val, param) { // Midsection Look + Shirt Size for Collar
val = parseInt(val);
param = parseInt(param);
var info = {"0":["0","0.141295476","0.164167798","0.087673161","-0.010965985","-0.173666582","-0.738982703","0","0","0","0"],"1":["0","0.067218024","0.128325486","0.080927588","0.004217111","-0.119649611","-0.470369377","-0.377096784","-0.793227161","0","0"],"2":["0","0.107021679","0.070907849","0.066676056","-0.007140716","-0.12365445","-0.311334236","-0.256490419","2.542136227","0","0"],"3":["0","0","0.470949433","-0.298192373","-0.012340536","-0.10701034","-0.272006742","-0.300356979","-0.457580095","-0.402548038","-0.164518082"]}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB510J542 = function(val, param) { // Waist + Shirt Size for Collar
val = parseInt(val);
param = parseInt(param);
var info = {"26":["0","-0.195385154","1.085041658","-0.888549956","-0.126037226","1.300886045","-0.082246522","-0.048846164","0","-0.74566926","-0.9842385"],"27":["0","-0.385019537","0.021471174","-0.202905814","-0.126037226","1.300886045","-0.082246522","-0.048846164","0","-0.74566926","-0.9842385"],"28":["0","-0.071220021","-0.260705887","-0.175480049","-0.479033969","1.300886045","-0.082246522","-0.048846164","0","-0.74566926","-0.9842385"],"29":["0","0.05894627","-0.039995754","-0.141008189","-0.245126606","0.795490996","-0.082246522","-0.048846164","0","-0.74566926","-0.9842385"],"30":["0","0.127143941","-0.017296431","-0.110922097","-0.205221706","0.217925813","-0.082246522","-0.048846164","0","-0.74566926","-0.9842385"],"31":["0","0.138118889","0.034021415","-0.03801209","-0.07631853","-0.32410125","-0.082246522","-0.048846164","0","-0.74566926","-0.9842385"],"32":["0","0.168915197","0.075882441","-0.008429815","-0.069246162","-0.33314338","-0.082246522","-0.048846164","0","-0.74566926","-0.9842385"],"33":["0","0.84643399","0.111103962","0.041112737","-0.065048393","-0.184009549","-0.082246522","-0.048846164","0","-0.74566926","-0.9842385"],"34":["0","0.747767952","0.243017245","0.044829867","-0.027315862","-0.138648717","-0.061580839","-0.048846164","0","-0.74566926","-0.9842385"],"35":["0","0.747767952","0.20431833","0.153832272","0.032624447","-0.169561161","-0.060194295","-0.048846164","0","-0.74566926","-0.9842385"],"36":["0","0.747767952","-0.131809235","0.063003701","0.059967456","-0.068464407","-0.068456783","-0.048846164","0","-0.74566926","-0.9842385"],"37":["0","0.747767952","-0.255092768","0.009244862","0.116237283","-0.037900115","-0.097565231","-0.048846164","0","-0.74566926","-0.9842385"],"38":["0","0.747767952","-0.255092768","0.303522221","0.088972258","0.041646822","-0.12667368","0.157627849","0","-0.74566926","-0.9842385"],"39":["0","0.747767952","-0.255092768","0.418675298","0.274200791","0.131086175","-0.276456448","0.157326113","-0.500141839","-0.74566926","-0.9842385"],"40":["0","0.747767952","-0.255092768","0.421104118","0.152793828","0.113672943","-0.004802869","0.272099843","-1.000283678","-0.74566926","-0.9842385"],"41":["0","0.747767952","-0.255092768","0.002756682","0.361852219","0.06328144","-0.43154013","0.36656848","-0.337871658","-0.74566926","-0.9842385"],"42":["0","0.747767952","-0.255092768","0.102462615","0.431082514","0.151996568","-0.211614923","0.38281768","0.324540363","-0.74566926","-0.9842385"],"43":["0","0.747767952","-0.255092768","-0.204239499","0.505013091","0.000844804","-0.012509425","0.039558039","-0.537558323","-0.74566926","-0.9842385"],"44":["0","0.747767952","-0.255092768","-0.204239499","0.764587265","0.031992512","0.096431912","-0.303701602","-1.399657009","-0.74566926","-0.9842385"],"45":["0","0.747767952","-0.255092768","-0.204239499","0.764587265","-0.093376399","-0.019529285","0.134455061","-1.037637269","-0.74566926","-0.9842385"],"46":["0","0.747767952","-0.255092768","-0.204239499","1.692805248","0.371829523","-0.135490483","0.572611725","-0.675617529","-0.74566926","-0.9842385"],"47":["0","0.747767952","-0.255092768","-0.204239499","1.692805248","0.607947517","-0.018839654","0.433879613","-0.619242313","-0.74566926","-0.9842385"],"48":["0","0.747767952","-0.255092768","-0.204239499","1.692805248","0.844065511","0.097811174","0.295147501","-0.562867098","-0.74566926","-0.9842385"],"49":["0","0.747767952","-0.255092768","-0.204239499","1.692805248","0.628412064","-0.007043278","-0.12330504","-0.004151357","-0.74566926","-0.9842385"],"50":["0","0.747767952","-0.255092768","-0.204239499","1.692805248","-0.47266934","0.139534427","-0.54175758","0.554564385","-0.74566926","-0.9842385"],"51":["0","0.747767952","-0.255092768","-0.204239499","1.692805248","0.204904508","0.438590741","-0.363746131","1.476021324","-0.74566926","-0.9842385"],"52":["0","0.747767952","-0.255092768","-0.204239499","1.692805248","0.60254515","0.192513165","0.695180231","2.397478263","-0.74566926","-0.9842385"],"53":["0","0.747767952","-0.255092768","-0.204239499","1.692805248","0.60254515","0.192513165","0.622065473","2.181565289","-0.74566926","-0.9842385"],"54":["0","0.747767952","-0.255092768","-0.204239499","1.692805248","0.60254515","1.231480097","0.202070151","1.965652315","-0.607783083","-0.9842385"],"55":["0","0.747767952","-0.255092768","-0.204239499","1.692805248","0.557232117","2.270447029","0.202070151","1.498719493","-0.469896907","-0.9842385"],"56":["0","0.747767952","-0.255092768","-0.204239499","1.692805248","0.557232117","2.270447029","0.202070151","1.03178667","-0.469896907","-0.247660192"],"57":["0","0.747767952","-0.255092768","-0.204239499","1.692805248","0.557232117","2.270447029","0.202070151","-0.030114033","-0.525897225","0.488918117"],"58":["0","0.747767952","-0.255092768","-0.204239499","1.692805248","0.557232117","2.270447029","0.202070151","-1.092014737","-0.581897542","0.488918117"]}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB547J571 = function(val, param) { // Height + Shirt Size for Collar
val = parseInt(val);
param = parseInt(param);
var info = {"60":["0","-0.899436865","-0.667259151","-0.70037739","1.657697565","1.747960325","3.161850008","1.092204165","0","0","0"],"61":["0","-0.899436865","-0.667259151","-0.70037739","1.657697565","1.747960325","3.161850008","1.092204165","0","0","0"],"62":["0","-0.899436865","-0.667259151","-0.70037739","1.657697565","1.747960325","3.161850008","1.092204165","0","0","0"],"63":["0","-0.899436865","-0.667259151","-0.70037739","1.657697565","1.747960325","3.161850008","1.092204165","0","0","0"],"64":["0","-0.899436865","-0.669049219","-0.70037739","1.657697565","1.747960325","3.161850008","1.092204165","0","0","0"],"65":["0","-0.899436865","-0.605458384","-0.70037739","1.052311261","1.747960325","3.161850008","1.092204165","0","0","0"],"66":["0","-0.899436865","-0.544651408","-0.315000065","0.782990492","1.747960325","3.161850008","1.092204165","0","0","0"],"67":["0","-1.263812719","-0.427454456","-0.218655733","0.186453912","1.747960325","3.161850008","1.092204165","0","0","0"],"68":["0","-1.089535023","-0.517694773","-0.185042624","0.216657588","0.734865246","3.161850008","1.092204165","0","0","0"],"69":["0","-1.216267129","-0.540070787","-0.151429515","0.349173522","0.438994616","3.161850008","1.092204165","0","0","0"],"70":["0","-0.855932446","-0.476315666","-0.257566907","0.481689455","0.746376523","2.879498449","1.092204165","0","0","0"],"71":["0","-0.793205741","-0.614182312","-0.537757468","0.365502893","0.929314916","1.725629722","1.092204165","0","0","0"],"72":["0","-0.793205741","-0.607938579","-0.315550361","-0.179467462","0.452862725","1.238231075","0.543022813","0","0","0"],"73":["0","-0.702665068","-1.252042194","-0.327231994","-0.027298324","-0.023589467","0.687223696","0.543022813","0","0","0"],"74":["0","-0.702665068","-1.332266183","-0.136158742","0.271498079","0.506397813","0.217827087","-0.006158538","0","0","0"],"75":["0","-0.702665068","-1.332266183","-0.603905345","0.112356664","0.490271833","0.202624856","-0.006158538","0","0","0"],"76":["0","-0.702665068","-1.332266183","-0.603905345","-0.497690665","0.27298244","-0.168125093","-0.006158538","0","0","0"],"77":["0","-0.702665068","-1.332266183","-0.603905345","-0.749056627","0.212858776","-0.168125093","-0.006158538","0","0","0"],"78":["0","-0.702665068","-1.332266183","-0.603905345","-0.989099474","0.577259859","-0.168125093","-0.006158538","0","0","0"],"79":["0","-0.702665068","-1.332266183","-0.603905345","-0.989099474","0.719923689","-0.168125093","-0.006158538","0","0","0"],"80":["0","-0.702665068","-1.332266183","-0.603905345","-0.989099474","0.477792174","-0.168125093","-0.006158538","0","0","0"],"81":["0","-0.702665068","-1.332266183","-0.603905345","-0.989099474","0.477792174","-0.168125093","-0.006158538","0","0","0"],"82":["0","-0.702665068","-1.332266183","-0.603905345","-0.989099474","0.477792174","-0.168125093","-0.006158538","0","0","0"],"83":["0","-0.702665068","-1.332266183","-0.603905345","-0.989099474","0.477792174","-0.168125093","-0.006158538","0","0","0"],"84":["0","-0.702665068","-1.332266183","-0.603905345","-0.989099474","0.477792174","-0.168125093","-0.006158538","0","0","0"]}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB576J610 = function(val, param) { // Weight + Shirt Size for Collar
val = parseInt(val);
param = parseInt(param);
var info = {"100":["0","-0.825050142","-0.599705992","-0.595714935","-0.380394401","0.190265809","0.1","0","0","0","0"],"110":["0","-0.825050142","-0.599705992","-0.595714935","-0.380394401","0.190265809","0.1","0","0","0","0"],"120":["0","-0.825050142","-0.599705992","-0.595714935","-0.380394401","0.190265809","0.1","0","0","0","0"],"130":["0","-0.825050142","-0.599705992","-0.778583627","-0.380394401","0.190265809","0.1","0","0","0","0"],"140":["0","-0.825050142","-0.599705992","-0.651434035","-0.380394401","0.190265809","0.1","0","0","0","0"],"150":["0","-0.825050142","-0.510484589","-0.612681749","-0.380394401","0.190265809","0.1","0","0","0","0"],"160":["0","-0.825050142","-0.510484589","-0.46588793","-0.380394401","0.190265809","0.1","0","0","0","0"],"170":["0","-0.825050142","-0.242820379","-0.071963517","-0.093322717","0.190265809","0.1","0","0","0","0"],"180":["0","-0.825050142","-0.242820379","-0.005535584","-0.017777536","0.105974382","0.1","0","0","0","0"],"190":["0","-0.825050142","-0.242820379","0.070556074","0.166755424","0.063118528","0.1","0","0","0","0"],"200":["0","-0.825050142","-0.242820379","0.00050628","0.493755832","0.42685139","0.1","0","0","0","0"],"210":["0","-0.825050142","-0.242820379","0.833910285","0.271342461","0.723394165","0.1","0","0","0","0"],"220":["0","-0.825050142","-0.242820379","0.833910285","-0.163247844","0.219220795","0.1","0","0","0","0"],"230":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","0.446378942","0.1","0","0","0","0"],"240":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","0.544811913","0.1","0","0","0","0"],"250":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.1","0","0","0","0"],"260":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.604630751","0","0","0","0"],"270":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.525403262","0","0","0","0"],"280":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.83516146","0","0","0","0"],"290":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.287720792","0","0","0","0"],"300":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.287720792","0","0","0","0"],"310":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.287720792","0","0","0","0"],"320":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.287720792","0","0","0","0"],"330":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.287720792","0","0","0","0"],"340":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.287720792","0","0","0","0"],"350":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.287720792","0","0","0","0"],"360":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.287720792","0","0","0","0"],"370":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.287720792","0","0","0","0"],"380":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.287720792","0","0","0","0"],"390":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.287720792","0","0","0","0"],"400":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.287720792","0","0","0","0"],"410":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.287720792","0","0","0","0"],"420":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.287720792","0","0","0","0"],"430":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.287720792","0","0","0","0"],"440":["0","-0.825050142","-0.242820379","0.833910285","0.514228706","1.283364101","0.287720792","0","0","0","0"]}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB615AA649 = function(val, param) { // Weight + Height for Collar
val = parseInt(val);
param = parseInt(param);
var info = {"100":{'60':-1.230481483,'61':-0.278115903,'62':-2.571990094,'63':-1.09790049,'64':-2.253406063,'65':-2.432104153,'66':-1.205586808,'67':-0.608664123,'68':-0.8462975,'69':-1.048747933,'70':-1.779651063,'71':0.255583063,'72':-1.800947238,'73':-1.090525648,'74':-1.402450296,'75':-1.66224399,'76':-1.922037684,'77':-1.998771188,'78':-1.998771188,'79':-1.998771188,'80':-0.59228621,'81':-1.033319955,'82':-0.691479922,'83':-1.015552707,'84':-1.015552707},"110":{'60':-0.737877322,'61':-0.713406309,'62':-1.067518947,'63':-0.874195306,'64':-0.938625451,'65':-1.080934053,'66':-0.652632854,'67':-0.984092165,'68':-1.066791601,'69':-1.019023993,'70':-1.544944506,'71':-0.896003742,'72':-1.800947238,'73':-1.090525648,'74':-1.402450296,'75':-1.66224399,'76':-1.922037684,'77':-1.998771188,'78':-1.998771188,'79':-1.998771188,'80':-0.59228621,'81':-1.033319955,'82':-0.691479922,'83':-1.015552707,'84':-1.015552707},"120":{'60':-0.772983245,'61':-0.685849463,'62':-0.62144445,'63':-0.618979698,'64':-0.657007082,'65':-0.808991793,'66':-1.029940014,'67':-1.166279647,'68':-1.134257464,'69':-1.100739738,'70':-0.836843079,'71':-1.125110423,'72':-1.223102624,'73':-1.104112529,'74':-1.551488728,'75':-1.66224399,'76':-1.922037684,'77':-1.998771188,'78':-1.998771188,'79':-1.998771188,'80':-0.59228621,'81':-1.033319955,'82':-0.691479922,'83':-1.015552707,'84':-1.015552707},"130":{'60':-0.114338979,'61':-0.479016374,'62':-0.191044338,'63':-0.534555719,'64':-0.453184563,'65':-0.601089559,'66':-0.757042326,'67':-0.816426511,'68':-0.613366526,'69':-0.856951421,'70':-0.726020632,'71':-0.966393859,'72':-1.174113123,'73':-0.843186168,'74':-1.087457588,'75':-1.394832316,'76':-1.922037684,'77':-1.998771188,'78':-1.998771188,'79':-1.998771188,'80':-0.59228621,'81':-1.033319955,'82':-0.691479922,'83':-1.015552707,'84':-1.015552707},"140":{'60':-0.285711838,'61':-0.072599352,'62':-0.171698415,'63':-0.323120521,'64':-0.357442959,'65':-0.392474802,'66':-0.494968239,'67':-0.597807289,'68':-0.643714568,'69':-0.653372553,'70':-0.662474598,'71':-0.743677529,'72':-0.824590561,'73':-0.877482068,'74':-0.96525678,'75':-0.804447509,'76':-0.89810704,'77':-0.561884367,'78':-1.236693179,'79':-0.59228621,'80':-0.59228621,'81':-1.033319955,'82':-0.691479922,'83':-1.015552707,'84':-1.015552707},"150":{'60':0.607096959,'61':-0.131320587,'62':0.104860489,'63':-0.132859096,'64':-0.059510393,'65':-0.22210119,'66':-0.317630704,'67':-0.409738424,'68':-0.419437925,'69':-0.500280491,'70':-0.478399098,'71':-0.557589984,'72':-0.617827764,'73':-0.62938502,'74':-0.627850768,'75':-0.652131629,'76':-0.884888332,'77':-0.778285716,'78':-0.76327494,'79':-0.45551858,'80':-0.59228621,'81':-1.033319955,'82':-0.691479922,'83':-1.015552707,'84':-1.015552707},"160":{'60':0.393256714,'61':0.905983344,'62':1.074215847,'63':0.191404816,'64':0.035632313,'65':0.06799126,'66':-0.028680646,'67':-0.144775147,'68':-0.218458993,'69':-0.319361748,'70':-0.329114978,'71':-0.420230884,'72':-0.529140415,'73':-0.549690776,'74':-0.568469342,'75':-0.590358746,'76':-0.714194608,'77':-0.743673755,'78':-0.728030768,'79':-0.613551487,'80':-0.700679064,'81':-1.033319955,'82':-0.691479922,'83':-1.015552707,'84':-1.015552707},"170":{'60':1.120889199,'61':1.04089161,'62':0.618204759,'63':0.334730945,'64':0.443699341,'65':0.07532197,'66':0.199655552,'67':0.087426702,'68':-0.000738862,'69':-0.082953515,'70':-0.162986499,'71':-0.24761566,'72':-0.323531038,'73':-0.401592117,'74':-0.428772717,'75':-0.405076448,'76':-0.639076093,'77':-0.354297896,'78':-0.726801592,'79':-0.507939817,'80':-0.625765022,'81':-1.033319955,'82':-0.691479922,'83':-1.015552707,'84':-1.015552707},"180":{'60':1.166375548,'61':1.360280621,'62':0.354146758,'63':0.470867566,'64':0.611634901,'65':0.323365235,'66':0.279191107,'67':0.289677238,'68':0.158125783,'69':0.048551339,'70':-0.053365748,'71':-0.079667794,'72':-0.179057663,'73':-0.239735711,'74':-0.291594364,'75':-0.327294242,'76':-0.374261657,'77':-0.533293214,'78':-0.312670941,'79':-0.278330074,'80':-0.498084633,'81':-0.325982238,'82':-0.691479922,'83':-1.015552707,'84':-0.898631743},"190":{'60':1.329853853,'61':0.708844213,'62':0.619972185,'63':0.627975048,'64':0.706413447,'65':0.700138486,'66':0.692407625,'67':0.531923219,'68':0.270942341,'69':0.262553975,'70':0.133631413,'71':0.10582802,'72':-0.008437583,'73':-0.067322809,'74':-0.120678825,'75':-0.130547502,'76':-0.237161302,'77':-0.308127243,'78':-0.149437821,'79':-0.411986943,'80':-0.3998869,'81':-0.567124981,'82':-0.50873108,'83':-0.736595351,'84':-0.898631743},"200":{'60':0.484668382,'61':0.273070473,'62':0.377361322,'63':0.739130344,'64':0.886817702,'65':1.036051306,'66':0.78505705,'67':0.575892762,'68':0.500060319,'69':0.404455751,'70':0.350389855,'71':0.286146135,'72':0.121388095,'73':0.074011158,'74':0.053053863,'75':0.006194897,'76':-0.094434304,'77':-0.176446495,'78':-0.248648847,'79':-0.433519266,'80':-0.360557949,'81':-0.235148599,'82':-0.42522908,'83':-0.447786794,'84':-0.78171078},"210":{'60':0.484668382,'61':0.563222571,'62':-0.100973417,'63':1.250731561,'64':1.164819937,'65':1.458734902,'66':0.828841039,'67':0.653877368,'68':0.690129602,'69':0.475145554,'70':0.415604409,'71':0.322683634,'72':0.355957367,'73':0.233467805,'74':0.177356828,'75':0.088361842,'76':0.010157117,'77':-0.040221842,'78':-0.157003154,'79':0.070697159,'80':-0.254419455,'81':-0.289971013,'82':-0.268730276,'83':-0.158978238,'84':-0.78171078},"220":{'60':0.484668382,'61':0.06166644,'62':0.74803961,'63':1.695711239,'64':1.527864974,'65':1.483654984,'66':0.953108905,'67':0.705998411,'68':0.817756303,'69':0.699453551,'70':0.711898425,'71':0.525693189,'72':0.488631615,'73':0.387285519,'74':0.325527768,'75':0.260803804,'76':0.181375033,'77':0.102497019,'78':0.038178048,'79':-0.051193897,'80':-0.234008117,'81':-0.308731895,'82':-0.394865541,'83':-0.386253464,'84':-0.411686499},"230":{'60':0.484668382,'61':0.06166644,'62':0.06166644,'63':1.538475767,'64':2.185668494,'65':1.347873261,'66':1.147566133,'67':0.749418745,'68':0.69282131,'69':0.501920129,'70':0.849513343,'71':0.507983783,'72':0.605468614,'73':0.505638943,'74':0.459964087,'75':0.288343339,'76':0.327550546,'77':0.197995394,'78':0.0070876,'79':0.758618061,'80':-0.324889482,'81':-0.283592416,'82':-0.172835908,'83':-0.439711816,'84':-0.411686499},"240":{'60':0.484668382,'61':0.06166644,'62':1.437793169,'63':1.584673513,'64':1.498889665,'65':0.895813148,'66':0.530160411,'67':0.657946893,'68':1.239205304,'69':0.646960574,'70':0.867737827,'71':0.826556874,'72':0.558714094,'73':0.592875552,'74':0.543963237,'75':0.290101381,'76':0.252737617,'77':0.204661647,'78':0.149553554,'79':0.27638187,'80':0.00064981,'81':0.124575607,'82':0.123245764,'83':-0.052368607,'84':-0.411686499},"250":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':0.600303848,'64':1.728478995,'65':0.733648129,'66':0.783754157,'67':1.25906845,'68':0.84705689,'69':1.06987098,'70':0.764673523,'71':0.711783063,'72':0.914561928,'73':0.581229705,'74':0.573430949,'75':0.472648326,'76':0.46154261,'77':0.323466396,'78':0.551366563,'79':0.585923233,'80':0.322380037,'81':0.440022092,'82':0.472914286,'83':0.713452858,'84':-0.411686499},"260":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':2.878357825,'65':2.090589328,'66':0.876237059,'67':0.937521143,'68':0.565334196,'69':1.100742319,'70':0.926193223,'71':1.004003416,'72':1.070057385,'73':0.481048731,'74':0.5862139,'75':0.768543862,'76':0.416415929,'77':0.585710822,'78':0.842364923,'79':0.60269981,'80':0.284810352,'81':0.404149856,'82':0.416983539,'83':-0.270531565,'84':-0.411686499},"270":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':3.597688608,'65':1.439696261,'66':2.025125482,'67':1.907961138,'68':1.03660177,'69':1.216559495,'70':0.906656151,'71':1.169761705,'72':0.684860176,'73':0.492898129,'74':0.492167665,'75':0.998020882,'76':0.403399417,'77':0.47537346,'78':0.558908659,'79':0.459108181,'80':0.213069907,'81':0.390879247,'82':0.08109255,'83':-0.268639499,'84':-0.188118687},"280":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':3.597688608,'65':3.116085367,'66':3.39152018,'67':2.272614305,'68':2.04301967,'69':1.221205342,'70':0.909717686,'71':1.063030409,'72':0.843418377,'73':1.05654294,'74':0.706543638,'75':0.805066605,'76':0.610631861,'77':0.592369377,'78':0.509571334,'79':0.492747953,'80':1.662165701,'81':0.621499814,'82':-0.268639499,'83':0.035449124,'84':0.035449124},"290":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':3.597688608,'65':3.116085367,'66':3.116085367,'67':1.808148003,'68':1.396264133,'69':0.798382445,'70':1.063652352,'71':1.004525325,'72':1.097056529,'73':1.00970054,'74':0.478695136,'75':0.729596618,'76':0.885226541,'77':0.669573673,'78':0.392789637,'79':0.831797123,'80':0.884048978,'81':2.096679522,'82':0.248000019,'83':0.035449124,'84':0.035449124},"300":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':3.597688608,'65':3.116085367,'66':0.472929206,'67':2.516313238,'68':1.556178414,'69':2.86306642,'70':0.509366593,'71':1.097319135,'72':0.958416441,'73':1.115640207,'74':0.836546785,'75':0.92194283,'76':1.093058042,'77':1.341875316,'78':0.95802715,'79':0.924053824,'80':2.711845936,'81':0.460550913,'82':0.248000019,'83':0.035449124,'84':0.035449124},"310":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':3.597688608,'65':3.116085367,'66':0.472929206,'67':0.461846893,'68':2.813718881,'69':1.128550904,'70':1.380060637,'71':1.158665587,'72':0.751666162,'73':1.380010557,'74':0.39936279,'75':0.941124306,'76':1.350444772,'77':1.052449359,'78':1.81327668,'79':1.69088374,'80':1.287791073,'81':0.460550913,'82':0.248000019,'83':0.035449124,'84':0.035449124},"320":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':3.597688608,'65':3.116085367,'66':0.472929206,'67':0.461846893,'68':0.735264695,'69':1.951131369,'70':1.15075437,'71':1.518525908,'72':1.915863911,'73':1.002047127,'74':1.406905741,'75':-0.040035569,'76':1.214586625,'77':1.217186695,'78':1.062753924,'79':0.777309975,'80':-0.13626379,'81':-0.13626379,'82':0.248000019,'83':0.035449124,'84':0.035449124},"330":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':3.597688608,'65':2.884648748,'66':0.472929206,'67':1.856378345,'68':1.856378345,'69':0.514792956,'70':0.837852433,'71':1.443535851,'72':0.682341035,'73':1.88376081,'74':0.275518379,'75':-0.189117865,'76':-0.242379439,'77':-0.120957346,'78':-0.120957346,'79':-0.13626379,'80':0.329507345,'81':-0.13626379,'82':0.248000019,'83':0.035449124,'84':0.035449124},"340":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':3.597688608,'65':2.65321213,'66':2.65321213,'67':1.856378345,'68':1.05411102,'69':1.05411102,'70':-0.322496966,'71':-0.554564385,'72':1.651191854,'73':1.308179105,'74':0.806086106,'75':0.440674925,'76':0.134584838,'77':-0.60340504,'78':-1.304668616,'79':0.795278481,'80':0.329507345,'81':0.795278481,'82':0.248000019,'83':0.035449124,'84':0.035449124},"350":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':3.597688608,'65':2.65321213,'66':2.65321213,'67':1.856378345,'68':1.856378345,'69':-0.620130631,'70':-1.492104955,'71':0.347503842,'72':1.184974346,'73':1.081869269,'74':0.767019785,'75':0.435606951,'76':1.501976319,'77':0.508796452,'78':0.097858536,'79':0,'80':0.795278481,'81':0.795278481,'82':1.4165551,'83':1.4165551,'84':1.4165551},"360":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':3.597688608,'65':2.65321213,'66':2.65321213,'67':2.254795237,'68':0.990225283,'69':0.12407222,'70':-1.492104955,'71':0.347503842,'72':2.187112639,'73':1.412190862,'74':0.002961893,'75':2.185604756,'76':2.00519208,'77':1.456683641,'78':0,'79':0,'80':0,'81':0.795278481,'82':1.4165551,'83':1.4165551,'84':1.4165551},"370":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':3.597688608,'65':2.65321213,'66':2.65321213,'67':2.65321213,'68':0.12407222,'69':0.12407222,'70':1.02031366,'71':1.9165551,'72':1.471744726,'73':0.238529043,'74':0.816068137,'75':0.862601819,'76':1.908318541,'77':0.002216409,'78':0.002216409,'79':0,'80':0,'81':0.795278481,'82':1.4165551,'83':1.4165551,'84':1.4165551},"380":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':3.597688608,'65':2.65321213,'66':2.65321213,'67':2.65321213,'68':0.12407222,'69':1.02031366,'70':1.9165551,'71':1.9165551,'72':0.756376813,'73':0.497452928,'74':0.862601819,'75':1.469718915,'76':1.469718915,'77':0.727489822,'78':0.002216409,'79':0,'80':0,'81':0.795278481,'82':1.4165551,'83':1.4165551,'84':1.4165551},"390":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':3.597688608,'65':2.65321213,'66':2.65321213,'67':2.65321213,'68':0.12407222,'69':1.02031366,'70':1.9165551,'71':0.756376813,'72':0.756376813,'73':0.756376813,'74':0.792753693,'75':1.486674594,'76':1.452763235,'77':0,'78':0,'79':0,'80':0,'81':0.795278481,'82':1.4165551,'83':1.4165551,'84':1.4165551},"400":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':3.597688608,'65':2.65321213,'66':2.65321213,'67':2.65321213,'68':0.12407222,'69':1.02031366,'70':0.814576064,'71':-0.287402971,'72':0.756376813,'73':0.792753693,'74':0.792753693,'75':0.792753693,'76':0,'77':0,'78':0,'79':0,'80':0,'81':0.795278481,'82':1.4165551,'83':1.4165551,'84':1.4165551},"410":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':3.597688608,'65':2.65321213,'66':2.65321213,'67':2.65321213,'68':0.12407222,'69':0,'70':-0.287402971,'71':-0.287402971,'72':-0.287402971,'73':0.277112325,'74':0.277112325,'75':0.277112325,'76':0,'77':0,'78':0,'79':0,'80':0,'81':0.795278481,'82':1.4165551,'83':1.4165551,'84':1.4165551},"420":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':3.597688608,'65':2.65321213,'66':2.65321213,'67':2.65321213,'68':0.12407222,'69':0,'70':0,'71':-0.287402971,'72':-0.955266034,'73':-0.238529043,'74':-0.238529043,'75':-0.238529043,'76':0,'77':0,'78':0,'79':0,'80':0,'81':0.795278481,'82':1.4165551,'83':1.4165551,'84':1.4165551},"430":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':3.597688608,'65':2.65321213,'66':2.65321213,'67':2.65321213,'68':0.12407222,'69':0,'70':0,'71':0,'72':-1.623129096,'73':-0.238529043,'74':-0.238529043,'75':-0.238529043,'76':0,'77':0,'78':0,'79':0,'80':0,'81':0.795278481,'82':1.4165551,'83':1.4165551,'84':1.4165551},"440":{'60':0.484668382,'61':0.06166644,'62':-0.237185472,'63':1.680251568,'64':3.597688608,'65':2.65321213,'66':2.65321213,'67':2.65321213,'68':0.12407222,'69':0,'70':0,'71':0,'72':-1.623129096,'73':-0.238529043,'74':-0.238529043,'75':-0.238529043,'76':0,'77':0,'78':0,'79':0,'80':0,'81':0.795278481,'82':1.4165551,'83':1.4165551,'84':1.4165551}}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB654AA686 = function(val, param) { // Waist + Height for Midsection
var info = {"26":{'60':-0.29139065,'61':-0.132671215,'62':-1.038785902,'63':-0.039080633,'64':-1.0748746,'65':-0.384694324,'66':0.454782032,'67':-2.02243471,'68':-2.649047948,'69':-1.98878325,'70':-0.594285886,'71':-0.037311802,'72':-0.136671439,'73':-0.924761099,'74':-0.256208844,'75':-0.828974372,'76':-0.828974372,'77':0.689696345,'78':-0.056657881,'79':-1.122568168,'80':-1.122568168,'81':-1.122568168,'82':-0.398403869,'83':0.216502564,'84':0.831408997},"27":{'60':-0.29139065,'61':-0.132671215,'62':-0.662110659,'63':-0.303300232,'64':-1.0748746,'65':-0.732670139,'66':-0.630001362,'67':-0.595077859,'68':-0.895368736,'69':-0.621701696,'70':-0.811764825,'71':-0.360332765,'72':-0.136671439,'73':-0.924761099,'74':-0.256208844,'75':-0.828974372,'76':-0.828974372,'77':0.689696345,'78':-0.056657881,'79':-1.122568168,'80':-1.122568168,'81':-1.122568168,'82':-0.398403869,'83':0.216502564,'84':0.831408997},"28":{'60':-0.0134423,'61':-0.353320015,'62':-0.297911216,'63':-0.039452088,'64':-0.700139126,'65':-0.70507046,'66':-0.685394452,'67':-0.599241816,'68':-0.722490638,'69':-0.43466622,'70':-0.694866746,'71':-0.306212993,'72':-0.378065221,'73':-0.557507539,'74':-0.634832156,'75':-0.444793371,'76':-0.828974372,'77':0.689696345,'78':-0.056657881,'79':-1.122568168,'80':-1.122568168,'81':-1.122568168,'82':-0.398403869,'83':0.216502564,'84':0.831408997},"29":{'60':-0.432163605,'61':-0.229822288,'62':-0.631279705,'63':-0.291508859,'64':-0.343951338,'65':-0.490204309,'66':-0.560651581,'67':-0.421698694,'68':-0.514358924,'69':-0.600094951,'70':-0.644523987,'71':-0.357603447,'72':-0.35024673,'73':-0.622649049,'74':-0.575956403,'75':-0.351068214,'76':-0.616423274,'77':0.689696345,'78':-0.056657881,'79':-1.122568168,'80':-1.122568168,'81':-1.122568168,'82':-0.398403869,'83':0.216502564,'84':0.831408997},"30":{'60':0.019388158,'61':-0.105353068,'62':-0.241451956,'63':-0.12067318,'64':-0.350456296,'65':-0.264946655,'66':-0.473643762,'67':-0.357597598,'68':-0.392504356,'69':-0.508029586,'70':-0.526359352,'71':-0.402984214,'72':-0.510768348,'73':-0.625186557,'74':-0.401382189,'75':-0.183410112,'76':-0.889357389,'77':-0.310168625,'78':-0.056657881,'79':-1.122568168,'80':-1.122568168,'81':-1.122568168,'82':-0.398403869,'83':0.216502564,'84':0.831408997},"31":{'60':1.683144579,'61':0.010006955,'62':-0.118548127,'63':0.077626176,'64':-0.065382437,'65':-0.146658661,'66':-0.134285428,'67':-0.252805517,'68':-0.1819149,'69':-0.294533917,'70':-0.330896623,'71':-0.26440003,'72':-0.354670363,'73':-0.384360555,'74':-0.409900703,'75':-0.495116478,'76':-0.305826517,'77':-0.264522906,'78':-0.180332309,'79':-1.05836806,'80':-1.344324128,'81':-1.344324128,'82':-0.398403869,'83':0.216502564,'84':0.831408997},"32":{'60':0.056557662,'61':0.093884249,'62':0.222721203,'63':0.241974263,'64':0.117306447,'65':-0.007331147,'66':0.015661103,'67':-0.045053661,'68':-0.100688764,'69':-0.165484999,'70':-0.183555775,'71':-0.153290264,'72':-0.247153664,'73':-0.276480252,'74':-0.258954847,'75':-0.237570648,'76':-0.224087314,'77':-0.333658616,'78':-0.093358259,'79':-0.628108434,'80':-1.397842704,'81':-1.566080088,'82':-0.398403869,'83':0.216502564,'84':0.831408997},"33":{'60':-0.075618961,'61':0.297417796,'62':0.659030489,'63':0.009828602,'64':0.00695563,'65':0.056215117,'66':0.030656725,'67':-0.008623425,'68':-0.008941199,'69':-0.035229881,'70':-0.07253427,'71':-0.082282263,'72':-0.17961687,'73':-0.168414428,'74':-0.197984618,'75':-0.199376659,'76':-0.18348063,'77':-0.40142487,'78':-0.384988551,'79':-1.106124572,'80':-0.857985622,'81':-0.148149169,'82':0.061193982,'83':0.216502564,'84':0.831408997},"34":{'60':0.121034904,'61':-0.4208,'62':0.435534583,'63':0.319315971,'64':0.195954787,'65':0.223180568,'66':0.298859183,'67':0.141655222,'68':0.152080428,'69':0.242386595,'70':0.098064379,'71':0.13925738,'72':0.052830832,'73':0.012031212,'74':-0.013330081,'75':-0.027748806,'76':-0.009694539,'77':-0.356801453,'78':-0.185447234,'79':-0.228793405,'80':0.098247794,'81':0.094404168,'82':0.067739248,'83':0.980389685,'84':0.415704499},"35":{'60':-0.512022424,'61':-0.573656973,'62':-0.190234145,'63':0.383731181,'64':0.472232655,'65':0.158531668,'66':0.282925501,'67':0.055781709,'68':0.147837395,'69':0.145201973,'70':0.128619571,'71':0.091769454,'72':0.045670279,'73':-0.083617242,'74':0.012167279,'75':-0.0139443,'76':-0.102703566,'77':-0.079245102,'78':-0.050411409,'79':-0.497801501,'80':-0.156303894,'81':0.162123246,'82':0.188413891,'83':-0.0078619,'84':0},"36":{'60':-0.512022424,'61':-0.573656973,'62':-0.233334096,'63':0.188031049,'64':0.218383667,'65':0.123766707,'66':0.169847297,'67':0.173091806,'68':0.201773611,'69':0.251617003,'70':0.22573945,'71':0.15097652,'72':0.106024152,'73':0.117909263,'74':0.1369651,'75':0.025420846,'76':0.14328088,'77':0.021172115,'78':0.136613511,'79':-0.638913342,'80':0.042136049,'81':0.199753676,'82':0.687749936,'83':0.409299975,'84':0},"37":{'60':-0.862566343,'61':-0.344743092,'62':0.490144598,'63':0.407349832,'64':0.897719423,'65':0.255882346,'66':0.183104222,'67':0.128595367,'68':0.277369584,'69':0.359951095,'70':0.209299896,'71':0.177358852,'72':0.143292228,'73':0.08454989,'74':-0.11410001,'75':0.170787753,'76':0.093481602,'77':0.08934634,'78':0.062399334,'79':-0.25045364,'80':0.099172191,'81':0.416517361,'82':0.130962081,'83':-0.142371209,'84':-0.415704499},"38":{'60':-0.862566343,'61':1.715511332,'62':0.197103266,'63':0.274339789,'64':0.239213052,'65':0.480852789,'66':0.281089518,'67':0.108921633,'68':0.187078492,'69':0.260451728,'70':0.298370816,'71':0.249879087,'72':0.1456912,'73':0.160119489,'74':0.174250946,'75':0.238021598,'76':0.266425066,'77':0.283702291,'78':0.216588901,'79':0.014950198,'80':0.778790434,'81':0.247750632,'82':0.023925565,'83':-0.694042393,'84':-0.831408997},"39":{'60':0.418225329,'61':0.019759836,'62':0.098415984,'63':0.258626214,'64':0.439986024,'65':0.414246718,'66':0.323381985,'67':0.078510424,'68':0.427849121,'69':0.295111235,'70':0.436489627,'71':0.393361384,'72':0.084899225,'73':0.198171893,'74':0.166119104,'75':0.312526377,'76':0.39172437,'77':0.124596651,'78':0.250026017,'79':-0.165358472,'80':0.412839091,'81':0.041725592,'82':-0.211786758,'83':0.261796203,'84':-0.831408997},"40":{'60':0.539190501,'61':0.375162245,'62':0.225459078,'63':0.409677991,'64':0.586365814,'65':0.299238477,'66':0.16362381,'67':0.120390985,'68':0.039297605,'69':0.157108338,'70':0.067612033,'71':0.050326637,'72':0.087443182,'73':0.021986869,'74':-0.044996438,'75':0.075835981,'76':-0.208785868,'77':0.356490429,'78':0.302379264,'79':-0.905196103,'80':-0.468884756,'81':-0.200706114,'82':0.08568927,'83':0.039994215,'84':0},"41":{'60':1.058621165,'61':0.902086015,'62':-0.129741973,'63':-0.411614971,'64':0.176004801,'65':0.237855994,'66':0.198374915,'67':-0.270086166,'68':0.058968601,'69':0.377592647,'70':0.377496291,'71':0.060264363,'72':0.304062764,'73':-0.062713731,'74':0.036163369,'75':0.250097076,'76':0.140730723,'77':-0.454121865,'78':-0.028815632,'79':-0.786207435,'80':-0.472588995,'81':-0.7899155,'82':-1.554140636,'83':0,'84':0},"42":{'60':1.058621165,'61':1.259195418,'62':1.259195418,'63':0.494318957,'64':0.03364695,'65':0.42084197,'66':0.187597828,'67':-0.118248088,'68':-0.061897643,'69':0.133486711,'70':-0.042312494,'71':0.028510705,'72':0.01147285,'73':-0.099608505,'74':-0.130656752,'75':-0.159870523,'76':-0.086314623,'77':0.046749975,'78':-0.233592971,'79':-0.532823979,'80':-0.502107353,'81':-1.139538806,'82':-1.554140636,'83':0,'84':0},"43":{'60':1.058621165,'61':1.259195418,'62':1.259195418,'63':0.007160458,'64':-0.375277773,'65':-0.445049813,'66':0.508431493,'67':0.029738329,'68':0.198913089,'69':0.428012261,'70':1.026697876,'71':0.483887885,'72':0.098895294,'73':0.196570329,'74':0.008064585,'75':0.017562933,'76':0.470350558,'77':0.211221389,'78':-0.675009547,'79':-0.911345768,'80':-0.649994044,'81':-1.661028087,'82':-1.554140636,'83':0,'84':0},"44":{'60':1.058621165,'61':1.259195418,'62':1.259195418,'63':-0.479998042,'64':-0.944422434,'65':-0.108301939,'66':0.398478147,'67':0.25142763,'68':0.415079239,'69':0.638804341,'70':0.567727087,'71':0.083906513,'72':0.1402037,'73':0.89360522,'74':0.363215297,'75':0.666830667,'76':0.848358356,'77':0.435233707,'78':-0.182187255,'79':-1.802272441,'80':-1.405173072,'81':-2.182517368,'82':-1.554140636,'83':0,'84':0},"45":{'60':1.673598786,'61':1.673598786,'62':1.259195418,'63':-0.773713737,'64':-0.386235318,'65':-0.903553995,'66':-0.095853129,'67':-0.650671078,'68':0.240545395,'69':0.535429596,'70':0.261647272,'71':0.341604337,'72':-0.223327878,'73':0.154729814,'74':0.157303183,'75':-0.754462216,'76':0.210598104,'77':-0.70095829,'78':0.1431051,'79':0.068210391,'80':-1.405173072,'81':-0.627828775,'82':-1.554140636,'83':0,'84':0},"46":{'60':1.673598786,'61':1.673598786,'62':0.731246057,'63':-0.492410205,'64':-0.773713737,'65':-0.079012358,'66':-0.64082749,'67':-0.093384124,'68':0.219512887,'69':0.75724831,'70':1.111522916,'71':0.866941857,'72':0.685480497,'73':0.078693013,'74':0.35075482,'75':0.696423192,'76':-0.393404126,'77':0.883444528,'78':1.194973844,'79':1.393574995,'80':0.068210391,'81':-0.627828775,'82':-1.554140636,'83':0,'84':0},"47":{'60':1.673598786,'61':1.673598786,'62':0.731246057,'63':-0.211106672,'64':-0.492410205,'65':-0.079012358,'66':0.880021371,'67':-0.316496394,'68':1.013432498,'69':0.678466382,'70':0.803400237,'71':0.856162516,'72':-0.128171335,'73':0.388053249,'74':0.891960194,'75':0.262153553,'76':-0.242939579,'77':0.174828426,'78':1.060267342,'79':0.764249558,'80':-0.132143568,'81':-0.480163151,'82':-1.554140636,'83':0,'84':0},"48":{'60':1.673598786,'61':1.673598786,'62':0.731246057,'63':-0.211106672,'64':-0.211106672,'65':-0.079012358,'66':0.880021371,'67':2.117005019,'68':1.513657641,'69':1.251414997,'70':1.261524286,'71':1.448432543,'72':0.627007157,'73':0.034076989,'74':0.761146433,'75':1.030080405,'76':0.040833731,'77':0.20742974,'78':0.41229697,'79':0.41229697,'80':-0.332497526,'81':-0.332497526,'82':-1.554140636,'83':0,'84':0},"49":{'60':1.673598786,'61':1.673598786,'62':0.731246057,'63':-0.211106672,'64':1.107233472,'65':2.425573615,'66':1.279673879,'67':1.279673879,'68':2.258992923,'69':1.9984244,'70':1.944965997,'71':1.575860148,'72':-0.29159222,'73':0.98475226,'74':1.034677717,'75':1.254532582,'76':0.840810601,'77':-0.497878156,'78':0.41229697,'79':-0.332497526,'80':-0.332497526,'81':-0.332497526,'82':-1.554140636,'83':0,'84':0},"50":{'60':1.673598786,'61':1.673598786,'62':0.731246057,'63':1.107233472,'64':2.425573615,'65':2.425573615,'66':1.279673879,'67':1.65005319,'68':1.793000747,'69':2.671035653,'70':2.097859687,'71':1.883793527,'72':1.43585897,'73':0.833632824,'74':1.070117996,'75':0.88940917,'76':-0.058810902,'77':-0.058810902,'78':-0.497878156,'79':-0.332497526,'80':-0.332497526,'81':-0.332497526,'82':-1.554140636,'83':0,'84':0},"51":{'60':1.673598786,'61':1.673598786,'62':0.731246057,'63':2.425573615,'64':2.425573615,'65':2.425573615,'66':1.279673879,'67':1.279673879,'68':1.956567353,'69':1.180411908,'70':1.140676475,'71':1.108201931,'72':0.869327687,'73':1.684624515,'74':0.50406109,'75':0.874586567,'76':0.380256352,'77':-0.497878156,'78':-0.497878156,'79':-0.332497526,'80':-0.332497526,'81':-0.332497526,'82':-1.554140636,'83':0,'84':0},"52":{'60':1.673598786,'61':1.673598786,'62':0.731246057,'63':2.425573615,'64':2.425573615,'65':2.425573615,'66':1.279673879,'67':1.522322892,'68':1.522322892,'69':0.866759957,'70':0.193142868,'71':0.705819484,'72':1.200441946,'73':1.030102955,'74':0.859763964,'75':0.859763964,'76':0.380256352,'77':0.050646118,'78':0.050646118,'79':-0.332497526,'80':-0.332497526,'81':-0.332497526,'82':-1.554140636,'83':0,'84':0},"53":{'60':1.673598786,'61':1.673598786,'62':0.731246057,'63':2.425573615,'64':2.425573615,'65':2.425573615,'66':1.279673879,'67':1.450933955,'68':1.450933955,'69':2.501250904,'70':0.211197023,'71':1.46137839,'72':1.708689621,'73':1.623520126,'74':0.859763964,'75':2.556004258,'76':1.577587325,'77':0.599170392,'78':0.599170392,'79':-0.332497526,'80':-0.332497526,'81':-0.332497526,'82':-1.554140636,'83':0,'84':0},"54":{'60':1.673598786,'61':1.673598786,'62':0.731246057,'63':2.425573615,'64':2.425573615,'65':2.425573615,'66':-0.350175463,'67':1.379545017,'68':1.75344698,'69':1.75344698,'70':2.501250904,'71':2.216937297,'72':2.216937297,'73':2.216937297,'74':2.556004258,'75':2.556004258,'76':1.577587325,'77':0.599170392,'78':0.599170392,'79':-0.332497526,'80':-0.332497526,'81':-0.332497526,'82':-1.554140636,'83':0,'84':0},"55":{'60':1.673598786,'61':1.673598786,'62':0.731246057,'63':2.425573615,'64':2.425573615,'65':2.425573615,'66':-0.350175463,'67':1.379545017,'68':1.379545017,'69':2.501250904,'70':-1.164771942,'71':0.526082677,'72':2.216937297,'73':1.481149609,'74':0.745361922,'75':2.556004258,'76':1.577587325,'77':0.599170392,'78':0.599170392,'79':-0.332497526,'80':-0.332497526,'81':-0.332497526,'82':-1.554140636,'83':0,'84':0},"56":{'60':1.673598786,'61':1.673598786,'62':0.731246057,'63':2.425573615,'64':2.425573615,'65':2.425573615,'66':-0.350175463,'67':-1.969715454,'68':-1.969715454,'69':-1.164771942,'70':-1.164771942,'71':-1.164771942,'72':1.016109622,'73':0.745361922,'74':0.745361922,'75':0.745361922,'76':1.577587325,'77':0.599170392,'78':0.599170392,'79':-0.332497526,'80':-0.332497526,'81':-0.332497526,'82':-1.554140636,'83':0,'84':0},"57":{'60':1.673598786,'61':1.673598786,'62':0.731246057,'63':2.425573615,'64':2.425573615,'65':2.425573615,'66':-0.350175463,'67':-1.969715454,'68':-1.969715454,'69':-1.050658507,'70':-0.338998557,'71':-0.383846513,'72':-0.184718053,'73':2.703153941,'74':1.274158306,'75':0.745361922,'76':1.577587325,'77':0.599170392,'78':0.599170392,'79':-0.332497526,'80':-0.332497526,'81':-0.332497526,'82':-1.554140636,'83':0,'84':0},"58":{'60':1.673598786,'61':1.673598786,'62':0.731246057,'63':2.425573615,'64':2.425573615,'65':2.425573615,'66':-0.350175463,'67':-1.969715454,'68':-1.969715454,'69':-0.131601559,'70':0.486774827,'71':-0.383846513,'72':-0.184718053,'73':2.703153941,'74':1.802954691,'75':0.745361922,'76':1.577587325,'77':0.599170392,'78':0.599170392,'79':-0.332497526,'80':-0.332497526,'81':-0.332497526,'82':-1.554140636,'83':0,'84':0}}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB691AA725 = function(val, param) { // Weight + Height for Midsection
var info = {"100":{'60':0,'61':-2.292325236,'62':0.947368935,'63':0.244829992,'64':-2.283931166,'65':-2.031130114,'66':-0.926225216,'67':-0.076229791,'68':0.216239804,'69':0.280897749,'70':-0.305159232,'71':2.246971614,'72':-0.063303567,'73':-1.367952065,'74':-0.27739904,'75':0.129292244,'76':0.535983527,'77':0.938686803,'78':0.938686803,'79':0.938686803,'80':-0.028409712,'81':2.053056499,'82':0.590546596,'83':0,'84':0},"110":{'60':-0.573081309,'61':-0.232544823,'62':0.075905323,'63':-0.435930197,'64':0.162066977,'65':0.574137238,'66':0.82955048,'67':0.244015393,'68':0.360543717,'69':0.216649066,'70':-0.281582702,'71':0.48580309,'72':-0.063303567,'73':-1.367952065,'74':-0.27739904,'75':0.129292244,'76':0.535983527,'77':0.938686803,'78':0.938686803,'79':0.938686803,'80':-0.028409712,'81':2.053056499,'82':0.590546596,'83':0,'84':0},"120":{'60':-0.073103457,'61':-0.056279724,'62':0.053209373,'63':-0.007386654,'64':0.300680353,'65':0.027336272,'66':0.138751869,'67':0.009371949,'68':0.391266655,'69':0.180169398,'70':0.077577631,'71':0.060253939,'72':-0.036442148,'73':0.265912334,'74':-0.205209719,'75':0.129292244,'76':0.535983527,'77':0.938686803,'78':0.938686803,'79':0.938686803,'80':-0.028409712,'81':2.053056499,'82':0.590546596,'83':0,'84':0},"130":{'60':-0.136955998,'61':-0.227977841,'62':-0.241554494,'63':-0.048394361,'64':0.232295491,'65':0.085410109,'66':-0.010658819,'67':0.074727198,'68':0.388483295,'69':0.225470921,'70':0.068699187,'71':0.00631672,'72':-0.179243453,'73':0.369992593,'74':0.347990128,'75':0.123640414,'76':0.535983527,'77':0.938686803,'78':0.938686803,'79':0.938686803,'80':-0.028409712,'81':2.053056499,'82':0.590546596,'83':0,'84':0},"140":{'60':-0.08847506,'61':0.167780927,'62':0.407906914,'63':0.0173974,'64':0.063758787,'65':0.011916107,'66':0.249462663,'67':0.03148929,'68':0.180363564,'69':0.120162479,'70':0.267457472,'71':-0.053450325,'72':0.248119483,'73':0.489426152,'74':0.365675029,'75':0.085942297,'76':0.058924206,'77':-0.582670187,'78':0.657062032,'79':-0.028409712,'80':-0.028409712,'81':2.053056499,'82':0.590546596,'83':0,'84':0},"150":{'60':1.18424E-15,'61':0.35891554,'62':0.034506247,'63':0.123714238,'64':0.143080906,'65':0.154159939,'66':0.091192693,'67':0.091484475,'68':0.119694899,'69':0.185259208,'70':0.235141135,'71':0.035857352,'72':0.116304141,'73':0.371016676,'74':0.134475707,'75':-0.032602123,'76':0.32406617,'77':0.318422146,'78':-0.130077703,'79':0.75848424,'80':-0.028409712,'81':2.053056499,'82':0.590546596,'83':0,'84':0},"160":{'60':0.42253843,'61':-0.152920349,'62':-0.541081529,'63':-0.130158723,'64':-0.098408784,'65':0.075524304,'66':0.005148356,'67':0.025961288,'68':-0.013727598,'69':0.099664315,'70':0.157192323,'71':0.018126448,'72':0.188409006,'73':0.29112618,'74':0.169993803,'75':0.028224823,'76':0.156048833,'77':0.422796699,'78':0.480016562,'79':0.525837324,'80':1.794017348,'81':2.053056499,'82':0.590546596,'83':0,'84':0},"170":{'60':0.010858872,'61':0.55233805,'62':-0.17137953,'63':0.020413904,'64':0.003955362,'65':0.032809706,'66':-0.025334702,'67':0.015273895,'68':0.030787239,'69':0.084615576,'70':0.109809935,'71':0.02904567,'72':0.153488874,'73':0.10592276,'74':0.14410643,'75':0.295653083,'76':0.101731847,'77':0.365960233,'78':0.795781011,'79':1.101567553,'80':1.702054556,'81':2.053056499,'82':0.590546596,'83':0,'84':0},"180":{'60':2.36848E-15,'61':0.010858872,'62':0.061245997,'63':0.076759169,'64':0.030637517,'65':-0.136352832,'66':-0.111239694,'67':0.020227467,'68':0.041568975,'69':0.011194653,'70':0.011177945,'71':0.029375207,'72':0.091484327,'73':0.103659156,'74':0.053017576,'75':0.055745253,'76':0.149262342,'77':0.508393236,'78':0.31147559,'79':0.461350232,'80':0.814048314,'81':-0.637486261,'82':0.590546596,'83':0,'84':0},"190":{'60':2.36848E-15,'61':-0.008144154,'62':4.44089E-16,'63':-0.07134882,'64':-0.261426755,'65':-0.001386994,'66':0.167578946,'67':0.154261354,'68':0.066943193,'69':0.012786735,'70':-0.051309285,'71':-0.034701139,'72':0.029565274,'73':0.025979593,'74':0.068709248,'75':0.019239128,'76':0.060732643,'77':0.271808901,'78':0.035297799,'79':0.459578522,'80':0.300387877,'81':0.028972103,'82':-0.023469833,'83':0.295273298,'84':0},"200":{'60':-0.016288308,'61':0,'62':0.229181911,'63':-0.085187015,'64':-0.268568889,'65':0.128553416,'66':0.010642337,'67':0.02987756,'68':0.083587741,'69':-0.022336976,'70':-0.023401955,'71':-0.006107553,'72':-0.007994909,'73':-0.017922549,'74':0.017050619,'75':0.00635732,'76':-0.010180452,'77':0.166820464,'78':0.308986057,'79':0.725699282,'80':0.433783815,'81':0.155571195,'82':0.147636649,'83':-1.9984E-15,'84':0},"210":{'60':-0.016288308,'61':0,'62':0,'63':0.240323884,'64':0.022908337,'65':-0.245148936,'66':-0.096791702,'67':0.043002017,'68':-0.01052633,'69':-0.057462264,'70':-0.101986986,'71':-0.135251837,'72':-0.046039972,'73':-0.001360552,'74':-0.056684756,'75':-0.003679802,'76':-0.114883809,'77':0.086325601,'78':-0.283800861,'79':0.822645903,'80':0.167829261,'81':0.164882917,'82':0.222699305,'83':-0.295273298,'84':0},"220":{'60':-0.016288308,'61':0,'62':-0.052036687,'63':0.253763583,'64':0.034215855,'65':-0.230227281,'66':-0.077037091,'67':0.16953133,'68':-0.07177661,'69':-0.009390828,'70':-0.069761291,'71':-0.077402443,'72':-0.012096283,'73':-0.008123767,'74':0.012753883,'75':-0.116807566,'76':-0.046047188,'77':-0.004592777,'78':-0.063531763,'79':0.352939151,'80':-0.139494205,'81':-0.000939498,'82':-0.175091595,'83':3.55271E-15,'84':0},"230":{'60':-0.016288308,'61':0,'62':0,'63':-0.224891207,'64':0.610932853,'65':0.121971387,'66':0.518536198,'67':0.165090178,'68':0.135726755,'69':-0.209111075,'70':-0.086432607,'71':-0.158893634,'72':-0.099197478,'73':0.010775617,'74':-0.128822467,'75':-0.094697575,'76':-0.056661313,'77':-0.284735107,'78':-0.098659784,'79':-0.138548111,'80':-0.231544749,'81':-0.076597603,'82':-0.054793109,'83':-0.18289967,'84':0},"240":{'60':-0.016288308,'61':0,'62':-1.445526263,'63':-0.481842088,'64':-0.142668313,'65':-0.080867862,'66':-0.173540612,'67':0.405635382,'68':-0.021307314,'69':-0.137473799,'70':-0.145761702,'71':-0.162475874,'72':-0.180344257,'73':-0.120910628,'74':-0.007854531,'75':-0.255362691,'76':-0.266229835,'77':-0.363553936,'78':-0.124812331,'79':0.568486555,'80':-0.020320561,'81':-0.301622583,'82':0.272010859,'83':0.225241653,'84':0},"250":{'60':-0.016288308,'61':0,'62':0,'63':-0.722763131,'64':0.222407502,'65':-0.391264023,'66':-0.130560531,'67':0.22591536,'68':0.024999977,'69':-0.245531568,'70':0.048854814,'71':-0.248717257,'72':0.088876942,'73':-0.129819043,'74':-0.169751477,'75':-0.411430574,'76':-0.040317101,'77':-0.379864332,'78':-0.348404811,'79':0.48303435,'80':-0.222904148,'81':-0.120184008,'82':-0.228826183,'83':0.15623686,'84':0},"260":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.863476211,'65':0.582358282,'66':-0.323589584,'67':-0.006030188,'68':-0.224961298,'69':-0.377399613,'70':-0.118872368,'71':-0.370481146,'72':-0.170222339,'73':0.47605177,'74':-0.181425214,'75':-0.285688521,'76':-0.046557151,'77':-0.167705913,'78':-0.272338161,'79':0.229144703,'80':-0.244843867,'81':-0.427078703,'82':-0.190435793,'83':-0.847640991,'84':0},"270":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.889630007,'65':0.811168618,'66':0.435403784,'67':0.084972137,'68':-0.179745475,'69':-0.137720101,'70':-0.046755396,'71':0.436800193,'72':-0.213284268,'73':-0.529930283,'74':0.17677606,'75':-0.401991583,'76':0.161056652,'77':-0.505871583,'78':-0.161366165,'79':0.209714862,'80':-0.151501124,'81':-0.447140441,'82':-0.080064501,'83':0,'84':0},"280":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.889630007,'65':0.754821075,'66':0.49373173,'67':0.115450987,'68':-0.663142375,'69':-0.410566657,'70':-0.220462865,'71':-0.056546223,'72':-0.259109952,'73':-0.42309295,'74':-0.236864423,'75':-0.366805858,'76':-0.206675961,'77':-0.449583519,'78':-0.188462069,'79':0.365544366,'80':-0.201935906,'81':0.303723744,'82':0,'83':0,'84':0},"290":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.889630007,'65':0.754821075,'66':0.754821075,'67':-0.265245176,'68':-1.100865632,'69':-0.83680981,'70':-0.370939025,'71':0.019787123,'72':-0.033832034,'73':-0.305208914,'74':-0.357936159,'75':-0.5498251,'76':-0.326387855,'77':-1.087035341,'78':-0.164143192,'79':-0.26521495,'80':-0.349881028,'81':0,'82':0,'83':0,'84':0},"300":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.889630007,'65':0.754821075,'66':0.75413856,'67':0.261967757,'68':-1.362894079,'69':-0.48953153,'70':-0.022318814,'71':0.26945583,'72':0.110379617,'73':-0.115885233,'74':-0.416588099,'75':-0.625631525,'76':-0.633188589,'77':-0.117406283,'78':-0.225925359,'79':0.18509939,'80':0.098907062,'81':0,'82':0,'83':0,'84':0},"310":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.889630007,'65':0.754821075,'66':0.75413856,'67':-1.299806002,'68':-1.403787309,'69':-1.339397421,'70':-0.572897603,'71':-0.085505722,'72':0.231768348,'73':-0.099447229,'74':0.559143416,'75':-0.283249726,'76':-0.064943634,'77':-0.723839363,'78':1.331093678,'79':0.197814125,'80':0.049453531,'81':0,'82':0,'83':0,'84':0},"320":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.889630007,'65':0.754821075,'66':0.75413856,'67':-1.299806002,'68':-2.04308012,'69':-0.70674647,'70':-0.836855214,'71':-0.307820233,'72':-0.278469494,'73':0.183792584,'74':0.206340899,'75':0.063882148,'76':-0.729934556,'77':-0.98700922,'78':-0.046749975,'79':0.098907062,'80':0,'81':0,'82':0,'83':0,'84':0},"330":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.889630007,'65':0.377410538,'66':0.75413856,'67':-2.631262122,'68':-2.631262122,'69':-0.23590017,'70':-0.367856127,'71':-0.749699428,'72':-0.274989014,'73':-0.334292609,'74':-0.160181768,'75':-0.008677773,'76':-0.963634232,'77':-0.472051995,'78':-0.472051995,'79':0,'80':0,'81':0,'82':0,'83':0,'84':0},"340":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.889630007,'65':0,'66':0,'67':-2.631262122,'68':-1.315631061,'69':-1.315631061,'70':0.008236388,'71':-0.691627609,'72':-0.520530877,'73':-0.333950424,'74':-0.143035676,'75':-0.074574439,'76':-0.790303071,'77':-0.911179484,'78':-0.897354016,'79':0,'80':0,'81':0,'82':0,'83':0,'84':0},"350":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.889630007,'65':0,'66':0,'67':-2.631262122,'68':-2.631262122,'69':-8.88178E-16,'70':-1.77636E-15,'71':0.345813804,'72':0.058007942,'73':0.040706305,'74':0.056274804,'75':-0.403850154,'76':-0.906700901,'77':-1.248604911,'78':-0.925004952,'79':1.685836226,'80':0,'81':0,'82':0,'83':0,'84':0},"360":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.889630007,'65':0,'66':0,'67':-1.315631061,'68':-1.315631061,'69':0,'70':-1.77636E-15,'71':0.345813804,'72':0.691627609,'73':-0.08724947,'74':0.425045136,'75':-0.12190457,'76':-1.197076361,'77':-0.2813226,'78':1.685836226,'79':1.685836226,'80':1.685836226,'81':0,'82':0,'83':0,'84':0},"370":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.889630007,'65':0,'66':0,'67':0,'68':0,'69':0,'70':0,'71':0,'72':0.256652017,'73':1.479645154,'74':0.604233155,'75':0.111101758,'76':0.113833819,'77':0.448677008,'78':0.448677008,'79':1.685836226,'80':1.685836226,'81':0,'82':0,'83':0,'84':0},"380":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.889630007,'65':0,'66':0,'67':0,'68':0,'69':0,'70':0,'71':0,'72':-0.178323575,'73':0.65066079,'74':0.111101758,'75':-0.498488667,'76':-0.498488667,'77':0.354570656,'78':0.448677008,'79':1.685836226,'80':1.685836226,'81':0,'82':0,'83':0,'84':0},"390":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.889630007,'65':0,'66':0,'67':0,'68':0,'69':0,'70':0,'71':-0.178323575,'72':-0.178323575,'73':-0.178323575,'74':-1.122215168,'75':-1.257441638,'76':0.260464305,'77':0,'78':0,'79':1.685836226,'80':1.685836226,'81':0,'82':0,'83':0,'84':0},"400":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.889630007,'65':0,'66':0,'67':0,'68':0,'69':0,'70':0,'71':0,'72':-0.178323575,'73':-1.122215168,'74':-1.122215168,'75':-1.122215168,'76':0,'77':0,'78':0,'79':1.685836226,'80':1.685836226,'81':0,'82':0,'83':0,'84':0},"410":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.889630007,'65':0,'66':0,'67':0,'68':0,'69':-0.642922112,'70':0,'71':0,'72':0,'73':-1.062612839,'74':-1.062612839,'75':-1.062612839,'76':0,'77':0,'78':0,'79':1.685836226,'80':1.685836226,'81':0,'82':0,'83':0,'84':0},"420":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.889630007,'65':0,'66':0,'67':0,'68':0,'69':-0.642922112,'70':-0.642922112,'71':0,'72':0.044580894,'73':-1.003010509,'74':-1.003010509,'75':-1.003010509,'76':0,'77':0,'78':0,'79':1.685836226,'80':1.685836226,'81':0,'82':0,'83':0,'84':0},"430":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.889630007,'65':0,'66':0,'67':0,'68':0,'69':-0.642922112,'70':-0.642922112,'71':-0.642922112,'72':0.089161788,'73':-1.003010509,'74':-1.003010509,'75':-1.003010509,'76':0,'77':0,'78':0,'79':1.685836226,'80':1.685836226,'81':0,'82':0,'83':0,'84':0},"440":{'60':-0.016288308,'61':0,'62':0,'63':0.444815004,'64':0.889630007,'65':0,'66':0,'67':0,'68':0,'69':-0.642922112,'70':-0.642922112,'71':-0.642922112,'72':0.089161788,'73':-1.003010509,'74':-1.003010509,'75':-1.003010509,'76':0,'77':0,'78':0,'79':1.685836226,'80':1.685836226,'81':0,'82':0,'83':0,'84':0}}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB730AI764 = function(val, param) { // Weight + Waist for Midsection
var info = {"100":{'26':0,'27':0.856262318,'28':1.086478433,'29':0,'30':0.777673945,'31':0.770225732,'32':2.092242014,'33':0,'34':1.495710582,'35':1.495710582,'36':-0.632673144,'37':1.289311306,'38':0.875267843,'39':1.839053641,'40':1.839053641,'41':1.839053641,'42':1.195439218,'43':2.871913402,'44':2.871913402,'45':2.871913402,'46':0.588042063,'47':-0.640386369,'48':-0.640386369,'49':-0.640386369,'50':-0.804359991,'51':-0.804359991,'52':0.224961298,'53':0.224961298,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"110":{'26':-0.140456445,'27':-0.281695451,'28':-0.224311649,'29':0.358102157,'30':0.777673945,'31':0.770225732,'32':2.092242014,'33':0,'34':1.495710582,'35':1.495710582,'36':-0.632673144,'37':1.289311306,'38':0.875267843,'39':1.839053641,'40':1.839053641,'41':1.839053641,'42':1.195439218,'43':2.871913402,'44':2.871913402,'45':2.871913402,'46':0.588042063,'47':-0.640386369,'48':-0.640386369,'49':-0.640386369,'50':-0.804359991,'51':-0.804359991,'52':0.224961298,'53':0.224961298,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"120":{'26':-0.129131801,'27':-0.32222498,'28':-0.040007401,'29':0.18443258,'30':0.184636396,'31':0.344416735,'32':0.569149964,'33':1.5051323,'34':1.495240129,'35':1.495710582,'36':-0.632673144,'37':1.289311306,'38':0.875267843,'39':1.839053641,'40':1.839053641,'41':1.839053641,'42':1.195439218,'43':2.871913402,'44':2.871913402,'45':2.871913402,'46':0.588042063,'47':-0.640386369,'48':-0.640386369,'49':-0.640386369,'50':-0.804359991,'51':-0.804359991,'52':0.224961298,'53':0.224961298,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"130":{'26':-0.109280217,'27':-0.43338449,'28':-0.262584389,'29':0.011787882,'30':0.073868593,'31':0.294205468,'32':0.260355973,'33':0.927444304,'34':0.915088211,'35':1.140729688,'36':0.849776845,'37':1.289311306,'38':0.875267843,'39':1.839053641,'40':1.839053641,'41':1.839053641,'42':1.195439218,'43':2.871913402,'44':2.871913402,'45':2.871913402,'46':0.588042063,'47':-0.640386369,'48':-0.640386369,'49':-0.640386369,'50':-0.804359991,'51':-0.804359991,'52':0.224961298,'53':0.224961298,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"140":{'26':-0.063617829,'27':-0.20142379,'28':-0.170645255,'29':-0.067274081,'30':-0.002794131,'31':0.218395664,'32':0.269627446,'33':0.725237353,'34':0.728686543,'35':0.553701654,'36':0.849776845,'37':1.289311306,'38':0.875267843,'39':1.839053641,'40':1.839053641,'41':1.839053641,'42':1.195439218,'43':2.871913402,'44':2.871913402,'45':2.871913402,'46':0.588042063,'47':-0.640386369,'48':-0.640386369,'49':-0.640386369,'50':-0.804359991,'51':-0.804359991,'52':0.224961298,'53':0.224961298,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"150":{'26':-0.308429001,'27':-0.154201548,'28':-0.203611792,'29':-0.188615824,'30':-0.087099795,'31':-0.006623038,'32':0.224269264,'33':0.330519825,'34':0.42345494,'35':0.352305788,'36':0.913099217,'37':0.977329211,'38':0.875267843,'39':1.839053641,'40':0.493402806,'41':1.839053641,'42':1.195439218,'43':2.871913402,'44':2.871913402,'45':2.871913402,'46':0.588042063,'47':-0.640386369,'48':-0.640386369,'49':-0.640386369,'50':-0.804359991,'51':-0.804359991,'52':0.224961298,'53':0.224961298,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"160":{'26':1.867392954,'27':0.594573958,'28':-0.253665338,'29':-0.406531152,'30':-0.300330596,'31':-0.152579718,'32':-0.001272766,'33':0.146216424,'34':0.420388054,'35':0.52495228,'36':0.912688603,'37':0.812095123,'38':0.777594535,'39':0.763789715,'40':0.575705733,'41':0.207611136,'42':1.195439218,'43':2.871913402,'44':2.871913402,'45':2.871913402,'46':0.588042063,'47':-0.640386369,'48':-0.640386369,'49':-0.640386369,'50':-0.804359991,'51':-0.804359991,'52':0.224961298,'53':0.224961298,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"170":{'26':1.867392954,'27':1.600884376,'28':-0.134061914,'29':-0.364655006,'30':-0.487315438,'31':-0.291056136,'32':-0.133741046,'33':0.041883358,'34':0.193921568,'35':0.380147147,'36':0.55021359,'37':0.703407744,'38':0.813334904,'39':0.732465165,'40':0.842417441,'41':0.346946328,'42':1.195439218,'43':2.207658291,'44':1.969105535,'45':1.969105535,'46':0.588042063,'47':-0.640386369,'48':-0.640386369,'49':-0.640386369,'50':-0.804359991,'51':-0.804359991,'52':0.224961298,'53':0.224961298,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"180":{'26':1.867392954,'27':-0.029740556,'28':-0.162994845,'29':-0.5052156,'30':-0.645776193,'31':-0.405968679,'32':-0.298265457,'33':-0.154853023,'34':-0.001086655,'35':0.192327933,'36':0.409026509,'37':0.499842691,'38':0.604651152,'39':0.38075678,'40':0.882932508,'41':0.806661394,'42':0.469350152,'43':1.543403179,'44':0.807445953,'45':1.066297668,'46':0.588042063,'47':-0.640386369,'48':-0.640386369,'49':-0.640386369,'50':-0.804359991,'51':-0.804359991,'52':0.224961298,'53':0.224961298,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"190":{'26':1.867392954,'27':-1.660365488,'28':-1.660365488,'29':-0.849237021,'30':-0.499498372,'31':-0.506099951,'32':-0.405386119,'33':-0.276439077,'34':-0.103445591,'35':0.04157706,'36':0.247541276,'37':0.297541063,'38':0.460319125,'39':0.406379236,'40':0.578554912,'41':0.533158517,'42':0.350870771,'43':0.485993506,'44':0.632006665,'45':0.678020095,'46':0.588042063,'47':-0.640386369,'48':-0.320193184,'49':-0.640386369,'50':-0.804359991,'51':-0.804359991,'52':0.224961298,'53':0.224961298,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"200":{'26':1.867392954,'27':-1.660365488,'28':-1.660365488,'29':-0.258963264,'30':-0.339314024,'31':-0.577786667,'32':-0.299780335,'33':-0.439892936,'34':-0.281893078,'35':-0.175083122,'36':0.01751344,'37':0.111444343,'38':0.324719885,'39':0.464406388,'40':0.323736192,'41':0.519428005,'42':0.143362651,'43':0.459360416,'44':0.618236674,'45':0.105688802,'46':0.588042063,'47':0.028731132,'48':-0.320193184,'49':0,'50':-0.804359991,'51':-0.804359991,'52':0.224961298,'53':0.224961298,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"210":{'26':1.867392954,'27':-0.953013003,'28':-0.953013003,'29':-0.087545599,'30':-0.087545599,'31':-0.643864938,'32':-0.709943209,'33':-0.532733403,'34':-0.380723845,'35':-0.325160845,'36':-0.121956048,'37':-0.042835063,'38':0.181044515,'39':0.341445642,'40':0.315151383,'41':0.433847653,'42':0.631482085,'43':0.601574836,'44':0.67437682,'45':0.373076715,'46':0.588042063,'47':0.064619437,'48':0.028731132,'49':0,'50':-0.804359991,'51':-0.804359991,'52':0.224961298,'53':0.224961298,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"220":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':0.083872065,'30':0.083872065,'31':-0.712035328,'32':-0.762892133,'33':-0.527543598,'34':-0.500077656,'35':-0.431299869,'36':-0.300972026,'37':-0.251252004,'38':0.016387132,'39':0.086581858,'40':0.152139929,'41':0.121160271,'42':0.586486774,'43':0.539148694,'44':0.745644421,'45':0.541994449,'46':0.595199235,'47':0.591620649,'48':0.33444516,'49':0.59711371,'50':-0.804359991,'51':-0.804359991,'52':0.224961298,'53':0.224961298,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"230":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-1.507942722,'33':-0.754043652,'34':-0.585987273,'35':-0.499862541,'36':-0.302577255,'37':-0.287727946,'38':-0.174541647,'39':0.034399766,'40':-0.073376277,'41':0.048932824,'42':0.066091686,'43':-0.067687511,'44':0.275730223,'45':-0.062707679,'46':0.159213504,'47':0.33444516,'48':0.112342163,'49':0.59711371,'50':-0.804359991,'51':-0.804359991,'52':0.224961298,'53':0.224961298,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"240":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.331255977,'34':-0.545042757,'35':-0.626653212,'36':-0.668829823,'37':-0.452408916,'38':-0.305357535,'39':0.042696669,'40':-0.169139055,'41':-0.446228623,'42':0.187615107,'43':-0.039059099,'44':0.123694558,'45':-0.048963629,'46':-0.108359742,'47':-0.154738163,'48':0.074894775,'49':-0.421888772,'50':-0.279414211,'51':-0.804359991,'52':0.224961298,'53':0.224961298,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"250":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':-0.581199771,'35':-0.55024075,'36':-0.436355716,'37':-0.302979302,'38':-0.216150067,'39':-0.181708291,'40':-0.233482094,'41':-0.516023915,'42':0.004855354,'43':-0.399858549,'44':0.116868477,'45':0.020146849,'46':0.071272136,'47':-0.142904431,'48':0.130611508,'49':0.110585787,'50':-0.105686017,'51':-0.32204922,'52':0.224961298,'53':0.224961298,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"260":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':-0.482880369,'36':-0.316998003,'37':-0.345005651,'38':-0.42350863,'39':-0.395339003,'40':-0.02948048,'41':-0.260314124,'42':0.083782215,'43':-0.019355265,'44':0.01595144,'45':0.131618605,'46':0.502450279,'47':0.317783717,'48':0.002819448,'49':0.240996408,'50':-0.097929835,'51':-0.146569137,'52':-0.332334355,'53':0.224961298,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"270":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':0.092092434,'36':-0.041748371,'37':-0.279495178,'38':-0.28345396,'39':-0.262936616,'40':-0.49086515,'41':-0.286345231,'42':-0.219158601,'43':-0.119019951,'44':-0.020615589,'45':0.169065982,'46':0.099521864,'47':-0.017924547,'48':0.233350299,'49':-0.101449232,'50':0.034984562,'51':-0.558347601,'52':0.224961298,'53':0.224961298,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"280":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':0.092092434,'36':-0.041748371,'37':0.108231139,'38':-0.176630752,'39':-0.459147639,'40':0.256241459,'41':-0.117645415,'42':-0.303502518,'43':-0.375764992,'44':-0.637172417,'45':-0.325235358,'46':-0.257011517,'47':0.193734168,'48':0.383417726,'49':0.468908722,'50':-0.259999578,'51':0.146358821,'52':1.544943541,'53':2.979361069,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"290":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':0.092092434,'36':-0.041748371,'37':0.054115569,'38':-0.609965133,'39':-0.250499393,'40':-0.127018427,'41':0.001100003,'42':-0.085273692,'43':0.110885759,'44':-0.117545114,'45':-0.038021694,'46':-0.216502323,'47':0.760153404,'48':0.607909287,'49':0.095932795,'50':-0.221173416,'51':-1.77636E-15,'52':0.537757149,'53':2.979361069,'54':4.413778596,'55':4.413778596,'56':0.224961298,'57':0.224961298,'58':0.224961298},"300":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':0.092092434,'36':-0.041748371,'37':0,'38':0.348120977,'39':-0.284510398,'40':-0.053104641,'41':-0.201913828,'42':-0.450682215,'43':-0.299907942,'44':-0.454039064,'45':-0.82863768,'46':-0.637370431,'47':-1.18256493,'48':0.272382627,'49':-0.161819656,'50':-0.772471771,'51':0.341957743,'52':0.537757149,'53':0.034163953,'54':4.413778596,'55':4.413778596,'56':0.169146327,'57':0.224961298,'58':0.544511782},"310":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':0.092092434,'36':-0.041748371,'37':0,'38':0,'39':0.696241954,'40':-0.155059268,'41':0,'42':-0.262897959,'43':1.278518156,'44':-0.180129707,'45':-0.495854637,'46':-1.268672593,'47':-0.247927319,'48':-0.04011429,'49':0,'50':0.236790108,'51':0.991709275,'52':0.341957743,'53':-0.084566244,'54':-0.406592884,'55':-0.406592884,'56':0.113331356,'57':0.544511782,'58':0.544511782},"320":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':0.092092434,'36':-0.041748371,'37':0,'38':0,'39':0.696241954,'40':-0.155059268,'41':0,'42':0,'43':0.046889825,'44':0.046889825,'45':0.09377965,'46':-0.495854637,'47':0.135530961,'48':0.067765481,'49':-0.072903994,'50':-0.28133895,'51':0.236790108,'52':0,'53':-0.203296442,'54':-0.203296442,'55':-0.406592884,'56':0.113331356,'57':0.544511782,'58':0.544511782},"330":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':0.092092434,'36':-0.041748371,'37':0,'38':0,'39':0.696241954,'40':-0.077529634,'41':0,'42':0,'43':-0.161494296,'44':0.046889825,'45':3.55271E-15,'46':-0.495854637,'47':1.77636E-15,'48':-0.05134887,'49':8.88178E-16,'50':-0.140669475,'51':0.118395054,'52':0,'53':0,'54':-0.101648221,'55':0,'56':0.113331356,'57':0.544511782,'58':0.544511782},"340":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':0.092092434,'36':-0.041748371,'37':0,'38':0,'39':0,'40':0,'41':0,'42':-0.161494296,'43':-0.322988592,'44':-0.598847929,'45':-0.736777598,'46':1.473555196,'47':0.545268855,'48':-0.233697152,'49':-0.143785813,'50':0.40094543,'51':0,'52':-0.305586456,'53':0,'54':0,'55':0,'56':0.113331356,'57':0.544511782,'58':0.544511782},"350":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':0.092092434,'36':-0.041748371,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':-0.598847929,'44':-1.473555196,'45':-1.473555196,'46':1.473555196,'47':0.201236701,'48':-0.043167462,'49':0.205592512,'50':0.288624085,'51':0.248152202,'52':-0.305586456,'53':-0.305586456,'54':0,'55':0.113331356,'56':0.113331356,'57':0.113331356,'58':0.544511782},"360":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':0.092092434,'36':-0.041748371,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':-0.598847929,'44':-1.473555196,'45':-0.961116102,'46':-0.448677008,'47':1.473555196,'48':-0.434922546,'49':-0.048339952,'50':0.475724931,'51':0,'52':-0.305586456,'53':-0.305586456,'54':0,'55':0.056665678,'56':0.056665678,'57':0.056665678,'58':0},"370":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':0.092092434,'36':-0.041748371,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':-1.473555196,'45':-0.448677008,'46':-0.224338504,'47':-0.448677008,'48':-0.434922546,'49':0.448677008,'50':0.149559003,'51':0.448677008,'52':-0.305586456,'53':-0.305586456,'54':0,'55':0,'56':0,'57':0,'58':0},"380":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':0.092092434,'36':-0.041748371,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':-1.473555196,'45':0,'46':-0.224338504,'47':0,'48':-0.434922546,'49':0.448677008,'50':0.448677008,'51':0.448677008,'52':-0.305586456,'53':0,'54':0,'55':0,'56':0,'57':0,'58':0},"390":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':0.092092434,'36':-0.041748371,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':-1.473555196,'45':0,'46':0,'47':0,'48':-0.434922546,'49':0.448677008,'50':0.448677008,'51':0.448677008,'52':-0.152793228,'53':0,'54':0,'55':0,'56':0,'57':0,'58':0},"400":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':0.092092434,'36':-0.041748371,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':-1.473555196,'45':0,'46':0,'47':0,'48':-0.434922546,'49':0.448677008,'50':0.448677008,'51':0.224338504,'52':0,'53':0,'54':0,'55':0,'56':0,'57':0,'58':0},"410":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':0.092092434,'36':-0.041748371,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':-1.473555196,'45':0,'46':0,'47':0,'48':-0.434922546,'49':0.448677008,'50':0.448677008,'51':0,'52':0,'53':0,'54':0,'55':0,'56':0,'57':0,'58':0},"420":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':0.092092434,'36':-0.041748371,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':-1.473555196,'45':0,'46':0,'47':0,'48':-0.434922546,'49':0.448677008,'50':0.448677008,'51':0,'52':0,'53':0,'54':0,'55':0,'56':0,'57':0,'58':0},"430":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':0.092092434,'36':-0.041748371,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':-1.473555196,'45':0,'46':0,'47':0,'48':-0.434922546,'49':0.448677008,'50':0.448677008,'51':0,'52':0,'53':0,'54':0,'55':0,'56':0,'57':0,'58':0},"440":{'26':1.867392954,'27':-0.245660519,'28':-0.245660519,'29':-0.245660519,'30':0.083872065,'31':-0.712035328,'32':-0.954846067,'33':-0.954846067,'34':0.092092434,'35':0.092092434,'36':-0.041748371,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':-1.473555196,'45':0,'46':0,'47':0,'48':-0.434922546,'49':0.448677008,'50':0.448677008,'51':0,'52':0,'53':0,'54':0,'55':0,'56':0,'57':0,'58':0}}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB769F793 = function(val, param) { // Height + Ethnicity + Shirt Size 0 for Sleeve
return 0;
}
SmartSize.prototype.getB798F822 = function(val, param) { // Height + Ethnicity + Shirt Size 1 for Sleeve
val = parseInt(val);
param = parseInt(param);
var info = {"60":{'1':-1.590472801,'2':-0.569360636,'3':-2.801758082,'4':-0.931960839},"61":{'1':-1.171816788,'2':-0.569360636,'3':-1.871230801,'4':-0.133565115},"62":{'1':-0.79553197,'2':-0.042802452,'3':-0.774340059,'4':-0.485171366},"63":{'1':-0.760340491,'2':-0.042802452,'3':-0.614741947,'4':-0.508107489},"64":{'1':-0.447618334,'2':0.483755732,'3':-0.543329342,'4':-0.297525208},"65":{'1':-0.092041788,'2':0.483755732,'3':0.069626168,'4':-0.067381359},"66":{'1':0.017995074,'2':0.483755732,'3':0.264794237,'4':0.229735995},"67":{'1':0.574399484,'2':0.483755732,'3':0.656356967,'4':0.823970703},"68":{'1':0.7624302,'2':0.483755732,'3':0.864321988,'4':1.567487948},"69":{'1':1.599829356,'2':0.483755732,'3':0.900457623,'4':1.567487948},"70":{'1':1.25485298,'2':0.483755732,'3':1.196590192,'4':1.567487948},"71":{'1':1.402730891,'2':0.483755732,'3':1.659198783,'4':1.567487948},"72":{'1':2.05517281,'2':0.483755732,'3':1.845607471,'4':1.567487948},"73":{'1':1.976897627,'2':0.483755732,'3':2.799142233,'4':1.567487948},"74":{'1':1.976897627,'2':0.483755732,'3':2.634224865,'4':1.567487948},"75":{'1':1.976897627,'2':0.483755732,'3':3.35961621,'4':1.567487948},"76":{'1':1.976897627,'2':0.483755732,'3':3.35961621,'4':1.567487948},"77":{'1':1.976897627,'2':0.483755732,'3':3.35961621,'4':1.567487948},"78":{'1':1.976897627,'2':0.483755732,'3':3.35961621,'4':1.567487948},"79":{'1':1.976897627,'2':0.483755732,'3':3.35961621,'4':1.567487948},"80":{'1':1.976897627,'2':0.483755732,'3':3.35961621,'4':1.567487948},"81":{'1':1.976897627,'2':0.483755732,'3':3.35961621,'4':1.567487948},"82":{'1':1.976897627,'2':0.483755732,'3':3.35961621,'4':1.567487948},"83":{'1':1.976897627,'2':0.483755732,'3':3.35961621,'4':1.567487948},"84":{'1':1.976897627,'2':0.483755732,'3':3.35961621,'4':1.567487948}}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB827F851 = function(val, param) { // Height + Ethnicity + Shirt Size 2 for Sleeve
val = parseInt(val);
param = parseInt(param);
var info = {"60":{'1':-1.409943446,'2':-0.944739159,'3':-2.10951973,'4':-1.513334917},"61":{'1':-1.534596426,'2':-0.944739159,'3':-2.203747606,'4':-1.174786026},"62":{'1':-1.245969244,'2':-0.382871232,'3':-1.618104221,'4':-1.239834309},"63":{'1':-1.153746368,'2':0.178996694,'3':-1.444046977,'4':-0.956681577},"64":{'1':-1.013004298,'2':-0.038454486,'3':-1.231426028,'4':-0.847842158},"65":{'1':-0.653719489,'2':-0.258576029,'3':-0.623553886,'4':0.130339789},"66":{'1':-0.388726117,'2':-0.36908186,'3':-0.327240493,'4':-0.188465736},"67":{'1':-0.155167169,'2':0.663686122,'3':0.015415557,'4':0.262278543},"68":{'1':0.314076842,'2':0.660238674,'3':0.34116652,'4':0.233379221},"69":{'1':0.624861961,'2':0.543229107,'3':0.582035955,'4':0.515992206},"70":{'1':0.993551467,'2':0.722607791,'3':0.951924932,'4':0.798605191},"71":{'1':1.382802183,'2':0.898713609,'3':1.306727939,'4':0.97904412},"72":{'1':1.820966442,'2':1.473849824,'3':1.53942384,'4':1.858575405},"73":{'1':1.616616604,'2':2.150861215,'3':1.759703948,'4':2.03727539},"74":{'1':1.794645878,'2':2.802087683,'3':2.460783842,'4':2.124024383},"75":{'1':2.506762971,'2':2.802087683,'3':2.377860247,'4':2.147549797},"76":{'1':2.506762971,'2':2.802087683,'3':2.55560319,'4':2.147549797},"77":{'1':2.506762971,'2':2.802087683,'3':3.709132829,'4':2.147549797},"78":{'1':2.506762971,'2':2.802087683,'3':4.954107115,'4':2.147549797},"79":{'1':2.506762971,'2':2.802087683,'3':4.954107115,'4':2.147549797},"80":{'1':2.506762971,'2':2.802087683,'3':5.519532943,'4':2.147549797},"81":{'1':2.506762971,'2':2.802087683,'3':5.519532943,'4':2.147549797},"82":{'1':2.506762971,'2':2.802087683,'3':5.519532943,'4':2.147549797},"83":{'1':2.506762971,'2':2.802087683,'3':5.519532943,'4':2.147549797},"84":{'1':2.506762971,'2':2.802087683,'3':5.519532943,'4':2.147549797}}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB856F880 = function(val, param) { // Height + Ethnicity + Shirt Size 3 for Sleeve
val = parseInt(val);
param = parseInt(param);
var info = {"60":{'1':-2.102115339,'2':-1.378509687,'3':-3.154378575,'4':-3.796263997},"61":{'1':-2.414359992,'2':-1.378509687,'3':-2.226024908,'4':-2.878087938},"62":{'1':-2.066702564,'2':-1.378509687,'3':-2.265901763,'4':-2.27157292},"63":{'1':-1.877494301,'2':-1.001928992,'3':-2.552640079,'4':-1.852891041},"64":{'1':-1.622964292,'2':-0.689391176,'3':-1.639959219,'4':-1.682039431},"65":{'1':-1.339763762,'2':-0.548918974,'3':-1.384559305,'4':-1.217113099},"66":{'1':-1.06311203,'2':-0.591935377,'3':-1.16497482,'4':-1.062313104},"67":{'1':-0.748306779,'2':0.126416469,'3':-0.796367846,'4':-0.38701727},"68":{'1':-0.562132259,'2':0.221240307,'3':-0.495096367,'4':-0.448196672},"69":{'1':-0.166481371,'2':0.481676305,'3':-0.184081499,'4':-0.095804198},"70":{'1':0.179302243,'2':0.481572656,'3':0.188585298,'4':0.431474753},"71":{'1':0.477357257,'2':1.273329373,'3':0.509206048,'4':0.807919738},"72":{'1':0.983447205,'2':1.544049795,'3':0.889852644,'4':1.108300833},"73":{'1':1.393241003,'2':2.004339975,'3':1.218960992,'4':1.261018862},"74":{'1':1.771957137,'2':2.53805015,'3':1.587858248,'4':1.565033759},"75":{'1':1.67268988,'2':2.564103553,'3':1.885580061,'4':1.906326231},"76":{'1':1.880804517,'2':2.912702132,'3':2.389530548,'4':2.4045286},"77":{'1':4.378180169,'2':3.060948018,'3':2.701282465,'4':2.165200674},"78":{'1':4.378180169,'2':3.208319545,'3':3.367533361,'4':2.165200674},"79":{'1':4.378180169,'2':5.26893325,'3':3.405736199,'4':2.165200674},"80":{'1':4.378180169,'2':5.26893325,'3':3.970402125,'4':2.165200674},"81":{'1':4.378180169,'2':5.26893325,'3':4.157227991,'4':2.165200674},"82":{'1':4.378180169,'2':5.26893325,'3':4.157227991,'4':2.165200674},"83":{'1':4.378180169,'2':5.26893325,'3':4.157227991,'4':2.165200674},"84":{'1':4.378180169,'2':5.26893325,'3':4.157227991,'4':2.165200674}}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB885F909 = function(val, param) { // Height + Ethnicity + Shirt Size 4 for Sleeve
val = parseInt(val);
param = parseInt(param);
var info = {"60":{'1':-2.27066834,'2':-1.43880808,'3':-2.939185533,'4':-2.941754723},"61":{'1':-2.67473732,'2':-1.43880808,'3':-2.987571118,'4':-2.941754723},"62":{'1':-2.362070178,'2':-1.43880808,'3':-2.710919649,'4':-2.941754723},"63":{'1':-2.136729278,'2':-1.43880808,'3':-2.753260781,'4':-2.461154093},"64":{'1':-2.152606776,'2':-1.450481005,'3':-2.421078365,'4':-1.980553462},"65":{'1':-2.094196803,'2':-1.458908354,'3':-2.207214953,'4':-2.081947412},"66":{'1':-1.597396587,'2':-0.789112106,'3':-1.840774363,'4':-1.834667232},"67":{'1':-1.459494171,'2':-0.586906587,'3':-1.58602323,'4':-1.447799302},"68":{'1':-1.277714452,'2':-0.518246492,'3':-1.256601236,'4':-1.269253992},"69":{'1':-0.792333008,'2':-0.230502767,'3':-0.938237269,'4':-0.848338472},"70":{'1':-0.707634803,'2':0.136496626,'3':-0.58159885,'4':-0.381186762},"71":{'1':-0.177231571,'2':0.237440694,'3':-0.190420699,'4':0.038666505},"72":{'1':0.177422083,'2':0.665515423,'3':0.095766598,'4':0.487195981},"73":{'1':0.562997364,'2':1.002997962,'3':0.43250154,'4':0.388829257},"74":{'1':0.757540164,'2':1.503751922,'3':0.782440899,'4':1.094560926},"75":{'1':1.027762027,'2':1.901907138,'3':1.176191243,'4':1.526252436},"76":{'1':2.55765544,'2':2.344289741,'3':1.551627316,'4':1.660090839},"77":{'1':2.59729331,'2':2.434891349,'3':1.99300214,'4':1.994247789},"78":{'1':2.835120532,'2':2.776663374,'3':2.256373825,'4':2.016115133},"79":{'1':2.835120532,'2':3.991223347,'3':2.532696993,'4':2.887944749},"80":{'1':2.835120532,'2':6.115287039,'3':3.507383335,'4':2.887944749},"81":{'1':2.835120532,'2':6.115287039,'3':3.648379976,'4':2.887944749},"82":{'1':2.835120532,'2':6.115287039,'3':3.094035269,'4':2.887944749},"83":{'1':2.835120532,'2':6.115287039,'3':0.739493535,'4':2.887944749},"84":{'1':2.835120532,'2':6.115287039,'3':1.711020048,'4':2.887944749}}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB914F938 = function(val, param) { // Height + Ethnicity + Shirt Size 5 for Sleeve
val = parseInt(val);
param = parseInt(param);
var info = {"60":{'1':-2.458199535,'2':-1.460102039,'3':-3.629335604,'4':-3.894152685},"61":{'1':-2.458199535,'2':-1.460102039,'3':-3.440481884,'4':-3.894152685},"62":{'1':-2.458199535,'2':-1.460102039,'3':-3.034571955,'4':-3.894152685},"63":{'1':-2.458199535,'2':-1.460102039,'3':-2.798462674,'4':-3.431309947},"64":{'1':-2.458199535,'2':-1.460102039,'3':-2.840187241,'4':-2.253746123},"65":{'1':-2.152200352,'2':-1.461454966,'3':-2.363650382,'4':-2.039963949},"66":{'1':-1.846201168,'2':-0.868006855,'3':-2.196956943,'4':-2.338292861},"67":{'1':-1.986326413,'2':-0.613092125,'3':-1.866039266,'4':-1.769108634},"68":{'1':-1.779565784,'2':-0.351262207,'3':-1.67371924,'4':-1.263675595},"69":{'1':-1.378778709,'2':-0.08943229,'3':-1.353461874,'4':-1.376338404},"70":{'1':-0.775596304,'2':-0.718089756,'3':-0.904919261,'4':-0.763865906},"71":{'1':-0.448604998,'2':0.146217142,'3':-0.57065597,'4':-0.315687611},"72":{'1':0.071855096,'2':0.436679951,'3':-0.301336386,'4':-0.359271111},"73":{'1':0.568824819,'2':0.533954584,'3':0.038190326,'4':0.019209397},"74":{'1':0.825644635,'2':1.399811516,'3':0.377477366,'4':0.200994753},"75":{'1':0.810083712,'2':1.592696317,'3':0.77704781,'4':0.266287879},"76":{'1':0.876090319,'2':1.485157723,'3':1.145791702,'4':1.512645319},"77":{'1':1.070347228,'2':1.47932127,'3':1.435537807,'4':1.747998213},"78":{'1':0.980989422,'2':1.735251895,'3':1.814300042,'4':1.897646437},"79":{'1':1.144462898,'2':3.084414551,'3':2.181549897,'4':2.800495671},"80":{'1':1.144462898,'2':3.621637142,'3':2.497788449,'4':3.744660472},"81":{'1':1.144462898,'2':3.236581553,'3':3.255682384,'4':3.744660472},"82":{'1':1.144462898,'2':4.078745177,'3':3.645927734,'4':3.744660472},"83":{'1':1.144462898,'2':4.589394826,'3':3.822255474,'4':3.744660472},"84":{'1':1.144462898,'2':4.589394826,'3':3.998583213,'4':3.744660472}}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB943F967 = function(val, param) { // Height + Ethnicity + Shirt Size 6 for Sleeve
val = parseInt(val);
param = parseInt(param);
var info = {"60":{'1':-1.581914728,'2':-3.48343397,'3':-5.151819619,'4':-1.735305325},"61":{'1':-1.581914728,'2':-3.48343397,'3':-5.151819619,'4':-1.735305325},"62":{'1':-1.581914728,'2':-1.268929699,'3':-5.151819619,'4':-1.735305325},"63":{'1':-1.581914728,'2':-1.268929699,'3':-3.417930194,'4':-1.735305325},"64":{'1':-1.581914728,'2':-1.268929699,'3':-2.225344943,'4':-1.735305325},"65":{'1':-1.581914728,'2':-1.268929699,'3':-2.476818891,'4':-1.735305325},"66":{'1':-1.581914728,'2':-1.194398419,'3':-2.428513853,'4':-1.735305325},"67":{'1':-1.581914728,'2':-1.194398419,'3':-1.720642563,'4':-1.531817006},"68":{'1':-1.581914728,'2':-1.194398419,'3':-2.242966604,'4':-1.328328686},"69":{'1':-1.581914728,'2':-1.401944373,'3':-1.789413318,'4':-1.328328686},"70":{'1':-1.581914728,'2':-0.599017528,'3':-1.226688096,'4':0.000691066},"71":{'1':-1.399731366,'2':0.224954629,'3':-0.635477419,'4':1.329710819},"72":{'1':0.030330847,'2':0.454260248,'3':-0.459723636,'4':0.517735197},"73":{'1':0.030330847,'2':1.188275761,'3':-0.115928345,'4':-0.294240426},"74":{'1':1.278209699,'2':1.492419167,'3':0.060218075,'4':-0.294240426},"75":{'1':1.278209699,'2':1.492419167,'3':0.562494874,'4':-0.294240426},"76":{'1':1.278209699,'2':1.492419167,'3':0.921333403,'4':-0.294240426},"77":{'1':1.278209699,'2':1.492419167,'3':1.263500265,'4':-0.294240426},"78":{'1':1.278209699,'2':1.492419167,'3':1.753556474,'4':-0.294240426},"79":{'1':1.278209699,'2':1.492419167,'3':2.243612682,'4':-0.294240426},"80":{'1':1.278209699,'2':1.492419167,'3':2.953729339,'4':-0.294240426},"81":{'1':1.278209699,'2':1.492419167,'3':3.663845996,'4':-0.294240426},"82":{'1':1.278209699,'2':1.492419167,'3':3.663845996,'4':-0.294240426},"83":{'1':1.278209699,'2':1.492419167,'3':3.663845996,'4':-0.294240426},"84":{'1':1.278209699,'2':1.492419167,'3':3.663845996,'4':-0.294240426}}
return parseFloat(info[val][param]);
}
SmartSize.prototype.getB972F996 = function(val, param) { // Height + Ethnicity + Shirt Size 7 for Sleeve
val = parseInt(val);
param = parseInt(param);
var info = {"60":{'1':-1.050885207,'2':-0.333979607,'3':-0.885210478,'4':-1.933465537},"61":{'1':-1.050885207,'2':-0.333979607,'3':-0.885210478,'4':-1.933465537},"62":{'1':-1.050885207,'2':-0.333979607,'3':-0.885210478,'4':-1.933465537},"63":{'1':-1.050885207,'2':-0.333979607,'3':-0.885210478,'4':-1.933465537},"64":{'1':-1.050885207,'2':-0.333979607,'3':-0.885210478,'4':-1.933465537},"65":{'1':-1.092859992,'2':-0.333979607,'3':-1.011134832,'4':-1.933465537},"66":{'1':-1.211189841,'2':-0.333979607,'3':-1.366124379,'4':-1.933465537},"67":{'1':-1.541685851,'2':-0.333979607,'3':-2.357612409,'4':-1.933465537},"68":{'1':-1.497604995,'2':-0.333979607,'3':-2.225369841,'4':-1.933465537},"69":{'1':0.013743451,'2':-0.333979607,'3':-1.405936009,'4':1.781145969},"70":{'1':0.073920913,'2':-0.333979607,'3':-1.225403623,'4':1.781145969},"71":{'1':-0.181450586,'2':0.1275155,'3':-0.911894296,'4':0.240027036},"72":{'1':-0.28398106,'2':0.589010607,'3':-0.598384968,'4':-0.842568818},"73":{'1':-0.036984719,'2':0.589010607,'3':0.142604054,'4':-0.842568818},"74":{'1':0.186425964,'2':0.795049751,'3':0.148273882,'4':-0.38404574},"75":{'1':0.468869328,'2':1.001088894,'3':0.789564829,'4':-0.38404574},"76":{'1':0.503010252,'2':1.001088894,'3':0.891987603,'4':-0.38404574},"77":{'1':0.509913658,'2':1.001088894,'3':0.912697819,'4':-0.38404574},"78":{'1':1.101459901,'2':2.35237858,'3':1.336046864,'4':-0.38404574},"79":{'1':1.280896691,'2':2.35237858,'3':1.874357233,'4':-0.38404574},"80":{'1':1.280896691,'2':2.35237858,'3':1.874357233,'4':-0.38404574},"81":{'1':1.389753467,'2':2.35237858,'3':2.20092756,'4':-0.38404574},"82":{'1':1.389753467,'2':2.35237858,'3':2.20092756,'4':-0.38404574},"83":{'1':1.389753467,'2':2.35237858,'3':2.20092756,'4':-0.38404574},"84":{'1':1.389753467,'2':2.35237858,'3':2.20092756,'4':-0.38404574}}
return parseFloat(info[val][param]);
}

SmartSize.prototype.isInputYes = function(paramName) {
switch (paramName){
case 'collar': // D11
    return this.isNumeric(this.data.collar) && this.isCollarValid(this.data.collar);
    break;
case 'sleeve': // D12
    return this.isNumeric(this.data.sleeve) && this.isSleeveValid(this.data.sleeve);
    break;
case 'tall': // D5
    return this.isNumeric(this.data.tall) && this.isTallValid(this.data.tall);
    break;
case 'pants_waist': // D9
    return this.isNumeric(this.data.pants_waist) && this.isPantsWaistValid(this.data.pants_waist);
    break;
case 'midsection_style': // D10
    return this.isNumeric(this.data.midsection_style) && this.isMidsectionStyleValid(this.data.midsection_style);
    break;
case 'shirt_type': // D14
    return this.isNumeric(this.data.shirt_type) && this.isShirtTypeValid(this.data.shirt_type);
    break;
case 'tucked': // D13
    return this.isNumeric(this.data.tucked) && this.isTuckedValid(this.data.tucked);
    break;
case 'weight': // D6
    return this.isNumeric(this.data.weight) && this.isWeightValid(this.data.weight);
    break;
case 'shirt_tight': // D4
    return this.isNumeric(this.data.shirt_tight) && this.isShirtTightValid(this.data.shirt_tight);
    break;
case 'ethnicity': // D7
    return this.isNumeric(this.data.ethnicity) && this.data.ethnicity > 0;
    break;
case 'suit': // D7
    return this.isNumeric(this.data.suit);
    break;
}
alert("SmartSize.prototype.isInputYes() - param '" + paramName + "' doesn't exist" );
}
SmartSize.prototype.isCollarValid = function(value) {
return true;
}
SmartSize.prototype.isSleeveValid = function(value) {
return true;
}
SmartSize.prototype.isTallValid = function(value) {
return true;
}
SmartSize.prototype.isPantsWaistValid = function(value) {
return true;
}
SmartSize.prototype.isMidsectionStyleValid = function(value) {
return true;
}
SmartSize.prototype.isShirtTypeValid = function(value) {
return true;
}
SmartSize.prototype.isTuckedValid = function(value) {
return true;
}
SmartSize.prototype.isWeightValid = function(value) {
return true;
}
SmartSize.prototype.isShirtTightValid = function(value) {
return true;
}
SmartSize.prototype.isNumeric = function(value) {
return !isNaN(parseFloat(value));
}


var SmartSizeTC = function(data) {
this.data = data;
if (!isNaN(parseFloat(this.data.tall_feets)) && !isNaN(parseFloat(this.data.tall_inches))) {
this.data.tall = parseInt(this.data.tall_feets) * 12 + parseInt(this.data.tall_inches);
this.data.tall = this.data.tall < 60 ? 60 : (this.data.tall > 84 ? 84 : this.data.tall);
} else {
this.data.tall = '';
this.data.tall_feets = '';
this.data.tall_inches = '';
}
if (!isNaN(parseInt(this.data.weight))) {
this.data.weight_algo = Math.floor(this.data.weight / 10) * 10;
this.data.weight_algo = this.data.weight_algo < 100 ? 100 : (this.data.weight_algo > 440 ? 440 : this.data.weight_algo);
}
if (!isNaN(parseInt(this.data.ethnicity))) {
this.data.ethnicity = parseInt(this.data.ethnicity);
if (this.data.ethnicity < 1) {
this.data.ethnicity = 1
}
else {
if (this.data.ethnicity > 4) {
this.data.ethnicity = 4;
}
}
}
if (!isNaN(parseInt(this.data.jacket_size))) {
this.data.jacket_size = this.data.jacket_size < 32 ? 32 : (this.data.jacket_size > 60 ? 60 : this.data.jacket_size);
}
switch (this.data.size.toLowerCase()) {
case 'xxs':
this.data.size_num = 0;
break;
case 'xs':
this.data.size_num = 1;
break;
case 's':
this.data.size_num = 2;
break;
case 'm':
this.data.size_num = 3;
break;
case 'l':
this.data.size_num = 4;
break;
case 'xl':
this.data.size_num = 5;
break;
case 'xxl':
this.data.size_num = 6;
break;
case '3xl':
this.data.size_num = 7;
break;
case '4xl':
this.data.size_num = 8;
break;
case '5xl':
this.data.size_num = 9;
break;
case '6xl':
this.data.size_num = 10;
break;
}

// JACKET
this.ja = {};

// Shoulder Width
this.ja.shoulder_width = this.getJAParam(this.data.size, 2);
if (this.isInputYes('weight')) {
this.ja.shoulder_width += this.getJATable2(this.data.weight_algo, this.data.size_num);
}
else {
this.ja.shoulder_width += this.getJATable2('skipped', this.data.size_num);
}
this.ja.shoulder_width = this.getRound10(this.ja.shoulder_width);

if (this.isInputYes('jacket_size')) {
unrounded_matched_chest_width = this.getJATable7(this.data.jacket_size);
}
else {
unrounded_matched_chest_width = this.getJAParam(this.data.size, 3);
if (this.isInputYes('weight')) {
unrounded_matched_chest_width += this.getJATable8(this.data.weight_algo, this.data.size_num);
}
else {
unrounded_matched_chest_width += this.getJATable8('skipped', this.data.size_num);
}
if (this.isInputYes('midsection_style')) {
unrounded_matched_chest_width += this.getJATable9(this.data.midsection_style, this.data.size_num);
}
else {
unrounded_matched_chest_width += this.getJATable9('skipped', this.data.size_num);
}
}

// Chest Width
arr = [17.5,17.9,18.3,18.6,19,19.4,19.8,20.1,20.5,20.9,21.3,21.6,22,22.4,22.8,23.1,23.5,23.9,24.3,24.6,25,25.4,25.8,26.1,26.5,26.9,27.3,27.6,28,28.4,28.8,29.2,29.6,30.1,30.5,30.9,31.4]
ja_chest_width = unrounded_matched_chest_width;
$.each(arr, function(i, item) {
ja_chest_width = item;
if (unrounded_matched_chest_width <= item) {
ja_chest_width = item;
return false;
}
})
this.ja.chest_width = ja_chest_width;

// Midsection Width
this.ja.midsection_width = this.getJAParam(this.data.size, 4);
if (this.isInputYes('midsection_style')) {
this.ja.midsection_width += this.getJATable10(this.data.midsection_style, this.data.size_num);
}
else {
this.ja.midsection_width += this.getJATable10('skipped', this.data.size_num);
}
this.ja.midsection_width += unrounded_matched_chest_width;
this.ja.midsection_width = this.getRound10(this.ja.midsection_width);

// Center Back Length (Jacket Length)
this.ja.center_back_length = this.getJAParam(this.data.size, 5);
if (this.isInputYes('tall')) {
this.ja.center_back_length += this.getJATable4(this.data.tall, this.data.size_num);
}
else {
this.ja.center_back_length += this.getJATable4('skipped', this.data.size_num);
}
this.ja.center_back_length = this.getRound10(this.ja.center_back_length);

// Sleeve Length
this.ja.sleeve_length = this.getJAParam(this.data.size, 6);
if (this.isInputYes('tall')) {
this.ja.sleeve_length += this.getJATable5(this.data.tall, this.data.size_num);
}
else {
this.ja.sleeve_length += this.getJATable5('skipped', this.data.size_num);
}
this.ja.sleeve_length = this.getRound10(this.ja.sleeve_length);

// Sleeve Bicep Width
this.ja.sleeve_bicep_width = this.getJAParam(this.data.size, 7);
if (this.isInputYes('weight')) {
this.ja.sleeve_bicep_width += this.getJATable6(this.data.weight_algo, this.data.size_num);
}
else {
this.ja.sleeve_bicep_width += this.getJATable6('skipped', this.data.size_num);
}
this.ja.sleeve_bicep_width = this.getRound10(this.ja.sleeve_bicep_width);

// Sleeve Opening Width
this.ja.sleeve_opening_width = this.getJAParam(this.data.size, 8);
if (this.isInputYes('weight')) {
this.ja.sleeve_opening_width += this.getJATable3(this.data.weight_algo, this.data.size_num);
}
else {
this.ja.sleeve_opening_width += this.getJATable3('skipped', this.data.size_num);
}
this.ja.sleeve_opening_width = this.getRound10(this.ja.sleeve_opening_width);

// Limitations
this.ja.shoulder_width = this.getJAFactoryLimitations('shoulder_width', this.ja.shoulder_width, this.ja.chest_width);
this.ja.midsection_width = this.getJAFactoryLimitations('midsection_width', this.ja.midsection_width, this.ja.chest_width);
this.ja.center_back_length = this.getJAFactoryLimitations('center_back_length', this.ja.center_back_length, this.ja.chest_width);
this.ja.sleeve_bicep_width = this.getJAFactoryLimitations('sleeve_bicep_width', this.ja.sleeve_bicep_width, this.ja.chest_width);
this.ja.sleeve_opening_width = this.getJAFactoryLimitations('sleeve_opening_width', this.ja.sleeve_opening_width, this.ja.chest_width);

// Hip Width
this.ja.hip_width = this.getRound10(2.125 / 3.3125 * (this.ja.chest_width - this.ja.midsection_width) + this.ja.midsection_width);

// PANTS
this.pa = {};

// Waist Width
if (this.isInputYes('pants_waist')) {
this.pa.waist_width = this.data.pants_waist / 2 + 0.875;
}
else {
this.pa.waist_width = this.getPAParam(this.data.size, 3);
}
this.pa.waist_width = this.getRound10(this.pa.waist_width);

// Hip Width
this.pa.hip_width = (this.pa.waist_width - 0.875) * 2 / 2.5 + 8.53;
if (this.isInputYes('best_buttocks_thighs')) {
this.pa.hip_width += this.getPATable5(this.data.best_buttocks_thighs, 2);
}
if (this.isInputYes('like_pants_to_fit')) {
this.pa.hip_width += this.getPATable6(this.data.like_pants_to_fit, 2);
}
this.pa.hip_width = Math.round(100 * this.pa.hip_width) / 100;
this.pa.hip_width = this.getRound10(this.pa.hip_width);

// Thigh Width
this.pa.thigh_width = (this.pa.waist_width - 0.875) * 2 / 4.465 + 6.212;
if (this.isInputYes('best_buttocks_thighs')) {
this.pa.thigh_width += this.getPATable5(this.data.best_buttocks_thighs, 3);
}
if (this.isInputYes('like_pants_to_fit')) {
this.pa.thigh_width += this.getPATable6(this.data.like_pants_to_fit, 3);
}
this.pa.thigh_width = this.getRound10(this.pa.thigh_width);

// Knee Width
this.pa.knee_width = (this.pa.waist_width - 0.875) * 2 / 10.06 + 5.92;
if (this.isInputYes('best_buttocks_thighs')) {
this.pa.knee_width += this.getPATable5(this.data.best_buttocks_thighs, 4);
}
if (this.isInputYes('like_pants_to_fit')) {
this.pa.knee_width += this.getPATable6(this.data.like_pants_to_fit, 4);
}
this.pa.knee_width = this.getRound10(this.pa.knee_width);

// Leg Opening Width
this.pa.leg_opening_width = (this.pa.waist_width - 0.875) * 2 * 0.07 + 5.35;
if (this.isInputYes('like_pants_to_fit')) {
this.pa.leg_opening_width += this.getPATable6(this.data.like_pants_to_fit, 5);
}
this.pa.leg_opening_width = this.getRound10(this.pa.leg_opening_width);

// Front Rise
this.pa.front_rise = (this.pa.waist_width - 0.875) * 2 / 16.21 + 8.2681;
if (this.isInputYes('high_wear_pants')) {
this.pa.front_rise += this.getPATable8(this.data.high_wear_pants, 2);
}
this.pa.front_rise = this.getRound10(this.pa.front_rise);

// Back Rise
this.pa.back_rise = (this.pa.waist_width - 0.875) * 2 / 5.6 + 10.6607;
if (this.isInputYes('high_wear_pants')) {
this.pa.back_rise += this.getPATable8(this.data.high_wear_pants, 3);
}
this.pa.back_rise = this.getRound10(this.pa.back_rise);

// Inseam Length
this.pa.inseam_length = 0;
if (this.isInputYes('pants_inseam')) {
this.pa.inseam_length += this.data.pants_inseam;
}
else {
if (this.isInputYes('tall')) {
this.pa.inseam_length += this.getPATable3(this.data.tall);
}
else {
this.pa.inseam_length += this.getPAParam(this.data.size, 4);
}
if (this.isInputYes('like_bottom_pants')) {
this.pa.inseam_length += this.getPATable7(this.data.like_bottom_pants, 2);
}
}
this.pa.inseam_length = this.getRound10(this.pa.inseam_length);

// Total Rise
this.pa.total_rise = this.getRound10(this.pa.front_rise + this.pa.back_rise);

// Total Length
selected_pants_base_size = this.getPASelectedPantsBaseSize(this.pa.thigh_width);
this.pa.total_length = this.pa.inseam_length + this.getPATable4(selected_pants_base_size, 3);
if (this.pa.front_rise > this.getPATable4(selected_pants_base_size, 4) && this.pa.back_rise > this.getPATable4(selected_pants_base_size, 5)) {
tmp1 = this.pa.front_rise - this.getPATable4(selected_pants_base_size, 4);
tmp2 = this.pa.back_rise - this.getPATable4(selected_pants_base_size, 5);
if (tmp1 > tmp2) {
this.pa.total_length += tmp2;
}
else {
this.pa.total_length += tmp1;
}
}
else {
if (this.pa.front_rise < this.getPATable4(selected_pants_base_size, 4) && this.pa.back_rise < this.getPATable4(selected_pants_base_size, 5)) {
  tmp1 = this.pa.front_rise - this.getPATable4(selected_pants_base_size, 4);
  tmp2 = this.pa.back_rise - this.getPATable4(selected_pants_base_size, 5);
if (tmp1 > tmp2) {
  this.pa.total_length += tmp1;
}
else {
  this.pa.total_length += tmp2;
}
}
}
this.pa.total_length = Math.round(100 * this.pa.total_length) / 100;
this.pa.total_length = this.getRound10(this.pa.total_length);
}

SmartSizeTC.prototype.getRound8 = function(value) {
return parseFloat(excelRound(value * 8) / 8);
}
SmartSizeTC.prototype.getRound10 = function(value) {
return parseFloat(excelRound(value * 10) / 10);
}
SmartSizeTC.prototype.getJAParam = function(size, param) {
var info = {
"xxs":{2:17,3:19.75,4:-3.1,5:27.6,6:22.8,7:7.2,8:5.1},
"xs":{2:17.40625,3:20.3125,4:-3,5:27.9,6:23.375,7:7.4,8:5.2},
"s":{2:17.87,3:20.88541667,4:-2.6,5:28.64772727,6:24.01,7:7.6,8:5.3203125},
"m":{2:18.15915179,3:21.74344444,4:-2.7,5:29.27,6:24.72919444,7:7.878787879,8:5.462962963},
"l":{2:18.68392857,3:22.71878378,4:-2.1,5:30.06,6:25.43273077,7:8.171875,8:5.642857143},
"xl":{2:19.37276786,3:24.21333333,4:-2.1,5:30.62,6:26.4,7:8.697368421,8:5.927884615},
"xxl":{2:20.5,3:27,4:-1.6,5:30.97916667,6:26.95,7:9.28125,8:6.375},
"3xl":{2:21,3:27.6,4:-1.3,5:31.1,6:27,7:9.3,8:6.4},
"4xl":{2:21.25,3:28,4:-1,5:31.3,6:27.2,7:9.4,8:6.5},
"5xl":{2:21.5,3:28.7,4:-1,5:31.5,6:27.4,7:9.5,8:6.6},
"6xl":{2:22.375,3:30.5,4:-1,5:31.625,6:27.6,7:9.6,8:6.8}
}
return info[size][param];
}
SmartSizeTC.prototype.getPAParam = function(size, param) {
var info = {
"xxs":{2:26,3:13.875,4:27},
"xs":{2:27.5,3:14.625,4:28},
"s":{2:29.5,3:15.625,4:29},
"m":{2:31.5,3:16.625,4:30},
"l":{2:34,3:17.875,4:32},
"xl":{2:36,3:18.875,4:34},
"xxl":{2:38,3:19.875,4:35},
"3xl":{2:40,3:20.875,4:35},
"4xl":{2:42,3:21.875,4:35},
"5xl":{2:44,3:22.875,4:35},
"6xl":{2:46,3:23.875,4:35}
}
return info[size][param];
}
SmartSizeTC.prototype.getPAMCLBaseSize = function(val) {
arr_table = {"11.5625": 30, "11.75": 31, "11.9375": 32, "12.125": 33, "12.3125": 34, "12.5": 35, "12.6875": 36, "12.875": 37, "13.0625": 38, "13.25": 39, "13.4375": 40, "13.625": 41, "13.8125": 42, "14": 43, "14.1875": 44, "14.375": 45, "14.5625": 46, "14.75": 47, "14.9375": 48, "15.125": 49, "15.3125": 50, "15.5": 51, "15.6875": 52, "15.875": 53, "16.0625": 54, "16.25": 55, "16.4375": 56, "16.625": 57, "16.8125": 58, "17": 59, "17.1875": 60, "17.375": 61, "17.5625": 62}

arr2 = {};
$.each(arr_table, function(i, item) {
arr2[i] = Math.abs(val - item[2]);
});

key = 30;
min = arr2[key];
$.each(arr2, function(i, item) {
if (item < min) {
key = i;
min = item;
}
});

return key;
}
SmartSizeTC.prototype.getRangeLimits = function(param, lim) {
var info = {
height: {min: 60, max: 84},
weight: {min: 100, max: 440},
suit: {min: 32, max: 60},
pants_waist: {min: 26, max: 58}
}
return info[param][lim];
}
SmartSizeTC.prototype.getJATable2 = function(val1, val2) {
arr = {"skipped":{0:0,1:-0.09375,2:0.066666667,3:0.209117445,4:-0.046428571,5:0,6:0,7:0,8:0,9:0,10:0},"100":{0:-0.2,1:-0.3,2:-0.5,3:-0.7,4:-0.7,5:-0.7,6:-0.7,7:-0.7,8:-0.7,9:-0.7,10:-0.7},"110":{0:-0.1,1:-0.2,2:-0.4,3:-0.7,4:-0.7,5:-0.7,6:-0.7,7:-0.7,8:-0.7,9:-0.7,10:-0.7},"120":{0:0,1:-0.1,2:-0.3,3:-0.6,4:-0.7,5:-0.7,6:-0.7,7:-0.7,8:-0.7,9:-0.7,10:-0.7},"130":{0:0.1,1:0,2:-0.3,3:-0.5,4:-0.7,5:-0.7,6:-0.7,7:-0.7,8:-0.7,9:-0.7,10:-0.7},"140":{0:0.2,1:0.1,2:-0.3,3:-0.4,4:-0.6,5:-0.7,6:-0.7,7:-0.7,8:-0.7,9:-0.7,10:-0.7},"150":{0:0.3,1:0.2,2:-0.2,3:-0.3,4:-0.5,5:-0.7,6:-0.7,7:-0.7,8:-0.7,9:-0.7,10:-0.7},"160":{0:0.4,1:0.3,2:-0.1,3:-0.2,4:-0.4,5:-0.6,6:-0.7,7:-0.7,8:-0.7,9:-0.7,10:-0.7},"170":{0:0.5,1:0.4,2:0,3:0,4:-0.3,5:-0.5,6:-0.6,7:-0.7,8:-0.7,9:-0.7,10:-0.7},"180":{0:0.5,1:0.5,2:0.1,3:0.2,4:-0.2,5:-0.4,6:-0.5,7:-0.6,8:-0.7,9:-0.7,10:-0.7},"190":{0:0.5,1:0.5,2:0.2,3:0.3,4:0,5:-0.3,6:-0.4,7:-0.5,8:-0.6,9:-0.6,10:-0.6},"200":{0:0.5,1:0.5,2:0.3,3:0.4,4:0.2,5:-0.2,6:-0.3,7:-0.4,8:-0.5,9:-0.5,10:-0.5},"210":{0:0.5,1:0.5,2:0.4,3:0.5,4:0.3,5:-0.1,6:-0.2,7:-0.3,8:-0.4,9:-0.4,10:-0.4},"220":{0:0.6,1:0.5,2:0.5,3:0.5,4:0.4,5:0,6:-0.1,7:-0.2,8:-0.3,9:-0.3,10:-0.3},"230":{0:0.7,1:0.6,2:0.5,3:0.5,4:0.5,5:0.4,6:0,7:-0.1,8:-0.2,9:-0.2,10:-0.2},"240":{0:0.8,1:0.7,2:0.6,3:0.6,4:0.5,5:0.6,6:0.1,7:0,8:-0.1,9:-0.1,10:-0.1},"250":{0:0.9,1:0.8,2:0.7,3:0.7,4:0.5,5:0.8,6:0.2,7:0.1,8:0,9:0,10:0},"260":{0:1,1:0.9,2:0.8,3:0.8,4:0.6,5:0.9,6:0.3,7:0.2,8:0.1,9:0.1,10:0.1},"270":{0:1.1,1:1,2:0.9,3:0.9,4:0.7,5:1,6:0.4,7:0.3,8:0.2,9:0.2,10:0.2},"280":{0:1.2,1:1.1,2:1,3:1,4:0.8,5:1.1,6:0.5,7:0.4,8:0.3,9:0.3,10:0.3},"290":{0:1.3,1:1.2,2:1.1,3:1.1,4:0.9,5:1.2,6:0.6,7:0.5,8:0.4,9:0.4,10:0.4},"300":{0:1.4,1:1.3,2:1.2,3:1.2,4:1,5:1.3,6:0.7,7:0.6,8:0.5,9:0.5,10:0.5},"310":{0:1.5,1:1.4,2:1.3,3:1.3,4:1.1,5:1.4,6:0.8,7:0.7,8:0.6,9:0.6,10:0.6},"320":{0:1.5,1:1.5,2:1.4,3:1.4,4:1.2,5:1.5,6:0.9,7:0.8,8:0.7,9:0.7,10:0.7},"330":{0:1.5,1:1.5,2:1.5,3:1.5,4:1.3,5:1.5,6:1,7:0.9,8:0.8,9:0.8,10:0.8},"340":{0:1.5,1:1.5,2:1.5,3:1.5,4:1.4,5:1.5,6:1.1,7:1,8:0.9,9:0.9,10:0.9},"350":{0:1.5,1:1.5,2:1.5,3:1.5,4:1.5,5:1.5,6:1.2,7:1.1,8:1,9:1,10:1},"360":{0:1.5,1:1.5,2:1.5,3:1.5,4:1.5,5:1.5,6:1.3,7:1.2,8:1.1,9:1.1,10:1.1},"370":{0:1.5,1:1.5,2:1.5,3:1.5,4:1.5,5:1.5,6:1.4,7:1.3,8:1.2,9:1.2,10:1.2},"380":{0:1.5,1:1.5,2:1.5,3:1.5,4:1.5,5:1.5,6:1.5,7:1.4,8:1.3,9:1.3,10:1.3},"390":{0:1.5,1:1.5,2:1.5,3:1.5,4:1.5,5:1.5,6:1.5,7:1.5,8:1.4,9:1.4,10:1.4},"400":{0:1.5,1:1.5,2:1.5,3:1.5,4:1.5,5:1.5,6:1.5,7:1.5,8:1.5,9:1.5,10:1.5},"410":{0:1.5,1:1.5,2:1.5,3:1.5,4:1.5,5:1.5,6:1.5,7:1.5,8:1.5,9:1.5,10:1.5},"420":{0:1.5,1:1.5,2:1.5,3:1.5,4:1.5,5:1.5,6:1.5,7:1.5,8:1.5,9:1.5,10:1.5},"430":{0:1.5,1:1.5,2:1.5,3:1.5,4:1.5,5:1.5,6:1.5,7:1.5,8:1.5,9:1.5,10:1.5},"440":{0:1.5,1:1.5,2:1.5,3:1.5,4:1.5,5:1.5,6:1.5,7:1.5,8:1.5,9:1.5,10:1.5}}
return arr[val1][val2];
}
SmartSizeTC.prototype.getJATable3 = function(val1, val2) {
arr = {"skipped":{0:0.0546875,1:0.0546875,2:0.0546875,3:0.090608466,4:-0.038690476,5:0,6:0,7:0,8:0,9:0,10:0},"100":{0:-0.15,1:-0.15,2:-0.15,3:-0.2,4:-0.25,5:-0.25,6:-0.25,7:-0.25,8:-0.25,9:-0.25,10:-0.25},"110":{0:-0.12,1:-0.12,2:-0.12,3:-0.15,4:-0.2,5:-0.240384615,6:-0.25,7:-0.25,8:-0.25,9:-0.25,10:-0.25},"120":{0:-0.11,1:-0.11,2:-0.11,3:-0.1,4:-0.15,5:-0.240384615,6:-0.25,7:-0.25,8:-0.25,9:-0.25,10:-0.25},"130":{0:-0.1015625,1:-0.1015625,2:-0.1015625,3:-0.1,4:-0.1,5:-0.240384615,6:-0.25,7:-0.25,8:-0.25,9:-0.25,10:-0.25},"140":{0:-0.05,1:-0.05,2:-0.05,3:-0.1,4:-0.049107143,5:-0.240384615,6:-0.25,7:-0.25,8:-0.25,9:-0.25,10:-0.25},"150":{0:0.0234375,1:0.0234375,2:0.0234375,3:-0.08,4:-0.049107143,5:-0.240384615,6:-0.25,7:-0.25,8:-0.25,9:-0.25,10:-0.25},"160":{0:0.0546875,1:0.0546875,2:0.0546875,3:-0.062962963,4:-0.049107143,5:-0.240384615,6:-0.25,7:-0.25,8:-0.25,9:-0.25,10:-0.25},"170":{0:0.0546875,1:0.0546875,2:0.0546875,3:0.023148148,4:-0.05,5:-0.240384615,6:-0.25,7:-0.25,8:-0.25,9:-0.25,10:-0.25},"180":{0:0.0546875,1:0.0546875,2:0.0546875,3:0.090608466,4:-0.038690476,5:-0.240384615,6:-0.25,7:-0.25,8:-0.25,9:-0.25,10:-0.25},"190":{0:0.1,1:0.1,2:0.1,3:0.1,4:0.013392857,5:-0.2,6:-0.25,7:-0.25,8:-0.25,9:-0.25,10:-0.25},"200":{0:0.12,1:0.12,2:0.12,3:0.12,4:0.091517857,5:-0.1,6:-0.25,7:-0.25,8:-0.25,9:-0.25,10:-0.25},"210":{0:0.14,1:0.14,2:0.14,3:0.14,4:0.075892857,5:-0.05,6:-0.15,7:-0.25,8:-0.25,9:-0.25,10:-0.25},"220":{0:0.162037037,1:0.162037037,2:0.162037037,3:0.162037037,4:0.1,5:0.009615385,6:-0.1,7:-0.15,8:-0.25,9:-0.25,10:-0.25},"230":{0:0.18,1:0.18,2:0.18,3:0.18,4:0.12,5:0.097115385,6:-0.05,7:-0.1,8:-0.15,9:-0.25,10:-0.25},"240":{0:0.2,1:0.2,2:0.2,3:0.2,4:0.14,5:0.15,6:0,7:-0.05,8:-0.1,9:-0.15,10:-0.25},"250":{0:0.22,1:0.22,2:0.22,3:0.22,4:0.162037037,5:0.2,6:0.05,7:0,8:-0.05,9:-0.1,10:-0.15},"260":{0:0.24,1:0.24,2:0.24,3:0.24,4:0.18,5:0.25,6:0.1,7:0.05,8:0,9:-0.05,10:-0.1},"270":{0:0.26,1:0.26,2:0.26,3:0.26,4:0.2,5:0.3,6:0.15,7:0.1,8:0.05,9:0,10:-0.05},"280":{0:0.28,1:0.28,2:0.28,3:0.28,4:0.22,5:0.322115385,6:0.2,7:0.15,8:0.1,9:0.05,10:0},"290":{0:0.3,1:0.3,2:0.3,3:0.3,4:0.24,5:0.322115385,6:0.25,7:0.2,8:0.15,9:0.1,10:0.05},"300":{0:0.32,1:0.32,2:0.32,3:0.32,4:0.26,5:0.322115385,6:0.3,7:0.25,8:0.2,9:0.15,10:0.1},"310":{0:0.32,1:0.32,2:0.32,3:0.32,4:0.28,5:0.322115385,6:0.3,7:0.3,8:0.25,9:0.2,10:0.15},"320":{0:0.32,1:0.32,2:0.32,3:0.32,4:0.3,5:0.322115385,6:0.3,7:0.3,8:0.3,9:0.25,10:0.2},"330":{0:0.32,1:0.32,2:0.32,3:0.32,4:0.32,5:0.322115385,6:0.3,7:0.3,8:0.3,9:0.3,10:0.25},"340":{0:0.32,1:0.32,2:0.32,3:0.32,4:0.32,5:0.322115385,6:0.3,7:0.3,8:0.3,9:0.3,10:0.3},"350":{0:0.32,1:0.32,2:0.32,3:0.32,4:0.32,5:0.322115385,6:0.3,7:0.3,8:0.3,9:0.3,10:0.3},"360":{0:0.32,1:0.32,2:0.32,3:0.32,4:0.32,5:0.322115385,6:0.3,7:0.3,8:0.3,9:0.3,10:0.3},"370":{0:0.32,1:0.32,2:0.32,3:0.32,4:0.32,5:0.322115385,6:0.3,7:0.3,8:0.3,9:0.3,10:0.3},"380":{0:0.32,1:0.32,2:0.32,3:0.32,4:0.32,5:0.322115385,6:0.3,7:0.3,8:0.3,9:0.3,10:0.3},"390":{0:0.32,1:0.32,2:0.32,3:0.32,4:0.32,5:0.322115385,6:0.3,7:0.3,8:0.3,9:0.3,10:0.3},"400":{0:0.32,1:0.32,2:0.32,3:0.32,4:0.32,5:0.322115385,6:0.3,7:0.3,8:0.3,9:0.3,10:0.3},"410":{0:0.32,1:0.32,2:0.32,3:0.32,4:0.32,5:0.322115385,6:0.3,7:0.3,8:0.3,9:0.3,10:0.3},"420":{0:0.32,1:0.32,2:0.32,3:0.32,4:0.32,5:0.322115385,6:0.3,7:0.3,8:0.3,9:0.3,10:0.3},"430":{0:0.32,1:0.32,2:0.32,3:0.32,4:0.32,5:0.322115385,6:0.3,7:0.3,8:0.3,9:0.3,10:0.3},"440":{0:0.32,1:0.32,2:0.32,3:0.32,4:0.32,5:0.322115385,6:0.3,7:0.3,8:0.3,9:0.3,10:0.3}}
return arr[val1][val2];
}
SmartSizeTC.prototype.getJATable4 = function(val1, val2) {
arr = {"skipped":{0:0,1:0,2:0.508522727,3:0.369460227,4:-0.2125,5:-0.277686404,6:0,7:0,8:0,9:0,10:0},"60":{0:-0.8,1:-1.5,2:-1.1,3:-1.6,4:-1.9,5:-2.2,6:-2.1,7:-2.2,8:-2.3,9:-2.4,10:-2.5},"61":{0:-0.7,1:-1.4,2:-1,3:-1.5,4:-1.8,5:-2.1,6:-2,7:-2.1,8:-2.2,9:-2.3,10:-2.4},"62":{0:-0.6,1:-1.2,2:-0.9,3:-1.4,4:-1.7,5:-2,6:-1.9,7:-2,8:-2.1,9:-2.2,10:-2.3},"63":{0:-0.5,1:-1,2:-0.8,3:-1.3,4:-1.6,5:-1.9,6:-1.8,7:-1.9,8:-2,9:-2.1,10:-2.2},"64":{0:-0.4,1:-1,2:-0.7,3:-1.2,4:-1.5,5:-1.8,6:-1.7,7:-1.8,8:-1.9,9:-2,10:-2.1},"65":{0:-0.2,1:-1,2:-0.6,3:-1.1,4:-1.4,5:-1.8,6:-1.6,7:-1.7,8:-1.8,9:-1.9,10:-2},"66":{0:0,1:-1,2:-0.6,3:-1,4:-1.3,5:-1.8,6:-1.479166667,7:-1.6,8:-1.7,9:-1.8,10:-1.9},"67":{0:0.2,1:-0.6,2:-0.6,3:-1.0296875,4:-1.2,5:-1.7,6:-1.291666667,7:-1.479166667,8:-1.6,9:-1.7,10:-1.8},"68":{0:0.4,1:-0.2,2:0.102272727,3:-0.7,4:-1.2,5:-1.7,6:-1.104166667,7:-1.291666667,8:-1.479166667,9:-1.6,10:-1.7},"69":{0:0.6,1:0,2:-0.147727273,3:-0.5,4:-0.275,5:-1.2,6:-1.104166667,7:-1.104166667,8:-1.291666667,9:-1.479166667,10:-1.6},"70":{0:0.7,1:0.2,2:0.560606061,3:-0.3703125,4:-0.275,5:-0.876644737,6:-1,7:-1.104166667,8:-1.104166667,9:-1.291666667,10:-1.479166667},"71":{0:0.8,1:0.4,2:0.508522727,3:0.369460227,4:-0.2125,5:-0.277686404,6:-0.75,7:-1,8:-1.104166667,9:-1.104166667,10:-1.291666667},"72":{0:0.9,1:0.6,2:0.2671875,3:0.3921875,4:-0.2125,5:0.32127193,6:-0.25,7:-0.75,8:-1,9:-1.104166667,10:-1.104166667},"73":{0:1,1:0.8,2:0.2046875,3:0.4,4:-0.11875,5:-0.24122807,6:0.625,7:-0.25,8:-0.75,9:-1,10:-1.104166667},"74":{0:1.1,1:1,2:0.4,3:0.6,4:-0.0875,5:0.529605263,6:1,7:0.625,8:-0.25,9:-0.75,10:-1},"75":{0:1.2,1:1.1,2:0.8,3:0.8609375,4:1.1625,5:0.560855263,6:1.2,7:1.5,8:0.625,9:-0.25,10:-0.75},"76":{0:1.3,1:1.2,2:1.2,3:1,4:1.058333333,5:0.592105263,6:1.7,7:2.1,8:1.5,9:0.625,10:-0.25},"77":{0:1.4,1:1.3,2:1.4,3:1.2,4:1.0375,5:0.904605263,6:2.3,7:2.583333333,8:2.1,9:1.5,10:0.625},"78":{0:1.5,1:1.4,2:1.6,3:1.4,4:1,5:1,6:2.6,7:2.583333333,8:2.583333333,9:2.1,10:1.5},"79":{0:1.6,1:1.5,2:1.7,3:1.6,4:1.2,5:1.1,6:2.7,7:2.6,8:2.583333333,9:2.583333333,10:2.1},"80":{0:1.7,1:1.6,2:1.8,3:1.7,4:1.4,5:1.2,6:2.8,7:2.583333333,8:2.583333333,9:2.583333333,10:2.583333333},"81":{0:1.8,1:1.7,2:1.9,3:1.8,4:1.6,5:1.6,6:2.9,7:3,8:2.583333333,9:2.583333333,10:2.583333333},"82":{0:1.9,1:1.8,2:2,3:1.9,4:1.8,5:2,6:3,7:3.3,8:3,9:2.8,10:2.583333333},"83":{0:2,1:1.9,2:2.1,3:2,4:2,5:2.2,6:3.1,7:3.6,8:3.3,9:3,10:2.8},"84":{0:2.1,1:2,2:2.1,3:2.1,4:2.2,5:2.3,6:3.2,7:3.9,8:3.6,9:3.3,10:3}}
return arr[val1][val2];
}
SmartSizeTC.prototype.getJATable5 = function(val1, val2) {
arr = {"skipped":{0:0.00,1:0.50,2:0.40,3:0.10,4:-0.10,5:0,6:0,7:0,8:0,9:0,10:0},"60":{0:-0.20,1:-0.40,2:-1.10,3:-2.00,4:-2.50,5:-2.70,6:-2.70,7:-2.70,8:-2.70,9:-2.70,10:-2.70},"61":{0:-0.15,1:-0.25,2:-0.90,3:-1.80,4:-2.40,5:-2.60,6:-2.70,7:-2.70,8:-2.70,9:-2.70,10:-2.70},"62":{0:-0.10,1:-0.20,2:-0.80,3:-1.60,4:-2.30,5:-2.50,6:-2.60,7:-2.70,8:-2.70,9:-2.70,10:-2.70},"63":{0:-0.05,1:-0.15,2:-0.70,3:-1.30,4:-2.20,5:-2.40,6:-2.50,7:-2.60,8:-2.70,9:-2.70,10:-2.70},"64":{0:0.00,1:-0.10,2:-0.60,3:-1.00,4:-2.10,5:-2.30,6:-2.40,7:-2.50,8:-2.60,9:-2.60,10:-2.60},"65":{0:0.10,1:-0.05,2:-0.50,3:-0.80,4:-2.00,5:-2.20,6:-2.30,7:-2.40,8:-2.50,9:-2.50,10:-2.50},"66":{0:0.20,1:0.00,2:-0.25,3:-0.60,4:-1.80,5:-2.10,6:-2.20,7:-2.30,8:-2.40,9:-2.40,10:-2.40},"67":{0:0.30,1:0.10,2:0.00,3:-0.50,4:-1.50,5:-2.00,6:-2.10,7:-2.20,8:-2.30,9:-2.30,10:-2.30},"68":{0:0.40,1:0.20,2:0.10,3:-0.25,4:-1.00,5:-1.80,6:-2.00,7:-2.10,8:-2.20,9:-2.20,10:-2.20},"69":{0:0.50,1:0.30,2:0.20,3:-0.10,4:-0.50,5:-1.50,6:-1.80,7:-2.00,8:-2.10,9:-2.10,10:-2.10},"70":{0:0.60,1:0.40,2:0.30,3:0.00,4:-0.25,5:-1.00,6:-1.50,7:-1.80,8:-2.00,9:-2.00,10:-2.00},"71":{0:0.70,1:0.50,2:0.40,3:0.10,4:-0.10,5:-0.50,6:-1.00,7:-1.50,8:-1.80,9:-1.80,10:-1.80},"72":{0:0.80,1:0.60,2:0.50,3:0.20,4:0.00,5:-0.25,6:-0.50,7:-1.00,8:-1.50,9:-1.50,10:-1.50},"73":{0:0.90,1:0.70,2:0.60,3:0.30,4:0.10,5:-0.10,6:-0.25,7:-0.50,8:-1.00,9:-1.00,10:-1.00},"74":{0:1.00,1:0.80,2:0.70,3:0.40,4:0.25,5:0.00,6:-0.10,7:-0.25,8:-0.50,9:-0.50,10:-0.50},"75":{0:1.10,1:0.90,2:0.80,3:0.50,4:0.50,5:0.10,6:0.00,7:-0.10,8:-0.25,9:-0.25,10:-0.25},"76":{0:1.20,1:1.00,2:0.90,3:0.70,4:0.75,5:0.25,6:0.10,7:0.00,8:-0.10,9:-0.10,10:-0.10},"77":{0:1.30,1:1.10,2:1.00,3:0.90,4:1.00,5:0.50,6:0.25,7:0.10,8:0.00,9:0.00,10:0.00},"78":{0:1.40,1:1.20,2:1.10,3:1.00,4:1.10,5:0.75,6:0.50,7:0.25,8:0.10,9:0.10,10:0.10},"79":{0:1.50,1:1.30,2:1.20,3:1.10,4:1.20,5:1.00,6:0.75,7:0.50,8:0.25,9:0.25,10:0.25},"80":{0:1.60,1:1.40,2:1.30,3:1.20,4:1.30,5:1.10,6:1.00,7:0.75,8:0.50,9:0.50,10:0.50},"81":{0:1.70,1:1.50,2:1.40,3:1.30,4:1.40,5:1.20,6:1.10,7:1.00,8:0.75,9:0.75,10:0.75},"82":{0:1.80,1:1.60,2:1.50,3:1.40,4:1.50,5:1.30,6:1.20,7:1.10,8:1.00,9:1.00,10:1.00},"83":{0:1.90,1:1.70,2:1.60,3:1.50,4:1.60,5:1.40,6:1.30,7:1.20,8:1.10,9:1.10,10:1.10},"84":{0:2.00,1:1.80,2:1.70,3:1.70,4:1.70,5:1.50,6:1.40,7:1.30,8:1.20,9:1.20,10:1.20}}
return arr[val1][val2];
}
SmartSizeTC.prototype.getJATable6 = function(val1, val2) {
arr = {"skipped":{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},"100":{0:-0.4,1:-0.4,2:-0.5,3:-0.5,4:-0.5,5:-0.5,6:-0.5,7:-0.5,8:-0.5,9:-0.5,10:-0.5},"110":{0:-0.301535088,1:-0.301535088,2:-0.4,3:-0.5,4:-0.5,5:-0.5,6:-0.5,7:-0.5,8:-0.5,9:-0.5,10:-0.5},"120":{0:-0.2,1:-0.2,2:-0.301535088,3:-0.5,4:-0.5,5:-0.5,6:-0.5,7:-0.5,8:-0.5,9:-0.5,10:-0.5},"130":{0:-0.1,1:-0.1,2:-0.2,3:-0.4,4:-0.4,5:-0.5,6:-0.5,7:-0.5,8:-0.5,9:-0.5,10:-0.5},"140":{0:0,1:0,2:-0.1,3:-0.301535088,4:-0.301535088,5:-0.5,6:-0.5,7:-0.5,8:-0.5,9:-0.5,10:-0.5},"150":{0:0,1:0,2:0,3:-0.2,4:-0.2,5:-0.5,6:-0.5,7:-0.5,8:-0.5,9:-0.5,10:-0.5},"160":{0:0.1,1:0.1,2:0,3:-0.1,4:-0.1,5:-0.5,6:-0.5,7:-0.5,8:-0.5,9:-0.5,10:-0.5},"170":{0:0.15,1:0.15,2:0.1,3:0,4:0,5:-0.5,6:-0.5,7:-0.5,8:-0.5,9:-0.5,10:-0.5},"180":{0:0.2,1:0.2,2:0.15,3:0,4:0,5:-0.4,6:-0.5,7:-0.5,8:-0.5,9:-0.5,10:-0.5},"190":{0:0.22,1:0.22,2:0.2,3:0.1,4:0.1,5:-0.301535088,6:-0.4,7:-0.5,8:-0.5,9:-0.5,10:-0.5},"200":{0:0.24,1:0.24,2:0.22,3:0.15,4:0.15,5:-0.2,6:-0.301535088,7:-0.4,8:-0.5,9:-0.5,10:-0.5},"210":{0:0.26,1:0.26,2:0.24,3:0.2,4:0.2,5:-0.1,6:-0.2,7:-0.301535088,8:-0.4,9:-0.4,10:-0.4},"220":{0:0.27,1:0.27,2:0.26,3:0.22,4:0.22,5:0,6:-0.1,7:-0.2,8:-0.301535088,9:-0.301535088,10:-0.301535088},"230":{0:0.28,1:0.28,2:0.27,3:0.24,4:0.23,5:0,6:0,7:-0.1,8:-0.2,9:-0.2,10:-0.2},"240":{0:0.3,1:0.3,2:0.28,3:0.26,4:0.24,5:0.1,6:0,7:0,8:-0.1,9:-0.1,10:-0.1},"250":{0:0.32,1:0.32,2:0.3,3:0.27,4:0.25,5:0.15,6:0.1,7:0,8:0,9:0,10:0},"260":{0:0.34,1:0.34,2:0.32,3:0.28,4:0.26,5:0.2,6:0.15,7:0.1,8:0,9:0,10:0},"270":{0:0.35,1:0.35,2:0.34,3:0.3,4:0.27,5:0.22,6:0.2,7:0.15,8:0.1,9:0.1,10:0.1},"280":{0:0.35,1:0.35,2:0.35,3:0.32,4:0.28,5:0.26,6:0.22,7:0.2,8:0.15,9:0.15,10:0.15},"290":{0:0.35,1:0.35,2:0.35,3:0.34,4:0.3,5:0.28,6:0.26,7:0.22,8:0.2,9:0.2,10:0.2},"300":{0:0.35,1:0.35,2:0.35,3:0.35,4:0.32,5:0.3,6:0.28,7:0.26,8:0.22,9:0.22,10:0.22},"310":{0:0.35,1:0.35,2:0.35,3:0.35,4:0.34,5:0.32,6:0.3,7:0.28,8:0.24,9:0.24,10:0.24},"320":{0:0.35,1:0.35,2:0.35,3:0.35,4:0.35,5:0.34,6:0.32,7:0.3,8:0.28,9:0.28,10:0.26},"330":{0:0.35,1:0.35,2:0.35,3:0.35,4:0.35,5:0.35,6:0.34,7:0.32,8:0.3,9:0.3,10:0.28},"340":{0:0.35,1:0.35,2:0.35,3:0.35,4:0.35,5:0.35,6:0.35,7:0.34,8:0.32,9:0.32,10:0.3},"350":{0:0.35,1:0.35,2:0.35,3:0.35,4:0.35,5:0.35,6:0.35,7:0.35,8:0.34,9:0.34,10:0.32},"360":{0:0.35,1:0.35,2:0.35,3:0.35,4:0.35,5:0.35,6:0.35,7:0.35,8:0.35,9:0.35,10:0.34},"370":{0:0.35,1:0.35,2:0.35,3:0.35,4:0.35,5:0.35,6:0.35,7:0.35,8:0.35,9:0.35,10:0.35},"380":{0:0.35,1:0.35,2:0.35,3:0.35,4:0.35,5:0.35,6:0.35,7:0.35,8:0.35,9:0.35,10:0.35},"390":{0:0.35,1:0.35,2:0.35,3:0.35,4:0.35,5:0.35,6:0.35,7:0.35,8:0.35,9:0.35,10:0.35},"400":{0:0.35,1:0.35,2:0.35,3:0.35,4:0.35,5:0.35,6:0.35,7:0.35,8:0.35,9:0.35,10:0.35},"410":{0:0.35,1:0.35,2:0.35,3:0.35,4:0.35,5:0.35,6:0.35,7:0.35,8:0.35,9:0.35,10:0.35},"420":{0:0.35,1:0.35,2:0.35,3:0.35,4:0.35,5:0.35,6:0.35,7:0.35,8:0.35,9:0.35,10:0.35},"430":{0:0.35,1:0.35,2:0.35,3:0.35,4:0.35,5:0.35,6:0.35,7:0.35,8:0.35,9:0.35,10:0.35},"440":{0:0.35,1:0.35,2:0.35,3:0.35,4:0.35,5:0.35,6:0.35,7:0.35,8:0.35,9:0.35,10:0.35}}
return arr[val1][val2];
}
SmartSizeTC.prototype.getJATable7 = function(val1) {
arr = {"28":{2:17.5},"29":{2:17.9},"30":{2:18.3},"31":{2:18.6},"32":{2:19},"33":{2:19.4},"34":{2:19.8},"35":{2:20.1},"36":{2:20.5},"37":{2:20.9},"38":{2:21.3},"39":{2:21.6},"40":{2:22},"41":{2:22.4},"42":{2:22.8},"43":{2:23.1},"44":{2:23.5},"45":{2:23.9},"46":{2:24.3},"47":{2:24.6},"48":{2:25},"49":{2:25.4},"50":{2:25.8},"51":{2:26.1},"52":{2:26.5},"53":{2:26.9},"54":{2:27.3},"55":{2:27.6},"56":{2:28},"57":{2:28.4},"58":{2:28.8},"59":{2:29.2},"60":{2:29.6},"61":{2:30.1},"62":{2:30.5},"63":{2:30.9},"64":{2:31.4}}
return arr[val1][2];
}
SmartSizeTC.prototype.getJATable8 = function(val1, val2) {
arr = {"skipped":{0:0.7,1:0.4,2:0.7,3:0.4,4:-0.15,5:0,6:0,7:0,8:0,9:0,10:0},"100":{0:-1,1:-1.4,2:-1.8,3:-1.8,4:-2,5:-2.35,6:-2.4,7:-2.4,8:-2.4,9:-2.4,10:-2.4},"110":{0:-0.5,1:-0.6,2:-1,3:-1.6,4:-1.7,5:-2.3,6:-2.35,7:-2.4,8:-2.4,9:-2.4,10:-2.4},"120":{0:0,1:0,2:-0.4,3:-1.4,4:-1.4,5:-2.25,6:-2.3,7:-2.35,8:-2.4,9:-2.4,10:-2.4},"130":{0:0,1:0,2:-0.078124986,3:-1.3,4:-1.2,5:-2.2,6:-2.25,7:-2.3,8:-2.35,9:-2.4,10:-2.4},"140":{0:0,1:0,2:0,3:-1.2,4:-1,5:-2.15,6:-2.2,7:-2.25,8:-2.3,9:-2.35,10:-2.35},"150":{0:0.06,1:0.01,2:0.095486106,3:-0.8,4:-0.8,5:-2.1,6:-2.15,7:-2.2,8:-2.25,9:-2.3,10:-2.3},"160":{0:0.1,1:0.06,2:0.1,3:-0.4,4:-0.6,5:-2.05,6:-2.1,7:-2.15,8:-2.2,9:-2.25,10:-2.25},"170":{0:0.4,1:0.1,2:0.4,3:0.104560326,4:-0.2,5:-2,6:-2.05,7:-2.1,8:-2.15,9:-2.2,10:-2.2},"180":{0:0.7,1:0.4,2:0.7,3:0.4,4:-0.15,5:-1.8,6:-2,7:-2.05,8:-2.1,9:-2.15,10:-2.15},"190":{0:0.8,1:0.7,2:0.8,3:0.7,4:-0.101476872,5:-1,6:-1.8,7:-2,8:-2.05,9:-2.1,10:-2.1},"200":{0:0.9,1:0.8,2:0.9,3:0.8,4:0.3,5:-0.8,6:-1,7:-1.8,8:-2,9:-2.05,10:-2.05},"210":{0:1,1:0.9,2:1,3:0.9,4:0.699418823,5:0,6:-0.8,7:-1,8:-1.8,9:-2,10:-2},"220":{0:1.1,1:1,2:1.1,3:1,4:0.75,5:0.4,6:0,7:-0.8,8:-1,9:-1.8,10:-1.8},"230":{0:1.2,1:1.1,2:1.2,3:1.1,4:0.8,5:0.8,6:0.4,7:0,8:-0.8,9:-1,10:-1},"240":{0:1.3,1:1.2,2:1.3,3:1.2,4:0.9,5:1.2,6:0.8,7:0.4,8:0,9:-0.8,10:-0.8},"250":{0:1.4,1:1.3,2:1.4,3:1.3,4:1,5:1.3,6:1.2,7:0.8,8:0.4,9:0,10:0},"260":{0:1.5,1:1.4,2:1.5,3:1.4,4:1.1,5:1.4,6:1.3,7:1.2,8:0.8,9:0.4,10:0.4},"270":{0:1.6,1:1.5,2:1.6,3:1.5,4:1.2,5:1.5,6:1.4,7:1.3,8:1.2,9:0.8,10:0.8},"280":{0:1.7,1:1.6,2:1.7,3:1.6,4:1.3,5:1.6,6:1.5,7:1.4,8:1.3,9:1.2,10:1.2},"290":{0:1.8,1:1.7,2:1.8,3:1.7,4:1.4,5:1.7,6:1.6,7:1.5,8:1.4,9:1.3,10:1.3},"300":{0:1.9,1:1.8,2:1.9,3:1.8,4:1.5,5:1.8,6:1.7,7:1.6,8:1.5,9:1.4,10:1.4},"310":{0:2,1:1.9,2:2,3:1.9,4:1.6,5:1.9,6:1.8,7:1.7,8:1.6,9:1.5,10:1.5},"320":{0:2.1,1:2,2:2.1,3:2,4:1.7,5:2,6:1.9,7:1.8,8:1.7,9:1.6,10:1.6},"330":{0:2.2,1:2.1,2:2.2,3:2.1,4:1.8,5:2.1,6:2,7:1.9,8:1.8,9:1.7,10:1.7},"340":{0:2.3,1:2.2,2:2.3,3:2.2,4:1.9,5:2.2,6:2.1,7:2,8:1.9,9:1.8,10:1.8},"350":{0:2.4,1:2.3,2:2.4,3:2.3,4:2,5:2.3,6:2.2,7:2.1,8:2,9:1.9,10:1.9},"360":{0:2.5,1:2.4,2:2.5,3:2.4,4:2.1,5:2.4,6:2.3,7:2.2,8:2.1,9:2,10:2},"370":{0:2.6,1:2.5,2:2.6,3:2.5,4:2.2,5:2.5,6:2.4,7:2.3,8:2.2,9:2.1,10:2.1},"380":{0:2.7,1:2.6,2:2.7,3:2.6,4:2.3,5:2.6,6:2.5,7:2.4,8:2.3,9:2.2,10:2.2},"390":{0:2.8,1:2.7,2:2.8,3:2.7,4:2.4,5:2.7,6:2.6,7:2.5,8:2.4,9:2.3,10:2.3},"400":{0:2.9,1:2.8,2:2.9,3:2.8,4:2.5,5:2.8,6:2.7,7:2.6,8:2.5,9:2.4,10:2.4},"410":{0:3,1:2.9,2:3,3:2.9,4:2.6,5:2.9,6:2.8,7:2.7,8:2.6,9:2.5,10:2.5},"420":{0:3.1,1:3,2:3.1,3:3,4:2.7,5:3,6:2.9,7:2.8,8:2.7,9:2.6,10:2.6},"430":{0:3.2,1:3.1,2:3.2,3:3.1,4:2.8,5:3.1,6:3.1,7:2.9,8:2.8,9:2.7,10:2.7},"440":{0:3.2,1:3.2,2:3.1,3:3.2,4:2.9,5:3.2,6:3.2,7:3.1,8:2.9,9:2.8,10:2.8}}
return arr[val1][val2];
}
SmartSizeTC.prototype.getJATable9 = function(val1, val2) {
arr = {"skipped":{0:-0.05,1:-0.05,2:-0.067708336,3:-0.067313105,4:-0.043212874,5:-0.05,6:-0.05,7:-0.05,8:-0.05,9:-0.05,10:-0.05},"0":{0:0.2,1:0.2,2:0.203125008,3:0.2,4:0.2,5:0.2,6:0.2,7:0.2,8:0.2,9:0.2,10:0.2},"1":{0:-0.05,1:-0.05,2:-0.067708336,3:-0.067313105,4:-0.043212874,5:-0.05,6:-0.05,7:-0.05,8:-0.05,9:-0.05,10:-0.05},"2":{0:0.04522567,1:0.04522567,2:0,3:0.025434049,4:0.04522567,5:0.04522567,6:0.04522567,7:0.04522567,8:0.04522567,9:0.04522567,10:0.04522567},"3":{0:0,1:0,2:0,3:0,4:-0.003110518,5:0,6:0,7:0,8:0,9:0,10:0}}
return arr[val1][val2];
}
SmartSizeTC.prototype.getJATable10 = function(val1, val2) {
arr = {"skipped":{0:0.10,1:0.00,2:0.00,3:-0.10,4:-0.30,5:0.40,6:0.30,7:0.20,8:0.40,9:0.20,10:0.00},"0":{0:0.00,1:-0.10,2:-0.20,3:-0.20,4:-0.40,5:-0.60,6:-0.80,7:-1.00,8:-1.20,9:-1.40,10:-1.60},"1":{0:0.10,1:0.00,2:0.00,3:-0.10,4:-0.30,5:-0.50,6:-0.60,7:-0.70,8:-0.80,9:-1.00,10:-1.20},"2":{0:0.90,1:0.80,2:0.70,3:0.60,4:0.50,5:0.40,6:0.30,7:0.20,8:0.10,9:0.00,10:0.00},"3":{0:1.50,1:1.40,2:1.30,3:1.30,4:1.20,5:1.00,6:0.80,7:0.60,8:0.40,9:0.20,10:0.00}}
return arr[val1][val2];
}
SmartSizeTC.prototype.getJAFactoryLimitations = function(what, val, algo_val) {
if (what == "shoulder_width") {
min = (algo_val <= 28.75 ? ((algo_val - 22) * 8 / 3 * 0.1875 + 18.4375) : ((algo_val - 29.1875) * 16 / 7 * 0.1875 + 22)) - 0.375;
max = (algo_val <= 28.75 ? ((algo_val - 22) * 8 / 3 * 0.1875 + 18.4375) : ((algo_val - 29.1875) * 16 / 7 * 0.1875 + 22)) + 1.25;
}
if (what == "midsection_width") {
min = algo_val - 2 - 1.75;
max = algo_val - 2 + 1.75;
}
if (what == "center_back_length") {
min = (algo_val <= 28.75 ? ((algo_val - 19.75) * 8 / 3 * 0.0625 + 29.1875) : ((algo_val - 29.1875) * 16 / 7 * 0.125 + 25.6875)) - 3;
max = (algo_val <= 28.75 ? ((algo_val - 19.75) * 8 / 3 * 0.0625 + 29.1875) : ((algo_val - 29.1875) * 16 / 7 * 0.125 + 25.6875)) + 4;
}
if (what == "sleeve_bicep_width") {
min = (algo_val <= 28.75 ? ((algo_val - 19.75) * 8 / 3 * 0.0625 + 7.625) : ((algo_val - 29.1875) * 16 / 7 * 0.125 + 9.25)) - 0.25;
max = (algo_val <= 28.75 ? ((algo_val - 19.75) * 8 / 3 * 0.0625 + 7.625) : ((algo_val - 29.1875) * 16 / 7 * 0.125 + 9.25)) + 0.375;
}
if (what == "sleeve_opening_width") {
min = (algo_val <= 28.75 ? ((algo_val - 19.75) * 8 / 3 * 0.0625 + 5.1875) : ((algo_val - 29.1875) * 16 / 7 * 0.0625 + 6.75)) - 0.5;
max = (algo_val <= 28.75 ? ((algo_val - 19.75) * 8 / 3 * 0.0625 + 5.1875) : ((algo_val - 29.1875) * 16 / 7 * 0.0625 + 6.75)) + 0.5;
}
min = this.getRound10(min);
max = this.getRound10(max);
return val < min ? min : (val > max ? max : val);
}
SmartSizeTC.prototype.getPATable3 = function(val1) {
arr = {"60":{0:26},"61":{0:26.25},"62":{0:26.5},"63":{0:26.75},"64":{0:27.125},"65":{0:27.5},"66":{0:27.875},"67":{0:28.25},"68":{0:28.625},"69":{0:29},"70":{0:29.375},"71":{0:29.75},"72":{0:30.125},"73":{0:30.5},"74":{0:30.875},"75":{0:31.25},"76":{0:31.66},"77":{0:32.07},"78":{0:32.48},"79":{0:32.89},"80":{0:33.3},"81":{0:33.71},"82":{0:34.12},"83":{0:34.53},"84":{0:34.94}}
return arr[val1][0];
}
SmartSizeTC.prototype.getPATable4 = function(val1, val2) {
arr = {"30":{2:11.5625,3:9.239,4:9.625,5:15.25},"31":{2:11.75,3:9.2935,4:9.6875,5:15.375},"32":{2:11.9375,3:9.349,4:9.75,5:15.5},"33":{2:12.125,3:9.4035,4:9.8125,5:15.625},"34":{2:12.3125,3:9.458,4:9.875,5:15.75},"35":{2:12.5,3:9.5125,4:9.9375,5:15.875},"36":{2:12.6875,3:9.567,4:10,5:16},"37":{2:12.875,3:9.6215,4:10.0625,5:16.125},"38":{2:13.0625,3:9.675,4:10.125,5:16.25},"39":{2:13.25,3:9.7295,4:10.1875,5:16.375},"40":{2:13.4375,3:9.783,4:10.25,5:16.5},"41":{2:13.625,3:9.8365,4:10.3125,5:16.625},"42":{2:13.8125,3:9.89,4:10.375,5:16.75},"43":{2:14,3:9.9435,4:10.4375,5:16.875},"44":{2:14.1875,3:9.997,4:10.5,5:17},"45":{2:14.375,3:10.0505,4:10.5625,5:17.125},"46":{2:14.5625,3:10.103,4:10.625,5:17.25},"47":{2:14.75,3:10.1565,4:10.6875,5:17.375},"48":{2:14.9375,3:10.209,4:10.75,5:17.5},"49":{2:15.125,3:10.2625,4:10.8125,5:17.625},"50":{2:15.3125,3:10.315,4:10.875,5:17.75},"51":{2:15.5,3:10.3675,4:10.9375,5:17.875},"52":{2:15.6875,3:10.42,4:11,5:18},"53":{2:15.875,3:10.4725,4:11.0625,5:18.125},"54":{2:16.0625,3:10.525,4:11.125,5:18.25},"55":{2:16.25,3:10.5765,4:11.1875,5:18.375},"56":{2:16.4375,3:10.629,4:11.25,5:18.5},"57":{2:16.625,3:10.6815,4:11.3125,5:18.625},"58":{2:16.8125,3:10.733,4:11.375,5:18.75},"59":{2:17,3:10.7845,4:11.4375,5:19},"60":{2:17.1875,3:10.837,4:11.5,5:19.25},"61":{2:17.375,3:10.8885,4:11.5625,5:19.5},"62":{2:17.5625,3:10.94,4:11.625,5:19.75},"63":{2:17.75,3:10.9915,4:11.6875,5:20},"64":{2:17.9375,3:11.043,4:11.75,5:20.25},"65":{2:18.125,3:11.0945,4:11.8125,5:20.5},"66":{2:18.3125,3:11.146,4:11.875,5:20.75},"67":{2:18.5,3:11.1975,4:11.9375,5:21},"68":{2:18.6875,3:11.249,4:12,5:21.25},"69":{2:18.875,3:11.3005,4:12.0625,5:21.5},"70":{2:19.0625,3:11.352,4:12.125,5:21.75},"71":{2:19.25,3:11.4035,4:12.1875,5:22},"72":{2:19.4375,3:11.455,4:12.25,5:22.25},"73":{2:19.625,3:11.5065,4:12.3125,5:22.5},"74":{2:19.8125,3:11.558,4:12.375,5:22.75},"75":{2:20,3:11.6095,4:12.4375,5:23},"76":{2:20.1875,3:11.661,4:12.5,5:23.25},"77":{2:20.375,3:11.7125,4:12.5625,5:23.5},"78":{2:20.5625,3:11.764,4:12.625,5:23.75},"79":{2:20.75,3:11.8155,4:12.6875,5:24},"80":{2:20.9375,3:11.867,4:12.75,5:24.25},"81":{2:21.125,3:11.9185,4:12.8125,5:24.5},"82":{2:21.3125,3:11.97,4:12.875,5:24.75},"83":{2:21.5,3:12.0215,4:12.9375,5:25},"84":{2:21.6875,3:12.073,4:13,5:25.25},"85":{2:21.875,3:12.1245,4:13.0625,5:25.5},"86":{2:22.0625,3:12.176,4:13.125,5:25.75},"87":{2:22.25,3:12.2275,4:13.1875,5:26},"88":{2:22.4375,3:12.279,4:13.25,5:26.25},"89":{2:22.625,3:12.3305,4:13.3125,5:26.5},"90":{2:22.8125,3:12.382,4:13.375,5:26.75},"91":{2:23,3:12.4335,4:13.4375,5:27},"92":{2:23.1875,3:12.485,4:13.5,5:27.25}}
return arr[val1][val2];
}
SmartSizeTC.prototype.getPATable5 = function(val1, val2) {
arr = {"0":{2:0,3:0,4:0},"1":{2:0.2,3:0.2,4:0.1},"2":{2:-0.2,3:-0.2,4:-0.1},"3":{2:0.3,3:0.2,4:0.1}}
return arr[val1][val2];
}
SmartSizeTC.prototype.getPATable6 = function(val1, val2) {
arr = {"0":{2:-0.2,3:-0.2,4:-0.2,5:-0.2},"1":{2:0,3:0,4:0,5:0},"2":{2:0.3,3:0.3,4:0.3,5:0.3},"3":{2:0,3:0,4:0.2,5:0.3}}
return arr[val1][val2];
}
SmartSizeTC.prototype.getPATable7 = function(val1, val2) {
arr = {"0":{2:-0.2},"1":{2:0},"2":{2:0.2},"3":{2:0.4}}
return arr[val1][val2];
}
SmartSizeTC.prototype.getPATable8 = function(val1, val2) {
arr = {"0":{2:0.2,3:0.3},"1":{2:-0.2,3:-0.3},"2":{2:0,3:0}}
return arr[val1][val2];
}
SmartSizeTC.prototype.getPASelectedPantsBaseSize = function(thigh_width) {
arr = {"30":{0:11.5625,1:9.239,2:24.875},"31":{0:11.75,1:9.2935,2:25.0625},"32":{0:11.9375,1:9.349,2:25.25},"33":{0:12.125,1:9.4035,2:25.4375},"34":{0:12.3125,1:9.458,2:25.625},"35":{0:12.5,1:9.5125,2:25.8125},"36":{0:12.6875,1:9.567,2:26},"37":{0:12.875,1:9.6215,2:26.1875},"38":{0:13.0625,1:9.675,2:26.375},"39":{0:13.25,1:9.7295,2:26.5625},"40":{0:13.4375,1:9.783,2:26.75},"41":{0:13.625,1:9.8365,2:26.9375},"42":{0:13.8125,1:9.89,2:27.125},"43":{0:14,1:9.9435,2:27.3125},"44":{0:14.1875,1:9.997,2:27.5},"45":{0:14.375,1:10.0505,2:27.6875},"46":{0:14.5625,1:10.103,2:27.875},"47":{0:14.75,1:10.1565,2:28.0625},"48":{0:14.9375,1:10.209,2:28.25},"49":{0:15.125,1:10.2625,2:28.4375},"50":{0:15.3125,1:10.315,2:28.625},"51":{0:15.5,1:10.3675,2:28.8125},"52":{0:15.6875,1:10.42,2:29},"53":{0:15.875,1:10.4725,2:29.1875},"54":{0:16.0625,1:10.525,2:29.375},"55":{0:16.25,1:10.5765,2:29.5625},"56":{0:16.4375,1:10.629,2:29.75},"57":{0:16.625,1:10.6815,2:29.9375},"58":{0:16.8125,1:10.733,2:30.125},"59":{0:17,1:10.722,2:30.375},"60":{0:17.1875,1:10.712,2:30.625},"61":{0:17.375,1:10.701,2:30.875},"62":{0:17.5625,1:10.69,2:31.125}}
$.each(arr, function(i, item) {
selected_pants_base_size = i;
if (thigh_width <= item[0]) {
selected_pants_base_size = parseInt(i)-1;
return false;
}
})
return selected_pants_base_size;
}

SmartSizeTC.prototype.isInputYes = function(paramName) {
switch (paramName){
case 'collar':
    return this.isNumeric(this.data.collar);
    break;
case 'sleeve':
    return this.isNumeric(this.data.sleeve);
    break;
case 'tall':
    return this.isNumeric(this.data.tall);
    break;
case 'pants_waist':
    return this.isNumeric(this.data.pants_waist);
    break;
case 'midsection_style':
    return this.isNumeric(this.data.midsection_style);
    break;
case 'shirt_type':
    return this.isNumeric(this.data.shirt_type);
    break;
case 'tucked':
    return this.isNumeric(this.data.tucked);
    break;
case 'weight':
    return this.isNumeric(this.data.weight_algo);
    break;
case 'shirt_tight':
    return this.isNumeric(this.data.shirt_tight);
    break;
case 'ethnicity':
    return this.isNumeric(this.data.ethnicity);
    break;
case 'jacket_size':
    return this.isNumeric(this.data.jacket_size);
    break;
case 'best_buttocks_thighs':
    return this.isNumeric(this.data.best_buttocks_thighs);
    break;
case 'like_pants_to_fit':
    return this.isNumeric(this.data.like_pants_to_fit);
    break;
case 'like_bottom_pants':
    return this.isNumeric(this.data.like_bottom_pants);
    break;
case 'high_wear_pants':
    return this.isNumeric(this.data.high_wear_pants);
    break;
case 'pants_inseam':
    return this.isNumeric(this.data.pants_inseam);
    break;
}
alert("SmartSize.prototype.isInputYes() - param '" + paramName + "' doesn't exist" );
}
SmartSizeTC.prototype.isNumeric = function(value) {
return !isNaN(parseFloat(value));
}


function number_format(number, decimals, dec_point, thousands_sep) {
var exponent = "";
var numberstr = number.toString ();
var eindex = numberstr.indexOf ("e");
var i, z;
if(eindex > -1){
exponent = numberstr.substring (eindex);
number = parseFloat (numberstr.substring (0, eindex));
}

if(decimals != null){
var temp = Math.pow (10, decimals);
number = Math.round (number * temp) / temp;
}
var sign = number < 0 ? "-" : "";
var integer = (number > 0 ?
Math.floor (number) : Math.abs (Math.ceil (number))).toString ();

var fractional = number.toString ().substring (integer.length + sign.length);
dec_point = dec_point != null ? dec_point : ".";
fractional = decimals != null && decimals > 0 || fractional.length > 1 ? (dec_point + fractional.substring (1)) : "";
if(decimals != null && decimals > 0){
for(i = fractional.length - 1, z = decimals; i < z; ++i)
fractional += "0";
}

thousands_sep = (thousands_sep != dec_point || fractional.length == 0) ?
          thousands_sep : null;
if(thousands_sep != null && thousands_sep != ""){
for (i = integer.length - 3; i > 0; i -= 3)
integer = integer.substring (0 , i) + thousands_sep + integer.substring (i);
}
return sign + integer + fractional + exponent;
}

/**
* International Metrics v.1
*/
var ConvertMethod = {
PoundsToKg: function(num) {
return number_format((excelRound(10 * parseFloat(num) / 2.20462) / 10), 1);
},
KgToPounds: function(num) {
return number_format((excelRound(100 * parseFloat(num) * 2.20462) / 100), 1);
},
TallInchesToCm: function(tall_feet, tall_inches) {
return number_format((excelRound(10 * (parseInt(tall_feet) * 12 + parseFloat(tall_inches)) / 0.393701) / 10), 1);
},
InchesToCm: function(num) {
return number_format((excelRound(10 * parseFloat(num) / 0.393701) / 10), 1);
},
CmToInches: function(num) {
return number_format((excelRound(100 * parseFloat(num) * 0.393701) / 100), 2);
},
UsToEu: function(num) {
 return parseInt(num) + 10;
},
CmToFeetInches: function(num) {
inches = this.CmToInches(num);
res = {};
res.feet = Math.floor(inches / 12);
res.inches = number_format((inches - res.feet * 12), 2);
return res;
},
ConvField: function(field) {
if (IntMetric == 'cm') {
$('#'+field).val(number_format(this.InchesToCm($('#'+field)._in()), 1));
}
else {
$('#'+field).val(number_format($('#'+field)._in(), 2));
}
},
ToggleMetric: function() {
if (typeof this_is_das3 != 'undefined') {
    ConvertMethod.ConvField('collar_field_das3');
    ConvertMethod.ConvField('sleeve_field_das3');
    ConvertMethod.ConvField('yoke_field_das3');
    ConvertMethod.ConvField('chest_field_das3');
    ConvertMethod.ConvField('midsection_field_das3');
    ConvertMethod.ConvField('length_field_das3');
    ConvertMethod.ConvField('sleeve_w_field_das3');
    ConvertMethod.ConvField('cuff_field_das3');
    ConvertMethod.ConvField('short_sleeve_length_field_das3');
    ConvertMethod.ConvField('short_sleeve_width_field_das3');
    ConvertMethod.ConvField('short_sleeve_opening_width_field_das3');
    ConvertMethod.ConvField('adddim_bottom_width_field_das3');
}
else {
    ConvertMethod.ConvField('collar_field');
    ConvertMethod.ConvField('sleeve_field');
    ConvertMethod.ConvField('yoke_field');
    ConvertMethod.ConvField('chest_field');
    ConvertMethod.ConvField('midsection_field');
    ConvertMethod.ConvField('length_field');
    ConvertMethod.ConvField('sleeve_w_field');
    ConvertMethod.ConvField('cuff_field');
    ConvertMethod.ConvField('short_sleeve_length_field');
    ConvertMethod.ConvField('short_sleeve_width_field');
    ConvertMethod.ConvField('short_sleeve_opening_width_field');
    ConvertMethod.ConvField('adddim_default_value');
    ConvertMethod.ConvField('adddim_bottom_width_field');
}

this.ToggleMetricAddim();
},
ToggleMetricAddim: function() {
$('#adddim_cuff_watch_allowance_field option:eq(1), #adddim_cuff_watch_allowance_field_das3 option:eq(1)').text(IntMetric == 'cm' ? '+0.6cm Left Cuff' : '+0.25" Left Cuff');
$('#adddim_cuff_watch_allowance_field option:eq(2), #adddim_cuff_watch_allowance_field_das3 option:eq(2)').text(IntMetric == 'cm' ? '+1.3cm Left Cuff' : '+0.5" Left Cuff');
$('#adddim_cuff_watch_allowance_field option:eq(3), #adddim_cuff_watch_allowance_field_das3 option:eq(3)').text(IntMetric == 'cm' ? '+1.9cm Left Cuff' : '+0.75" Left Cuff');
$('#adddim_cuff_watch_allowance_field option:eq(4), #adddim_cuff_watch_allowance_field_das3 option:eq(4)').text(IntMetric == 'cm' ? '+0.6cm Right Cuff' : '+0.25" Right Cuff');
$('#adddim_cuff_watch_allowance_field option:eq(5), #adddim_cuff_watch_allowance_field_das3 option:eq(5)').text(IntMetric == 'cm' ? '+1.3cm Right Cuff' : '+0.5" Right Cuff');
$('#adddim_cuff_watch_allowance_field option:eq(6), #adddim_cuff_watch_allowance_field_das3 option:eq(6)').text(IntMetric == 'cm' ? '+1.9cm Right Cuff' : '+0.75" Right Cuff');

$('#adddim_posture_field option:eq(1), #adddim_posture_field_das3 option:eq(1)').text(IntMetric == 'cm' ? 'Neck Back 1.3cm' : 'Neck Back 1/2"');
$('#adddim_posture_field option:eq(2), #adddim_posture_field_das3 option:eq(2)').text(IntMetric == 'cm' ? 'Neck Back 2.5cm' : 'Neck Back 1"');
$('#adddim_posture_field option:eq(3), #adddim_posture_field_das3 option:eq(3)').text(IntMetric == 'cm' ? 'Neck Forward 1.3cm' : 'Neck Forward 1/2"');
$('#adddim_posture_field option:eq(4), #adddim_posture_field_das3 option:eq(4)').text(IntMetric == 'cm' ? 'Neck Forward 2.5cm' : 'Neck Forward 1"');

$('#adddim_top_button_placement_field option:eq(0), #adddim_top_button_placement_field_das3 option:eq(0)').text(IntMetric == 'cm' ? 'Raised 2.5cm' : 'Raised 1"');
$('#adddim_top_button_placement_field option:eq(1), #adddim_top_button_placement_field_das3 option:eq(1)').text(IntMetric == 'cm' ? 'Raised 1.3cm' : 'Raised 1/2"');
$('#adddim_top_button_placement_field option:eq(3), #adddim_top_button_placement_field_das3 option:eq(3)').text(IntMetric == 'cm' ? 'Lowered 1.3cm' : 'Lowered 1/2"');
},
metric: function(num) {
if (IntMetric == 'cm') {
    return number_format(this.InchesToCm(num), 1);
}
else {
    return number_format(num, 2);
}
}
}

jQuery.fn.extend({
_in: function() {
if (IntMetric == 'disabled') {
    return parseFloat($(this).val());
}
else {
    return isNaN(parseFloat($(this).attr('in-value'))) ? parseFloat($(this).val()) : parseFloat($(this).attr('in-value'));
}
},
_cm: function() {
return isNaN(parseFloat($(this).attr('cm-value'))) ? parseFloat($(this).val()) : parseFloat($(this).attr('cm-value'));
},
_val: function(val) {
$(this).attr('in-value', val);
$(this).val(ConvertMethod.metric(val));
}
});

$(document).ready(function() {
if (typeof stop_update_size_fields === "undefined" || !stop_update_size_fields) {
if (IntMetric == 'cm') {
    $('input:radio[name="toggle-metric"][value="cm"]').attr('checked', 'checked').click();
    ConvertMethod.ToggleMetric();
}
}
else {
// ConvertMethod.ToggleMetricAddim();
$('#adddim_cuff_watch_allowance_field option:eq(1)').text(IntMetric == 'cm' ? '+0.6cm Left Cuff' : '+0.25" Left Cuff');
$('#adddim_cuff_watch_allowance_field option:eq(2)').text(IntMetric == 'cm' ? '+1.3cm Left Cuff' : '+0.5" Left Cuff');
$('#adddim_cuff_watch_allowance_field option:eq(3)').text(IntMetric == 'cm' ? '+1.9cm Left Cuff' : '+0.75" Left Cuff');
$('#adddim_cuff_watch_allowance_field option:eq(4)').text(IntMetric == 'cm' ? '+0.6cm Right Cuff' : '+0.25" Right Cuff');
$('#adddim_cuff_watch_allowance_field option:eq(5)').text(IntMetric == 'cm' ? '+1.3cm Right Cuff' : '+0.5" Right Cuff');
$('#adddim_cuff_watch_allowance_field option:eq(6)').text(IntMetric == 'cm' ? '+1.9cm Right Cuff' : '+0.75" Right Cuff');

$('#adddim_posture_field option:eq(1)').text(IntMetric == 'cm' ? 'Neck Back 1.3cm' : 'Neck Back 1/2"');
$('#adddim_posture_field option:eq(2)').text(IntMetric == 'cm' ? 'Neck Back 2.5cm' : 'Neck Back 1"');
$('#adddim_posture_field option:eq(3)').text(IntMetric == 'cm' ? 'Neck Forward 1.3cm' : 'Neck Forward 1/2"');
$('#adddim_posture_field option:eq(4)').text(IntMetric == 'cm' ? 'Neck Forward 2.5cm' : 'Neck Forward 1"');

$('#adddim_top_button_placement_field option:eq(0)').text(IntMetric == 'cm' ? 'Raised 2.5cm' : 'Raised 1"');
$('#adddim_top_button_placement_field option:eq(1)').text(IntMetric == 'cm' ? 'Raised 1.3cm' : 'Raised 1/2"');
$('#adddim_top_button_placement_field option:eq(3)').text(IntMetric == 'cm' ? 'Lowered 1.3cm' : 'Lowered 1/2"');
}

$('.unit-footnote a').click(function(e){
    e.preventDefault();
    $(this).find('.unit-toggle').addClass('is-shown');
});
$('.unit-toggle label').click(function(e) {
e.stopPropagation();
$(this).closest('.unit-toggle').removeClass('is-shown');
});

$('input[name="toggle-metric"]').change(function() {
var unit = '';
IntMetric = $(this).filter(':checked').val();
if (IntMetric == "in") { unit = "inches" } else { unit = "centimeters" }
$('.unit-footnote i').text(unit);
ConvertMethod.ToggleMetric();

if (user_is_authorize) {
    $.ajax({
        url: BASE_URL+"my_account.php",
        type: "post",
        dataType: "json",
        data: {
            action_a: 'form_edit_units',
            val: IntMetric == "in" ? 0 : 1
        }
    });
}
});
});

function parseBottomPants(value)
{
switch(value)
{
case "Sobre el Zapato":
return 0;
break;
case "Apertura Cero":
return 1;
break;
case "Apertura Ligera":
return 2;
break;
case "Apertura Generosa":
return 3;
break;
}
}

function parseButtocks(value)
{
switch(value)
{
case "Promedio":
return 0;
break;
case "Muscular":
return 1;
break;
case "Delgado":
return 2;
break;
case "Ancho":
return 3;
break;
}
}

function parseChest(value)
{
switch(value)
{
case "Promedio":
return 0;
break;
case "Muscular":
return 1;
break;
case "Delgado":
return 2;
break;
case "Ancho":
return 3;
break;
}
}

function parseEthnicity(value)
{
switch(value)
{
case "Asiatico":
return 1;
break;
case "Negro":
return 2;
break;
case "Caucasico":
return 3;
break;
case "Hispano":
return 4;
break;
}
}

function parseHighWear(value)
{
switch(value)
{
case "Alto en la Cintura":
return 0;
break;
case "Bajo en la Cintura":
return 1;
break;
case "A la Cadera":
return 2;
break;
}
}

function parseMidsection(value)
{
switch(value)
{
case "Sin panza":
return 0;
break;
case "En forma":
return 1;
break;
case "Modesto":
return 2;
break;
case "Pronunciado":
return 3;
break;
}
}

function parsePantsFit(value)
{
switch(value)
{
case "Extra Slim":
return 0;
break;
case "Slim":
return 1;
break;
case "Clasico":
return 2;
break;
case "Recto":
return 3;
break;
}
}

function parseShirtTight(value)
{
switch(value)
{
case "Clasico":
return 0;
break;
case "Oficina":
return 1;
break;
case "Pegado":
return 2;
break;
}
}

function parseTucked(value)
{
switch(value)
{
case "Siempre fajado":
return 1;
break;
case "Nunca fajado":
return 0;
break;
case "Ocasionalmente fajado":
return 2;
break;
}
}

function produceTCData(data){	
var smartSizeTC = new SmartSizeTC(data);
return smartSizeTC;
}

function produceCAData(data){
var smartSize = new SmartSize(data);
return smartSize;
}

function makeData()
{
var data = {};	
var option_selected = $("#select_cloth").children("option:selected").val().replace('"','').replace('"','');
data.is_TC = (option_selected == "Traje Completo" ? true : false);
data.is_CA = (option_selected == "Camisa" ? true : false);

var size = $("#size").children("option:selected").val().replace('"','').replace('"','');
var tall = excelFloor(parseInt($("#tall").val().replace('"','').replace('"','')) / 2.54);
var tall_feets = excelFloor(tall / 12);
var tall_inches = tall - (tall_feets * 12);
var weight = excelFloor(parseInt($("#weight").val().replace('"','').replace('"','')) * 2.205);
var jacket_size = parseInt($("#jacket_size").children("option:selected").val().replace('"','').replace('"',''));
var midsection_style = parseMidsection($("#midsection_style").children("option:selected").val().replace('"','').replace('"',''));
var sleeve = parseFloat($("#sleeve").children("option:selected").val().replace('"','').replace('"',''));
var pants_waist = parseInt($("#pants_waist").children("option:selected").val().replace('"','').replace('"',''));

if(data.is_TC)
{		
var pants_inseam = parseInt($("#pants_inseam").children("option:selected").val().replace('"','').replace('"',''));
var best_buttocks_thighs = parseButtocks($("#best_buttocks_thighs").children("option:selected").val().replace('"','').replace('"',''));
var best_chest_shoulders = parseChest($("#best_chest_shoulders").children("option:selected").val().replace('"','').replace('"',''));
var like_pants_to_fit = parsePantsFit($("#like_pants_to_fit").children("option:selected").val().replace('"','').replace('"',''));
var like_bottom_pants = parseBottomPants($("#like_bottom_pants").children("option:selected").val().replace('"','').replace('"',''));
var high_wear_pants = parseHighWear($("#high_wear_pants").children("option:selected").val().replace('"','').replace('"',''));

data.size = size;
data.tall_feets = tall_feets;
data.tall_inches = tall_inches;
data.weight = weight;
data.jacket_size = jacket_size;
data.midsection_style = midsection_style;
data.sleeve = sleeve;
data.pants_waist = pants_waist;
data.pants_inseam = pants_inseam;
data.best_buttocks_thighs = best_buttocks_thighs;
data.best_chest_shoulders;
data.like_pants_to_fit = like_pants_to_fit;
data.like_bottom_pants = like_bottom_pants;
data.high_wear_pants = high_wear_pants;
return data;
}
else if(data.is_CA)
{
var collar = parseFloat($("#collar").children("option:selected").val().replace('"','').replace('"',''));
var ethnicity = parseEthnicity($("#ethnicity").children("option:selected").val().replace('"','').replace('"',''));
var tucked = parseTucked($("#tucked").children("option:selected").val().replace('"','').replace('"',''));
var shirt_tight = parseShirtTight($("#shirt_tight").children("option:selected").val().replace('"','').replace('"',''));

data.size = size;
data.tall_feets = tall_feets;
data.tall_inches = tall_inches;
data.weight = weight;
data.jacket_size = jacket_size;
data.midsection_style = midsection_style;
data.sleeve = sleeve;
data.pants_waist = pants_waist;
data.collar = collar;
data.ethnicity = ethnicity;
data.tucked = tucked;
data.shirt_tight = shirt_tight;
return data;
}
else
{
$("#text_result:first-child").text("Introduce valores y presiona calcular.");
return;
}
}

function toCm(value)
{
return value * 2.54;
}

function calculateFullData()
{
var data = makeData();
if(data.is_CA == true)
{
var result = produceCAData(data);
}
else if(data.is_TC == true)
{
var result = produceTCData(data);

$("#shoulder_width .content").text("Hombros: " + toCm(result.ja.shoulder_width).toFixed(1) + "cm");
$("#chest_width .content").text("Pecho: " + toCm(result.ja.chest_width).toFixed(1) + "cm");
$("#midsection_width .content").text("Abdomen: " + toCm(result.ja.midsection_width).toFixed(1) + "cm");
$("#center_back_length .content").text("Espalda: " + toCm(result.ja.center_back_length).toFixed(1) + "cm");
$("#sleeve_length .content").text("Manga: " + toCm(result.ja.sleeve_length).toFixed(1) + "cm");
$("#sleeve_bicep_width .content").text("Bicep: " + toCm(result.ja.sleeve_bicep_width).toFixed(1) + "cm");
$("#sleeve_opening_width .content").text("Bocamanga: " + toCm(result.ja.sleeve_opening_width).toFixed(1) + "cm");
$("#hip_width_ja .content").text("Cadera Saco: " + toCm(result.ja.hip_width).toFixed(1) + "cm");

$("#waist_width .content").text("Cintura Pantalón: " + toCm(result.pa.waist_width).toFixed(1) + "cm");
$("#hip_width .content").text("Cadera Pantalón: " + toCm(result.pa.hip_width).toFixed(1) + "cm");
$("#thigh_width .content").text("Muslo: " + toCm(result.pa.thigh_width).toFixed(1) + "cm");
$("#knee_width .content").text("Rodilla: " + toCm(result.pa.knee_width).toFixed(1) + "cm");
$("#leg_opening_width .content").text("Apertura de Pantalón: " + toCm(result.pa.leg_opening_width).toFixed(1) + "cm");
$("#front_rise .content").text("Tiro Delantero: " + toCm(result.pa.front_rise).toFixed(1) + "cm");
$("#back_rise .content").text("Tiro Trasero: " + toCm(result.pa.back_rise).toFixed(1) + "cm");
$("#inseam_length .content").text("Entrepierna: " + toCm(result.pa.inseam_length).toFixed(1) + "cm");
$("#total_rise .content").text("Tiro Total: " + toCm(result.pa.total_rise).toFixed(1) + "cm");
$("#total_length .content").text("Largo Total: " + toCm(result.pa.total_length).toFixed(1) + "cm");

}
else
{
return;
}

$("#text_result").text(JSON.stringify(result, null, "\t"));
}

calculateFullData();