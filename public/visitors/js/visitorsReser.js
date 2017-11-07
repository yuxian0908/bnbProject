$('input').keyup(function(e){   
    if($(this).val().length==$(this).attr('maxlength'))   
    $(this).nextAll(":input").eq(0).focus();   
}); 

function trig(){
    $("#arriveDate").trigger('input');
    $("#endDate").trigger('input');
    $("#roomtype").trigger('input');
}

$( document ).ready(setTimeout(function(){
    var $disDate = [];
    for(var i=1;i<=$(".disDate").length;i++){
        $disDate[i] = $('.disDate:nth-child('+i+') input:nth-child(1)').val();	
    }
    var disDate;
    for(var i=1;i<=$(".disDate").length;i++){
        disDate = disDate + ',' + $disDate[i];
    }
    $('#disableDate').val(disDate);
    test();
    $('#arriveDate').val('');
    $('#single').addClass('active');
    $('#double').removeClass('active');
    $('#four').removeClass('active');
    function test(){
        //由於datepicker呈現連續兩個月分部分目前是設計為預設顯示「當月+下月」
        //textarea內設定的不可選日期為demo當月的日期，為了之後的月份也可測試此效果
        //可修改textarea內日期重新查看效果
        findDisableDate();
        findMaxMin(initDatePicker);
    }
},1500));


$(document).ready(function(){
    var DisableDate = [];

    //初次載入預設已textarea內日期清單為DisableDate去初始化datepicker
    findDisableDate();
    findMaxMin(initDatePicker);

    // $("#reSetDisableDate").click(function(){
    // 	//由於datepicker呈現連續兩個月分部分目前是設計為預設顯示「當月+下月」
    // 	//textarea內設定的不可選日期為demo當月的日期，為了之後的月份也可測試此效果
    // 	//可修改textarea內日期重新查看效果
    // 	findDisableDate();
    // 	findMaxMin(initDatePicker);
    // });	  
});

function findDisableDate()
{//將textarea內的日期清單設為var DisableDate
    DisableDate =[];
    var disableD = ($.trim($("#disableDate").val())).replace("\n","");
    //console.log(disableD);
    DisableDate = disableD.split(",");  
    //console.log(DisableDate);
}

function findMaxMin(callback)
{//取出連續兩個月分中最後一天及第一天
    var today = new Date();
    var todayY = today.getFullYear();
    var todayM = today.getMonth(); //起始值是0，即0=1月
    var todayD = today.getDate();
    var minD = new Date(todayY,todayM,todayD);  
    //月份+1為下一個月
    today.setMonth(todayM+2);
    var nextMY = today.getFullYear();
    var nextMM = today.getMonth();
    var nextDays = daysInMonth(nextMY,nextMM);  
    var maxD = new Date(nextMY,nextMM,nextDays); 
    callback(maxD,minD);
}

function initDatePicker(maxD,minD)
{
    var arriveDate;
    // 進房時間
    //移除原先的datepicker (一定要加入此語法，否則修改不可選日期後，無法正確的重新初始化)
    $('#arriveDate').datepicker("destroy");
    //初始化datepicker
    $('#arriveDate').datepicker({
        hideIfNoPrevNext : true, //此設定需搭配maxDate、minDate才能正常work
        maxDate          : maxD,
        minDate          : minD,
        showOtherMonths  : false,   //是否顯示其他月份   
        numberOfMonths   : 1,     //一次顯示多個月份個數
        dateFormat       : 'yy-mm-dd',
        beforeShowDay    :setDisableDate,
        onSelect : function(date,obj){
            $("#arriveDate").val(date); //將選擇日期於arriveDate欄位中顯示出來
            // 退房時間
            setMaxdate(date,max2)
            function setMaxdate(date,callback){
                var DisableDate =[];
                var disableD = ($.trim($("#disableDate").val())).replace("\n","");
                //console.log(disableD);
                DisableDate = disableD.split(","); 
                var Maxdate=[];
                var ondate = date.replace(/-/g,'');
                for(var i=1; i<DisableDate.length; i++){
                    Maxdate[i] = DisableDate[i].replace(/-/g,'');
                    if(ondate<Maxdate[i]){
                        callback(DisableDate[i],date);
                        break;
                    }else{
                        callback(maxD,date);
                    }
                }
            }
        }
    }); 
}
function max2(max,min){
    $('#endDate').datepicker("destroy");
    $('#endDate').datepicker({
        hideIfNoPrevNext : true, //此設定需搭配maxDate、minDate才能正常work
        maxDate          : max,
        minDate          : min,
        showOtherMonths  : false,   //是否顯示其他月份   
        numberOfMonths   : 1,     //一次顯示多個月份個數
        dateFormat       : 'yy-mm-dd',
        onSelect : function(date,obj){
            $("#endDate").val(date); //將選擇日期於arriveDate欄位中顯示出來
        }
    }); 
   
}




function setDisableDate(date)
{//getMonth的起始值是0，即0=1月，故需+1表示真實解讀的月份
    var month = date.getMonth()+1;
    if (month < 10) { month = '0' + month; }
    var day = date.getDate();
    if (day < 10) { day = '0' + day; }
    var strDate = date.getFullYear() + "-" + month + "-" + day;
    var aryReturn =  [true,""];
    $.each(DisableDate,function(key,value){
        if ( value==strDate )
        {
            aryReturn = [false,"","此日不可選"];
        }
    }); 
    return aryReturn;
}

function daysInMonth(iYear,iMonth)
{//取得iYear年iMonth月該月份天數
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

