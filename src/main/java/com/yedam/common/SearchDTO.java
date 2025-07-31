package com.yedam.common;
//글 목록에 사용되는 파라미터를 담는 클래스

import lombok.Data;

@Data
public class SearchDTO {
	private int page;
	private String searchCondition;
	private String keyword;
	
}
