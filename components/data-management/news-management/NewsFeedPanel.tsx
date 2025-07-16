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
    <Card className="w-full">
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="text-lg sm:text-xl md:text-2xl">
          News Feed Interface
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3 sm:px-4 md:px-6">
        <div className="mb-4">
          <Input
            placeholder="Filter by title..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
        {loading ? (
          <div className="text-gray-500 py-8 text-center">
            Loading...
          </div>
        ) : (
          <div className="w-full">
            {/* Mobile Card View */}
            <div className="block md:hidden space-y-4">
              {filtered.map((a, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 bg-white">
                  <Link
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-3">
                    <h3 className="font-medium text-blue-600 hover:text-blue-800 line-clamp-2">
                      {a.title}
                    </h3>
                  </Link>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Sentiment:
                      </span>
                      <Badge
                        className={sentimentColor[a.sentiment]}
                        variant="secondary">
                        {a.sentiment}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Relevance:
                      </span>
                      <div className="flex items-center space-x-2 flex-1 max-w-24">
                        <Progress
                          value={a.relevance}
                          className="h-2"
                        />
                        <span className="text-xs text-gray-500 min-w-fit">
                          {a.relevance}%
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Credibility:
                      </span>
                      <Badge variant="outline">{a.credibility}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-2/5 lg:w-1/2">
                      Title
                    </TableHead>
                    <TableHead className="w-1/6 lg:w-1/8">
                      Sentiment
                    </TableHead>
                    <TableHead className="w-1/4 lg:w-1/4">
                      Relevance
                    </TableHead>
                    <TableHead className="w-1/6 lg:w-1/8">
                      Credibility
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((a, i) => (
                    <TableRow key={i}>
                      <TableCell className="max-w-0">
                        <Link
                          href={a.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 hover:underline block truncate">
                          {a.title}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={sentimentColor[a.sentiment]}
                          variant="secondary">
                          {a.sentiment}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress
                            value={a.relevance}
                            className="h-2 flex-1"
                          />
                          <span className="text-xs text-gray-500 min-w-fit">
                            {a.relevance}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {a.credibility}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default NewsFeedPanel;
