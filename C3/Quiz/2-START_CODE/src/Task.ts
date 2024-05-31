export class Task {
    constructor(private id: number, private title: string, private description: string, private completed: boolean = false) { }
    getId():number{return this.id; }
    getTitle(): string { return this.title; }
    getDescription(): string { return this.description; }
    getCompleted(): boolean { return this.completed; }
}