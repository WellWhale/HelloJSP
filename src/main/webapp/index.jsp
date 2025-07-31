<%@ page import="org.apache.ibatis.reflection.SystemMetaObject"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!-- 지시자, core는 c로 보통 사용 -->
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<jsp:forward page="boardList.do"></jsp:forward>
	
	<h3>Hello JSP</h3>
	<c:set var="name" value="홍길동"></c:set><!-- name에 홍길동을 담겠다 -->
	<c:out value="${name}"></c:out><!-- 홍길동 출력 -->
	
	<c:choose>
	  <c:when test="${empty name}">
	    <p>null 이거나 공백이다</p>
	  </c:when>
	  <c:otherwise>
	    <p>값이 있다</p>
	  </c:otherwise>
	</c:choose>
	
	<c:set var="age" value="30"></c:set><!-- 기본적으로 다 문자타입 -->
	<c:if test="${age >= 20}"><!-- if -->
	  <p>당신은 성년입니다</p>
	</c:if>
	  
	<c:choose>
	  <c:when test="${age >= 30}">
	    <p style="color: red;">중년</p>
	  </c:when>
	  <c:when test="${age >= 20}">
	    <p style="color: yellow;">성년</p>
	  </c:when>
	  <c:otherwise>
	    <p style="color: green;">미성년</p>
	  </c:otherwise>
	</c:choose>
	
	<!-- 반복문 i는 1부터 5까지 2씩 증가한다 -->
	<c:forEach var="i" begin="1" end="5" step="2">
	  <p>2 * ${i} = ${2 * i}</p>
	</c:forEach>
	
</body>
</html>