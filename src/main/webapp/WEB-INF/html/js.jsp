<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h3>JS연습</h3>
	<div style="display: none;">
	  ID: <input type="text" id="mid" /><br>
	  Name: <input type="text" id="mname" /><br>
	  Point: <input type="number" id="point" /><br>
	  <button id="addBtn">추가</button>
	</div>
	
	<div style="display: none;">
	  <ul id="list"><!-- innerHtml부분 --></ul>
	</div>
	
	<!-- 선 -->
	
	<div style="display: none;">
	  이름: <input type="text" id="std_name"><br>
	  영어: <input type="number" id="std_score"><br>
	  <button id="addList">추가</button>
	</div>
	
	<div style="display: none;">
	  <table border="2">
	    <thead>
	      <tr>
	        <td>이름</td><td>점수</td>
	      </tr>
	    </thead>
	    <tbody id="tlist">
	      
	    </tbody>
	  </table>
	</div>
	
	<!-- 선 -->
	
	<div id="show">
	  <table border='2'>
	    <thead>
	      <tr><th>ID</th><th>FName</th><th>LName</th><th>Salary</th><th>삭제</th></tr>
	    </thead>
	    
	    <tbody>
	    </tbody>
	  </table>
	</div>
	
	<!-- 선 -->
	
	<div id="item" style="display: none;">
	  <table border='2'>
	    <thead>
	      <tr><th>이름</th><th>점수</th></tr>
	    </thead>
	    
	    <tbody>
	    </tbody>
	  </table>
	</div>
	
	<!-- 여기에 바로 JS 안쓰고 js/basic2.js에 쓰겠다, 이 파일은 js폴더에 있음 -->
	<!-- <script type="text/javascript" src='js/data.js'></script> -->
	<!-- <script type="text/javascript" src='js/array3.js'></script> -->
	<script type="text/javascript" src='js/ajax2.js'></script>
</body>
</html>