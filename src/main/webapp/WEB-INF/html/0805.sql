--댓글을 저장할 수 있는 테이블
--댓글번호, 원본글번호, 내용, 댓글작성자, 작성일시
create table tbl_reply (
        reply_no   number,
        board_no   number not null,
        reply      varchar2(500) not null,
        replyer    varchar2(10) not null,
        reply_date date default sysdate
);

create sequence reply_seq;
alter table tbl_reply add constraint pk_reply primary key (reply_no);

insert into tbl_reply (reply_no, board_no, reply, replyer)
values(reply_seq.nextval, 137, '137번의 1번째 댓글입니다.', 'user01');
insert into tbl_reply (reply_no, board_no, reply, replyer)
values(reply_seq.nextval, 137, '137번의 2번째 댓글입니다.', 'user02');
insert into tbl_reply (reply_no, board_no, reply, replyer)
values(reply_seq.nextval, 137, '137번의 3번째 댓글입니다.', 'user02');

select *
from tbl_reply;