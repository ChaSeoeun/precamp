let classmates = ["ö��", "����", "����"]
// undefined
classmates
// (3)?['ö��', '����', '����']
classmates[0]
// 'ö��'
classmates[1]
// '����'
classmates[2]
// '����'
classmates.includes("����")
// true
classmates.includes("�ͱ�")
// false
classmates.length
// 3
classmates.push("�ͱ�")
// 4
classmates.includes("�ͱ�")
// true
classmates
// (4)?['ö��', '����', '����', '�ͱ�']
classmates.length
// 4
classmates.pop()
// '�ͱ�'
classmates.length
// 3
classmates
// (3)?['ö��', '����', '����']





let developer = ["����", "�������", "��������", "����Ʈ����", "������"]
// undefined
developer[1]
// '�������'
let dream = ["Ŀ��������", "����", "�Ҽ��ִ�"]
// undefined
developer.concat(dream)
// (8)?['����', '�������', '��������', '����Ʈ����', '������', 'Ŀ��������', '����', '�Ҽ��ִ�']
let result = developer.concat(dream)
// undefined
result
// (8)?['����', '�������', '��������', '����Ʈ����', '������', 'Ŀ��������', '����', '�Ҽ��ִ�']