<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript"
	src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
	
      let countPerUser = [
    	  ['User', 'Count']
      ]
      
      // 비동기식 처리
      fetch('chartData.do')// chartData.do -> ChartControl 이니까 ChartControl 데려옴
      .then(resolve => resolve.json())// resolve의 json을 데려옴
      .then(result => {
    	for(let prop in result) {// for..in은 키만 가져와서 돌려준다
    		countPerUser.push([prop, result[prop]]);// 키와 값을 countPerUser에 푸쉬
    	}
        google.charts.setOnLoadCallback(drawChart);// 푸쉬된 결과를 화면에 출력
        // 위 코드가 밖에있으면 비동기식이라 출력이 안됨, then 안에 있어야 순서상 출력이 됨
      })
      .catch(err => console.log(err));
      
      
      
      
      function drawChart() {
        var data = google.visualization.arrayToDataTable(countPerUser);

        var options = {
          title: '회원별 게시글 작성 현황'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
    </script>
</head>
<body>
	<div id="piechart" style="width: 900px; height: 500px;"></div>
</body>
</html>
