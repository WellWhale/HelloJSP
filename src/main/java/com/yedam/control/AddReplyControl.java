package com.yedam.control;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;
import com.yedam.vo.ReplyVO;

public class AddReplyControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		
		// bno, reply, replyer 세개 넘어옴, 넘어온 파라미터를 저장함
		String bno = req.getParameter("bno");
		String reply = req.getParameter("reply");
		String replyer = req.getParameter("replyer");
		
		ReplyVO rvo = new ReplyVO();// 위에서 만든걸 한번에 아래에 쓰기위해 호출
		rvo.setBoardNo(Integer.parseInt(bno));
		rvo.setReply(reply);
		rvo.setReplyer(replyer);// 셋팅 해놓고
		
		// retCode, bno, reply, replyer 이것들을 다 담아야됨 => Map<키, 값>
		Map<String, Object> map = new HashMap<String, Object>();
		
		ReplyService svc = new ReplyServiceImpl();// DB처리, 반환
		if(svc.addReply(rvo)) {// 셋팅 새로된거 호출
			map.put("retCode", "OK");
			map.put("retVal", rvo);
			
			//resp.getWriter().print("{\"retCode\":\"OK\"}");
		} else {
			map.put("retCode", "NG");

			//resp.getWriter().print("{\"retCode\":\"NG\"}");
		}
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String json = gson.toJson(map);// 자바 객체를 Json 문자열로 변환
		resp.getWriter().print(json);
	}

}
