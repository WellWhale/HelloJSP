--��ȸ
select board_no, count(1)
from tbl_reply
where board_no in (136, 137)
group by board_no;

--Ư�� �ۿ� ��� �߰�
insert into tbl_reply (reply_no, board_no, reply, replyer)
select reply_seq.nextval, board_no, reply, replyer
from tbl_reply
where board_no = 137;





-- event ���̺� ����
create table tbl_event (
    title varchar2(100) not null,
    start_date varchar2(20) not null,
    end_date varchar2(20)
);

insert into tbl_event values('����ġ 2�� �̺�Ʈ', '2025-08-07T16:00:00', '2025-08-08T16:00:00');
insert into tbl_event values('����ġ 1.5�� �̺�Ʈ', '2025-08-07T16:00:00', null);

select *
from tbl_event;