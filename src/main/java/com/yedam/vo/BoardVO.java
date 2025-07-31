package com.yedam.vo;

import java.util.Date;

import lombok.Data;

@Data
public class BoardVO {
	private int boardNo; // sql = board_no
	private String title;
	private String content;
	private String writer;
	private String viewCnt;
	private Date creationDate;
	private Date lastUpdateDate;
}
