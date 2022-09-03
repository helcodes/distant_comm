USE distant_comm;

create table questions (
    qid INT,
    question VARCHAR(100)
);

insert into questions SET qid=1, question="Wann gehst du schlafen?";
insert into questions SET qid=2, question="Mit wie vielen Menschen lebst du zusammen?";
insert into questions SET qid=3, question="Wann stehst du morgens auf?";
insert into questions SET qid=4, question="Zeigst du mir dein Zuhause?";