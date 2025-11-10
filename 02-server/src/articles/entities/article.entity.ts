import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Author } from "../../authors/entities/author.entity";
import { ManyToOne } from "typeorm";

@Entity()
export class Article {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column({ type: 'text' })
    content: string;

    @Column({ unique: true })
    slug: string;

    @Column()
    tags: string[];

    @Column({ nullable: true })
    coverImage: string;

    @ManyToOne(() => Author, (author) => author.id, { onDelete: 'CASCADE' })
    author: Author;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
