$(function() {
    setTimeout(function() {
        $('.byonelists').css('opacity', '1');
        $('.foundslist').css('opacity', '1');
    }, 500);

    function getUrlVar(){
        var urlVar = window.location.search;
        var arrayVar = []; 
        var valueAndKey = []; 
        var resultArray = []; 
        arrayVar = (urlVar.substr(1)).split('&'); 
        if(arrayVar[0]=="") return false; 
        for (i = 0; i < arrayVar.length; i ++) {
            valueAndKey = arrayVar[i].split('=');
            //resultArray[valueAndKey[0]] = valueAndKey[1];
            resultArray.push(valueAndKey[0]);
        }
        return resultArray;
    }

    var initialParamsArr = [
        'arrFilter_84_81855761',
        'arrFilter_84_3753165478',
        'arrFilter_84_681677515',
        'arrFilter_84_3897451081',
        'arrFilter_84_1326178103',
        'arrFilter_84_2830365232',
        'arrFilter_84_1604756061',
        'arrFilter_84_1944466823',
        'arrFilter_84_3333420007',
        'arrFilter_84_19777404'
    ];

    var actualParamsArr = getUrlVar();

    //var filteredArray = initialParamsArr.filter(value => actualParamsArr.includes(value));
	if (Array.isArray(actualParamsArr)) {
    var filteredArray = initialParamsArr.filter(value => actualParamsArr.includes(value));
    // дальнейшие действия с отфильтрованным массивом

    var namesFilteredArray = [];

    filteredArray.forEach(function(entry) {
        var name = $('.fltarrFilter_84 > .listipropsi_box input[type="checkbox"][name="'+entry+'"]').next('.list_checkbox_text').attr('title');
        namesFilteredArray.push(name);
    });
	}
    //console.log(namesFilteredArray);

    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;
      
        for (var i = 0; i < a.length; ++i) {
          if (a[i] !== b[i]) return false;
        }
        return true;
      }

    $('.byonelists > .oneitemprod').map(function() {
        var currentItem = $(this);
        var checkedOptionsArray = [];
        $(this).find('.tabbyme.active .ersname').map(function() {
            checkedOptionsArray.push($(this).text());
        });

        Array.prototype.hasAll = function(a) {
            var hash = this.reduce(function(acc, i) { acc[i] = true; return acc; }, {});
            return a.every(function(i) { return i in hash; });
        };

        if(checkedOptionsArray.hasAll(namesFilteredArray) == true) {
            currentItem.addClass('visible_item');
        } 
    });

    initialParamsArr.forEach(function(entry) {
        if(window.location.href.indexOf(entry) >= 0) {
            $('.byonelists > .oneitemprod.visible_item').show();
            $('.byonelists > .oneitemprod:not(.visible_item)').hide();
        }
    });

    setTimeout(function() {
        $('.foundslist').text('Найдено '+ $('.byonelists > .oneitemprod.visible_item').length +' результат(ов)');
    }, 100);

    $('#del_filter').on('click', function(e) {
        e.preventDefault();
        window.location.href = '/product';
    });

});