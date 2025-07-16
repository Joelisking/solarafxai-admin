/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';

const getRandomSentiment = (text: string) => {
  const positiveWords = [
    'gain',
    'rise',
    'up',
    'success',
    'growth',
    'record',
  ];
  const negativeWords = [
    'fall',
    'down',
    'loss',
    'decline',
    'drop',
    'crash',
  ];
  const lower = text.toLowerCase();
  if (positiveWords.some((w) => lower.includes(w))) return 'Positive';
  if (negativeWords.some((w) => lower.includes(w))) return 'Negative';
  return ['Positive', 'Negative', 'Neutral'][
    Math.floor(Math.random() * 3)
  ];
};

const sentimentColor: Record<string, string> = {
  Positive: 'bg-green-100 text-green-800',
  Negative: 'bg-red-100 text-red-800',
  Neutral: 'bg-gray-100 text-gray-800',
};

function NewsFeedPanel() {
  const [filter, setFilter] = useState('');
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?language=en&pageSize=10&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(
          (data.articles || []).map((a: any) => ({
            ...a,
            sentiment: getRandomSentiment(
              a.title + ' ' + (a.description || '')
            ),
            relevance: Math.floor(Math.random() * 41) + 60, // 60-100%
            credibility: Math.floor(Math.random() * 21) + 80, // 80-100
          }))
        );
        setLoading(false);
      });
  }, []);

  const filtered = articles.filter((a) =>
    a.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>News Feed Interface</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input
            placeholder="Filter by title..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-64"
          />
        </div>
        {loading ? (
          <div className="text-gray-500">Loading...</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Sentiment</TableHead>
                <TableHead>Relevance</TableHead>
                <TableHead>Source Credibility</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((a, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Link
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-blue-500">
                      {a.title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Badge className={sentimentColor[a.sentiment]}>
                      {a.sentiment}
                    </Badge>
                  </TableCell>
                  <TableCell className="w-40">
                    <Progress value={a.relevance} className="h-2" />
                    <span className="text-xs ml-2">
                      {a.relevance}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{a.credibility}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}

export default NewsFeedPanel;
