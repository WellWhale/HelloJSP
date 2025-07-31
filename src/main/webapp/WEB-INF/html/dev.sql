-- 게시글번호, 제목, 내용, 작성자, 조회수, 생성일자, 변경일자
create table tbl_board (
        board_no number,
        title            varchar2(100) not null,
        content          varchar2(1000) not null,
        writer           varchar2(30) not null,
        view_cnt          number default 0,
        creation_date    date default sysdate,
        last_update_date date default sysdate
);
alter table tbl_board add constraint pk_board primary key(board_no);
create sequence board_seq;

insert into tbl_board (board_no, title, content, writer)
values(board_seq.nextval, '게시글 등록', '게시글 등록 연습입니다', '홍길동');

insert into tbl_board (board_no, title, content, writer)
values(board_seq.nextval, '등록 테스트', 'HTML, CSS, JavaScript 입니다', '김길동');

insert into tbl_board (board_no, title, content, writer)
values(board_seq.nextval, '댓글 등록 되나요?', '구현 예정입니다', '박길동');

select *
from   tbl_board;