package com.yedam.service;

import com.yedam.vo.MemberVO;

public interface MemberService {
	
	public boolean addMember(MemberVO member);
	public MemberVO userCheck(String id, String pw);
}
