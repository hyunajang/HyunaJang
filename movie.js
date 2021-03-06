$(document).ready(function () {
    $("#main_navigation a").click(function () {
        // alert($(this).html()); //기능이 잘 들어갔는지 확인차 사용

        //1)클릭한 메뉴의 data-target속성의 값을 얻는다
        var target = $(this).attr('data-target');
        //2)data-name=target과 다른 한목들은 active클래스를 제거한다
        $(":not([data-name=" + target + "])").removeClass("active");
        //3)data-name=target과 같은 항목은 active클래스를 추가한다
        // active는 활성화 한다는 뜻으로 적은 것
        // f12에서 클릭해보면 active가 추가되는 것을 볼 수 있다
        $("[data-name=" + target + "]").addClass("active");
    });

    var currentPosition = 1;
    $("#character > a:nth-child(1)").click(function(){
        //alert("left Button");
        currentPosition--;
        if(currentPosition < 1)
            currentPosition = 3;
        $("article").removeClass("show");
        $("article:nth-of-type(" + currentPosition + ")").addClass("show");
    });
    $("#character > a:nth-child(2)").click(function(){
        //alert("right Button");
        currentPosition++;
        if(currentPosition > 3)
            currentPosition = 1;
        $("article").removeClass("show");
        $("article:nth-of-type(" + currentPosition + ")").addClass("show");
    });
});