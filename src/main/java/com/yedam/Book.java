package com.yedam;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// lombok 라이브러리 1-설치 2-lib복붙
// 아래 @ 기능

//생성자, getter setter

//@Getter
//@Setter
//@NoArgsConstructor//기본생성자

@Data//위에 세개를 합친거인듯? 검색 필요
@AllArgsConstructor//필드를 다 가진 생성자
public class Book {
	private int id;
	private String title;
	private String author;
	private int price;
}
