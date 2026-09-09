"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ExternalLink, MessageCircle, Users, ArrowRight } from "lucide-react";
import PublicNav from "@/components/public-nav";
import { RichTextContent } from "@/components/rich-text";
import RouteBackButton from "@/components/route-back-button";
import SiteFooter from "@/components/site-footer";
import { loadAppDataAsync } from "@/lib/storage";
import type { SupportedChannel } from "@/lib/types";

const communityCopy = {
  heading: "Cộng đồng Zalo cho nhân sự và khách hàng quan tâm",
  intro:
    "Mọi nhóm được quản lý theo luồng nội bộ để trao đổi nhanh, cập nhật nguồn, chia sẻ tài nguyên và hỗ trợ tư vấn sản phẩm/dịch vụ.",
  actionLabel: "Nhấp vào nhóm bạn quan tâm để vào chat",
  openCommunity: "Vào nhóm"
};

function normalizeUrl(url: string) {
  if (url.startsWith("http") || url.startsWith("mailto:") || url.startsWith("tel:")) return url;
  return `/contact?partner=${encodeURIComponent(url)}`;
}

export default function CommunityPage() {
  const [channels, setChannels] = useState<SupportedChannel[]>([]);

  useEffect(() => {
    void loadAppDataAsync().then((data) => {
      const activeChannels = (data.supportedChannels ?? []).filter((item) => item.active);
      setChannels(activeChannels);
    });
  }, []);

  const displayChannels = useMemo(() => {
    if (!channels.length) return [];
    return channels
      .filter((channel) => channel.platform === "zalo" || channel.platform === "messenger")
      .sort((a, b) => a.displayOrder - b.displayOrder);
  }, [channels]);

  return (
    <main className="public-shell">
      <PublicNav />
      <div className="route-back-shell">
        <RouteBackButton fallbackHref="/" label="Về trang chủ" parentLabel="Company site" />
      </div>

      <section className="site-section community-hero">
        <span className="badge blue">Cộng đồng</span>
        <div className="badge green community-badge">
          <Users size={14} />
          {displayChannels.length} nhóm đang hoạt động
        </div>
        <h1>{communityCopy.heading}</h1>
        <p className="muted">{communityCopy.intro}</p>
        <div className="community-actions">
          <Link className="btn primary" href="/contact">
            <MessageCircle size={16} />
            {communityCopy.actionLabel}
          </Link>
        </div>
      </section>

      <section className="site-section community-grid-section">
        {displayChannels.length === 0 ? (
          <article className="panel pad">
            <h2>Hiện tại chưa có nhóm nổi bật.</h2>
            <p className="muted">
              Vui lòng cấu hình các kênh cộng đồng trong CMS. Nhóm ưu tiên sẽ xuất hiện ngay ở phần này.
            </p>
            <Link className="btn" href="/">
              Quay về homepage
            </Link>
          </article>
        ) : (
          <div className="community-grid">
            {displayChannels.map((channel) => (
              <article className="community-card" key={channel.id}>
                <img
                  className="community-card-image"
                  src={channel.imageUrl}
                  alt={channel.brandTitle || channel.name}
                />
                <div className="community-card-body">
                  <span className="community-tag">{channel.tag}</span>
                  <h2>{channel.brandTitle || channel.name}</h2>
                  <RichTextContent className="muted" value={channel.description} />
                  <div className="btn-row">
                    <a className="btn primary" href={normalizeUrl(channel.url)} rel="noreferrer" target={channel.url.startsWith("http") ? "_blank" : undefined}>
                      <ArrowRight size={15} />
                      {communityCopy.openCommunity}
                    </a>
                    <a className="btn" href={channel.brandUrl ? normalizeUrl(channel.brandUrl) : normalizeUrl(channel.url)} rel="noreferrer" target={channel.brandUrl?.startsWith("http") ? "_blank" : undefined}>
                      {channel.brandLabel || "Chi tiết"}
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
      <SiteFooter />
    </main>
  );
}
