// Heatmap Calendar Component
class HeatmapCalendar {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.data = [];
        this.currentYear = new Date().getFullYear();
        this.currentMonth = new Date().getMonth();
        this.init();
    }

    init() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        const calendarHTML = `
            <div class="heatmap-container">
                <div class="heatmap-header">
                    <h3>Fitness Data Heatmap</h3>
                    <div class="heatmap-controls">
                        <select id="heatmap-year-selector">
                            ${this.generateYearOptions()}
                        </select>
                        <select id="heatmap-data-type">
                            <option value="strain">Strain</option>
                            <option value="sleep">Sleep</option>
                            <option value="recovery">Recovery</option>
                        </select>
                    </div>
                </div>
                <div class="heatmap-grid" id="heatmap-grid"></div>
            </div>
        `;
        this.container.innerHTML = calendarHTML;
        this.renderCalendar();
    }

    generateYearOptions() {
        let options = '';
        for (let year = 2020; year <= this.currentYear; year++) {
            options += `<option value="${year}" ${year === this.currentYear ? 'selected' : ''}>${year}</option>`;
        }
        return options;
    }

    setupEventListeners() {
        document.getElementById('heatmap-year-selector').addEventListener('change', (e) => {
            this.currentYear = parseInt(e.target.value);
            this.renderCalendar();
        });

        document.getElementById('heatmap-data-type').addEventListener('change', (e) => {
            this.renderCalendar();
        });
    }

    renderCalendar() {
        const grid = document.getElementById('heatmap-grid');
        grid.innerHTML = '';
        
        const year = this.currentYear;
        const dataType = document.getElementById('heatmap-data-type').value;
        
        // Generate calendar for the year
        for (let month = 0; month < 12; month++) {
            const monthElement = document.createElement('div');
            monthElement.className = 'heatmap-month';
            monthElement.innerHTML = `<h4>${this.getMonthName(month)}</h4>`;
            
            const calendar = this.generateCalendar(year, month);
            const calendarHTML = this.renderMonthGrid(calendar, dataType);
            monthElement.innerHTML += calendarHTML;
            grid.appendChild(monthElement);
        }
    }

    generateCalendar(year, month) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        
        const calendar = [];
        let day = 1;
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            calendar.push(null);
        }
        
        // Add days of the month
        for (let i = 0; i < daysInMonth; i++) {
            calendar.push({
                day: day++,
                date: new Date(year, month, day - 1),
                value: this.getTestData(year, month, i + 1)
            });
        }
        
        return calendar;
    }

    renderMonthGrid(calendar, dataType) {
        let gridHTML = '<div class="heatmap-grid-month">';
        
        // Add day headers
        const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayHeaders.forEach(day => {
            gridHTML += `<div class="heatmap-day-header">${day}</div>`;
        });
        
        // Add cells for calendar
        calendar.forEach((day, index) => {
            if (day === null) {
                gridHTML += '<div class="heatmap-cell empty"></div>';
            } else {
                const value = day.value[dataType];
                const level = this.getValueLevel(value);
                gridHTML += `<div class="heatmap-cell ${level}" data-date="${day.date.toLocaleDateString()}">
                    <span class="heatmap-value">${value.toFixed(1)}</span>
                </div>`;
            }
        });
        
        gridHTML += '</div>';
        return gridHTML;
    }

    getMonthName(monthIndex) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
        return months[monthIndex];
    }

    getValueLevel(value) {
        if (value === 0) return 'level-0';
        if (value <= 25) return 'level-1';
        if (value <= 50) return 'level-2';
        if (value <= 75) return 'level-3';
        return 'level-4';
    }

    getTestData(year, month, day) {
        // Generate sample data for demonstration
        // In a real implementation, this would fetch from actual health data sources
        const strain = Math.floor(Math.random() * 100) + 1;
        const sleep = Math.random() * 10 + 5;
        const recovery = Math.floor(Math.random() * 100) + 1;
        
        return {
            strain: strain,
            sleep: sleep,
            recovery: recovery
        };
    }
}

// Initialize heatmap when page loads
document.addEventListener('DOMContentLoaded', function() {
    const heatmap = new HeatmapCalendar('heatmap-container');
});