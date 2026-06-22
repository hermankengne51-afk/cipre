import { Link } from "@tanstack/react-router";
import { ArrowLeft, Download, Send, Share2, Sparkles } from "lucide-react";
import { useState } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ScrollArea } from "../components/ui/scroll-area";
import { Textarea } from "../components/ui/textarea";

export function DocumentViewPage({ id: _id }: { id: string }) {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<
    Array<{ type: "user" | "ai"; content: string }>
  >([]);

  const exampleQuestions = [
    "How many beneficiaries accessed education?",
    "What are the main recommendations?",
    "Does this report address gender issues?",
    "What methodology was used for data collection?",
    "What are the key findings on climate adaptation?",
  ];

  const handleAskQuestion = () => {
    if (!question.trim()) return;

    setMessages([
      ...messages,
      { type: "user", content: question },
      {
        type: "ai",
        content:
          "Based on the document, the program reached approximately 450,000 beneficiaries across three countries. The education component specifically targeted 125,000 youth aged 15-24, with a particular focus on girls in rural areas. The report indicates a 68% completion rate for vocational training programs.",
      },
    ]);
    setQuestion("");
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-[1440px] mx-auto px-12 py-6">
          <div className="flex items-center justify-between mb-4">
            <Button asChild variant="ghost" size="sm">
              <Link to="/documentation">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Documentation Center
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>

          <div>
            <h1 className="mb-3">
              Gender Equality in Education: A Five-Year Study
            </h1>
            <div className="flex items-center gap-4 text-sm text-neutral-600">
              <Badge>Research Study</Badge>
              <span>2024</span>
              <span>•</span>
              <span>Education & Youth Program</span>
              <span>•</span>
              <span>126 pages</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-12 py-8">
        <div className="flex gap-8">
          {/* PDF Viewer - Center */}
          <div className="flex-1">
            <Card className="overflow-hidden">
              {/* Mock PDF Viewer */}
              <div className="bg-neutral-100 aspect-[8.5/11] flex items-center justify-center">
                <div className="text-center text-neutral-500">
                  <div className="w-64 h-80 bg-white shadow-lg mx-auto mb-4 p-8">
                    <div className="h-4 bg-neutral-200 rounded mb-3"></div>
                    <div className="h-4 bg-neutral-200 rounded mb-3 w-3/4"></div>
                    <div className="h-32 bg-neutral-100 rounded mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-neutral-200 rounded"></div>
                      <div className="h-2 bg-neutral-200 rounded"></div>
                      <div className="h-2 bg-neutral-200 rounded w-4/5"></div>
                      <div className="h-2 bg-neutral-200 rounded"></div>
                      <div className="h-2 bg-neutral-200 rounded w-3/4"></div>
                    </div>
                  </div>
                  <p className="text-sm">PDF Document Viewer</p>
                  <p className="text-xs text-neutral-400 mt-1">Page 1 of 126</p>
                </div>
              </div>

              {/* PDF Controls */}
              <div className="bg-white border-t border-neutral-200 p-4 flex items-center justify-center gap-4">
                <Button variant="outline" size="sm">
                  Previous
                </Button>
                <span className="text-sm text-neutral-600">Page 1 of 126</span>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </Card>
          </div>

          {/* AI Assistant - Right Panel */}
          <aside className="w-96 shrink-0">
            <Card className="sticky top-32">
              {/* Header */}
              <div className="p-6 border-b border-neutral-200">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#1B5E20]" />
                  <h3>Ask This Document</h3>
                </div>
                <p className="text-sm text-neutral-600">
                  Get instant answers from the document using AI
                </p>
              </div>

              {/* Example Questions */}
              {messages.length === 0 && (
                <div className="p-6 border-b border-neutral-200">
                  <p className="text-sm font-medium text-neutral-700 mb-3">
                    Try asking:
                  </p>
                  <div className="space-y-2">
                    {exampleQuestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => setQuestion(q)}
                        className="w-full text-left text-sm text-neutral-600 hover:text-[#1B5E20] hover:bg-neutral-50 p-3 rounded-lg transition-colors border border-neutral-200"
                      >
                        "{q}"
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chat Messages */}
              {messages.length > 0 && (
                <ScrollArea className="h-96 p-6">
                  <div className="space-y-4">
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`${
                          msg.type === "user"
                            ? "bg-[#1B5E20] text-white ml-8"
                            : "bg-neutral-100 text-neutral-800 mr-8"
                        } rounded-lg p-4`}
                      >
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}

              {/* Input Area */}
              <div className="p-4 border-t border-neutral-200">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Ask a question about this document..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleAskQuestion();
                      }
                    }}
                    className="min-h-[80px] resize-none"
                  />
                  <Button
                    onClick={handleAskQuestion}
                    className="shrink-0 bg-[#1B5E20]"
                    disabled={!question.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-neutral-500 mt-2">
                  Press Enter to send, Shift+Enter for new line
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
