<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


<jsp:include page="includes/header.jsp" />

<h3>게시글 작성 register_form.jsp</h3>

<form action='addBoard.do' method='post' enctype="multipart/form-data"><!-- 파일첨부를 위해 수정 -->
		<input type="hidden" required name="writer" value="${logId}" class='form-control'>
		<table class='table'>
			<tr>
				<th>제목</th>
				<td><input type="text" required name="title" class='form-control'></td>
			</tr>
			<tr>
				<th>작성자</th>
				<td>${logId}</td>
			</tr>
			<tr>
				<th>내용</th>
				<td><textarea required name="content" class='form-control'></textarea></td>
			</tr>
			<tr>
				<th>이미지</th>
				<td><input type="file" name="images" class="form_control"></td>
			</tr>
			<tr>
				<td colspan='2' align='center'>
					<input type="submit" class='btn btn-primary'>
				</td>
			</tr>
		
		</table>
	</form>
	
	
<jsp:include page="includes/footer.jsp" />