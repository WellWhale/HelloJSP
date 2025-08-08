package com.yedam.mapper;

import java.util.List;

import com.yedam.vo.EventVO;

public interface EventMapper {
	List<EventVO> eventList();// 이벤트 목록 관련
	int addEvent(EventVO vo);// 이벤트 추가 관련
	int deleteEvent(String title);// 이벤트 삭제 관련
}
