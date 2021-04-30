import { StitchingInfo } from '@graphql-tools/delegate';
import { collectFields } from 'graphql/execution/execute';
import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("users")
class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  nickname: string;

  @Column()
  address: string;

  @Column()
  bio: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;



}
export { User }
