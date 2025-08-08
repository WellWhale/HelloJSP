package com.yedam.service;

import java.util.List;

import com.yedam.vo.EventVO;

public interface EventService {
	List<EventVO> eventList();// 이벤트 목록 관련
	boolean addEvent(EventVO vo);// 이벤트 추가 관련
	boolean deleteEvent(String title);// 이벤트 삭제 관련
}
