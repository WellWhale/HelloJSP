package com.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DBUtil;
import com.yedam.mapper.EventMapper;
import com.yedam.vo.EventVO;

public class EventServiceImpl implements EventService {
	
	SqlSession sqlSession = DBUtil.getInstance().openSession();
	EventMapper mapper = sqlSession.getMapper(EventMapper.class);

	@Override
	public List<EventVO> eventList() {
		return mapper.eventList();
	}

	@Override
	public boolean addEvent(EventVO vo) {
		int r = mapper.addEvent(vo);
		if(r > 0) {
			sqlSession.commit();
			return true; // 정상등록
		}
		return false; // 비정상처리
	}

	@Override
	public boolean deleteEvent(String title) {
		int r = mapper.deleteEvent(title);
		if(r > 0) {
			sqlSession.commit();
			return true; // 정상등록
		}
		return false; // 비정상처리
	}



}
