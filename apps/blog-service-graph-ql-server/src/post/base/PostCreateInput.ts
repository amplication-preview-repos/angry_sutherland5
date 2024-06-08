/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AuthorWhereUniqueInput } from "../../author/base/AuthorWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";

@InputType()
class PostCreateInput {
  @ApiProperty({
    required: false,
    type: () => AuthorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AuthorWhereUniqueInput)
  @IsOptional()
  @Field(() => AuthorWhereUniqueInput, {
    nullable: true,
  })
  author?: AuthorWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CommentCreateNestedManyWithoutPostsInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutPostsInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutPostsInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutPostsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { PostCreateInput as PostCreateInput };
