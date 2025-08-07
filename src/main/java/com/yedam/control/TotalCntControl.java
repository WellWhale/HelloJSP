package com.yedam.control;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;

public class TotalCntControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String bno = req.getParameter("bno");
		
		ReplyService svc = new ReplyServiceImpl();
		int cnt = svc.replyCount(Integer.parseInt(bno));
		
		resp.getWriter().print("{\"totalCnt\": " + cnt + "}");
		
		
//		resp.setContentType("application/json;charset=UTF-8");// json 응답셋팅
//		
//		String bnoStr = req.getParameter("bno");// 파라미터 파싱
//        int bno = Integer.parseInt(bnoStr);// 파라미터 파싱
//        
//        ReplyService svc = new ReplyServiceImpl();// 서비스 호출
//        int total = svc.replyCount(bno);// 서비스 호출
//        
//        Map<String, Object> result = new HashMap<>();// 맵으로 감싸서 JSON 변환
//        result.put("totalCnt", total);// 맵으로 감싸서 JSON 변환
//        
//        String json = new GsonBuilder().create().toJson(result);// 아래와 같음
//        resp.getWriter().print(json);// Gson 라이브러리를 이용해서 {"totalCnt":123}식의 텍스트 출력
       

	}

}
