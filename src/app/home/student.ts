export class Student {
    constructor(
        private name: string,
        private gender: string,
        private subject: string,
        private Fraction: number,
        private classes: number,
    ) {

    }
}

export const All_stu: Student[] = [
    new Student('Hvxz', 'M', 'web前端', 93, 1702),
    new Student('Zbas', 'F', 'zigbee', 75, 1702),
    new Student('Knc', 'M', 'java语言', 85, 1702),
    new Student('Ling', 'F', '人工智能', 89, 1702),
    new Student('Plck', 'M', '数据结构', 70, 1702),
    new Student('Calck', 'F', '嵌入式', 58, 1702),
]