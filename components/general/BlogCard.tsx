import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export type BlogCardProps = {
  title: string;
  content: string;
  author: string;
  date: Date;
};

export function BlogCard({ title, content, author, date }: BlogCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <p>{`Posted by ${author} on ${date}`}</p>
      </CardFooter>
    </Card>
  );
}
