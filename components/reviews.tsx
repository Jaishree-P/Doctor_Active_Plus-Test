"use client";

import { useEffect, useState } from "react";
import { db } from "../firebase"; // adjust path if needed
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Reviews() {
  const [reviews, setReviews] = useState<DocumentData[]>([]);

  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedReviews = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(fetchedReviews);
    });

    return () => unsubscribe(); // cleanup
  }, []);

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Reviews</h2>
          <p className="text-xl text-gray-600">What our patients say about their experience</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card key={review.id || index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm">"{review.comment}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-primary">{review.treatment}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
