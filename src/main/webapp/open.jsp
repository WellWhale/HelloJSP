<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="css/styles.css" rel="stylesheet" />
</head>
<body>
	
	<select class="form-control" id="search">
		<option value="">선택하세요</option>
	</select>
	
	<div id="show">
		<table class="table table-striped">
			<thead style="background-color: black; color: white">
				<tr>
					<th>센터ID</th>
					<th>센터명</th>
					<th>전화번호</th>
				</tr>
			</thead>
			<tbody id="list">
				<!-- 값이 들어갈 곳 -->
			</tbody>
		</table>
	</div>
	
	<script src="js/openapi.js"></script>
</body>
</html>