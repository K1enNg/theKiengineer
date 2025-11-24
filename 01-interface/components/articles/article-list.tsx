"use client";

import React, { useEffect, useState } from "react";
import { getAllArticles } from "@/app/utils/articles";
import { Article } from "@/app/types/table";
import { ArticleTable } from "./article-table";
import { columns } from "../columns";
import { getDeleteArticle } from "@/app/utils/articles";

export function ArticleList() {
  const [data, setData] = useState<Article[]>([]);

  const handleDelete = async (id: string) => {
    await getDeleteArticle(id);
    setData((prev) => prev.filter((a) => a.id !== id));
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const items = await getAllArticles();
        const formatted = items.map((a) => ({
          id: a.id,
          title: a.title,
          date: new Date(a.createdAt),
        }));
        setData(formatted);
      } catch (err) {
        console.error("Failed to fetch articles", err);
      }
    };
    fetch();
  }, []);

  return <ArticleTable columns={columns(handleDelete)} data={data} />;
}
