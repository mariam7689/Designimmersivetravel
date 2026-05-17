import { useState } from "react";
import { UploadCloud, Search, Folder, Image as ImageIcon, Video, Trash2, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const MEDIA_FILES = [
  { id: 1, name: "white-desert-camp.jpg", type: "image", size: "2.4 MB", url: "https://images.unsplash.com/photo-1547234935-802c61ce3996?auto=format&fit=crop&w=400&q=80", category: "Stays" },
  { id: 2, name: "safari-jeep-tour.mp4", type: "video", size: "15.2 MB", url: "https://images.unsplash.com/photo-1533588265-5c1eb0cb4b2e?auto=format&fit=crop&w=400&q=80", category: "Activities" },
  { id: 3, name: "siwa-oasis-sunset.jpg", type: "image", size: "1.8 MB", url: "https://images.unsplash.com/photo-1528646197116-2d57c3fc38dd?auto=format&fit=crop&w=400&q=80", category: "Deserts" },
  { id: 4, name: "stargazing-night.jpg", type: "image", size: "3.1 MB", url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", category: "Activities" },
  { id: 5, name: "fayoum-waterfall.jpg", type: "image", size: "2.2 MB", url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80", category: "Hidden Gems" },
  { id: 6, name: "eco-lodge-interior.jpg", type: "image", size: "1.5 MB", url: "https://images.unsplash.com/photo-1502672260266-1c1c24240f38?auto=format&fit=crop&w=400&q=80", category: "Stays" },
];

const CATEGORIES = ["All Media", "Deserts", "Hidden Gems", "Activities", "Stays", "Users"];

export function MediaLibrary() {
  const [activeCategory, setActiveCategory] = useState("All Media");
  const [search, setSearch] = useState("");
  const [selectedMedia, setSelectedMedia] = useState<number[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const toggleSelect = (id: number) => {
    setSelectedMedia(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredMedia = MEDIA_FILES.filter(m => 
    (activeCategory === "All Media" || m.category === activeCategory) &&
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both h-full flex flex-col">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Media Library</h2>
          <p className="text-muted-foreground mt-1 text-sm">Manage images, videos, and platform assets</p>
        </div>
        <div className="flex items-center gap-3">
          {selectedMedia.length > 0 && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive font-medium rounded-lg hover:bg-destructive/20 transition-colors"
            >
              <Trash2 className="w-5 h-5" />
              Delete ({selectedMedia.length})
            </motion.button>
          )}
          <button 
            onClick={() => setIsUploading(!isUploading)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
          >
            {isUploading ? <X className="w-5 h-5" /> : <UploadCloud className="w-5 h-5" />}
            {isUploading ? "Cancel" : "Upload Media"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isUploading && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="border-2 border-dashed border-primary/40 rounded-2xl p-10 bg-primary/5 flex flex-col items-center justify-center text-center transition-colors hover:bg-primary/10 hover:border-primary/60 cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                <UploadCloud className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Drag & drop files here</h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                Support for high-resolution JPG, PNG, and MP4 formats. Max file size: 50MB.
              </p>
              <button className="mt-6 px-6 py-2 bg-card border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors shadow-sm">
                Browse Files
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
        {/* Categories Sidebar */}
        <div className="w-full lg:w-64 flex flex-col gap-2 shrink-0">
          <div className="p-4 bg-card border border-border rounded-2xl shadow-sm space-y-1">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">Folders</h3>
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Folder className={`w-4 h-4 ${activeCategory === category ? "fill-primary/20" : ""}`} />
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Media Grid */}
        <div className="flex-1 bg-card border border-border rounded-2xl shadow-sm flex flex-col min-h-0 overflow-hidden">
          <div className="p-4 border-b border-border flex items-center justify-between bg-card z-10">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search files..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="text-sm text-muted-foreground hidden sm:block">
              {filteredMedia.length} files
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            {filteredMedia.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {filteredMedia.map((file, i) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    key={file.id}
                    onClick={() => toggleSelect(file.id)}
                    className={`group relative aspect-square rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${
                      selectedMedia.includes(file.id) ? "border-primary shadow-md shadow-primary/20" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img 
                      src={file.url} 
                      alt={file.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity ${
                      selectedMedia.includes(file.id) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}>
                      <div className="absolute top-2 right-2">
                        {selectedMedia.includes(file.id) ? (
                          <div className="bg-primary text-primary-foreground rounded-full">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-white/70" />
                        )}
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white">
                        <div className="flex flex-col truncate">
                          <span className="text-xs font-medium truncate">{file.name}</span>
                          <span className="text-[10px] text-white/70">{file.size}</span>
                        </div>
                        {file.type === 'video' ? <Video className="w-4 h-4 shrink-0" /> : <ImageIcon className="w-4 h-4 shrink-0" />}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-muted-foreground mb-4">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">No media found</h3>
                <p className="text-sm text-muted-foreground max-w-sm mt-1">
                  Try adjusting your search or category filter to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
