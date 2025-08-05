--����� ������ �� �ִ� ���̺�
--��۹�ȣ, �����۹�ȣ, ����, ����ۼ���, �ۼ��Ͻ�
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
values(reply_seq.nextval, 137, '137���� 1��° ����Դϴ�.', 'user01');
insert into tbl_reply (reply_no, board_no, reply, replyer)
values(reply_seq.nextval, 137, '137���� 2��° ����Դϴ�.', 'user02');
insert into tbl_reply (reply_no, board_no, reply, replyer)
values(reply_seq.nextval, 137, '137���� 3��° ����Դϴ�.', 'user02');

select *
from tbl_reply;