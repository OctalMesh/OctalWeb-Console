"use client";

import { useEffect, useState } from "react";

import { createFileRoute } from "@tanstack/react-router";

import { BaseLayout } from "@app/layouts/base-layout";

import { Chat } from "@pages/chat/-components/chat";
import conversationsData from "@pages/chat/-data/conversations.json";
import messagesData from "@pages/chat/-data/messages.json";
import usersData from "@pages/chat/-data/users.json";

import { type Conversation, type Message, type User } from "./-use-chat";

export const Route = createFileRoute("/chat/")({
  component: ChatPage,
});

function ChatPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [messages, setMessages] = useState<Record<string, Message[]>>({});
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        // In a real app, these would be API calls
        setConversations(conversationsData as Conversation[]);
        setMessages(messagesData as Record<string, Message[]>);
        setUsers(usersData as User[]);
      } catch (error) {
        console.error("Failed to load chat -data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <BaseLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-muted-foreground">Loading chat...</div>
        </div>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <div className="px-4 md:px-6">
        <Chat conversations={conversations} messages={messages} users={users} />
      </div>
    </BaseLayout>
  );
}
