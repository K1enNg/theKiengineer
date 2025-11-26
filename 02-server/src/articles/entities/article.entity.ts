import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Author } from "../../authors/entities/author.entity";

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

    @Column("text", { array: true })
    tags: string[];

    @Column({ nullable: true })
    coverImage: string;

    @ManyToOne(() => Author, author => author.articles, { onDelete: 'CASCADE' })
    author: Author;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
